import { Typography } from "@mui/material";
import React, { FC } from "react";
import styles from "../styles/Tag.module.css";

interface TagProps {
  description: string;
}

const Tag: FC<TagProps> = ({ description }: TagProps) => {
  return (
    <div className={styles.container}>
      <Typography>{description}</Typography>
    </div>
  );
};

export default Tag;
