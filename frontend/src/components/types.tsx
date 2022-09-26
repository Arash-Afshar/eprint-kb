import { ReactNode } from "react";

export interface IAudit {
  version: string;
  auditor: string;
  result: ReactNode;
}

export interface ICommit {
  date: string;
  hash: string;
}

export interface IImplementation {
  shortName: string;
  url: string;
  language: string;
  audits: IAudit[];
  lastCommit: ICommit;
  stars: number;
  forks: number;
}

export interface IEPrintData {
  title: string;
  authors: string;
  path: string;
  abbreviation: string;
  otherAbbreviations?: string[];
  securityAssumptions: string[];
  vulnerableTo?: IEPrintData[];
  fixedBy?: IEPrintData[];
  attacking?: IEPrintData[];
  implementations?: IImplementation[];
}
