<template>
  <div class="header-wrapper row m-0">
    <Logo />

    <div class="left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0">
      <!-- <div class="notification-slider"> -->
      <swiper :slidesPerView="1" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }" :modules="modules" class="notification-slider" direction="vertical">
        <swiper-slide class="h-100">
          <div class="d-flex h-100">
            <img src="@/assets/images/giftools.gif" alt="gif">
            <h6 class="mb-0 f-w-400">
              <span class="font-primary">Не пропусти! </span><span class="f-light">новые гаджеты уже в магазине</span>
            </h6><i class="icon-arrow-top-right f-light"></i>
          </div>
        </swiper-slide>
        <swiper-slide class="h-100">
          <div class="d-flex h-100">
            <img src="@/assets/images/giftools.gif" alt="gif">
            <h6 class="mb-0 f-w-400">
              <span class="f-light">Умные лампочки уже в продаже!</span>
            </h6><a class="ms-1" href="#" target="_blank">Купи сейчас!</a>
          </div>
        </swiper-slide>
      </swiper>

      <!-- </div> -->
    </div>
    <div class="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto">
      <ul class="nav-menus">
        <li>
          <Mode />
        </li>
        <Profile />
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Bookmark from '../bookmark';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
import "swiper/css";
import Notifications from './notifications.vue';
import Mode from './mode';
import Cart from './cart';
import Profile from './profile';
import Logo from './logo.vue';
import SearchBar from './search';

export default {
  //   name: 'Search',
  components: {
    Bookmark,
    Notifications,
    Mode,
    Cart,
    Profile,
    Logo,
    Swiper,
    SwiperSlide,
    SearchBar,
  },
  data() {
    return {
      bookmark: false,
    };
  },
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.searchData,
      megamenuItems: (state) => state.menu.megamenu,
      searchOpen: (state) => state.menu.searchOpen,
    }),
  },
  methods: {
    search_open() {
      this.$store.state.menu.searchOpen = true;
    },
    bookmark_open() {
      this.bookmark = !this.bookmark;
    },
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
};
</script>
