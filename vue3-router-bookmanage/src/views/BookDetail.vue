<template>
    <div class="book-detail-container">
        <h2>{{ book.title }}</h2>
        <p>书籍简介：{{ book.content }}</p>
        <p>售价为：{{ book.price }}元</p>
        <button @click="addToCart" class="add-to-cart-button">添加到购物车</button>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

// 获取路由参数
const route = useRoute();
const bookId = route.params.id;

// 定义书籍列表
const books = [
    {
        id: 1, title: "西游记",
        content: "《西游记》是明代吴承恩创作的中国古代第一部浪漫主义章回体长篇神魔小说。该小说以“玄奘取经”这一历史事件为蓝本，经作者的艺术加工，深刻地描绘出明代百姓的社会生活状况。《西游记》是中国神魔小说的经典之作，达到了古代长篇浪漫主义小说的巅峰，与《三国演义》《水浒传》《红楼梦》并称为中国古典四大名著。",
        price: 25
    },
    {
        id: 2,
        title: "红楼梦",
        content: "《红楼梦》是一部百科全书式的长篇小说。以宝黛爱情悲剧为主线，以四大家族的荣辱兴衰为背景，描绘出18世纪中国封建社会的方方面面，以及封建专制下新兴资本主义民主思想的萌动。结构宏大、情节委婉、细节精致，人物形象栩栩如生，声口毕现，堪称中国古代小说中的经 典。",
        price: 30
    },
    {
        id: 3,
        title: "三国演义",
        content: "《三国演义》是中国古典四大名著之一，是中国第一部长篇章回体历史演义小说，全名为《三国志通俗演义》，作者是元末明初的小说家罗贯中。《三国演义》描写了从东汉末年到西晋初年之间近105年的历史风云，以描写战争为主，反映了东汉末年的群雄割据混战和魏、蜀、吴三国之间的政治和军事斗争。反映了三国时代各类社会斗争与矛盾的转化，并概括了这一时代的历史巨变，塑造了一批叱咤风云的三国英雄人物。",
        price: 20
    },
    {
        id: 4,
        title: "水浒传",
        content: "是元末明初施耐庵（现存刊本署名大多有施耐庵、罗贯中两人中的一人，或两人皆有）编著的章回体长篇小说。全书通过描写梁山好汉反抗欺压、水泊梁山壮大和受宋朝招安，以及受招安后为宋朝征战，最终消亡的宏大故事，艺术地反映了中国历史上宋江起义从发生、发展直至失败的全过程，深刻揭示了起义的社会根源，满腔热情地歌颂了起义英雄的反抗斗争和他们的社会理想，也具体揭示了起义失败的内在历史原因。《水浒传》是中国古典四大名著之一，问世后，在社会上产生了巨大的影响，成了后世中国小说创作的典范。",
        price: 15
    },
];

// 查找当前书籍
const book = books.find(a => a.id === Number(bookId));

// 添加到购物车
const addToCart = () => {
    if (!book) {
        alert("书籍未找到，无法添加到购物车");
        return;
    }

    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existingItem = cartItems.find(item => item.id === book.id);

    if (existingItem) {
        existingItem.quantity++;
        alert(`${book.title} 数量已增加到 ${existingItem.quantity} 份`);
    } else {
        cartItems.push({ ...book, quantity: 1 });
        alert(`${book.title} 已添加到购物车`);
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
</script>

<style scoped>
.book-detail-container {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.add-to-cart-button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.add-to-cart-button:hover {
    background-color: #0056b3;
}

p {
    margin: 10px 0;
}
</style>
