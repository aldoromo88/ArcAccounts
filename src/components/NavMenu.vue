<template>
<ul class="nav nav-pills nav-stacked" style="margin-top:5px">
  <router-link v-for="r in routes" v-bind:to="r.path" tag="li">
    <a>
      <span><li class="fa" v-bind:class="r.meta.Icon"></li></span> {{r.meta.Display}}
    </a>
  </router-link>
</ul>
</template>

<script>
import routes from 'src/router/routes';

export default {
  name: 'NavMenu',
  data() {
    return {
      routes: routes.filter(r => r.meta ? r.meta.ShowInMenu : false)
    }
  }
}
</script>
