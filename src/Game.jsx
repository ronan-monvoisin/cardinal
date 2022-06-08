import React, { useState } from "react";
import { Context } from "./Context";
import Board from "./Board"
import Interface from "./Interface"
import replik from "./games/replik/replik";

export default function Game() {
  const [context, setContext] = useState(replik.context)

  return (
    <Context.Provider value={[context, setContext]}>
      <Interface />
      <Board />
    </Context.Provider>
  )
}