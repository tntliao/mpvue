<template>
  <div class="listContainer">
    <!-- 轮播图 -->
    <swiper
      circular
      autoplay
      indicator-dots
      indicator-color="#F0C27B"
      indicator-active-color="#4B1248"
    >
      <swiper-item v-for="item in detailImage" :key="item">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
    <!--  -->
    <ListTemplate />
  </div>
</template>

<script>
import ListTemplate from "../../components/ListTemplate";
export default {
  data() {
    return {
      detailImage: [
        "/static/images/detail/carousel/01.jpg",
        "/static/images/detail/carousel/02.jpg",
        "/static/images/detail/carousel/03.jpg",
        "/static/images/detail/carousel/04.jpg",
      ],
    };
  },
  components: { ListTemplate },
};
</script>

<style>
.listContainer swiper {
  width: 100%;
  height: 400rpx;
}
.listContainer swiper img {
  width: 100%;
  height: 100%;
}
</style>