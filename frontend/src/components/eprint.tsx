import { Link, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import React, { Fragment, ReactNode, useEffect, useState } from "react";
import Attack from "./attack";
import Implementation from "./implementation";
import SectionHeader from "./section_header";
import Short from "./short";
import Tag from "./tag";
import { eprint } from "./testData";
import axios from "axios";
import yaml from "js-yaml";
import { IEPrintData, IVulnerableToData } from "./types";

const eprintBaseUrl = "https://eprint.iacr.org/";

const emptyData: IEPrintData = {
  title: "",
  authors: "",
  path: "",
  abbreviation: "",
  otherAbbreviations: [],
  securityAssumptions: [],
  vulnerableTo: {},
  fixedBy: [],
  attacking: [],
  implementations: [],
};

const EPrint: NextPage = () => {
  const [data, setData] = useState(emptyData);
  const [abbreviationsMap, setAbbreviationsMap] = useState({});
  const eprintUrl = eprintBaseUrl + data.path;

  useEffect(() => {
    const path = "2017/1066";
    axios.get("http://localhost:8003/" + path + ".yaml").then((resp) => {
      const parsed = yaml.load(resp.data);
      console.log(parsed);
      updateDataWithStaticContent(path, parsed);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8003/abbreviations.yaml").then((resp) => {
      const parsed = yaml.load(resp.data);
      setAbbreviationsMap(parsed);
    });
  }, []);

  const getAbbreviation = (path: string): string => {
    if (path in abbreviationsMap) {
      return abbreviationsMap[path];
    }
    return path;
  };

  const getVulnerableToInfo = async (
    paths: string[]
  ): Promise<IVulnerableToData> => {
    let vulnerableToMap: IVulnerableToData = {};
    for (let i = 0; i < paths.length; i++) {
      try {
        const result = await axios.get(
          "http://localhost:8003/" + paths[i] + ".yaml"
        );
        const parsed = yaml.load(result.data);
        vulnerableToMap[paths[i]] = parsed["security"]["fixedBy"];
      } catch (error) {
        vulnerableToMap[paths[i]] = [];
      }
    }
    return Promise.resolve(vulnerableToMap);
  };

  const updateDataWithStaticContent = async (path: string, raw: unknown) => {
    let updatedData: IEPrintData = {
      title: raw["info"]["title"],
      authors: raw["info"]["authors"],
      path: path,
      abbreviation: getAbbreviation(path),
      otherAbbreviations: raw["info"]["otherAbbreviations"],
      securityAssumptions: raw["security"]["securityAssumptions"],
      vulnerableTo: await getVulnerableToInfo(raw["security"]["vulnerableTo"]),
      fixedBy: raw["security"]["fixedBy"], // string array
      attacking: raw["security"]["attacking"], // string array
      implementations: [],
    };
    console.log(updatedData.vulnerableTo);
    setData(updatedData);
  };

  return (
    <Stack>
      <Typography variant="h4" component="div">
        {data.title}
      </Typography>
      <Typography variant="h6" component="div">
        {data.authors}
      </Typography>
      <Stack direction="row" spacing=".5em">
        <Typography variant="body1" component="div">
          Link
        </Typography>
        <Link href={eprintUrl} target="_blank" rel="noopener">
          <Typography>{eprintUrl}</Typography>
        </Link>
      </Stack>
      <SectionHeader title="Also Known As" />
      <Stack direction="row" spacing="1em">
        {[data.abbreviation] // TODO: make it a function on the interface
          .concat(data.otherAbbreviations)
          .map((name, index) => {
            return (
              <Typography variant="body1" component="div" key={index}>
                [{name}]
              </Typography>
            );
          })}
      </Stack>
      <SectionHeader title="Security Assumptions" />
      <Stack direction="row" spacing="1em">
        {data.securityAssumptions.map((assumption, index) => {
          return <Tag description={assumption} key={index} />;
        })}
      </Stack>
      <SectionHeader title="Reported Vulnerabilities" />
      <Stack>
        {Object.keys(data.vulnerableTo).map((path, index) => {
          return (
            <Attack
              short={getAbbreviation(path)}
              path={path}
              fixUrls={data.vulnerableTo[path]?.map((fixPath) => {
                return fixPath;
              })}
              fixAbbrv={data.vulnerableTo[path]?.map((fixPath) => {
                return getAbbreviation(fixPath);
              })}
              key={index}
            />
          );
        })}
      </Stack>
      {data.attacking.length != 0 && (
        <Fragment>
          <SectionHeader title="Affected Work by this Attack" />
          <Stack>
            {data.attacking.map((path, index) => {
              return (
                <Short
                  shortName={getAbbreviation(path)}
                  path={path}
                  key={index}
                />
              );
            })}
          </Stack>
        </Fragment>
      )}
      <SectionHeader title="Reported Implementations" />
      <Stack>
        {data.implementations.map((impl, index) => {
          return <Implementation impl={impl} key={index} />;
        })}
      </Stack>
    </Stack>
  );
};

export default EPrint;
