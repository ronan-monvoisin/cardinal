import React from 'react'
import { Card } from "./Card";
import { Droppable } from "react-beautiful-dnd";

export function Deck(props) {
  return (
    <Droppable droppableId={props.item.name}>
      {provided => (
        <div id={props.item.name} ref={provided.innerRef} {...provided.droppableProps}>
          {props.item.cards.map((card, index) => {
            return (
            <Card card={card} index={index} key={card.id} />
          )})}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}