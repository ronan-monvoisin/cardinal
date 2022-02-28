import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from 'styled-components'
import { CardContainer } from "./components/CardContainer";

// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    lettre: "A",
    hidden: true,
    content: `item ${k + offset}`
  }));

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list.items);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source.items);
  const destClone = Array.from(destination.items);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = [];
  result[droppableSource.droppableId] = { name: source.name, items: sourceClone };
  result[droppableDestination.droppableId] = { name: destination.name, items: destClone };

  return result;
};
const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid
});

function Board(props) {
  const [state, setState] = useState([
    { name: "truc", items: getItems(10) },
    { name: "machin", items: getItems(5) }
  ]);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd].items = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState);
    }
  }
  function deleteItem(ind, index) {
    const newState = [...state];
    newState[ind].splice(index, 1);
    setState(
      newState.filter(group => group.length)
    );
  }

  return (
    <div id="board">
      <button
        type="button"
        onClick={() => {
          setState([...state, { name: "hehe", items:[]}]);
        }}
      > {console.log(state)}
        Add new group
      </button>
      <button
        type="button"
        onClick={() => {
          setState([...state, { name: "hehe", items:getItems(1)}]);
        }}
      >
        Add new item
      </button>
      <div style={{ display: "flex" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={getListStyle(snapshot.isDraggingOver)}
                  {...provided.droppableProps}
                >
                  <h2>{ el.name }</h2>
                  {el.items.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <CardContainer
                          provided={provided} snapshot={snapshot}
                        >
                          {item.lettre}
                        </CardContainer>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
}
export default Board;