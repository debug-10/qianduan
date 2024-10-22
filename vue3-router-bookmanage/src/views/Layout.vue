<template>
    <div class="app-container">
        <nav class="navbar">
            <router-link to="/home" class="nav-link">首页</router-link>
            <router-link to="/books" class="nav-link">书籍列表</router-link>
            <router-link to="/cart" class="nav-link">购物车</router-link>
            <router-link to="/orders" class="nav-link">订单</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
// 省略脚本
</script>

<style scoped>
.app-container {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.navbar {
    display: flex;
    justify-content: space-around;
    background-color: #f8f9fa;
    padding: 10px 0;
    border-bottom: 2px solid #007bff;
}

.nav-link {
    text-decoration: none;
    color: #007bff;
    padding: 10px 15px;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.nav-link:hover {
    background-color: #007bff;
    color: white;
}
</style>
