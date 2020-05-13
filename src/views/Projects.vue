<template>
  <v-container>
    <h1 class="primary--text lighten-1">Projects</h1>
    <v-divider />
    <v-row>
      <v-col v-for="project in projects" :key="`${project.name}`" cols="12">
        <ProjectCard :project="project" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectCard from '../components/ProjectCard'

import projetData from '../data/projects.json'

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: projetData
    }
  }
}
</script>
