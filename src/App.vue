<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-row justify="center" v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
          v-for="link in links"
          :key="`${link.label}-header-link`"
          text
          rounded
          :to="{ name: link.name }"
          class="mr-2"
        >
          {{ link.label }}
        </v-btn>
      </v-row>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list dense>
        <v-list-item
          v-for="link in links"
          :key="`${link.label}-drawer-item`"
          :to="{ name: link.name }"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ link.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>

    <v-footer color="primary lighten-1" padless>
      <v-layout justify-center wrap>
        <v-flex primary lighten-2 py-4 text-center white--text xs12>
          {{ new Date().getFullYear() }} — <strong>Alex Gabriel</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      links: [
        {
          label: 'Bio',
          name: 'bio'
        },
        {
          label: 'CV',
          name: 'cv'
        },
        {
          label: 'Projects',
          name: 'projects'
        },
        {
          label: 'Publications',
          name: 'publi'
        } /*,
        {
          label: 'Misc',
          name: 'misc'
        }*/
      ]
    }
  }
}
</script>
