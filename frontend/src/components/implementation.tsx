import { Link, Stack, Typography } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { Star, CallSplit } from "@mui/icons-material";

interface Audit {
  version: string;
  auditor: string;
  result: ReactNode;
}

interface Commit {
  date: string;
  hash: string;
}

interface ImplementationProps {
  shortName: string;
  url: string;
  language: string;
  audits: Audit[];
  lastCommit: Commit;
  stars: number;
  forks: number;
}

const Implementation: FC<ImplementationProps> = ({
  shortName,
  url,
  language,
  audits,
  lastCommit,
  stars,
  forks,
}: ImplementationProps) => {
  const lastCommitUrl = url + "/commit/" + lastCommit.hash;
  return (
    <div>
      <Stack direction="row" spacing="1em">
        <div style={{ minWidth: 100 }}>
          <Typography>{shortName}</Typography>
        </div>
        <Link href={url} target="_blank" rel="noopener">
          <Typography>source code</Typography>
        </Link>
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
