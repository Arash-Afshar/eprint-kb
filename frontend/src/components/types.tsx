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
  otherAbbreviations: string[];
  securityAssumptions: string[];
  vulnerableTo: IVulnerableToData;
  fixedBy: IEPrintData[];
  attacking: string[];
  implementations: IImplementation[];
}

export interface IVulnerableToData {
  [attackInfo: string]: string[];
}
