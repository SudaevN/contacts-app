import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]')
  },
  mutations: {
    saveContact(state, contact, index) {
      if (state.contacts.length < index) {
        state.contacts.splice(index, 1, contact);
      } else {
        state.contacts.splice(index, 0, contact);
      }

        localStorage.setItem('contacts', JSON.stringify(state.contacts))
    }
  },
  actions: {
    saveContact({commit}, contact, index) {
      commit('saveContact', contact, index)
    }
  },
  modules: {
  }
})
