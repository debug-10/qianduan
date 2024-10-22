<template>
    <div class="book-list-container">
        <h2 class="book-list-title">书籍列表</h2>
        <ul class="book-list">
            <li v-for="book in books" :key="book.id" class="book-item">
                <router-link :to="`/books/${book.id}`" class="book-link">
                    {{ book.title }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const books = [
    { id: 1, title: "西游记" },
    { id: 2, title: "红楼梦" },
    { id: 3, title: "三国演义" },
    { id: 4, title: "水浒传" }
];
</script>

<style scoped>
.book-list-container {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    max-width: 600px;
    margin: 0 auto;
}

.book-list-title {
    font-size: 1.8em;
    margin-bottom: 15px;
    color: #333;
    text-align: center;
}

.book-list {
    list-style-type: none;
    padding: 0;
}

.book-item {
    margin: 10px 0;
}

.book-link {
    display: block;
    padding: 10px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.book-link:hover {
    background-color: #0056b3;
}
</style>
