<template>
    <div>
        <h1 class="text-xl mb-4">商品管理</h1>
        <el-button type="primary" @click="openCreateDialog">新增商品</el-button>
        <el-table :data="products" style="width: 100%" class="mt-4">
            <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
            <el-table-column prop="description" label="描述" width="500"></el-table-column>
            <el-table-column label="图片" width="120">
                <template #default="scope">
                    <el-image :src="scope.row.cover" />
                </template>
            </el-table-column>
            <el-table-column prop="price" label="价格" width="100"></el-table-column>
            <el-table-column prop="stock" label="库存" width="80"></el-table-column>
            <el-table-column label="操作" width="180">
                <template #default="scope">
                    <el-button size="small" @click="openEditDialog(scope.row)">编辑</el-button>
                    <el-button size="small" type="danger" @click="confirmDelete(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog v-model="isDialogOpen" title="商品信息">
            <el-form :model="form">
                <el-form-item label="商品名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="form.description"></el-input>
                </el-form-item>
                <el-form-item label="价格">
                    <el-input v-model="form.price" type="number"></el-input>
                </el-form-item>
                <el-form-item label="库存">
                    <el-input v-model="form.stock" type="number"></el-input>
                </el-form-item>
                <el-upload action="http://localhost:8080/api/products/upload" list-type="picture-card"
                    :on-success="handleUploadSuccess" :file-list="filelist" :limit="1" accept="image/*">
                    <el-icon>
                        <Plus />
                    </el-icon>
                </el-upload>

            </el-form>
            <span slot="footer">
                <el-button @click="isDialogOpen = false">取消</el-button>
                <el-button type="primary" @click="saveProduct">保存</el-button>
            </span>
        </el-dialog>
    </div>
</template>


<script setup lang="ts">

import { ref, onMounted } from "vue";
import { useProductStore } from "../stores/productStore";
import type { Product } from "../api/productService";
import { Plus } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
const productStore = useProductStore();
const { fetchProducts, createProduct, updateProduct, deleteProduct } = productStore;
const filelist = ref([]);

const products = ref<Product[]>([]);
const isDialogOpen = ref(false);
const form = ref<Product>({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    cover: "",
});

const handleUploadSuccess = (response: any) => {
    if (response) {
        ElMessage({
            message: "上传成功",
            type: "success"
        });
        form.value.cover = response;
    } else {
        ElMessage({
            message: "上传失败",
            type: "error",
        });
    }
};

// const handleUploadSuccess = (response: any) => {
//     console.log("上传成功的响应:", response); // 输出响应
//     if (response && response.url) { // 检查 response 是否包含 url
//         ElMessage({
//             message: "上传成功",
//             type: "success"
//         });
//         form.value.cover = response.url; // 保存正确的 URL
//     } else {
//         ElMessage({
//             message: "上传失败",
//             type: "error",
//         });
//     }
// };



const loadProducts = async () => {
    products.value = await fetchProducts();
};

const openCreateDialog = () => {
    form.value = { name: "", description: "", price: 0, stock: 0, cover: "" };
    isDialogOpen.value = true;
};

const openEditDialog = (product: Product) => {
    form.value = { ...product };
    isDialogOpen.value = true;
};
const confirmDelete = (id: number) => {
    ElMessageBox.confirm("此操作将永久删除该项，是否继续？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
    })
        .then(async () => {
            await deleteProduct(id);
            await loadProducts();
        })

        .catch(() => {
            ElMessage({
                type: "info",
                message: "已取消删除"
            });
        });
};

// const saveProduct = async () => {
//     alert(JSON.stringify(form.value))
//     try {
//         if (form.value.id) {
//             await updateProduct(form.value.id, form.value);
//             ElMessage({
//                 message: "修改成功",
//                 type: "success",
//             });
//         } else {
//             await createProduct(form.value);
//             ElMessage({
//                 message: "新增成功",
//                 type: "success"
//             });
//         } await loadProducts();
//         // 刷新数据
//     } catch (error) {
//         console.error(error);

//     } finally {
//         isDialogOpen.value = false;
//     }
// };

const saveProduct = async () => {
    // 表单验证
    if (!form.value.name || !form.value.price) {
        ElMessage({
            message: "商品名称和价格是必填项",
            type: "warning",
        });
        return;
    }

    try {
        if (form.value.id) {
            await updateProduct(form.value.id, form.value);
            ElMessage({
                message: "修改成功",
                type: "success",
            });
        } else {
            await createProduct(form.value);
            ElMessage({
                message: "新增成功",
                type: "success"
            });
        }
        await loadProducts(); // 刷新数据
    } catch (error) {
        ElMessage({
            message: "操作失败，请重试",
            type: "error",
        });
        console.error(error);
    } finally {
        isDialogOpen.value = false; // 关闭对话框
    }
};


// ⻚面加载时获取商品数据
onMounted(() => {
    loadProducts();

});
</script>
