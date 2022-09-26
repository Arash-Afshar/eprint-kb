import { Link, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import React, { Fragment, ReactNode } from "react";
import Attack from "./attack";
import Implementation from "./implementation";
import SectionHeader from "./section_header";
import Short from "./short";
import Tag from "./tag";
import { GoodIcon } from "./icons";
import { eprint } from "./testData";

const EPrint: NextPage = () => {
  const data = eprint;
  const eprintUrl = "https://eprint.iacr.org/" + data.path;

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
        {data.vulnerableTo.length == 0 ? (
          <Typography>N/A</Typography>
        ) : (
          data.vulnerableTo.map((src, index) => {
            return (
              <Attack
                short={src.abbreviation}
                path={src.path}
                fixUrls={src.fixedBy?.map((fix) => {
                  return fix.path;
                })}
                fixAbbrv={src.fixedBy?.map((fix) => {
                  return fix.abbreviation;
                })}
                key={index}
              />
            );
          })
        )}
      </Stack>
      {data.attacking.length != 0 && (
        <Fragment>
          <SectionHeader title="Affected Work by this Attack" />
          <Stack>
            {data.attacking.map((src, index) => {
              return (
                <Short
                  shortName={src.abbreviation}
                  path={src.path}
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
