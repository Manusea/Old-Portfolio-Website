import * as React from "react";
import { HeaderContianer } from "../styles/Homepage.style";
import "../styles/Homepage.css";
import { useSelector } from "react-redux";
import { getAllEducations } from "../redux/educations/educationSlice";
import HomeEducationCard from "../components/HomeEducationCard";
import { Grid } from "@mui/material";

export default function Education() {
  const educations = useSelector(getAllEducations);
  let renderEducations =
    educations.Response === "True"
      ? educations.data.map((items, index) => (
          <HomeEducationCard key={index} data={items} />
        ))
      : null;
  return (
    <div className="education">
      <HeaderContianer>
        <div className="education-content">
          <h2>Education</h2>
          <div>
            <Grid item xs={12}>
              <Grid container justifyContent={"center"} spacing={8} direction="row">
                {renderEducations}
              </Grid>
            </Grid>
            {/* <div className="education-container">{renderEducations}</div> */}
          </div>
        </div>
      </HeaderContianer>
    </div>
  );
}
