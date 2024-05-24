<script setup lang="ts">
import { ref } from 'vue'
import type { loginParamsType } from "@/api/login/login.ts"
const login = ref({
    username: "admin",
    password: "macro123"
})

const form = async () => {
    try {
        const res = await form(loginParamsType.value)
        console.log("res===>", res);
    } catch (error) {
        console.log(error);
    }
}

const onSubmit = ref()




</script>
<template>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="username">
            <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="password">
            <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<style lang='scss' scoped></style>