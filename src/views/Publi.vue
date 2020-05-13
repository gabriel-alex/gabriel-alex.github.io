<template>
  <v-container>
    <h1 class="primary--text lighten-1">Publications in Journals</h1>
    <v-divider />
    <v-row>
      <v-col v-for="reference in journals" :key="`${reference.id}`" cols="12">
        <RefCard :reference="reference" />
      </v-col>
    </v-row>
    <h1 class="primary--text lighten-1">Publications in Proceedings</h1>
    <v-divider />
    <v-row>
      <v-col v-for="ref in proceedings" :key="`${ref.id}`" cols="12">
        <RefCard :reference="ref" />
      </v-col>
    </v-row>
    <h1 class="primary--text lighten-1">Publications in Books</h1>
    <v-divider />
    <v-row>
      <v-col v-for="ref in books" :key="`${ref.id}`" cols="12">
        <RefCard :reference="ref" />
      </v-col>
    </v-row>
    <h1 class="primary--text lighten-1">Thesis</h1>
    <v-divider />
    <v-row>
      <v-col v-for="ref in thesis" :key="`${ref.id}`" cols="12">
        <RefCard :reference="ref" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RefCard from '../components/RefCard'

import journalsData from '../data/journals-ref.json'
import proceedingsData from '../data/proceed-ref.json'
import booksData from '../data/books-ref.json'

export default {
  components: {
    RefCard
  },
  data() {
    return {
      journals: journalsData,
      proceedings: proceedingsData,
      books: booksData,
      thesis: [
        {
          title:
            'Gestion des connaissances lors d’un processus collaboratif de créativité',
          authors: 'Gabriel A.',
          year: '2016',
          publi: '',
          link: 'https://tel.archives-ouvertes.fr/tel-01529769',
          id: 'thesis2016'
        }
      ]
    }
  }
}
</script>
