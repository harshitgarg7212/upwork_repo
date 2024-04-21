import { Container, Grid } from "@mui/material";
import Sections from "./sections";
import bannerLogo from "../../assets/images/photography.png";
import React from "react";

const Page2 = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          backgroundImage: `url(${bannerLogo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "20px",
          minHeight: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            width: "100%",
            maxWidth: "1155px",
            height: "100%",
          }}
        >
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <h1 className="typed" style={{ marginBottom: "0" }}>
                <b>Sed ut perspiciatis</b>
              </h1>
              <h1 className="typed" style={{ marginTop: "0" }}>
                <b>unde omnis iste natus</b>
              </h1>
              <p style={{ marginBottom: "0" }} className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </Grid>
          </Grid>
        </div>
      </div>
      <Container className="heroContent" maxWidth="xl">
        <Sections />
      </Container>
    </div>
  );
};

export default Page2;
