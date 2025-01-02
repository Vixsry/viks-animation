const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');
const postcssBanner = require('postcss-banner');

// Baca file CSS sumber
const inputCss = fs.readFileSync(path.join(__dirname, 'src/viks.css'), 'utf8');

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