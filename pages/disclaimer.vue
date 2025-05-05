<template>
  <div>
    <UContainer class="px-4 py-12 lg:py-24 max-w-4xl mx-auto">
        <h1>Impressum</h1>

        <address class="mb-6">
            Markus Biereth<br>
            Waltherstr. 18<br>
            97074 Würzburg<br>
            Deutschland
        </address>

        <h3>Kontakt</h3>
        <p>
            Telefon: 0178 / 578 5578<br>
            E-Mail: <a href="mailto:markus@biereth.de">markus@biereth.de</a>
        </p>

        <h3>Umsatzsteuer-ID</h3>
        <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
            DE367623200
        </p>

        <h3>EU-Streitschlichtung</h3>
        <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr/</a>
        </p>

        <h3>Verbraucherstreitbeilegung/<br>Universalschlichtungsstelle</h3>
        <p>
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
        </p>

    </UContainer>
  </div>
</template>
  
  <script setup lang="ts">
  // Optional: SEO Meta Daten setzen
  useHead({
    title: 'Impressum',
    meta: [
      { name: 'description', content: 'Impressum dieser Webseite gemäß § 5 TMG.' }
    ]
  })
  
  </script>
  
  <style scoped>
  /* Prose Klassen von Nuxt UI/Typography sollten das Styling übernehmen */
  /* Füge hier bei Bedarf spezifische Styles hinzu */
  h3 {
    margin-top: 1.2em;
    margin-bottom: 0.5em;
  }

  a {
    text-decoration: underline;
    color: var(--ui-color-primary-400);
  }

  a:hover {
    text-decoration: none;
    color: var(--ui-color-primary-500);
  }

  address {
    margin-top: 1em;
    margin-bottom: 1em;
  }
  </style>