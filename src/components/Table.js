import React from "react";
import Columns from "./Columns";

function Table() {
  return (
    <React.Fragment>
      <h1>Table</h1>
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Table;
