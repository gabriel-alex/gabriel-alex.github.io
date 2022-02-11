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
        I am postdoctoral researcher at ERPI (research team on innovation
        process) research laboratory from University of Lorraine. ERPI is a
        research team on Industrial Engineering specialized on the research of
        innovation processes management. Its activities concern the methods,
        tools and knowledges allowing to optimise innovation projects
        management.
      </p>
      <p>
        As an engineer and doctor in industrial engineering, my research is
        oriented in assisting the design process and notably the fuzzy front-end
        of innovation with information systems. I covered different aspects of
        the fuzzy front-end such as ideation, evaluation, prototyping. I combine
        innovation management with various domain of the computer science such
        artificial intelligences (notably natural processing and ontologies),
        multi-agent system, immersive technology (virtual and augmented reality)
        and IoT to create tools that contribute to the innovation process. These
        tools collect data (on field with IoT or virtually with immersive
        devices), simulate scenarios (multi-agent system and optimisations), and
        visualize the data (dashboard) with the finality to ease the
        collaboration and decision-making process.
      </p>
      <p>
        I am also project leader, developer and maintainer of an idea management
        system based on my doctoral researcher. This project is supported by
        Incubateur Lorrain to make this tool economically viable. This tool is
        regularly used during innovation challenge in collaboration with ENSGSI
        engineering school.
      </p>
    </div>
  </v-container>
</template>
