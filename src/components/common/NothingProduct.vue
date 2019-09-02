<template>
    <div class="nothing">
      <div class="ku_img"><img src="../../../static/images/ku_100.png" alt=""></div>
      <div class="nothingTips">
        <span>当前分类下没有产品！</span>
        <span>录产品</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NothingPriduct"
    }
</script>

<style scoped>
.nothing{
  margin-top: 80px;
  text-align: center;
}
.ku_img img{
  height: 100px;
  width: auto;
}
.nothingTips{
  margin-top: 40px;
  color: #666666;
}
.nothingTips span:last-child{
  display: inline-block;
  width: 70px;
  height: 22px;
  padding: 3px 10px;
  background-color: #1e9fff;
  font-size: 14px;
  text-align: center;
  line-height: 22px;
  color: white;
  border-radius:3px;
  user-select: none;
  cursor: pointer;
}
.nothingTips span:last-child:hover{
  background-color: rgba(30, 158, 255, 0.8);
}
</style>
