<template>
  <div class="home">
    <h1>Contacts</h1>

    <ul class="list" v-if="contacts.length">
      <li class="item" v-for="(contact, index) in contacts" :key="index">
        <router-link tag="div" class="contact" :to="{ name: 'Contact', params: { index: index }}">
          <span class="contact__name">{{contact.name}}</span>
          <span class="contact__phone">{{contact.phone}}</span>
        </router-link>
        <button class="contact-btn" v-on:click="() => removeContact(index)" title="remove contact">remove</button>
      </li>
    </ul>

    <p v-else>No contacts</p>


    <router-link class="add-btn" :to="'/contact/' + contacts.length" title="add new contact">Add contact</router-link>
  </div>
</template>

<script>

  export default {
    name: 'Contacts',
    computed: {
      contacts() {
        return this.$store.getters.getContacts
      }
    },
    methods: {
      removeContact(index) {
        this.$store.dispatch('removeContact', index);
      }
    },
    components: {}
  }
</script>

<style scoped>
  .list {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  .item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: stretch;
    align-items: stretch;
    text-decoration: none;
    border: 1px solid #000000;
    border-radius: 10px;
    background-color: #3d78b3;
    padding: 15px;
  }
  .item + .item {
    margin-top: 10px;
  }
  .contact {
    text-decoration: none;
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    color: #ffffff;
  }
  .contact__name {
    font-weight: 700;
    margin-right: 15px;
    align-self: center;
  }
  .contact__phone {
    align-self: center;
  }
  .contact-btn {
    font-size: 0;
    background-color: #f4744d;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    border: 2px solid #ffffff;
    position: relative;
    cursor: pointer;
    transition: all ease 0.2s;
    outline: none;
  }
  .contact-btn::before,
  .contact-btn::after {
    content: "";
    display: block;
    position: absolute;
    width: 70%;
    height: 3px;
    background-color: #fff;
    top: 50%;
    left: 50%;
  }
  .contact-btn::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  .contact-btn::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  .contact-btn:hover {
    transform: scale(1.1);
  }
  .add-btn {
    position: fixed;
    right: 15px;
    bottom: 15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #ffffff;
    background-color: #8cff6f;
    font-size: 0;
    outline: none;
  }
  .add-btn::before,
  .add-btn::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 2px;
    background-color: #ffffff;
  }
  .add-btn::before {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  .add-btn::after {
    transform: translate(-50%, -50%);
  }
</style>
