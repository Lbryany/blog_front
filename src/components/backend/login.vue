<template>
<div id="form">
    <div id="title">Lbryany's Blog</div>
    <Form ref="formItem" :model="formItem" :rules="ruleValidate" :label-width="80">
        <FormItem label="Username" prop="username">
            <Input v-model="formItem.username" placeholder="Enter Username"></Input>
        </FormItem>

        <FormItem label="Password" prop="password">
            <Input type="password" v-model="formItem.password" placeholder="Enter Password"></Input>
        </FormItem>

        <FormItem label="Remember">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </FormItem>
        <FormItem>
            <Button type="primary" v-on:click="login" >Submit</Button>
            <Button type="ghost" style="margin-left: 8px">Cancel</Button>
        </FormItem>
    </Form>
</div>
</template>
<script>
export default {
  data () {
    return {
      router: this.getRouter,
      formItem: {
        switch: false
      },
      ruleValidate: {
        username: [
          { required: true, message: 'Username must be not empty', trigger: 'blur'}
        ],
        password: [
          { required: true, message: 'Password must be not empty', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    test () {
      console.log(this.router)
    },
    login () {
      this.$refs['formItem'].validate((valid) => {
        if (!valid) {
          this.$Message.error('try to write true infomation!')
        }
      })
      var data = new Object()
      data.username = this.formItem.username
      data.password = this.formItem.password
      this.$http.post('/service/user/login', data).then(function (response) {
        // 响应成功回调
        console.log(response)
      }, function (response) {
        // 响应错误回调
        console.log(response)
      })

      console.log(username)
    },
    handleSubmit (name) {
      console.log(name)
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>

<style>
#form{
    margin-top: 20vh;
    margin-left: 38vw;
    margin-right: auto;
    width: 20vw;
}
#title{
    text-align: center;
    font-size: 2rem;
    margin-bottom: 5vh;
}
</style>
