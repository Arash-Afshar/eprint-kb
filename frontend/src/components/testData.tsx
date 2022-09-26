import { GoodIcon } from "./icons";
import { IEPrintData } from "./types";

const eprint6: IEPrintData = {
  title: "eprint 6",
  authors: "aaaa",
  path: "/2020/6",
  abbreviation: "[a6]",
  securityAssumptions: ["assumption1"],
};

const eprint1: IEPrintData = {
  title: "eprint 1",
  authors: "aaaa",
  path: "/2020/1",
  abbreviation: "[a1]",
  securityAssumptions: ["assumption1"],
};

const eprint2: IEPrintData = {
  title: "eprint 2",
  authors: "aaaa",
  path: "/2020/2",
  abbreviation: "[a2]",
  securityAssumptions: ["assumption1"],
};

const eprint3: IEPrintData = {
  title: "eprint 3",
  authors: "aaaa",
  path: "/2020/3",
  abbreviation: "[a3]",
  securityAssumptions: ["assumption1"],
  fixedBy: [eprint6],
};

const eprint4: IEPrintData = {
  title: "eprint 4",
  authors: "aaaa",
  path: "/2020/4",
  abbreviation: "[a4]",
  securityAssumptions: ["assumption1"],
};

const eprint5: IEPrintData = {
  title: "eprint 5",
  authors: "aaaa",
  path: "/2020/5",
  abbreviation: "[a5]",
  securityAssumptions: ["assumption1"],
};

export const eprint: IEPrintData = {
  title: "Bulletproofs: Short Proofs for Confidential Transactions and More",
  authors:
    "Benedikt Bünz, Jonathan Bootle, Dan Boneh, Andrew Poelstra, Pieter Wuille, and Greg Maxwell",
  path: "2017/1066",
  abbreviation: "Bulletproof",
  otherAbbreviations: ["BBBPWM17"],
  securityAssumptions: ["Random Oracle", "Discrete Logarithm"],
  vulnerableTo: [eprint3, eprint4],
  attacking: [eprint1, eprint2],
  fixedBy: [eprint5],
  implementations: [
    {
      shortName: "dalek",
      url: "https://github.com/dalek-cryptography/bulletproofs",
      audits: [
        {
          auditor: "auditor-name",
          version: "v1.0.0",
          result: <GoodIcon />,
        },
      ],
      forks: 164,
      stars: 796,
      language: "Rust",
      lastCommit: {
        hash: "6fb413574ad905e8817ae6e66e5955b9534637d9",
        date: "Aug 17, 2022",
      },
    },
  ],
};
