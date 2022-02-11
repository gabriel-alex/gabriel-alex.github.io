<template>
  <v-container>
    <v-row justify="center">
      <v-avatar size="140">
        <img src="@/assets/efGCqaz0.jpeg" alt="Gabriel Alex Avatar" />
      </v-avatar>
    </v-row>
    <v-row justify="center">
      <h1>
        <span property="schema:honorificSuffix" content="PhD"></span>
        <span property="foaf:firstName">Alex </span>
        <span property="foaf:lastName">Gabriel</span> - Ph.D.
      </h1>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="primary--text lighten-1">Experiences</h2>
        <v-divider></v-divider>
        <Experience
          v-for="expe in experiences"
          :key="`experience-${expe.id}`"
          :experience="expe"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 class="primary--text lighten-1">Degrees</h2>
        <v-divider></v-divider>
        <Degree
          v-for="degree in degrees"
          :key="`${degree.title}`"
          :degree="degree"
        />
      </v-col>
    </v-row>
    <!--<v-row>
      <v-col>
        <h2>Trainings</h2>
        <v-divider></v-divider>
      </v-col>
    </v-row>-->
    <v-row>
      <v-col>
        <h2 class="primary--text lighten-1">Skills</h2>
        <v-divider></v-divider>
        <v-row v-for="skill in skills" :key="`${skill.type}`">
          <v-col cols="12" md="3">
            <h3>{{ skill.type }}</h3>
          </v-col>
          <v-col cols="12" md="9" v-if="skill.type != 'Languages'">
            <v-row no-gutters>
              <v-col
                v-for="ctnt in skill.content"
                :key="`${ctnt}-card`"
                cols="12"
                lg="3"
                md="4"
                sm="6"
                class="text-center"
              >
                {{ ctnt }}
              </v-col>
            </v-row>
            <!--<v-card v-for="ctnt in skill.content" :key="`${ctnt}-card`">
              {{ ctnt }}
            </v-card>-->
          </v-col>

          <!-- languages -->
          <v-col cols="12" md="9" v-if="skill.type == 'Languages'">
            <v-row no-gutters>
              <v-col
                v-for="language in skill.content"
                :key="`${language.language}`"
                cols="12"
                md="4"
                lg="3"
                sm="6"
                class="text-center"
              >
                <v-chip outlined class="ma-2" color="green">
                  {{ language.language }} {{ language.level }}
                </v-chip>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Degree from '../components/Degree'
import Experience from '../components/Experience'

import DegreesData from '../data/degrees.json'
import ExperiencesData from '../data/experience.json'
import SkillsData from '../data/skills.json'

export default {
  components: {
    Degree,
    Experience
  },
  data() {
    return {
      degrees: DegreesData,
      experiences: ExperiencesData,
      trainnings: [
        {
          year: '2020',
          title: '',
          organization: 'ANSSI',
          type: 'MOOC',
          link: ''
        },
        {
          year: '2020',
          title: '',
          organization: 'FUN',
          type: '',
          link: ''
        },
        {
          year: '',
          title: '',
          organization: '',
          type: '',
          link: ''
        }
      ],
      skills: SkillsData
    }
  }
}
</script>
