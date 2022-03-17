import React, { useEffect } from "react";
import {
  Body,
  Container,
  HeaderContianer,
  Paragraph,
  Text,
  Grid,
} from "../styles/Homepage.style";
import Education from "./Education";
import "../styles/Homepage.css";
import { useDispatch } from "react-redux";
import { fetchAsyncEducations } from "../redux/educations/educationSlice";
import IndexPage from "./IndexPage";
import "../styles/HomepageStyle.scss";
import ProjectExpreience from "./ProjectExpreience";
import Footer from "./Footer";
import Skills from "./Skills";
import MyResume from "../assets/CV_Chanantaphon_Chansuksri.pdf";
import Profile from "./Profile";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncEducations());
  }, []);

  return (
    <Body height={"auto"}>
      <a className="anchor" id="Home"></a>
      <IndexPage />

      <a className="anchor" id="About"></a>
      <HeaderContianer hg="auto" pb="5rem">
        <Profile />
      </HeaderContianer>
      <Skills />

      <a className="anchor" id="Education"></a>
      <Education />

      <a className="anchor" id="Project"></a>
      <ProjectExpreience />

      <Footer />
    </Body>
  );
}
