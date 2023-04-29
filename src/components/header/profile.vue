<template>
  <li class="profile-nav onhover-dropdown pe-0 py-0">
    <div class="media profile-media">
      <img class="b-r-10" src="@/assets/images/dashboard/profile.png" alt="" />
      <div class="media-body">
        <span>larisa</span>
        <p class="mb-0 font-roboto">
          User <i class="middle fa fa-angle-down"></i>
        </p>
      </div>
    </div>
    <ul class="profile-dropdown onhover-show-div">
      <li @click="logout">
        <vue-feather type="log-in"></vue-feather><span>Log out</span>
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'Profile',
    methods: {
      logout: function() {
            this.$router.replace('/auth/login');
            localStorage.removeItem('User')
          }
    },
  };
</script>
