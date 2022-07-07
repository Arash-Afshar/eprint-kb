import {
  AppBar,
  Button,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import React, { FC } from "react";
import Attack from "../components/attack";
import Implementation from "../components/implementation";
import SectionHeader from "../components/section_header";
import Short from "../components/short";
import Tag from "../components/tag";
import { Check } from "@mui/icons-material";

const Good: FC = () => {
  return (
    <div style={{ color: "green" }}>
      <Check />
    </div>
  );
};

const IndexPage: NextPage = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MPC-KB
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="lg"
        style={{
          borderRadius: 8,
          backgroundColor: "white",
          marginTop: 2,
          padding: 32,
        }}
      >
        <Stack>
          <Typography variant="h4" component="div">
            Bulletproofs: Short Proofs for Confidential Transactions and More
          </Typography>
          <Typography variant="h6" component="div">
            Benedikt Bünz, Jonathan Bootle, Dan Boneh, Andrew Poelstra, Pieter
            Wuille, and Greg Maxwell
          </Typography>
          <Stack direction="row" spacing=".5em">
            <Typography variant="body1" component="div">
              Link
            </Typography>
            <Link
              href="https://eprint.iacr.org/2017/1066"
              target="_blank"
              rel="noopener"
            >
              <Typography>https://eprint.iacr.org/2017/1066</Typography>
            </Link>
          </Stack>
          <SectionHeader title="Also Known As" />
          <Stack direction="row" spacing="1em">
            <Typography variant="body1" component="div">
              [Bulletproof]
            </Typography>
            <Typography variant="body1" component="div">
              [BBBPWM17]
            </Typography>
          </Stack>
          <SectionHeader title="Security Assumptions" />
          <Stack direction="row" spacing="1em">
            <Tag description="Random Oracle" />
            <Tag description="Discrete Logarithm" />
          </Stack>
          <SectionHeader title="Reported Vulnerabilities" />
          <Stack>
            <Attack
              short="Established"
              path="/2022/12"
              fixUrls={["/2022/34", "/2022/56"]}
            />
            <Attack short="New attack" path="/2022/12" fixUrls={[]} />
          </Stack>
          <SectionHeader title="Affected Work by this Attack" />
          <Stack>
            <Short shortName="[ABCD12]" path="/2022/12" />
          </Stack>
          <SectionHeader title="Implementations" />
          <Stack>
            <Implementation
              shortName="dalek"
              url="https://github.com/dalek-cryptography/bulletproofs"
              audits={[
                {
                  auditor: "auditor-name",
                  version: "v1.0.0",
                  result: <Good />,
                },
              ]}
              forks={164}
              stars={796}
              language="Rust"
              lastCommit={{
                hash: "6fb413574ad905e8817ae6e66e5955b9534637d9",
                date: "Aug 17, 2022",
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default IndexPage;
