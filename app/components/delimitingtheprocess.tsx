import React from "react";
import Steps from "./steps";
import Table from "./table";

const delimitingtheprocess = () => {
  return (
    <div>
      <Steps stepname="Delimiting the process">
        <p>
          Le deuxième pas implique l&apos;utilisation de l&apos;outil SIPOC, qui
          signifie &quot;Supplier, Input, Process, Output, Customer&quot; pour
          définir la portée du projet. SIPOC est un cadre visuel couramment
          utilisé dans l&apos;amélioration des processus, décomposant un
          processus en composants clés pour une compréhension globale.
        </p>

        <div>
          <Table />
        </div>
      </Steps>
    </div>
  );
};

export default delimitingtheprocess;
