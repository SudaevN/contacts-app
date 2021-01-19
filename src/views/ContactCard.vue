<template>
  <div class="contact">
    <h1>Contact info</h1>
    <div class="contact-header">
      <router-link tag="button" class="btn btn--back" to="/">cancel</router-link>
      <button v-if="contact" class="btn btn--reject" title="remove contact" v-on:click="removeContact">remove contact</button>
    </div>
    <form @submit.prevent="submitHandler">
      <div class="common-data">
        <div class="contact__pic-wrap">
          <img src="" alt="" class="contact__pic">
        </div>
        <div class="contact__data">
          <div class="data-row">
            <label class="fieldName" for="name">Name:</label>
            <input class="fieldValue" v-model="name" type="text" name="name" id="name" placeholder="Name" autocomplete="off">
          </div>
          <div class="data-row">
            <label class="fieldName" for="phone">Phone:</label>
            <input class="fieldValue" v-model="phone" type="text" name="phone" id="phone" placeholder="phone" autocomplete="off">
          </div>
        </div>
      </div>
      <div class="extra-data">
        <div class="contact__data">
          <div class="data-row">
            <input type="text" class="fieldName" v-model="fieldName" placeholder="field:" autocomplete="off">
            <input type="text" class="fieldValue" v-model="fieldValue" placeholder="value" autocomplete="off">
            <span class="btn btn--reject" title="remove field">remove field</span>
          </div>
            <span class="btn btn--accept btn--add" title="add field">add field</span>
        </div>
      </div>
      <button class="btn btn--accept btn--save" type="submit" title="save changes">Save</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data: () => ({
      index: null,
      name: '',
      phone: ''
    }),
    computed: {
      contact() {
        return this.$store.getters.getContactByIndex(+this.$route.params.index)
      }
    },
    mounted() {
      this.name = this.contact ? this.contact.name : '';
      this.phone = this.contact ? this.contact.phone : '';
      this.index = this.$route.params.index;
    },
    methods: {
      submitHandler() {
        const contact = {
          name: this.name,
          phone: this.phone,
        };

        console.log('Передаю индекс - ' + this.index);
        this.$store.dispatch('saveContact', {contact: contact, index: this.index});
        this.$router.push('/')
      },
      removeContact() {
        this.$store.dispatch('removeContact', this.index);
        this.$router.push('/')
      }
    }
  }

</script>

<style scoped>
  .contact-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .btn {
    display: block;
    font-size: 0;
    text-decoration: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-style: solid;
    border-width: 2px;
    cursor: pointer;
    border-color: #ffffff;
  }
  .btn--reject,
  .btn--back {
    background-color: #f4744d;
    position: relative;
  }
  .btn--reject::before,
  .btn--reject::after,
  .btn--add::before,
  .btn--add::after {
    content: "";
    position: absolute;
    display: block;
    width: 70%;
    height: 2px;
    background-color: #fff;
    top: 50%;
    left: 50%;
  }
  .btn--reject::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  .btn--reject::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  .btn--add::before {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  .btn--add::after {
    transform: translate(-50%, -50%);
  }
  .btn--back::before,
  .btn--back::after {
    content: "";
    display: block;
    position: absolute;
  }
  .btn--back::before {
    width: 70%;
    height: 2px;
    top:50%;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
  }
  .btn--back::after {
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 15px 10px 0;
    border-color: transparent #ffffff transparent transparent;
    top: 50%;
    left: 12%;

    transform: translateY(-50%);
  }
  .btn--accept {
    background-color: #8cff6f;
    position: relative;
  }
  .btn--save::before,
  .btn--save::after {
    content: "";
    display: block;
    position: absolute;
    height: 2px;
    background-color: #fff;
  }
  .btn--save::before {
    width: 30%;
    transform: rotate(45deg);
    transform-origin: bottom right;
    right: 55%;
    bottom: 25%;
  }
  .btn--save::after {
    width: 60%;
    bottom: 25%;
    left: 45%;
    transform: rotate(-45deg);
    transform-origin: bottom left;
  }
  .data-row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: stretch;
  }
  .fieldName {}
  .fieldValue {
    flex-grow: 1;
  }
</style>