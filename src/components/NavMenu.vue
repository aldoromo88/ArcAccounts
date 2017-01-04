<template>
<ul class="nav nav-pills nav-stacked" style="margin-top:5px">
  <router-link v-for="r in routes" v-bind:to="r.path" tag="li">
    <a>
      <span><li class="fa" v-bind:class="r.Icon"></li></span> {{r.Display}}
    </a>
  </router-link>
</ul>
</template>

<script>
import routes from 'src/router/routes';

export default {
  name: 'NavMenu',
  data() {
    var x = {
      routes: routes.filter(r => r.meta ? r.meta.ShowInMenu : false)
        .map(r => {
          return {
            path: r.meta.defaultPath ? r.meta.defaultPath : r.path,
            Icon: r.meta.Icon,
            Display: r.meta.Display
          }
        })
    }
    return x;
  }
}
</script>
