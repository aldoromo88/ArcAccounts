<template>
<div class="row">
  <transition name="slide">
    <BrowseAccounts v-if="IsBrowse" :key="IsBrowse" class="slide"></BrowseAccounts>
    <EditAccount v-else :key="IsBrowse" class="slide"></EditAccount>
  </transition>
</div>
</template>

<script>
import EditAccount from './EditAccount';
import BrowseAccounts from './BrowseAccounts';

const validModes = ['All', 'New', 'Edit'];

function validateMode(mode, router) {
  var isValid = validModes.indexOf(mode) != -1
  if (!isValid)
    router.replace('/Accounts/All');
  return isValid;
}

export default {
  data() {
    return {
      Mode: ''
    }
  },
  computed: {
    IsBrowse() {
      return this.Mode == 'All';
    }
  },
  watch: {
    '$route' (to, from) {
      let mode = to.params.Mode;
      if (!validateMode(mode, this.$router))
        return;
      this.Mode = mode;
    },
    Mode(to, from) {

      let newTitle;
      switch (to) {
        case 'New':
          newTitle = 'Create Account';
          break;
        case 'Edit':
          newTitle = 'Edit Account';
          break;
        default:
          newTitle = 'Accounts';
          break;
      }
      this.$store.commit('TITLE_CHANGED', newTitle);
    }
  },
  beforeMount() {
    let mode = this.$route.params.Mode
    if (validateMode(mode, this.$router)) {
      this.Mode = mode;
    }
  },
  components: {
    EditAccount,
    BrowseAccounts
  }
}
</script>
