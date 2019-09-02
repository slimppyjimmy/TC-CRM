<template>
  <div class="new-customer">
    <el-button @click="outerVisible = true" size="mini">编辑</el-button>
    <el-dialog title="添加新客户" :visible.sync="outerVisible" width="80%" center>
      <el-form :model="customerform" :rules="rules" ref="customerform" :label-position="labelPosition">
        <el-form-item label class="basemesg">
          <span>基本信息</span>
        </el-form-item>
        <el-form-item label="获得客户时间：" class="baseitem">
          <el-date-picker v-model="customerform.pclientAddtime" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label class="basemesg">
          <span>个人信息</span>
        </el-form-item>
        <el-form-item class="baseitem">
          <el-col :span="10">
            <el-form-item label="客户名称："  prop="value2">
              <el-input v-model="customerform.pclientName" placeholder="客户名称" style="width:60%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="10">
            <el-form-item label="性别：" prop="radio">
              <el-radio v-model="customerform.pclientGender" label="男">男</el-radio>
              <el-radio v-model="customerform.pclientGender" label="女">女</el-radio>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item class="baseitem">
          <el-col :span="10">
            <el-form-item label="所在城市：" required prop="value3">
              <el-input v-model="customerform.pclientAddress" placeholder="请输入城市" style="width:60%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="10">
            <el-form-item label="手机：">
              <el-input v-model="customerform.pclientPhone" style="width:60%"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label class="baseitem" >
          <el-col :span="10">
            <el-form-item label="客户状态：" required prop="value5">
              <el-select v-model="customerform.value5" placeholder="请选择" style="width:60%">
                <el-option
                  v-for="item in options1"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="10">
            <el-form-item label="邮箱：">
              <el-input v-model="customerform.pclientEmail" style="width:60%"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item class="baseitem">
          <el-col :span="10">
            <el-form-item label="公司地址：" required prop="pclientAddress"> 
              <el-input v-model="customerform.pclientAddress" placeholder="请输入地址" style="width:60%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="10">
            <el-form-item label="行业：">
              <el-select v-model="customerform.value8" placeholder="请选择" style="width:60%">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item class="baseitem">
          <el-col :span="10">
            <el-form-item label="工作单位：" required>
              <el-input v-model="customerform.pclientCompanyName" style="width:60%"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">&nbsp;</el-col>
          <el-col :span="10">
            <el-form-item label="生日：">
              <el-date-picker v-model="customerform.pclientBirthday" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="客户介绍：" class="baseitem" required > 
            <el-col :span="15">
                <el-input
  type="textarea"
  :autosize="{ minRows: 4, maxRows: 4}"
  placeholder="请输入内容"
  v-model="customerform.pclientDesc">
</el-input>
            </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="save" class="save-btn">保存</el-button>
        <el-button @click="close" class="close-btn">关闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>
             

<script>
import api from '../../api/zjw'
export default {
  name: "",
  props: ['rowdata'],
  methods: {
      
    save() {
      api.edit(this.customerform).then(resp =>{
        this.$emit("editrecive");
      })
      this.outerVisible = false;

    },
    close() {
      this.outerVisible = false;
    }
  },
  created(){
    this.customerform=this.rowdata
  },
  data() {
    return {
      outerVisible: false,
      labelPosition: "right",
      radio: '',
      customerform: {
        
      },
      
      options1: [
        {
          value: "潜在客户",
          label: "潜在客户"
        },
        {
          value: "意向客户",
          label: "意向客户"
        },
        {
          value: "成交客户",
          label: "成交客户"
        },
        {
          value: "失败客户",
          label: "失败客户"
        },
        {
          value: "已流失客户",
          label: "已流失客户"
        }
      ],
      options2: [
        {
          value: "机械及行业设备",
          label: "机械及行业设备"
        },
        {
          value: "电子元器件",
          label: "电子元器件"
        },
        {
          value: "礼品、工饰品艺品",
          label: "礼品、工饰品艺品、 "
        },
        {
          value: "家居用品",
          label: "家居用品"
        },
        {
          value: "电工电气",
          label: "电工电气"
        },
        {
          value: "建筑、建材",
          label: "建筑、建材"
        },
        {
          value: "五金、工具",
          label: "五金、工具"
        },
        {
          value: "纺织、皮革",
          label: "纺织、皮革 "
        },
        {
          value: "数码、电脑",
          label: "数码、电脑"
        },
        {
          value: "其他行业",
          label: "其他行业"
        }
      ],
        rules: {
          value2: [
            { required: true, message: '请输入客户名称', trigger: 'blur' },
            { min: 0, max: 10, message: '长度在 0 到 10 个字符', trigger: 'blur' }
          ],
          value3: [
            { required: true, message: '请输入客户所在城市', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur' }
          ],
          value5: [
            { required: true, message: '请选择客户状态', trigger: 'change' }
          ],
          radio: [
            { required: true, message: '请选性别', trigger: 'change' }
          ],
          value7: [
            { required: true, message: '请输入客户地址', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur' }
          ],
          
        }
    };
  }
};
</script>

<style scoped>
.new-customer{
display: inline-block;
}
.basemesg {
  background-color: #f1f1f1;
  width: 100%;
}
.basemesg span {
  margin-left: 20px;
}
.baseitem {
  margin-left: 74px;
}
</style>
