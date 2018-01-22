<template>
<div id="form">
    <div id="title">Lbryany's Blog</div>
    <Form :model="formItem" :label-width="80">
        <FormItem label="Username">
            <Input v-model="formItem.username" placeholder="Enter Username"></Input>
        </FormItem>

        <FormItem label="Password" prop="passwd">
            <Input type="password" v-model="formItem.password" placeholder="Enter Password"></Input>
        </FormItem>
    
        <FormItem label="Remember">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </FormItem>
        <FormItem>
            <Button type="primary">Submit</Button>
            <Button type="ghost" style="margin-left: 8px">Cancel</Button>
        </FormItem>
    </Form>
</div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    // username: "",
                    switch: false,
                }
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

