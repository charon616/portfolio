export const state = () => ({
  isMenuActive: false,
})

export const getters = () => ({
  isMenuActive: (state) => state.isMenuActive,
})

export const mutations = {
  closeMenu(state){
    state.isMenuActive = false
  },
  changeMenu(state){
    state.isMenuActive = !state.isMenuActive
  }
}
