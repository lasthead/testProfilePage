<template>
  <div class="app">
    <b-form-group  label="Your Country:" >
      <b-form-input
        v-model="profile.country"
        required
        placeholder="Enter country"
      ></b-form-input>
    </b-form-group>
    <b-btn @click="onSave" variant="primary">Save</b-btn>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import confirmExitMixin from "~/mixins/confirmExitMixin";

  export default {
    name: 'PageProfile',
    mixins: [confirmExitMixin],
    data(){
      return {
        profile: {
          country: ''
        } 
      }
    },
    computed: {
      ...mapGetters({ defaultProfile: 'profile/GET_PROFILE' }),
      dataSaved() {
        return this.profile.country === this.defaultProfile.country 
      }
    },
    async asyncData({ store }) {
      return { profile: { ...await store.dispatch('profile/LOAD_PROFILE') }}
    },
    methods: {
      ...mapActions({ saveProfile: 'profile/SAVE_PROFILE' }),
      async onSave() {
        await this.saveProfile(this.profile)
      }
    }
  }
</script>
