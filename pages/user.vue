<template>
  <div class="app">
    <b-form-group  label="Your Name:" >
      <b-form-input
        v-model="userData.name"
        required
        placeholder="Enter name"
      ></b-form-input>
    </b-form-group>
    <b-form-group label="Your Familia:">
      <b-form-input
        v-model="userData.surname"
        required
        placeholder="Enter Familia"
      ></b-form-input>
    </b-form-group>
    <b-btn @click="onSave" variant="primary">Save</b-btn>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import confirmExitMixin from "~/mixins/confirmExitMixin";

  export default {
    name: 'User',
    mixins: [confirmExitMixin],
    data() {
      return {
        userData: {
          name: '',
          surname:''
        }
      }
    },
    computed: {
      ...mapGetters({ defaultData: 'user/GET_DATA' }),
      dataSaved() {
        return this.userData.name === this.defaultData.name
              && this.userData.surname === this.defaultData.surname
      }
    },
    async asyncData({ store }) {
      return { userData: { ...await store.dispatch('user/LOAD_DATA') }}
    },
    methods: {
      ...mapActions({ saveUserData: 'user/SAVE_DATA' }),
      async onSave() {
        await this.saveUserData(this.userData)
      }
    }
  }
</script>
