<template>
  <div class="user-list">
    <el-table :data="users" stripe class="user-list--table" style="width: 100%">
      <el-table-column prop="id" label="ID" width="50"></el-table-column>
      <el-table-column label="Avatar" width="100">
        <template #default="{ row }">
          <img :src="row.avatar" alt="User Avatar" class="avatar-img"/>
        </template>
      </el-table-column>
      <el-table-column prop="first_name" label="First Name"></el-table-column>
      <el-table-column prop="last_name" label="Last Name"></el-table-column>
      <el-table-column prop="email" label="Email"></el-table-column>
      <el-table-column label="Actions">
        <template #default="{ row }">
          <el-button @click="editUser(row)" class="user-list__edit-btn" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { USER } from '@/shared-types';
import { ROUTERS_NAME } from '@/routes/constants.ts';

const store = useStore();
const router = useRouter();
const users = computed(() => store.state.users);

const editUser = (user: USER) => {
  router.push({ name: ROUTERS_NAME.userEdit, params: { id: user.id } });
};
</script>

<style scope>
.user-list {
  height: calc(100% - 60px - 10px);
  overflow-y: auto;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
}
.user-list__edit-btn {
  padding: 8px 14px;
  background: var(--light-purple);
  color: var(--light);
  border: none;

  &:hover {
    background-color: var(--light-purple);
    color: var(--light);
  }
}
.avatar-img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  object-fit: cover;
}
</style>
