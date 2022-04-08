import React, { useContext } from "react";
import styled from 'styled-components'
import { Context } from "./Context";


function Interface(props) {
  const [context, setContext] = useContext(Context);

  return (
    <TheInterface id="interface">
      <GameTitle>{context.title}</GameTitle>
      <GameTitle>{context.round}</GameTitle>
    </TheInterface>
  );
}
export default Interface;


const TheInterface = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  display:block;
  background: transparent;
  box-sizing: border-box;
  overflow:hidden;
  z-index: 1;
  pointer-events:none;
`
const GameTitle = styled.div`
  text-align:center;
  font-size:26px;
  color:#fff;
  text-shadow: 1px 1px 2px #000;
`