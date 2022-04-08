import React, { useState } from "react";
import { Context } from "./Context";
import Board from "./Board"
import Interface from "./Interface"

export default function Game() {
  const [context, setContext] = useState(null);

  return (
    <Context.Provider value={[context, setContext]}>
      <Interface />
      <Board />
    </Context.Provider>
  )
}