<template>
  <div>
    <ul class="MySz">
      <li>
        <router-link to="/AllInfore/GeRen">个人资料</router-link>
      </li>
      <li>
        <router-link to="/AllInfore/MiMa">修改密码</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: "AllInfore"
  }
</script>

<style scoped>
  .MySz {
    width: 100%;
    line-height: 40px;
    overflow: hidden;
    border-bottom: 2px solid #1E9FFF

  }

  .MySz > li {
    float: left;
    width: 100px;
    text-align: center;
    background-color: rgba(254, 254, 254, 0.01);
    font-size: 14px;
  }
</style>
