<template>
  <div class="indexContainer">
    <img
      class="avatar"
      :src="userInfo.avatarUrl"
      v-if="userInfo.avatarUrl"
      alt="头像"
    />
    <img v-else class="avatar" :src="defaultAvatar" alt="头像" />
    <p class="name" @tap="goListPage">
      Hello{{ userInfo.nickName ? userInfo.nickName : "----" }}
    </p>
    <button v-if="!userInfo.avatarUrl" class="btn" @click="getUserInfo">
      点击登录
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      defaultAvatar: "/static/images/avatar/0.png",
    };
  },
  onLoad() {
    const userInfo = wx.getStorageSync("userInfo");
    if (userInfo.avatarUrl) {
      this.userInfo = userInfo;
    }
  },
  methods: {
    //获取用户信息
    getUserInfo() {
      wx.getUserProfile({
        desc: "用于完善会员资料",
        success: (res) => {
          const userInfo = JSON.parse(res.rawData);
          this.userInfo = userInfo;
          wx.setStorageSync("userInfo", userInfo);
        },
      });
    },

    //跳转到list
    goListPage() {
      console.log('goListPage()');
      wx.navigateTo({
        url: "/pages/list/main",
      });
    },
  },
};
</script>

<style>
page {
  background: #ff6b6b;
}
.indexContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.avatar {
  margin-top: 100rpx;
  width: 200rpx;
  height: 200rpx;
  border-radius: 20rpx;
}
.name {
  margin: 60rpx 0;
  font-size: 35rpx;
}
.btn {
  background: #fad0c4;
  box-shadow: 0 0 10rpx #95fff1;
  height: 80rpx;
  line-height: 80rpx;
}
</style>