const fs = require('fs');
const path = require('path');
const cssnano = require('cssnano');
const postcss = require('postcss');

// Baca file CSS sumber
const inputCss = fs.readFileSync(path.join(__dirname, 'src/viks.css'), 'utf8');

// Gunakan CSSNano untuk meminify CSS
postcss([cssnano])
  .process(inputCss, { from: undefined })
  .then(result => {
    // Tulis hasil minifikasi ke file output
    fs.writeFileSync(path.join(__dirname, 'dist/viks.min.css'), result.css);
    if (result.map) {
      fs.writeFileSync(path.join(__dirname, 'dist/viks.min.css.map'), result.map);
    }
  })
  .catch(error => {
    console.error('Error during CSS minification:', error);
  });
