<template>
  <div class="user-edit">
    <el-form :model="currentUser" ref="form">
      <el-form-item label="Email">
        <el-input v-model="currentUser.email"></el-input>
      </el-form-item>
      <el-form-item label="First Name">
        <el-input v-model="currentUser.first_name"></el-input>
      </el-form-item>
      <el-form-item label="Last Name">
        <el-input v-model="currentUser.last_name"></el-input>
      </el-form-item>
      <div class="custom-el">
        <el-form-item class="custom-el-item">
          <el-button class="custom-el-button" @click="saveUser">Save</el-button>
        </el-form-item>
        <el-form-item class="custom-el-item">
          <el-button class="custom-el-button" @click="goBack">Back</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { ROUTERS_NAME } from '@/routes/constants.ts';

const store = useStore();
const router = useRouter();
const route = useRoute();

const users = computed(() => store.state.users);
const currentUser = computed(() => {
  const userId = Number(route.params.id);
  return users.value.find((user: { id: number; }) => user.id === userId) || {};
});

const saveUser = () => {
  //update the Vuex state
  store.dispatch('saveToLocalStorage');
  router.push({ name: ROUTERS_NAME.home });
};
const goBack = () => {
  router.back();
}
</script>

<style>
.user-edit {
  padding: 50px 20px 20px;
}
.custom-el {
  display: flex;
  justify-content: space-between;

}
.custom-el-item {
  /* width: 100%; */
  margin-bottom: 0;
}
.custom-el-button {
  background-color: var(--light-purple);
  padding: 20px 50px;
  color: var(--light);
  border-radius: 5px;
  &:hover {
    background-color: var(--light-purple);
    color: var(--light);
  }
}
</style>
