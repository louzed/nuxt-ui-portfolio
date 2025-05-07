<template>
  <div>
    <section id="projecthero">
      <ProjectHero
        :badges="['UI Design', 'Auftrag', 'Figma']"
        title="Hochschulstart"
        duration="Projektdauer: 6 Wochen"
        pages="Seitenzahl: ~150"
        description='Ein vorhandenes UX Konzept soll anhand der <NuxtLink to="https://carbondesignsystem.com/" class="text-(--ui-color-primary-500) underline">Carbon Library</NuxtLink> von IBM in ein fertiges UI Design überführt werden. Hoher Fokus auf Barrierefreiheit.'
        imageSrc="/images/hss00.png"
        viewTransitionName="project-image-hochschulstart"
        imageAlt="Beschreibung des Bildes"
      />
    </section>

    <section id="projectheading"> 
    <ProjectHeading 
      icon="i-line-md-chat-round-alert" 
      message="Die Bewerbung an Hochschulen sollte einfach und zugänglich sein." 
    />
    </section>
    
    <section id="projectitems">
      <ProjectItem image="/images/hss01.png" title="Suche · Studiengänge" />
      <ProjectItem image="/images/hss02.png" title="Dashboard · Nachrichten" />
      <ProjectItem image="/images/hss03.png" title="Bewerbungspfad"/>
      <ProjectItem image="/images/hss04.png" title="Hochschulpfad" />
      <ProjectItem image="/images/hss05.png" title="Stiftungspfad" />
    </section>

    <section id="contact">
      <AppContact />
    </section>
  </div>
</template>