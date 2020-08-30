<template>
<!--列表-->
<el-table :data="tags" ref="tb" highlight-current-row @selection-change="selsChange" style="width: 100%;">
  <el-table-column type="selection" width="55"></el-table-column>
  <el-table-column prop="name" label="标签名">
    <template slot-scope="scope">
      <el-tag size="medium" :color="`#${(scope.row.color).replace(/#/,'')}`" effect="dark">{{scope.row.name}}</el-tag>
    </template>
  </el-table-column>
  <el-table-column prop="color" label="颜色"></el-table-column>
  <el-table-column label="操作">
    <template slot-scope="scope">
      <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
    </template>
  </el-table-column>
</el-table>
<!--工具条-->
<el-col :span="24" class="toolbar">
  <el-button type="primary" round size="mini" @click="handleAllSelect">全选</el-button>
  <el-button type="danger" round size="mini" @click="batDel" :disabled="this.sels.length===0">批量删除</el-button>
  <el-button type="primary" round size="mini" @click="handleAdd">新增</el-button>
</el-col>
<!--新增界面-->
<el-dialog title="编辑" :visible.sync="addFormVisible" :close-on-click-modal="false">
  <el-form :model="addForm" label-width="80px" ref="addForm">
    <el-form-item label="标签名" prop="name">
      <el-input v-model="addForm.name"></el-input>
    </el-form-item>
    <el-form-item label="颜色" prop="color">
      <el-input v-model="addForm.color"></el-input>
      <el-color-picker v-model="addForm.color" :predefine="predefineColors"></el-color-picker>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click.native="addFormVisible = false">取消</el-button>
    <el-button type="primary" @click.native="addLabels">提交</el-button>
  </div>
</el-dialog>
<!--编辑界面-->
<el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
  <el-form :model="editForm" label-width="80px" ref="editForm">
    <el-form-item label="标签名" prop="name">
      <el-input v-model="editForm.name"></el-input>
    </el-form-item>
    <el-form-item label="颜色" prop="color">
      <el-input v-model="editForm.color"></el-input>
      <el-color-picker v-model="editForm.color" color-format="hex" :predefine="predefineColors"></el-color-picker>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click.native="editFormVisible = false">取消</el-button>
    <el-button type="primary" @click.native="editLabels">提交</el-button>
  </div>
</el-dialog>
</template>

<script>
export default {
  props: ['tag'],
  data() {
    return {
      index: 0,
      //列表选中列
      sels: [],
      //新增界面是否显示
      addFormVisible: false,
      //新增界面数据
      addForm: {},
      tags: this.tag,
      //编辑界面是否显示
      editFormVisible: false,
      //编辑界面数据
      editForm: {},
      predefineColors: ['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585'],
    };
  },
  watch: {
    // 'addForm.color'(newVal, oldVal) {
    //   newVal = String(newVal);
    //   if (newVal.length != 0) {
    //     this.addForm.color = newVal.replace(/#/, '');
    //   }
    // },
    // 'editForm.color'(newVal, oldVal) {
    //   newVal = String(newVal);
    //   if (newVal.length != 0) {
    //     this.editForm.color = newVal.replace(/#/, '');
    //   }
    // },
  },
  mounted() {},
  methods: {
    //显示新增界面
    handleAdd: function (index, row) {
      this.addFormVisible = true;
    },
    //提交新增
    addLabels: function () {
      this.$refs.addForm.validate((valid) => {
        if (valid) {
          this.tags.push(Object.assign({}, this.addForm));
          this.$emit('changeTags', this.tags);
          this.addFormVisible = false;
          this.$refs['addForm'].resetFields();
        }
      });
    },
    //显示编辑界面
    handleEdit: function (index, row) {
      this.editForm = {
        name: row.name,
        color: row.color
      };
      this.index = index;
      this.editFormVisible = true;
      this.tags[index] = this.editForm;
    },
    //提交编辑
    editLabels: function () {
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          this.tags[this.index] = Object.assign({}, this.editForm);
          this.$emit('changeTags', this.tags);
          this.editFormVisible = false;
          this.$refs['editForm'].resetFields();
        }
      });
    },
    //选中变化
    selsChange: function (sels) {
      this.sels = sels;
    },
    //全选
    handleAllSelect: function () {
      if (this.tags) {
        this.tags.forEach((row) => {
          this.$refs.tb.toggleRowSelection(row);
        });
      }
    },
    //删除
    handleDelete: function (index, row) {
      let msg = '确认删除该记录吗?';
      let status = 0;
      this.$confirm(msg, '提示', {
          type: 'warning'
        })
        .then(() => {
          this.tags.splice(index, 1);
          this.$emit('changeTags', this.tags.splice(index, 1));
        })
        .catch(() => {});
    },
    //批量删除
    batDel: function () {
      // var ids = this.sels.map(item => item.id).toString();
      // var ids = this.sels.map(item => item.id).join()//获取所有选中行的id组成的字符串，以逗号分隔
      this.$confirm('确认删除选中记录吗？', '提示', {
          type: 'warning'
        })
        .then(() => {
          this.sels.forEach((item) => {
            this.tags.forEach((element, index) => {
              if (item.name == element.name) {
                this.tags.splice(index, 1);
                this.$emit('changeTags', this.tags.splice(index, 1));
              }
            });
          });
        })
        .catch(() => {});
    },
  },
  components: {},
};
</script>

<style scoped lang='scss'>
</style>
