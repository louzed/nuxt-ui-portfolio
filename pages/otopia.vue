<template>
  <div>
    <section id="projecthero">
      <ProjectHero
        :badges="['UI Design', 'Prototyp', 'Figma']"
        title="Otopia"
        description='Ideen- und Kollaborationsnetzwerk für Open-Source Projekte, Entwickler und Enthusiasten auf Basis von <NuxtLink to="https://carbondesignsystem.com/" class="text-(--ui-color-primary-500) underline">Ocelot Social</NuxtLink>'
        imageSrc="/images/oto00.png"
        viewTransitionName="project-image-otopia"
        imageAlt="Beschreibung des Bildes"
      />
    </section>

    <section id="projectheading">
      <ProjectHeading 
        icon="i-line-md-chat-round-alert" 
        message="Meinem Open Source Projekt fehlt es an Unterstützung" 
      />
    </section>

    <section id="projectitems">
      <ProjectItem image="/images/oto01.png" title="Feed · Startseite" />
      <ProjectItem image="/images/oto02.png" title="Projektübersicht" />
      <ProjectItem image="/images/oto03.png" title="Profil"/>
      <ProjectItem image="/images/oto04.png" title="Styleguide" />
      <ProjectItem image="/images/oto05.png" title="Dark Mode" />
    </section>

    <section id="contact">
      <AppContact />
    </section>
  </div>
</template>
