<template>
    <div class="home-container">
        <h2 class="title">欢迎来到线上书店</h2>
        <div class="book-list">
            <div class="book-item" v-for="book in books" :key="book.id">
                <img :src="book.image" alt="书籍封面" class="book-image" />
                <h3 class="book-title">{{ book.title }}</h3>
                <p class="book-description">{{ book.description }}</p>
                <router-link :to="`/books/${book.id}`" class="book-link">查看详情</router-link>
            </div>
        </div>
    </div>
</template>

<script>
// import xyjImage from '@/assets/images/xyj.png';
import xyjImage from '../assets/images/xyj.png';
import sgyyImage from '../assets/images/sgyy.jpg';
import shzImage from '../assets/images/shz.jpg';
import hlmImage from '../assets/images/hlm.jpg';



export default {
    data() {
        return {
            books: [
                {
                    id: 1,
                    title: "西游记",
                    description: "古典小说，讲述了孙悟空的冒险故事。",
                    image: xyjImage,
                },
                {
                    id: 2,
                    title: "红楼梦",
                    description: "中国古典文学的巅峰之作。",
                    image: hlmImage,
                },
                {
                    id: 3,
                    title: "三国演义",
                    description: "讲述了三国时期的历史和传奇故事。",
                    image: sgyyImage,
                },
                {
                    id: 4,
                    title: "水浒传",
                    description: "描写了一百单八将的故事。",
                    image: shzImage,
                },
            ],
        };
    },
};
</script>

<style scoped>
.book-image {
    max-width: 100%;
    height: auto;
}

.home-container {
    text-align: center;
    padding: 20px;
    background-color: #f9f9f9;
}

.title {
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
}

.book-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin: 0 auto;
    max-width: 1200px;
}

.book-item {
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: white;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
}

.book-item:hover {
    transform: scale(1.05);
}

.book-title {
    font-size: 1.5em;
    margin: 10px 0;
}

.book-description {
    color: #555;
    margin: 10px 0;
}

.book-link {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 12px;
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
