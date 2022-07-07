import { Link, Stack, Typography } from "@mui/material";
import React, { FC } from "react";

interface AttackProps {
  short: string;
  path: string;
  fixUrls: string[];
}

const Attack: FC<AttackProps> = ({ short, path, fixUrls }: AttackProps) => {
  return (
    <div>
      <Stack direction="row" spacing="1em">
        <div style={{ minWidth: 100 }}>
          <Typography>{short}</Typography>
        </div>
        <Link href={path}>
          <Typography>link</Typography>
        </Link>
        {fixUrls.length == 0 ? (
          <div>No reported fix!</div>
        ) : (
          <Stack direction="row" spacing="1em">
            <Typography>Fixed by</Typography>
            {fixUrls.map((url, index) => {
              return (
                <Link href={url}>
                  <Typography>link{index}</Typography>
                </Link>
              );
            })}
          </Stack>
        )}
      </Stack>
    </div>
  );
};

export default Attack;
