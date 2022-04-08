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
  return {title:"Replik", round:""}
}