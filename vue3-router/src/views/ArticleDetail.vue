<template>
    <div>
        <h2>{{ article.title }}</h2>
        <p>{{ article.content }}</p>

        <router-link :to="`/articles/${articleId}/comments`">
            查看评论
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const articleId = route.params.id;

// 模拟文章数据
const articles = [
    { id: 1, title: "如何学习Vue 3", content: "Vue 3的基本概念..." },
    { id: 2, title: "理解Vue Router", content: "Vue Router的用法..." },
];

const article = articles.find(a => a.id === Number(articleId)) || { title: "未找到", content: "该文章不存在。" };
</script>

<style scoped>
.comment-link {
    margin-top: 20px;
    display: inline-block;
    color: blue;
    text-decoration: underline;
}
</style>
