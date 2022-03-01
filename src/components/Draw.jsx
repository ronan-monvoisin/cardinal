import React from 'react'
import { Card } from "./Card";
import styled from 'styled-components'
import { Droppable } from "react-beautiful-dnd";

const StyledDraw = styled.div`
  position:fixed;
  top:0;
  right:0;
  display:flex;

`

const CardDraw = styled.div`
  width: 90px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align:center;
  font-size: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 7px 1px rgba(31,31,31,0.2);
  background-color: #EEE;
  color: #000;
  position:relative;
  cursor: pointer;
`


export function Draw(props) {
  return (
    <StyledDraw id={props.item.name}>{console.log(props)}
      <Droppable droppableId={props.item.name} direction="horizontal">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {props.item.cards.map((card, index) => (
              <Card card={card} index={index} key={card.id} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {(!props.item.empty) ?
          <CardDraw onClick = {()=>(props.onClicked()) } > Draw</CardDraw>
      :''}
    </StyledDraw>
  )
}