import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board.jsx"
import Interface from "./Interface.jsx"

const rootElement = document.getElementById("root");

ReactDOM.render(<><Board /><Interface /></>, rootElement);