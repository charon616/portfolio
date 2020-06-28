export const state = () => ({
  isMenuActive: false,
  menudesu: true
  // page: 'index',

  // items: [],
  // counter: 10,
  // currentLocation: 'initial'
})

export const getters = () => ({
  // items: (state) => state.items
  menudesu: (state) => state.menudesu
})

export const mutations = {
  closeMenu(state){
    state.isMenuActive = false
  },
  changeMenu(state){
    state.isMenuActive = !state.isMenuActive
  },
  openMenu(state) {
    state.menudesu = true
  },
  closeMenu(state) {
    state.menudesu = false
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
