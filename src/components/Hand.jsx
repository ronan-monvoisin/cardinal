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

export function Hand(props) {
  return (
    <Droppable droppableId={props.item.name} direction="horizontal">
      {provided => (
        <StyledHand id={props.item.name} ref={provided.innerRef} {...provided.droppableProps}>
          {props.item.cards.map((card, index) => (
            <Card card={card} index={index} key={card.id} />
          ))}
          {provided.placeholder}
        </StyledHand>
      )}
    </Droppable>
  )
}