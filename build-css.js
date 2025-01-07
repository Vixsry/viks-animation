const fs = require('fs');
const path = require('path');
const cssnano = require('cssnano');
const postcss = require('postcss');
// FUNCTION OF READING SOURCE FILE
const inputCss = fs.readFileSync(path.join(__dirname, 'src/viks.css'), 'utf8');
// CSS NANO FOR CSS MINIFICATION PROCESS
postcss([cssnano])
.process(inputCss, { from: undefined })
.then(result => {
// WRITE MINIFICATION RESULTS TO DIST
fs.writeFileSync(path.join(__dirname, 'dist/viks.min.css'), result.css);
if (result.map) {
fs.writeFileSync(path.join(__dirname, 'dist/viks.min.css.map'), result.map);
}
})
.catch(error => {
console.error('Error during CSS minification:', error);
});