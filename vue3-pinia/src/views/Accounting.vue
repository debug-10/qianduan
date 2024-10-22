<template>
    <div>
        <h2>记账应用</h2>
        <input v-model="description" type="text" placeholder="描述" />
        <input v-model.number="amount" type="number" placeholder="金额" />
        <select v-model="type">
            <option value="income">收入</option>
            <option value="expense">支出</option>
        </select>
        <button @click="addRecord">添加记录</button>

        <h3>记录列表</h3>
        <ul>
            <li v-for="record in accountingStore.records" :key="record.id">
                {{ record.type === 'income' ? '收入' : '支出' }}: {{ record.amount }} - {{ record.description }}
                <button @click="removeRecord(record.id)">删除</button>
            </li>
        </ul>

        <p>总收入: {{ accountingStore.totalIncome() }}</p>
        <p>总支出: {{ accountingStore.totalExpense() }}</p>
        <p>当前余额: {{ accountingStore.balance() }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAccountingStore } from '../stores/useAccountingStore';

const accountingStore = useAccountingStore();
const amount = ref(0);
const type = ref<'income' | 'expense'>('income');
const description = ref(""); // 添加描述

const addRecord = () => {
    if (amount.value > 0 && description.value.trim()) {
        accountingStore.addRecord(type.value, amount.value, description.value);
        amount.value = 0; // 重置输入框
        description.value = ""; // 重置描述输入框
    }
};

const removeRecord = (id: number) => {
    accountingStore.removeRecord(id);
};
</script>

<style scoped>

</style>
