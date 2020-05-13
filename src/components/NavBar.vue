<template>
  <div id="nav">
    <nav>
      <router-link :to="{ name: 'bio' }">Bio</router-link> |
      <router-link :to="{ name: 'projects' }">Projects</router-link> |
      <router-link :to="{ name: 'publi' }">Publications</router-link>
    </nav>
  </div>
</template>
