import React from "react";
import { Grid } from "@mui/material";
import { Text, Paragraph } from "../styles/Homepage.style";
import MyResume from "../assets/CV_Chanantaphon_Chansuksri.pdf";

const Profile = () => {
  return (
    <div className="profile">
      <Grid sx={{ flexGrow: 1 }} item xs={12} md={12}>
        <Grid container justifyContent="center" alignItems="center" spacing={10}>
          <Grid item md={5}>
            {/* <div className="profile-picture"> */}
            {/* <div className="profile-picture-background"></div> */}
            <div className="profile-picture">
              <img
                src={require("../assets/profile2.jpg")}
                alt="Profile Photo"
                className="profile-picture-background"
              />
            </div>

            {/* </div> */}
          </Grid>
          <Grid item md={7}>
            <div className="profile-info">
              <Text size="1rem" color="#7a7a7a">
                Software Developer
              </Text>
              <h2 className="animate-charcter text-glow">
                Chanantaphon Chansuksri
              </h2>
              <p>
                Software Engineer Student seeking an entry-level position as a
                website developer and mobile developer with a passion for
                developing innovative programs that are efficacious and
                reliable. Perform Open-minded for extremely skills that should
                be improved my potential skill to apply in organization
              </p>
              <a
                href={MyResume}
                download="CV_Chanantaphon_Chanuksri"
                target="_blank"
              >
                <button className="loginBtn">Download CV</button>
              </a>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
