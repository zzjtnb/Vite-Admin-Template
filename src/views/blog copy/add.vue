<template>
<el-card shadow="never" style="margin-bottom: 20px">
  <el-form ref="form" :model="form" label-width="80px" :rules="ruleValidate">
    <div style="display:flex">
      <el-form-item label="标题" prop="title" style="flex:1">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="分类" prop="sort">
        <el-input v-model="form.sort"></el-input>
      </el-form-item>
      <el-form-item label="缩略图" prop="img" style="flex:1">
        <el-input v-model="form.img"></el-input>
      </el-form-item>

      <el-form-item label="热度">
        <el-switch v-model="form.hot"></el-switch>
      </el-form-item>
    </div>

    <el-form-item label="标签" prop="tags">
      <Tags :tag="form.tags" @changeTags="changeTags" />
    </el-form-item>
    <el-form-item label="文章正文" prop="content">
      <mavon-editor ref="md" v-model="form.conten" :ishljs="true" :codeStyle="true" codeStyle="agate" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" :loading="submitButton.loading" :disabled="submitButton.disabled">发表</el-button>
      <el-button @click="$router.push('/user/blog/main')">返回</el-button>
    </el-form-item>
  </el-form>
</el-card>
</template>

<script>
import Tags from './common/tags.vue';
export default {
  data() {
    return {
      //form
      form: {
        title: '',
        img: '',
        sort: '',
        tags: [{
            name: 'JavaScript',
            color: '#28a745',
          },
          {
            name: 'Node',
            color: '#fd7e14',
          },
          {
            name: 'Vue',
            color: '#20c997',
          },
        ],
        hot: false,
        content: '',
      },
      ruleValidate: {
        title: [{
            required: true,
            message: '请输入标题',
            trigger: 'blur',
          },
          {
            type: 'string',
            max: 100,
            message: '标题长度不大于100字符',
            trigger: 'change',
          },
        ],
        sort: [{
          required: true,
          message: '请输入文章分类',
          trigger: 'blur',
        }, ],
        tags: [{
          required: true,
          message: '请输入文章标签',
          trigger: 'blur',
        }, ],
        content: [{
          required: true,
          message: '请输入文章入正文',
          trigger: 'blur',
        }, ],
      },
      submitButton: {
        loading: false,
        disabled: false,
      },
    };
  },

  mounted() {},
  methods: {
    changeTags(data) {
      this.form.tags = data;
    },
    onSubmit() {
      if (this.token) {
        this.publish();
      } else {
        this.$refs.tokenDialog.open(() => {
          this.publish();
        });
      }
    },
  },
  components: {
    Tags,
  },
};
</script>

<style lang="scss" scoped>
.el-tag+.el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
