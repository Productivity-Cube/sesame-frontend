<template>
  <mdb-navbar color="elegant-color" dark>
    <mdb-navbar-brand href="https://mdbootstrap.com/">
      Sesame
    </mdb-navbar-brand>
    <mdb-navbar-toggler>
      <mdb-navbar-nav>
        <mdb-nav-item href="/#/events" active>Events</mdb-nav-item>
        <mdb-nav-item href="/#/doors">Doors</mdb-nav-item>
        <mdb-nav-item href="/#/config">Configuration</mdb-nav-item>
        <mdb-nav-item href="/">Logout</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
// @ is an alias to /src
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from 'mdbvue'

export default {
  name: 'NavBar',
  components: {
    mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem
  }
}
</script>
