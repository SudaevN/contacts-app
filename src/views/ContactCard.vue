<template>
  <div class="contact">
    <h1>Contact info</h1>
    <router-link tag="button" class="btn btn--reject" to="/">cancel</router-link>
    <button class="btn btn--reject">remove contact</button>
    <form @submit.prevent="submitHandler">
      <div class="common-data">
        <div class="contact__pic-wrap">
          <img src="" alt="" class="contact__pic">
        </div>
        <div class="contact__data">
          <div class="data-row">
            <label for="name">Name:</label>
            <input v-model="name" type="text" name="name" id="name" placeholder="Name" autocomplete="off">
          </div>
          <div class="data-row">
            <label for="phone">Phone:</label>
            <input v-model="phone" type="text" name="phone" id="phone" placeholder="phone" autocomplete="off">
          </div>
        </div>
      </div>
      <div class="extra-data">
        <div class="contact__data">
          <div class="data-row">
            <input type="text" v-model="fieldName" placeholder="field:" autocomplete="off">
            <input type="text" v-model="fieldValue" placeholder="value" autocomplete="off">
            <span class="btn btn--reject" title="remove field">remove field</span>
          </div>
          <div class="data-row">
            <span class="btn btn--accept">add field</span>
          </div>
        </div>
      </div>
      <button class="btn btn--accept" type="submit">Save</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    data: () => ({
      index: null,
      name: '',
      phone: '',
    //  как то динамически нужно подставлять названия экстра-полей
      fieldName: '',
      fieldValue: ''
    }),
    mounted() {
      this.index = this.$route.params.index
    },
    methods: {
      submitHandler(){
        const contact = {
          name: this.name,
          phone: this.phone,
        //  как-то динамически подставить все экстро поля
          fieldName: this.fieldName,
          fieldValue: this.fieldValue
        };

        let index = this.index;

        console.log(contact);
        this.$store.dispatch('saveContact', contact, index)
      }
    }
  }

</script>

<style scoped>

</style>