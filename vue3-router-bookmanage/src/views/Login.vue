<template>
    <div class="login-container">
        <h2>登录</h2>
        <form @submit.prevent="login" class="login-form">
            <input v-model="username" placeholder="用户名" class="input-field" />
            <input v-model="password" type="password" placeholder="密码" class="input-field" />
            <button type="submit" class="submit-button">登录</button>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            error: '',
        };
    },
    methods: {
        login() {
            if (this.username && this.password) {
                localStorage.setItem('user', this.username); // 存储用户信息
                this.$router.push('/cart'); // 登录后重定向到购物车
            } else {
                this.error = '请输入用户名和密码';
            }
        },
    },
};
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
}

.login-form {
    display: flex;
    flex-direction: column;
}

.input-field {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.submit-button {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #0056b3;
}

.error {
    color: red;
    text-align: center;
    margin-top: 10px;
}
</style>
