import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import type { NextPage } from "next";
import React from "react";
import EPrint from "../components/eprint";

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
        <EPrint />
      </Container>
    </React.Fragment>
  );
};

export default IndexPage;
