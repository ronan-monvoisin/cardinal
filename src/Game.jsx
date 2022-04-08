import React, { useState } from "react";
import { Context } from "./Context";
import Board from "./Board"
import Interface from "./Interface"

export default function Game() {
  const [context, setContext] = useState(createContext());

  return (
    <Context.Provider value={[context, setContext]}>
      <Interface />
      <Board />
    </Context.Provider>
  )
}
function createContext() {
  let context = { title: "Replik", round: 0, token: "" }
  return context
}