import React from "react";
import { Grid } from "@mui/material";

const Skills = () => {
  return (
    <div className="skills-container">
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={20}>
          <Grid item>
            <img
              width={100}
              height={100}
              src={require("../assets/React_logo_wordmark.png")}
              alt="React"
            />
            <div className="text-skills">
              <h1>React</h1>
            </div>
          </Grid>
          <Grid item>
            <img
              width={100}
              height={100}
              src={require("../assets/nodejs-logo.png")}
              alt="Node.js"
            />
            <div className="text-skills">
              <h1>Node.js</h1>
            </div>
          </Grid>
          <Grid item>
            <img
              width={100}
              height={100}
              src={require("../assets/laravel.png")}
              style={{ margin: "auto" }}
              alt="Laravel"
            />
            <div className="text-skills">
              <h1>Laravel</h1>
            </div>
          </Grid>
          <Grid item>
            <img
              width={100}
              height={100}
              src={require("../assets/angular.png")}
              alt="Angular"
            />
            <div className="text-skills">
              <h1>Angular</h1>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
