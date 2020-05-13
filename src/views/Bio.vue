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
        I am postdoctoral research engineer in the ERPI research team of
        University of Lorraine. This laboratory is specialised on researched
        concerning methods, tools and knowledge that optimize the innovation
        process.
        <!--<p>Ph.D. and graduated engineer in industrial engineering. I am currently Assistant Professor at the ENSGSI, Université de Lorraine, France and do research at the ERPI laboratory, France. My research interests are: Knowledge Engineering, Multi-Agent System, Creativity, Web Semantic, Ontology and Natural Language Processing.</p>-->
      </p>
      <p>
        My research is oriented on assisting the design process and notably the
        fuzzy front-end of innovation with information systems. I covered
        different aspects of the fuzzy front-end such as ideation, evaluation,
        prototyping with a specific attention for involving users and
        collaborate from other domains. The orientation led me to explore
        various research and topics as innovation management, artificial
        intelligence (notably natural language processing), knowledge
        engineering and ontologies, creativity psychology, multi-agent systems,
        immersive technologies (virtual reality), and living lab approach.
      </p>
    </div>
  </v-container>
</template>
