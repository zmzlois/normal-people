import React from "react";
import Left from "./name";
// import Left from "../../components/cv-thing/left";
import Right from "../../components/cv-thing/right";

function Resume() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center">
      <Left />
      <Right />
    </div>
  );
}

export default Resume;
