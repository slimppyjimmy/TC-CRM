<template>


<div style="margin-top: 30px">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" >
    <tbody>
    <tr >
      <td style="width: 3%;text-align: right;font-size: 16px;border-bottom: 1px solid rgba(205,205,205,0.27);line-height: 103px">请上传你的头像：</td>
      <td style="width: 15%;border-bottom: 1px solid rgba(205,205,205,0.27);line-height: 103px">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
      </td>
    </tr>
    <tr style="line-height: 50px;">
      <td style="width: 3%;text-align: right;font-size: 16px;border-bottom: 1px solid rgba(205,205,205,0.27)">账户类型:</td>
      <td style="padding-left: 50px;border-bottom: 1px solid rgba(203,203,203,0.21)"> 团队版会员</td>
    </tr>
    <tr style="line-height: 50px;">
      <td style="width: 3%;text-align: right;font-size: 16px;border-bottom: 1px solid rgba(205,205,205,0.27)">用户名:</td>
      <td style="padding-left: 50px;border-bottom: 1px solid rgba(203,203,203,0.21)"> 秋实121</td>
    </tr>
    </tbody>
  </table>
</div>
</template>


<script>
    export default {
      name: "GeRen",
      data() {
        return {
          imageUrl: ''
        };
      },
      methods: {
        handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        }
      }

    }
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
/*border-radius: 100%;*/
    cursor: pointer;
    position: relative;
    overflow: hidden;
    border-radius: 100%;

  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #252f9d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px solid rgba(170, 170, 170, 0.33);
    border-radius: 100%;
    margin-left: 50px;


  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    display: block;
   margin-left: 20px;

  }
  .touX{
    width: 400px;
    text-align: center;
    margin-left: 30px;
    line-height: 50px;
    margin-top: 10px;
    font-size: 16px;
  }
</style>

