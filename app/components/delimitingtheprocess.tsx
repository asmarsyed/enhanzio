import React from "react";
import Steps from "./steps";
import Table from "./table";

const delimitingtheprocess = () => {
  return (
    <div>
      <Steps stepname="Delimiting the process">
        <p>
          The second step involves using the SIPOC tool, which stands for
          “Supplier, Input, Process, Output, Customer” to define the project's
          scope. SIPOC is a visual framework commonly used in process
          improvement, breaking down a process into key components for a
          high-level understanding.
        </p>
        <div>
          <Table />
        </div>
      </Steps>
    </div>
  );
};

export default delimitingtheprocess;
