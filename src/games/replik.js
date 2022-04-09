

function generateRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}
// fake data generator
function getItems(count, offset = 0) {
  return Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    lettre: generateRandomLetter(),
    hidden: true,
    content: `item ${k + offset}`
  }))
}

function draw() {
  
}

function deck() {
  
}

const state = {
  hand: {
    name: "hand",
    cards: []
  },
  deck: {
    name: "deck",
    cards: []
  },
  draw: {
    name: "draw",
    cards: [],
    empty: false
  }
}



const replik = {
  state,
  getItems,
  draw,
  deck,
}
export default replik;