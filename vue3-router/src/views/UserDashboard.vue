<template>
    <!-- 导航 -->
    <nav>
        <router-Link to="/user/profile">用户信息</router-Link>
        <router-Link to="/user/setting">用户设置</router-Link>
    </nav>
    <router-view></router-view>
</template>

<style>
nav{
    margin-top: 20px;
}
a {
    margin: 10px;
    text-decoration: none;
    color: white;
    background-color: aqua;
    padding: 5px 10px;
}

.router-link-active {
    background-color: aqua;
    font-weight: bold;
}

</style>


