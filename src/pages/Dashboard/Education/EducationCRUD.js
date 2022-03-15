import React from "react";
import "../../../styles/Dashboard.css";
import { useSelector } from "react-redux";
import {
  getAllEducations,
} from "../../../redux/educations/educationSlice";
import EducationCard from "../../../components/EducationCard";
import "../../../styles/EducationStyle.scss";


const EducationCRUD = () => {
  const educations = useSelector(getAllEducations);
  let renderEducations =
    educations.Response === "True"
      ? (
        educations.data.map((items, index) => (
          <EducationCard key={index} data={items} />
        )))
      : null;

  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center", padding: "2rem" }}>Education</h1>
      <div className="education-container">{renderEducations}</div>
    </div>
  );
};

export default EducationCRUD;
