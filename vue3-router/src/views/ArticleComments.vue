<template>
     <ul>
         <li v-for="comment in article?.comments" :key="comment.id">
             {{ comment.content }}
            </li>
     </ul>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

// 获取路由参数中的 articleId
const route = useRoute();
const articleId = route.params.id;

// 响应式评论数据

// 模拟 API 数据源中的评论
const articles = [
    {
        id: 1,
        title: "如何学习Vue3",
        content:
            "如何学习Vue3如何学习Vue3如何学习Vue3如何学习Vue3",
        comments: [
            { id: 1, content: "这篇文章很棒！" },
            { id: 2, content: "学到了很多" },
            { id: 2, content: "太厉害了!" },
        ],
    },
    {
        id: 2,
        title: "理解 Vue3",
        content: "理解 Vue3理解 Vue3理解 Vue3理解 Vue3理解 Vue3",
        comments: [
            { id: 3, content: "这篇文章写得不错！" },
            { id: 3, content: "这篇文章很厉害！" },
            { id: 3, content: "666！" },
            { id: 3, content: "太棒了！" },
        ],
    },
];

const article = articles.find((a) => a.id === Number(articleId))

</script>