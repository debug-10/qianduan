<template>
    <div>
        <ol>
            <h2>文章列表</h2>
            <!-- <div style="height: 2000px">
                <p>非常长的文章内容</p>
            </div> -->
            <ul>
                <li v-for="article in articles" :key="article.id">
                    <router-link :to="`/articles/${article.id}`">
                        {{ article.title }}
                    </router-link>
                </li>
            </ul>
        </ol>
    </div>
</template>

<script lang="ts" setup>
const articles = [
    {
        id: 1,
        title: "如何学习vue3",
    },
    {
        id: 2,
        title: "理解Vue Router",
    }
]
</script>

<!-- 

<script lang="ts" >
export default{
    beforeRouteEnter (to, from ,next) {
        console.log(to , from);
        console.log("进入该页面前的检查");
        next();
    }
}
</script> -->


<style scoped>
ol li{
    margin-bottom: 10px;
}
a{
    margin: 10px;
    text-decoration: none;
    color: black;
    padding: 5px 10px;
}

</style>