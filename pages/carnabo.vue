<template>
  <div>
    <section id="projecthero">
      <ProjectHero
        :badges="['UX/UI Design', 'Auftrag', 'Figma']"
        title="Carnabo"
        duration="Projektdauer: ~1 Woche"
        description="Überarbeitung der Fahrzeugsuche eines Webportals, welches sich auf Auto-Abonnemonts spezialisiert hat."
        imageSrc="/images/car00.png"
        viewTransitionName="project-image-carnabo"
        imageAlt="Beschreibung des Bildes"
      />
    </section>

    <section id="projectheading">
      <ProjectHeading 
        icon="i-line-md-chat-round-alert" 
        message="Ich möchte schnell und komfortabel ein Auto-Abo finden." 
      />
    </section>

    <section id="projectitems">
      <ProjectItem image="/images/car01.png" title="Ausgangspunkt" />
      <ProjectItem image="/images/car02.png" title="Erste Überarbeitung" />
      <ProjectItem image="/images/car03.png" title="Layout Variationen"/>
      <ProjectItem image="/images/car04.png" title="Mobile Ansicht" />
      <ProjectItem image="/images/car05.png" title="Styleguide" />
    </section>

    <section id="contact">
      <AppContact />
    </section>
  </div>
</template>
