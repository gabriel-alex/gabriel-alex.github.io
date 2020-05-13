<template>
  <v-row>
    <v-col cols="12" sm="3">{{ degree.year }} </v-col>
    <v-col cols="12" sm="9">
      <v-row no-gutters>
        <v-col
          ><h3>{{ degree.title }}</h3></v-col
        >
      </v-row>
      <v-row no-gutters>
        <v-col>{{ degree.structure }}</v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>{{ degree.topic }}</v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    degree: {
      type: Object,
      required: true
    }
  }
}
</script>
