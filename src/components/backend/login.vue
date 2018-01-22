<template>
<div id="form">
    <Form :model="formItem" :label-width="80">
        <FormItem label="Username">
            <Input v-model="formItem.username" placeholder="Enter Username"></Input>
        </FormItem>

        <FormItem label="Password" prop="passwd">
            <Input type="password" v-model="formItem.password" placeholder="Enter Password"></Input>
        </FormItem>
    
        <FormItem label="Switch">
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
                    username: "lbryany",
                    switch: true,
                }
            }
        }
    }
</script>

<style>
#form{
    margin-top: 20vh;
    margin-left: 30vw;
    width: 20vw;
}
</style>

