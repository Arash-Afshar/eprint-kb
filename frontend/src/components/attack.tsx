import { Link, Stack, Typography } from "@mui/material";
import React, { FC } from "react";

interface AttackProps {
  short: string;
  path: string;
  fixUrls: string[];
  fixAbbrv: string[];
}

const Attack: FC<AttackProps> = ({
  short,
  path,
  fixUrls,
  fixAbbrv,
}: AttackProps) => {
  return (
    <div>
      <Stack direction="row" spacing="1em">
        <Link href={path} style={{ minWidth: 50 }}>
          <Typography>{short}</Typography>
        </Link>
        {(fixUrls != undefined && fixUrls.length) != 0 ? (
          <Stack direction="row" spacing="1em">
            <Typography>Fixed by</Typography>
            {fixUrls.map((url, index) => {
              return (
                <Link href={url} key={index}>
                  <Typography>{fixAbbrv[index]}</Typography>
                </Link>
              );
            })}
          </Stack>
        ) : (
          <div>No reported fix!</div>
        )}
      </Stack>
    </div>
  );
};

export default Attack;
