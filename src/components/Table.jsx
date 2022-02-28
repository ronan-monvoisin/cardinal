import React from 'react'
import { Card } from "./Card";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export function Table(props) {
  return (
    <Droppable droppableId={props.item.name}>
      {provided => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {props.item.cards.map((card, index) => (
            <Card card={card} index={index} key={card.id} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}