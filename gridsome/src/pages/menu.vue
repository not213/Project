<template>
  <Layout>
    <header class="header">
      <b-navbar class="p-0" toggleable="md" type="light">
        <b-navbar-brand>
          <g-link class="logo-home logo-desktop" to="/"></g-link>
          <g-link class="logo-home logo–mobile" to="/">
            <img class="logo-image" alt="logo" src="../assets/images/logo.png" />
          </g-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <g-link class="nav--link" to="/about">About</g-link>
            <g-link class="nav--link" to="/blog2">Blog2</g-link>
            <g-link class="nav--link" to="/slide-Image">Slide image</g-link>
            <g-link class="nav--link" to="/list">List</g-link>
            <g-link class="nav--link" to="/card1">Card</g-link>
            <g-link class="nav--link" to="/contact">Contact</g-link>
            <g-link class="nav--link" to="/viewcard1">viewcard1</g-link>
            <g-link class="nav--link" to="/menu">menu</g-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
  </Layout>
</template>


<style lang="scss">
nav {
  width: 100%;
  padding-top: 1rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.logo-home {
  font-size: 24px;
  max-width: 75%;
  font-weight: bold;
  &:hover {
    text-decoration: none;
    color:red;
  }
}

.logo-desktop {
  @media (max-width: 419px) {
    display: none;
  }
  @media (min-width: 420px) {
    display: default;
  }
}

.logo–mobile {
  @media (max-width: 419px) {
    display: default;
  }
  @media (min-width: 420px) {
    display: none;
  }
}

.logo-image {
  width: 40px;
}

.nav--link {
  margin-left: 20px;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}
</style>