<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      Controller User Panel
    </div>
    <el-menu 
      default-active="1"
      class="sidebar__navigation"
      router
      background-color="transparent"
      text-color="#fff"
      active-text-color="#1E1E1E"
    >
      <el-menu-item index="1" :route="{ name: ROUTERS_NAME.userList }">
        User List
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ROUTERS_NAME } from '@/routes'
</script>

<style lang="scss" scoped>
.sidebar {
  width: 250px;
  flex-grow: 0;
  padding: 48px 16px;
  background-color: #1E1E1E;
  display: flex;
  flex-direction: column;
}

.el-menu {
  border-right: transparent;
}
.sidebar__navigation .el-menu-item {
  border-radius: 4px;
  margin: 8px 0;
  color: var(--light);
  font-size: 16px;

  &.is-active {
    background-color: var(--light-purple);
  }

  &:not(.is-active):hover {
    background-color: var(--non-active);
  }
}
.sidebar__logo {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  margin-bottom: 40px;
  color: var(--light);
}
</style>
