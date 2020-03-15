<template>
  <b-navbar toggleable="lg" type="dark" variant="light">
    <b-navbar-brand href="#" class="text-dark">Interview test</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/" class="text-light mx-3">Home</router-link>
        <router-link to="/about" class="text-light mx-3">About</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
