<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
           <blog-menu></blog-menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Content :style="{padding: '0 16px 16px'}">
                <blog-crumb></blog-crumb>
                <blog-article></blog-article>
            </Content>
        </Layout>
    </div>
</template>

<script>
import BlogMenu  from "./components/BlogMenu";
import BlogCrumb from "./components/BlogCrumb";
import BlogArticle   from "./components/BlogArticle";

export default {
    components: {
        BlogMenu, BlogCrumb, BlogArticle
    }
}
</script>

<style>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
</style>
