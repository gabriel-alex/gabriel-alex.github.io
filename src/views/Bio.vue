<template>
  <v-container>
    <v-row justify="center">
      <v-avatar size="140">
        <img src="@/assets/efGCqaz0.jpeg" alt="Gabriel Alex Avatar"
      /></v-avatar>
    </v-row>
    <v-row justify="center">
      <h2>
        <span property="schema:honorificSuffix" content="PhD"></span
        ><span property="foaf:firstName">Alex </span>
        <span property="foaf:lastName">Gabriel </span> - Ph.D.
      </h2>
    </v-row>
    <v-row justify="center">
      <h3 class="primary--text">Researcher - Engineer</h3>
    </v-row>

    <v-row>
      <v-col> </v-col>
    </v-row>
    <div class="bio">
      <div resource="#me" typeof="foaf:Person schema:Person" class="jumbotron">
        <span property="foaf:pastProject" resource="#smagrinet"></span>
        <span property="foaf:pastProject" resource="#isuuts"></span>
        <span property="foaf:pastProject" resource="#lbm"></span>
        <span property="foaf:pastProject" resource="#particip2"></span>
      </div>
      <h3 class="primary--text lighten-1">Short Bio</h3>
      <v-divider />
      <p>
        I am a researcher at the ERPI research laboratory from Université de
        Lorraine, France. ERPI is an Industrial Engineering research team
        specialised in the field of innovation processes management. Its
        activities concern methods, tools and knowledge allowing optimisation of
        innovation projects management.
      </p>
      <p>
        As an engineer and doctor in industrial engineering, my research is
        aimed at assisting the design process and notably the fuzzy front-end of
        innovation with information systems. I covered different aspects of the
        fuzzy front-end such as ideation, evaluation and prototyping. I combine
        innovation management with various domains of the computer science such
        artificial intelligence (notably natural language processing and
        ontologies), multi-agent system, immersive technology (virtual and
        augmented reality) and IoT to create tools that contribute to the
        innovation process. These tools collect data (on the field with IoT or
        virtually with immersive devices), simulate scenarios (multi-agent
        system and computer optimisations), and visualise the data (dashboard)
        with the finality to ease the collaboration and decision-making process.
        Beyond computer science applied to innovation management, I have
        collaborated with other researchers in the fields of electrical and
        process engineering.
      </p>
      <p>
        I am also project leader, developer and maintainer of an idea management
        system based on my doctoral researcher. This project is supported by
        Incubateur Lorrain to make this tool economically viable. This tool is
        regularly used during innovation challenges in collaboration with ENSGSI
        engineering school.
      </p>
    </div>
  </v-container>
</template>
