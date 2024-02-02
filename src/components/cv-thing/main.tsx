import React from "react";
import Head from "./name";
import Left from "../../components/cv-thing/left";
import Right from "../../components/cv-thing/right";

function Resume() {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 justify-center py-10 space-y-10  ">
      <Head />

      {/* <div className="flex flex-col-reverse gap-4 sm:grid sm:grid-cols-3"> */}

      <Left />
      <Right />
      {/* </div> */}
    </div>
  );
}

export default Resume;
