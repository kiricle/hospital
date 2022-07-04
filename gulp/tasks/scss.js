import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; // Minify CSS
import webpcss from 'gulp-webpcss'; // Output WEBP images
import autoPrefixer from 'gulp-autoprefixer'; // add vendor prefixers
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // Group media queries

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: true })
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: 'SCSS',
        message: 'Error: <%= error.message %>'
      })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(groupCssMediaQueries())
    .pipe(webpcss(
      {
        webpcss: '.webp',
        noWebpClass: '.no-webp',
      }
    ))
    .pipe(autoPrefixer({
      grid: true,
      overrideBrowserslist: ['last 3 versions'],
      cascade: true
    }))
    // UNCOMMENT THE LINE BELOW IF THERE IS NEED IN NON-MINIFY CSS FILES
    // .pipe(app.gulp.dest(app.path.build.css))
    .pipe(cleanCss())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
}

