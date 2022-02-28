import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from 'styled-components'
import { Hand } from "./components/Hand";
import { Table } from "./components/Table";


// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    lettre: generateRandomLetter(),
    hidden: true,
    content: `item ${k + offset}`
  }));
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

const reorder = (list, startIndex, endIndex) => {
  console.log(list);
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

const TheBoard = styled.div`
display:flex;
`
function Board() {
  const [state, setState] = useState({
    hand: {
      name: "hand",
      cards: getItems(10)
    },
    table: {
      name: "table",
      cards: getItems(10,10)
    }
  });
  /**
   * Moves an item from one list to another list.
   */
  const move = (state, result) => {
    console.log(state, result);
    const stateClone = {...state};
    const [removed] = stateClone[result.source.droppableId].cards.splice(result.source.index, 1);

    stateClone[result.destination.droppableId].cards.splice(result.destination.index, 0, removed);

    return stateClone;
  };
  function onDragEnd(result) {
    console.log(result);
    if (!result.destination) {
      return;
    }

    if (result.source.droppableId === result.destination.droppableId) {
      const newState = {...state};
      console.log(result,newState);
      newState[result.destination.droppableId].cards = reorder(
        state[result.destination.droppableId].cards,
        result.source.index,
        result.destination.index
      );
      setState(newState);
    } else {
      console.log(result);
      let newState = {...state};
      newState = move(state, result);
      console.log(newState);

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
    <TheBoard id="board">
      <DragDropContext onDragEnd={onDragEnd}>
        <Hand item={state.hand} />
        <Table item={state.table} />
      </DragDropContext>
    </TheBoard>
  );
}
export default Board;