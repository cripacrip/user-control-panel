<template>
  <div class="layout">
      <h1 class="layout--header">Welcome to User Control Panel!</h1>
      <!-- <button class="main-btn" @click="goToMain">Go to main page</button> -->
      <el-form-item class="element-item-btn-main">
        <el-button class="custom-el-button" @click="goToMain">Go to main page</el-button>
      </el-form-item>
      <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ROUTERS_NAME } from '@/routes/constants.ts';

const router = useRouter();
const store = useStore();

const page = ref(1)

const fetchUsersFromApi = async () => {
  await store.dispatch('getUsers', 1);
};

const goToMain = () => {
  fetchUsersFromApi(1)
  router.push({ name: ROUTERS_NAME.home });
};

</script>

<style scope>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #1E1E1E;
}
.layout--header {
  font-size: 50px;
  color: var(--light);
}
.element-item-btn-main {
  margin-top: 20px;
}
.custom-el-button {
  background-color: var(--light-purple);
  border: none;
  padding: 20px 50px;
  color: var(--light);
  border-radius: 5px;
  &:hover {
    background-color: var(--light-purple);
    color: var(--light);
  }
}
</style>