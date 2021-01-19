import {createStore} from 'vuex'

export default createStore({
  state: {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]')
  },
  mutations: {
    saveContact(state, {contact, index}) {
      console.log('принимаю index - ' + index);
      if (state.contacts.length > index) {
        state.contacts.splice(index, 1, contact);
      } else {
        state.contacts.push(contact);
      }

      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    removeContact(state, index) {
      let agreeStatus = confirm('Do you want remove contact?');
      if (agreeStatus) state.contacts.splice(index, 1);

      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    }
  },
  actions: {
    saveContact({commit}, contact, index) {
      commit('saveContact', contact, index)
    },
    removeContact({commit}, index) {
      commit('removeContact', index)
    }
  },
  modules: {},
  getters: {
    getContacts: s => s.contacts,
    getContactByIndex: s => index => s.contacts[index]
  }
})
