import React, { useState } from "react";
import styled from 'styled-components'


const TheInterface = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  display:flex;
  background: transparent;
  box-sizing: border-box;
  overflow:hidden;
  pointer-event:none;
`
function Interface(props) {
  const [state, setState] = useState();

  return (
    <TheInterface id="interface">
    </TheInterface>
  );
}
export default Interface;