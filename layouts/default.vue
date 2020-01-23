<template>
  <b-container>
    <ul class="nav nav-tabs">
      <li class="nav-item"><router-link class="nav-link" to='/' exact>home</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to='/user'>User</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to='/userParent'>User Parent</router-link></li>
      <li class="nav-item"><router-link class="nav-link" to='/profile'>Profile</router-link></li>
    </ul>
    <nuxt></nuxt>
  </b-container>
</template>

<script>
  export default {
    name: 'layout',
  }
</script>
