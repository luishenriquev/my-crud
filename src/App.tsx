import React from "react";
import logo from "./logo.svg";
import TableUsuarios from "./components/TableUsuarios";
import { useApi } from "./hooks/useApi";
import FormAdd from "./components/formAdd";

function App() {
  useApi();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>CRUD</h1>
      </div>
      <div
        style={{
          marginTop: 80,
          width: 1000,
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <FormAdd />
        </div>
        <TableUsuarios />
      </div>
    </div>
  );
}

export default App;
