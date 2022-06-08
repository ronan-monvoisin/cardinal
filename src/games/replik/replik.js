import baseDeck from "./deck";
shuffle(baseDeck)
function makeDeck() {
  return baseDeck.map((c, i) => ({
    id: `item-${i}`,
    lettre: c.l,
    maj: c.t,
    hidden: true,
    content: `item ${c.l}`
  }))
}

const startState = {
  round: 0,
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

function draw(count) {
  return Array.from({ length: count }, () => startState.deck.cards.pop())
}

function deck() {

}
const context = { title: "Replik", round: 0, token: "", modal: { visible: false, content: '' } }
const replik = {
  startState,
  draw,
  deck,
  context,
}
export default replik;