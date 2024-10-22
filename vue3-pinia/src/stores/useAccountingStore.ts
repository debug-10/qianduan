// src/stores/useAccountingStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAccountingStore = defineStore('accounting', () => {
    const records = ref<{ id: number; type: 'income' | 'expense'; amount: number; description: string }[]>([]);

    const addRecord = (type: 'income' | 'expense', amount: number, description: string) => {
        records.value.push({ id: Date.now(), type, amount, description });
    };

    const removeRecord = (id: number) => {
        records.value = records.value.filter(record => record.id !== id);
    };

    const totalIncome = () => {
        return records.value.filter(record => record.type === 'income')
            .reduce((total, record) => total + record.amount, 0);
    };

    const totalExpense = () => {
        return records.value.filter(record => record.type === 'expense')
            .reduce((total, record) => total + record.amount, 0);
    };

    const balance = () => {
        return totalIncome() - totalExpense();
    };

    return { records, addRecord, removeRecord, totalIncome, totalExpense, balance };
},
    {
        persist: {
            key: 'my-accounting-store',
            storage: localStorage,
        }
    }
);
