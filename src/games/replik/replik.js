import baseDeck from "./deck";
shuffle(baseDeck)
function makeDeck() {
  return baseDeck.map((c,i)=>({
    id: `item-${i}`,
    lettre: c.l,
    maj:c.t,
    hidden: true,
    content: `item ${c.l}`
  }))
}

const state = {
  hand: {
    name: "hand",
    cards: []
  },
  deck: {
    name: "deck",
    cards: makeDeck()
  },
  draw: {
    name: "draw",
    cards: [],
    empty: false
  }
}
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}
/*function generateRandomLetter() {
  shuffle(baseDeck)
}
// fake data generator
function getItems(count, offset = 0) {
  return Array.from({ length: count }, (v, k) => k).map((c,i)=>({
    id: `item-${i}`,
    lettre: c.l,
    hidden: true,
    content: `item ${c.l}`
  }))
}*/

function draw(count) {
  return Array.from({ length: count }, () => state.deck.cards.pop())
}

function deck() {
  
}



const replik = {
  state,
  draw,
  deck,
}
export default replik;