import React from "react";
import { HeaderContianer } from "../styles/Homepage.style";
import { Grid } from "@mui/material";
import "../styles/CardStyle.scss";
import "../styles/Homepage.css";
import "../styles/Button.scss";

const ProjectExpreience = () => {
  return (
    <div className="">
      <HeaderContianer>
        <div className="education-content">
          <h2>Project Experience</h2>
        </div>

        <Grid xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <div className="cards">
                <div className="cards-media">
                  <img
                    width={250}
                    height={250}
                    style={{ borderRadius: "20%" }}
                    src={require("../assets/MOC.png")}
                    alt="MOC Application"
                  />
                </div>
                <div className="cards-title">
                  <h1>MOC Application</h1>
                </div>
                <Grid item>
                  <button
                    className="button button2"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href =
                        "https://github.com/Manusea/moc_project_new";
                    }}
                  >
                    Github
                  </button>
                </Grid>
              </div>
            </Grid>

            <Grid item>
              <div className="cards">
                <div className="cards-media">
                  <img
                    width={250}
                    height={250}
                    style={{ borderRadius: "20%" }}
                    src={require("../assets/covid.png")}
                    alt="CovidViualization Website"
                  />
                </div>
                <div className="cards-title">
                  <h1>COVID-19 Website</h1>
                </div>
                <Grid item>
                  <button
                    className="button button2"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href =
                        "https://github.com/Manusea/Covid-Website";
                    }}
                  >
                    Github
                  </button>
                </Grid>
              </div>
            </Grid>

            <Grid item>
              <div className="cards">
                <div className="cards-media">
                  <img
                    width={250}
                    height={250}
                    style={{ borderRadius: "20%" }}
                    src={require("../assets/KruChana.png")}
                    alt="KruChana Application"
                  />
                </div>
                <div className="cards-title">
                  <h1>KruChaNa Application</h1>
                </div>
                <Grid item>
                  <button className="button button2" onClick={(e) => {
                      e.preventDefault();
                      window.location.href =
                        "https://github.com/Manusea/KruChana-Application";
                    }}>Github</button>
                </Grid>
              </div>
            </Grid>

            <Grid item>
              <div className="cards">
                <div className="cards-media">
                  <img
                    width={238.5}
                    height={238.5}
                    src={require("../assets/LOGO.png")}
                    alt="To-do List Application"
                  />
                </div>
                <div className="cards-title">
                  <h1>Todolist Applciaiton</h1>
                </div>
                <Grid item>
                  <button
                    className="button button2"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href =
                        "https://github.com/Manusea/todolistapp";
                    }}
                  >
                    Github
                  </button>
                </Grid>
              </div>
            </Grid>

            
          </Grid>
        </Grid>

        {/* <GridProject>
          <div className="cards">
            <div className="cards-media">
              <img
                width={238.5}
                height={238.5}
                src={require("../assets/LOGO.png")}
                alt="To-do List Application"
              />
            </div>
            <div className="cards-title">
              <h1>Todolist Applciaiton</h1>
            </div>
            <Grid columns="1fr">
              <button
                className="button button2"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://github.com/Manusea/todolistapp";
                }}
              >
                Github
              </button>
            </Grid>
          </div>

          <div className="cards">
            <div className="cards-media">
              <img
                width={250}
                height={250}
                style={{ borderRadius: "20%" }}
                src={require("../assets/covid.png")}
                alt="CovidViualization Website"
              />
            </div>
            <div className="cards-title">
              <h1>COVID-19 Website</h1>
            </div>
            <Grid columns="1fr">
              <button className="button button2" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://github.com/Manusea/Covid-Website";
                }}>Github</button>
            </Grid>
          </div>

          <div className="cards">
            <div className="cards-media">
              <img
                width={250}
                height={250}
                style={{ borderRadius: "20%" }}
                src={require("../assets/KruChana.png")}
                alt="KruChana Application"
              />
            </div>
            <div className="cards-title">
              <h1>KruChaNa Application</h1>
            </div>
            <Grid columns="1fr">
              <button className="button button2">Github</button>
            </Grid>
          </div>

          <div className="cards">
            <div className="cards-media">
              <img
                width={250}
                height={250}
                style={{ borderRadius: "20%" }}
                src={require("../assets/face.png")}
                alt="MOC Application"
              />
            </div>
            <div className="cards-title">
              <h1>MOC Application</h1>
            </div>
            <Grid columns="1fr">
              <button className="button button2" onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://github.com/Manusea/moc_project_new";
                }}>Github</button>
            </Grid>
          </div>
        </GridProject> */}
      </HeaderContianer>
    </div>
  );
};

export default ProjectExpreience;
