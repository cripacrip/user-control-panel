<template>
  <div class="header">
    <el-form-item class="element-item-btn">
        <el-button class="custom-el-button" :disabled="store.state.isLoadButtonActive" @click="loadModeUsers">Load More</el-button>
    </el-form-item>
    <el-form-item class="element-item-btn">
        <el-button class="custom-el-button" @click="refreshData">Refresh data</el-button>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex';

const store = useStore();

const defaultPage = ref(1)
const isDisabled = ref<boolean>(store.state.isLoadButtonActive)

const refreshData = async () => {
  const page = defaultPage.value
  await store.dispatch('getUsers', page);
  store.commit('SET_LOAD_BUTTON_STATE', false)
}

const fetchUsersFromApi = async () => {
  const page = store.state.page + 1
  await store.dispatch('getUsers', page);
};

const loadModeUsers = () => {
  fetchUsersFromApi()
}
</script>

<style scoped>
.header {
  padding: 12px 24px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: #DFDFE3;
  height: 60px;
}
.element-item-btn {
  justify-content: center;
  align-items: center;
  display: flex;
  margin-bottom: 0;
}

.custom-el-button {
  background-color: var(--light-purple);
  padding: 20px;
  color: var(--light);
  border-radius: 5px;
  &:hover {
    background-color: var(--dark-purple);
  }
}
.is-disabled {
  background-color: var(--grey-bg);
  &:hover {
    background-color: var(--grey-bg);
    color: var(--light)
  }
}
</style>
