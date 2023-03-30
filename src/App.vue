<template>
  <div id="app">

    <nav class="navbar" role="navigation" aria-label="main navigation">

         <div class="navbar-brand">
            <a class="navbar-item" href="/"><img src="./assets/logo_v1.png" width="" height="500"></a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
        </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"><router-link to="/">Home</router-link></a>
        <a class="navbar-item"><router-link to="/register">Registro de Usuário</router-link></a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">More</a>

        <div class="navbar-dropdown">
          <!-- <a class="navbar-item">About</a>
          <a class="navbar-item">Jobs</a>
          <a class="navbar-item">Contact</a>
          <hr class="navbar-divider">
          <a class="navbar-item">Report an issue</a> -->
        </div>

      </div>

    </div>

    <div class="navbar-end">

      <div class="navbar-item">
        <div class="buttons">
          <!-- <a class="button is-primary"><strong>Sign up</strong></a> -->
          <button class="button is-light"><router-link to="/login">Login</router-link></button>
        </div>
      </div>

    </div>
    
  </div>
</nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
