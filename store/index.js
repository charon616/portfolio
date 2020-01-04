export const state = () => ({
  items: [],
  counter: 10,
  currentLocation: 'initial'
})

export const getters = () => ({
  items: (state) => state.items
})

export const mutations = {
  increment(state) {
    state.counter++
  },
  setLocation(state, text) {
    state.currentLocation = text
  },
  setItems(state, { items }) {
    state.items = items
  }
}
