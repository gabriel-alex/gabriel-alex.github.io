<template>
  <v-row>
    <v-col cols="12" sm="3">
      {{ experience.startYear }} - {{ experience.endYear }}
    </v-col>
    <v-col cols="12" sm="9">
      <v-row no-gutters>
        <v-col>
          <h3>{{ experience.jobtitle }}</h3>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>{{ experience.structure }}</v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>{{ experience.topic }}</v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true
    }
  }
}
</script>
