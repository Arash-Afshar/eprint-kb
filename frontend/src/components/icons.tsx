import { Check, Close, Warning } from "@mui/icons-material";
import { FC } from "react";

export const GoodIcon: FC = () => {
  return (
    <div style={{ color: "green" }}>
      <Check />
    </div>
  );
};

export const BadIcon: FC = () => {
  return (
    <div style={{ color: "red" }}>
      <Close />
    </div>
  );
};

export const WarningIcon: FC = () => {
  return (
    <div style={{ color: "yellow" }}>
      <Warning />
    </div>
  );
};
