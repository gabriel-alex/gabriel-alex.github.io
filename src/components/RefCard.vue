<template>
  <v-card dense>
    <!--<div class="overline mb-4">{{ reference.year }}</div>-->
    <v-card-subtitle class="pb-0">{{ reference.year }}</v-card-subtitle>
    <v-card-title>{{ reference.title }}</v-card-title>
    <!--<v-card-subtitle>{{ reference.authors }} </v-card-subtitle>
    <v-card-subtitle>
      <v-row :v-if="reference.authors != ''"> {{ reference.authors }}</v-row>
      <v-row :v-if="reference.publi != ''"> {{ reference.publi }}</v-row>
    </v-card-subtitle>
    <v-card-text>{{ project.description }}</v-card-text>-->
    <v-card-text class="text--primary">
      <div :v-if="reference.authors != ''">{{ reference.authors }}</div>
      <div :v-if="reference.publi != ''">{{ reference.publi }}</div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text :v-if="reference.link != ''">
        <a :href="reference.link"
          ><v-icon :key="`${reference.id}-link`"> mdi-link</v-icon>
        </a>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'reference',
  props: {
    reference: {
      type: Object,
      required: true
    }
  }
}
</script>
