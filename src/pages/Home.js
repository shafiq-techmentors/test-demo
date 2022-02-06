import React from "react";
import { Grid, Button, Paper } from "@mui/material";

export default function Home() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          background: "#5316ab",
          padding: "50px",
          color: "#fff",
          height: "500px",
        }}
      >
        <Grid item xs={8}>
          <h5>HEY, I’M SHAFIQ</h5>
          <h1 style={{ fontSize: "50px" }}>Designer, Developer & Can-Doer</h1>
          <p style={{ lineHeight: "1.9" }}>
            I’m a Senior Full-Stack developer/Engineer and online business
            consultant with 5+ years of experience. I have major skills in
            Front-End and Back-End using TDD approach. I apply creativity and
            logic at the same time as I build out complex applications and
            websites. My process starts with a pen and paper and ends with a
            robust QA process and smile! 😊
          </p>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: "50px", fontWeight: "600" }}
          >
            AVAILABLE FOR YOU NOW!
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "30px" }}
      >
        <Grid item>
          <h1>Things I Can Do Quite Well !</h1>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{ marginTop: "50px", marginLeft: "10px" }}
      >
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper elevation={3}>
            <h3 style={{ paddingTop: "20px", color: "#f4511e" }}>
              Front End Development
            </h3>
            <p style={{ padding: "50px" }}>
              I have extensive experience working with React.js, related UI and
              Helper libraries, Hooks, context API, Flux architecture, Redux,
              Redux-Thunk HTML5, CSS3, Bootstrap4, Material UI,
              Javascript(ES6/ES7/ES8/ES9) / Typescript, jQuery GraphQL (Apollo)
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper elevation={3}>
            <h3 style={{ paddingTop: "20px", color: "#f4511e" }}>
              Front End Development
            </h3>
            <p style={{ padding: "50px" }}>
              I have extensive experience working with React.js, related UI and
              Helper libraries, Hooks, context API, Flux architecture, Redux,
              Redux-Thunk HTML5, CSS3, Bootstrap4, Material UI,
              Javascript(ES6/ES7/ES8/ES9) / Typescript, jQuery GraphQL (Apollo)
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper elevation={3}>
            <h3 style={{ paddingTop: "20px", color: "#f4511e" }}>
              Front End Development
            </h3>
            <p style={{ padding: "50px" }}>
              I have extensive experience working with React.js, related UI and
              Helper libraries, Hooks, context API, Flux architecture, Redux,
              Redux-Thunk HTML5, CSS3, Bootstrap4, Material UI,
              Javascript(ES6/ES7/ES8/ES9) / Typescript, jQuery GraphQL (Apollo)
            </p>
          </Paper>
        </Grid>
      </Grid>

      {/* success stories section */}

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "80px" }}
      >
        <Grid item>
          <h1>Success Stories</h1>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{ marginTop: "30px", marginLeft: "10px" }}
      >
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper elevation={3}>
            <h3 style={{ paddingTop: "20px", color: "#f4511e" }}>
              Front End Development
            </h3>
            <p style={{ padding: "50px" }}>
              I have extensive experience working with React.js, related UI and
              Helper libraries, Hooks, context API, Flux architecture, Redux,
              Redux-Thunk HTML5, CSS3, Bootstrap4, Material UI,
              Javascript(ES6/ES7/ES8/ES9) / Typescript, jQuery GraphQL (Apollo)
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper elevation={3}>
            <h3 style={{ paddingTop: "20px", color: "#f4511e" }}>
              Front End Development
            </h3>
            <p style={{ padding: "50px" }}>
              I have extensive experience working with React.js, related UI and
              Helper libraries, Hooks, context API, Flux architecture, Redux,
              Redux-Thunk HTML5, CSS3, Bootstrap4, Material UI,
              Javascript(ES6/ES7/ES8/ES9) / Typescript, jQuery GraphQL (Apollo)
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Paper elevation={3}>
            <h3 style={{ paddingTop: "20px", color: "#f4511e" }}>
              Front End Development
            </h3>
            <p style={{ padding: "50px" }}>
              I have extensive experience working with React.js, related UI and
              Helper libraries, Hooks, context API, Flux architecture, Redux,
              Redux-Thunk HTML5, CSS3, Bootstrap4, Material UI,
              Javascript(ES6/ES7/ES8/ES9) / Typescript, jQuery GraphQL (Apollo)
            </p>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
