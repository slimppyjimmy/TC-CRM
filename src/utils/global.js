const globalMethods = {
  methods: {
    tipSuccess(msg) {
      this.$message({
        type: 'success',
        message: msg,
        offset : 250,
        iconClass : 'el-icon-success',
        duration : 2000,
        customClass : 'self_tips',
        center : true
      })
    },
    tipError(msg) {
      this.$message({
        type: 'error',
        message: msg,
        offset : 250,
        iconClass : 'el-icon-error',
        duration : 2000,
        customClass : 'self_tips',
        center : true
      })
    },
  },
}

export default globalMethods
