<template>
    <div>
        <h3>用户登录</h3>
        <button @click="handleLogin">登录按钮</button>
    </div>
</template>


<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogin = () => {
    localStorage.setItem("token", "hello666");
    //编程式导航
    router.push("/user/profile")
};

</script>