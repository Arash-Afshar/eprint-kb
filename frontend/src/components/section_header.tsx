import { Typography } from "@mui/material";
import React, { FC } from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
}: SectionHeaderProps) => {
  return (
    <div>
      <Typography variant="h5" style={{ marginTop: 32 }}>
        {title}
      </Typography>
    </div>
  );
};

export default SectionHeader;
