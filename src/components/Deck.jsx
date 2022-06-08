import React from 'react'
import styled from 'styled-components'
import { Card } from "./Card";
import { Droppable } from "react-beautiful-dnd";

const StyledDeck = styled.div`
  position:absolute;
  display:flex;
  flex-direction: column-reverse;
  top:0;
  right:0;
  `

export function Deck(props) {
  return (
    <Droppable droppableId={props.item.name}>
      {provided => (
        <StyledDeck id={props.item.name} ref={provided.innerRef} {...provided.droppableProps}>
          {props.item.cards.map((card, index) => {
            return (
            <Card card={card} index={index} key={card.id} />
          )})}
          {provided.placeholder}
        </StyledDeck>
      )}
    </Droppable>
  )
}