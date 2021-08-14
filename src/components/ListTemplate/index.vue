<template>
  <div class="list_container">
    <!-- 头部区域 -->
    <div class="top_content">
      <img class="avatar" src="/static/images/avatar/0.png" alt="" />
      <p class="title">2021-8-14</p>
      <p class="name">廖家嘉</p>
    </div>
    <!-- 内容区域 -->
    <div class="center_content">
      <img
        src="/static/images/detail/carousel/01.jpg"
        alt=""
        class="detail_img"
      />
      <p class="detail_content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
        sunt. Illum, optio autem distinctio deleniti nesciunt architecto nulla
        magnam tempore nam. Fugiat quidem natus nulla voluptatem ipsa id nobis
        nostrum dolores quaerat accusamus ea maiores, cupiditate, sint
        temporibus autem consequatur officiis? Aperiam voluptatibus, minima
        voluptas vitae nobis voluptatum porro sequi.
      </p>
    </div>
    <!-- 底部区域 -->
    <div class="bottom_content">
      <img src="/static/images/icon/chat.png" alt="" class="star" />
      <p class="start_number">35</p>
      <img src="/static/images/icon/view.png" alt="" class="read" />
      <p class="read_number">183</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.list_container {
  margin: 10rpx 10rpx 0;
}
/* 顶部 */
.top_content {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.top_content .avatar {
  width: 60rpx;
  height: 60rpx;
}
.top_content .title {
  margin: 0 20rpx;
}
.top_content .name {
  font-weight: bold;
}
/* 中部 */
.center_content {
  width: 100%;
}
.center_content img {
  width: 100%;
  height: 400rpx;
  border-radius: 10rpx;
}
.center_content .detail_content {
  border-radius: 10rpx;
  text-indent: 20rpx;
  border: 1px solid red;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
/* 底部 */
.bottom_content {
  height: 40rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.bottom_content img {
  width: 30rpx;
  height: 30rpx;
}
.bottom_content .start_number,
.bottom_content .read_number {
  margin: 0 14rpx 0 6rpx;
}
</style>