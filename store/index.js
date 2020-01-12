export const state = () => ({
  isMenuActive: false
  // page: 'index',

  // items: [],
  // counter: 10,
  // currentLocation: 'initial'
})

export const getters = () => ({
  // items: (state) => state.items
})

export const mutations = {
  closeMenu(state){
    state.isMenuActive = false
  },
  changeMenu(state){
    state.isMenuActive = !state.isMenuActive
  }
  // updatePage(state, pageName){
  //   state.page = pageName
  //   console.log(pageName)
  // },

  // increment(state) {
  //   state.counter++
  // },
  // setLocation(state, text) {
  //   state.currentLocation = text
  // },
  // setItems(state, { items }) {
  //   state.items = items
  // }
}
