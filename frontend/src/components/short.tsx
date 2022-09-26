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
        <Link href={path} style={{ minWidth: 50 }}>
          <Typography>{shortName}</Typography>
        </Link>
      </Stack>
    </div>
  );
};

export default Short;
