import React, { useState, useCallback, useEffect, useContext } from "react";
import { Context } from "./Context";
import { DragDropContext } from "react-beautiful-dnd";
import styled from 'styled-components'
import { Hand } from "./components/Hand";
import { Deck } from "./components/Deck";
import { Draw } from "./components/Draw";
import replik from "./games/replik/replik";



const reorder = (list, startIndex, endIndex) => {
  console.log(list);
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
/**
 * Moves an item from one list to another list.
 */
const moveList = (state, result) => {
  const stateClone = { ...state };
  const [removed] = stateClone[result.source.droppableId].cards.splice(result.source.index, 1);
  stateClone[result.destination.droppableId].cards.splice(result.destination.index, 0, removed);
  return stateClone;
};

function Board(props) {
  const [context, setContext] = useContext(Context);
  const [state, setState] = useState(replik.state)
  const [dragging, setDragging] = useState(false);
  function onDragStart(result) {
    document.querySelector('#board').classList.add('dragging')
  }

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.source.droppableId === result.destination.droppableId) {
      const newState = { ...state };
      newState[result.destination.droppableId].cards = reorder(
        state[result.destination.droppableId].cards,
        result.source.index,
        result.destination.index
      );
      setState(newState);
      setDragging(false)
    } else {
      let newState = { ...state };
      newState = moveList(state, result);

      setState(newState);
      setDragging(false)
    }
    document.querySelector('#board').classList.remove('dragging')
  }

  function drawCard() {
    const newState = { ...state };
    newState.draw.cards = [...replik.draw(1)]
    setState(newState)
  }
  /*function getBoundingClientRectValues(item) {
    let values = item.getBoundingClientRect()
    return Object.assign({}, {
      width: values.width,
      height: values.height,
      x: values.x,
      y: values.y,
      left: values.left,
      right: values.right,
      top: values.top,
      bottom: values.bottom
    })
  }*/
  function useMyCoolSensor(api) {
    
    const start = useCallback(function start(event) {
      const preDrag = api.tryGetLock(state.draw.cards[0].id);
      if (!preDrag) {
        return;
      }
      const card = document.querySelector(`[data-rbd-draggable-id='${state.draw.cards[0]?.id}']`).getBoundingClientRect()
      
      const hand = document.querySelector('#hand').getBoundingClientRect()
      
      console.log(hand);

      const points = [];
      // we want to generate 20 points between the start and the end
      // TODO count point from distance
      const numberOfPoints = 20;
      // if hand empth dont devide card.with by 2
      const handEmpty = (state.hand.cards.length)?2:1
      const handEmpty2 = (state.hand.cards.length)?(card.width / 2):0

      for (let i = numberOfPoints-1; i >= 0; i--) {
        points.push(Object.assign({},{
          x: hand.right - card.width / handEmpty + (card.right - hand.right - handEmpty2) * i / numberOfPoints,
          y: hand.top + 5 + (card.top - hand.top) * i / numberOfPoints
        }));
      }
      console.log(JSON.stringify(points));
      moveStepByStep(preDrag.fluidLift({ x: card.left, y: card.top }), points)
    }, []);

    function moveStepByStep(drag, values) {
      requestAnimationFrame(() => {
        const newPosition = values.shift();
        drag.move(newPosition);
        console.log(newPosition);
        setTimeout(() => {
          if (values.length) {
            moveStepByStep(drag, values);
          } else {
            drag.drop();
          }
          
        },0)
      });
    }

    useEffect(() => {
      document.querySelector('#pickcard').addEventListener('click', start);
      //document.querySelector('#board').addEventListener('click', test);

      return () => {
        document.querySelector('#pickcard').removeEventListener('click', start);
        //document.querySelector('#board').removeEventListener('click', test);
      };
    }, []);
  }
  return (
    <TheBoard id="board" theme={dragging}>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart} sensors={[useMyCoolSensor]}>
        <Hand item={state.hand} />
        <Deck item={state.deck} />
        <Draw item={state.draw} onClicked={() => (drawCard())} />
      </DragDropContext>
    </TheBoard >
  );
}
export default Board;

const TheBoard = styled.div`
  display:flex;
  height:100vh;
  width:100vw;
  background: bisque;
  padding:30px;
  box-sizing: border-box;
  overflow:hidden;
  position:relative;
`



    // const test = useCallback(function test(event) {
    //   console.log("card:",state.deck.cards[0].id);
    //   let testcard = api.tryGetLock(state.deck.cards[0].id);
    //   console.log("testcard:",testcard);
    //   let movecard = testcard.fluidLift({ x: 1, y: 1 })
    //   movecard.move({ x: 800, y: 600 })
    //   board.classList.add('dragging')
    //   testid.style.display = "none"
    //   testid.innerText = "Drop"
    //   testid.addEventListener('click', () => {
    //     movecard.drop()
    //     testid.innerText = "Drag"
    //     testid.removeEventListener('click', test)
    //     testid.classList.remove('dragging')

    //   })
    // })
function pickCard() {
  if (!state.draw.cards.length) return
  const newState = { ...state };
  newState.hand.cards = [...replik.draw(1)]
  setState(newState)
}

function deleteItem(ind, index) {
  const newState = [...state];
  newState[ind].splice(index, 1);
  setState(
    newState.filter(group => group.length)
  );
}

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