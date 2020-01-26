<template>
  <div class="app">
    <b-form-group label="Your Name:" >
      <b-form-input
        v-model="parentData.name"
        required
        placeholder="Enter name"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Your Familia:">
      <b-form-input
        v-model="parentData.surname"
        required
        placeholder="Enter Familia"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Your Age:">
      <b-form-input
        v-if="parentData.age"
        v-model="parentData.age"
        required
        placeholder="Enter Age"
      ></b-form-input>
    </b-form-group>
    <b-btn @click="onSave" variant="primary">Save</b-btn>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import confirmExitMixin from "~/mixins/confirmExitMixin";

  export default {
    name: 'PageUser',
    mixins: [confirmExitMixin],
    data() {
      return {
        parentData: {
          name: '',
          surname:'',
          age: ''
        }
      }
    },
    computed: {
      ...mapGetters({ defaultData: 'user/GET_DATA' }),
      dataSaved() {
        return this.parentData.name === this.defaultData.parent.name 
              && this.parentData.surname === this.defaultData.parent.surname 
              && this.parentData.age === this.defaultData.parent.age 
      }
    },
    async asyncData({ store }) {
      return { 
        // Clone the object so as not to change the state userData avoid mutation
        parentData: { 
          ...await store.dispatch('user/LOAD_PARENT') 
        }
      }
    },
    methods: {
      ...mapActions({ saveParentData: 'user/SAVE_PARENT' }),
      async onSave() {
        await this.saveParentData(this.parentData)
      }
    }
  }
</script>
