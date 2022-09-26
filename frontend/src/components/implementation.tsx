import { Link, Stack, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { Star, CallSplit } from "@mui/icons-material";
import { IImplementation } from "./types";

interface ImplementationProps {
  impl: IImplementation;
}

const Implementation: FC<ImplementationProps> = ({
  impl,
}: ImplementationProps) => {
  const { shortName, url, language, audits, lastCommit, stars, forks } = impl;
  const lastCommitUrl = url + "/commit/" + lastCommit.hash;
  return (
    <div>
      <Stack direction="row" spacing="1em">
        <div style={{ minWidth: 50 }}>
          <Link href={url} target="_blank" rel="noopener">
            <Typography>{shortName}</Typography>
          </Link>
        </div>
        <Typography>{language}</Typography>
        <Stack>
          {audits.map((audit, index) => {
            return (
              <Stack direction="row" key={index} spacing=".5em">
                <Typography>{audit.version}</Typography>
                <Typography>{audit.auditor}</Typography>
                {audit.result}
              </Stack>
            );
          })}
        </Stack>
        <Link href={lastCommitUrl} target="_blank" rel="noopener">
          <Typography>{lastCommit.date}</Typography>
        </Link>
        <Stack direction="row">
          <span style={{ color: "gold" }}>
            <Star />
          </span>
          <Typography>{stars}</Typography>
        </Stack>
        <Stack direction="row">
          <span style={{ color: "gray" }}>
            <CallSplit />
          </span>
          <Typography>{forks}</Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default Implementation;
