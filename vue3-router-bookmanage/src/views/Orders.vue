<template>
    <div class="orders-container">
        <h2 class="orders-title">订单信息</h2>
        <ul class="orders-list">
            <li v-for="order in orders" :key="order.id" class="order-item">
                <h3 class="order-id">订单号: {{ order.id }}</h3>
                <p class="order-details">书籍: <strong>{{ order.bookTitle }}</strong></p>
                <p class="order-details">数量: {{ order.quantity }}</p>
                <p class="order-total">总价: <strong>{{ order.totalPrice }} 元</strong></p>
            </li>
        </ul>
        <p v-if="orders.length === 0" class="empty-orders">您的订单列表为空。</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orders: [],
        };
    },
    mounted() {
        this.loadOrders();
    },
    methods: {
        loadOrders() {
            const orders = JSON.parse(localStorage.getItem("orders")) || [];
            this.orders = orders;
        },
    },
};
</script>

<style scoped>
.orders-container {
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 20px auto;
}

.orders-title {
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
}

.orders-list {
    list-style-type: none;
    padding: 0;
}

.order-item {
    padding: 15px;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    margin-bottom: 15px;
    transition: box-shadow 0.2s;
}

.order-item:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.order-id {
    margin: 0;
    font-weight: bold;
    color: #007bff;
}

.order-details {
    margin: 5px 0;
    color: #555;
}

.order-total {
    margin: 10px 0;
    font-weight: bold;
    color: #dc3545;
}

.empty-orders {
    text-align: center;
    color: #666;
    margin-top: 20px;
}
</style>
