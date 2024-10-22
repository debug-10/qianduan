<template>
    <div class="cart-container">
        <h2 class="cart-title">购物车</h2>
        <ul class="cart-items">
            <li v-for="item in cartItems" :key="item.id" class="cart-item">
                <span class="item-title">{{ item.title }}</span>
                <span class="item-quantity">数量: {{ item.quantity }} 份</span>
                <button @click="removeFromCart(item.id)" class="remove-button">删除</button>
            </li>
        </ul>
        <p v-if="cartItems.length === 0" class="empty-cart">购物车为空。</p>
        <button @click="checkout" v-if="cartItems.length > 0" class="checkout-button">确认订单</button>
        <router-link to="/orders" class="view-orders-link">查看订单</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartItems: [], // 购物车中的书籍
        };
    },
    mounted() {
        this.loadCartItems();
    },
    methods: {
        loadCartItems() {
            const items = JSON.parse(localStorage.getItem("cartItems")) || [];
            this.cartItems = items;
        },
        removeFromCart(id) {
            this.cartItems = this.cartItems.filter(item => item.id !== id);
            localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
        },
        checkout() {
            const orders = this.cartItems.map(item => ({
                id: Date.now(), // 订单号
                bookTitle: item.title,
                quantity: item.quantity,
                totalPrice: item.price * item.quantity, // 计算总价
            }));

            localStorage.setItem("orders", JSON.stringify(orders));
            localStorage.removeItem("cartItems");
            this.cartItems = [];
            this.$router.push("/orders");
        },
    },
};
</script>

<style scoped>
.cart-container {
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 20px auto;
}

.cart-title {
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
}

.cart-items {
    list-style-type: none;
    padding: 0;
}

.cart-item {
    padding: 15px;
    border-bottom: 1px solid #e1e1e1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.2s;
}

.cart-item:hover {
    background-color: #f1f1f1;
}

.item-title {
    font-size: 1.2em;
    color: #333;
}

.item-quantity {
    color: #666;
}

.remove-button {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.remove-button:hover {
    background-color: #c82333;
}

.empty-cart {
    text-align: center;
    color: #666;
    margin-top: 20px;
}

.checkout-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
}

.checkout-button:hover {
    background-color: #0056b3;
}

.view-orders-link {
    display: block;
    text-align: center;
    margin-top: 10px;
    color: #007bff;
    text-decoration: none;
}

.view-orders-link:hover {
    text-decoration: underline;
}
</style>
