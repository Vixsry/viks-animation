module.exports = {
  plugins: [
    require('postcss-banner')({
      banner: `/*!
 * MIT LISENSI
 * Copyright (c) 27 Nov 2024 Vixsry
 * Lisensi   : https://github.com/Vixsry/viks-animation/blob/main/LICENSE
 * Website   : https://viksanimation.my.id/
 * Github    : https://github.com/Vixsry/viks-animation
 * Author    : Vixsry
 * Instagram : https://www.instagram.com/viksry12
 * Facebook  : https://www.facebook.com/share/1E17jqYu34/
 */`,
      important: true
    }),
    require('cssnano')()
  ]
};