<template>
  <v-card>
    <v-card-title>{{ project.name }}</v-card-title>
    <v-card-subtitle
      >{{ project.startYear }} - {{ project.endYear }}
    </v-card-subtitle>
    <v-card-text>{{ project.description }}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon v-if="project.git && project.git != null">
        <a :href="project.git">
          <v-icon :key="`${project.name}-git`"> mdi-github</v-icon>
        </a>
      </v-btn>
      <v-btn icon v-if="project.link && project.link != null">
        <a :href="project.link">
          <v-icon :key="`${project.name}-link`"> mdi-link</v-icon>
        </a>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
