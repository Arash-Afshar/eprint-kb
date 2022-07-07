import { Link, Stack, Typography } from "@mui/material";
import React, { FC } from "react";

interface ShortProps {
  shortName: string;
  path: string;
}

const Short: FC<ShortProps> = ({ shortName, path }: ShortProps) => {
  return (
    <div>
      <Stack direction="row" spacing="1em">
        <div style={{ minWidth: 100 }}>
          <Typography>{shortName}</Typography>
        </div>
        <Link href={path}>
          <Typography>link</Typography>
        </Link>
      </Stack>
    </div>
  );
};

export default Short;
