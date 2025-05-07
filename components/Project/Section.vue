<template>
    <ProjectLogos />

    <ProjectCard
    to="/hochschulstart"
    image="/images/hss00.png"
    title="Barrierefrei an Hochschulen bewerben"
    description="Portal für Hochschulbewerbungen mit Numerus Clausus."
    ctaLabel="Hochschulstart"
    :badges="['UI Design', 'Auftrag', 'Figma']"
    transition-name="project-image-hochschulstart"
    />

    <ProjectCard
    to="/carnabo"
    image="/images/car00.png"
    title="Auto-Abos finden und vergleichen"
    description="Überarbeitung der Fahrzeugsuche eines Webportals, welches sich auf Auto-Abonnemonts spezialisiert hat."
    ctaLabel="Carnabo"
    :badges="['UX/UI Design', 'Auftrag', 'Figma']"
    transition-name="project-image-carnabo"
    />

    <ProjectCard
    to="/otopia"
    image="/images/oto00.png"
    title="Open Source fördern und verbinden"
    description="Ideen- und Kollaborationsnetzwerk für Open-Source Projekte, Entwickler und Enthusiasten"
    ctaLabel="Otopia"
    :badges="['UX/UI Design', 'Prototyp', 'Figma']"
    transition-name="project-image-otopia"
    />

    <ProjectSlideshow />
</template>
