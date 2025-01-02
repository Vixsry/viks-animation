const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');
const postcssBanner = require('postcss-banner');

// Baca file CSS sumber
const inputCss = fs.readFileSync(path.join(__dirname, 'src/viks.css'), 'utf8');

// Konfigurasi PostCSS dengan banner dan cssnano
const processor = postcss([
  postcssBanner({
    banner: `/*!
     * MIT LISENSI
     * Copyright (c) 27 Nov 2024 Vixsry
     * Lisensi   : https://github.com/Vixsry/viks-animation/blob/main/LICENSE
     * Website   : https://viksanimation.my.id/
     * Github    : https://github.com/Vixsry/viks-animation
     * Author    : VIKRI AHPAD TANTOWI
     * Instagram : https://www.instagram.com/viksry12
     * Facebook  : https://www.facebook.com/share/1E17jqYu34/
     */`,
    important: true
  }),
  cssnano()
]);

// Proses dan minifikasi CSS
processor.process(inputCss, { from: undefined })
  .then(result => {
    // Tulis hasil ke file output dengan lisensi di bagian atas
    fs.writeFileSync(path.join(__dirname, 'dist/viks.min.css'), result.css);
    if (result.map) {
      fs.writeFileSync(path.join(__dirname, 'dist/viks.min.css.map'), result.map);
    }
  })
  .catch(error => {
    console.error('Error during CSS processing:', error);
  });