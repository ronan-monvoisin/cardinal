import React from 'react'
import styled from 'styled-components'
import { Card } from "./Card";
import { Droppable } from "react-beautiful-dnd";

const StyledHand = styled.div`
  position:absolute;
  bottom:30px;
  left:0;
  right:0;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  margin:5px;
`

export function Hand(props) {
  return (
    <Droppable droppableId={props.item.name} direction="horizontal">
      {provided => (
        <StyledHand id={props.item.name} ref={provided.innerRef} {...provided.droppableProps}>
          {props.item.cards.map((card, index) => (
            <Card card={card} index={index} key={card.id} />
          ))}
          <CardDraw id="pickcard">Pick</CardDraw>
          {provided.placeholder}
        </StyledHand>
      )}
    </Droppable>
  )
}