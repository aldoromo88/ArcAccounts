<template>
<div id="app" class="container-fluid">
  <div class="row">
    <div class="col-xs-2 col-sm-1">
      <!-- <img src="./assets/logo.png" class="img-responsive" alt="Arc Accounts Logo"> -->
    </div>

    <div class="col-xs-10 col-sm-11">
      <session-state></session-state>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-3 col-md-2 ">
      <nav-menu></nav-menu>
    </div>
    <div class="col-xs-12 col-sm-9 col-md-10">
      <h3>{{Title}}</h3>
      <transition name="slide">
        <router-view class="slide"></router-view>
      </transition>
    </div>
  </div>

  <arc-notifications></arc-notifications>
</div>
</template>

<script>
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import 'vue-flatpickr/theme/flatpickr.min.css'
import SessionState from './components/SessionState';
import NavMenu from './components/NavMenu';

export default {
  name: 'app',
  computed: {
    Title: function() {
      return this.$store.getters.Title;
    },
    isAuthenticated: function() {
      return this.$store.getters.CurrentUser != null;
    }
  },
  watch: {
    isAuthenticated: function(isAuthenticatedVal) {
      if (isAuthenticatedVal) {
        let redirect = this.$route.query.redirect;
        if (redirect) {
          this.$router.replace(redirect);
        }
      } else {
        this.$router.push('Home');
      }
    }
  },
  components: {
    SessionState,
    NavMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}

.slide {
  position: absolute!important;
  left: 0;
  right: 0;
  transition: all 0.4s;
  /*overflow-x: hidden;*/
}

.slide-enter,
.slide-leave-active {
  opacity: 0;
  transform: translateX(-90px);
}
</style>
