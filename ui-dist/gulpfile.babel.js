'use strict';

import gulp from 'gulp';
import bs from 'browser-sync';
import runSequence from 'run-sequence';
import del from 'del';
import gulpLoadPlugins from 'gulp-load-plugins';
import gutil from 'gulp-util'
import { get } from 'lodash'

const browserSync = bs.create();
const $ = gulpLoadPlugins();

// CONFIG
const taskName = gutil.env._[0];
const isProduction = taskName === 'build';

// Add vendor prefix support for the following browsers
const AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 21',
  'chrome >= 31',
  'safari >= 5',
  'opera >= 23',
  'ios >= 6',
  'android >= 4',
  'bb >= 10'
];

const ftpDomain = '';
const FTP_CONFIG = {
  host: '',
  user: '',
  pass: '',
  remotePath: '' // insert remote path
};
const appPath = 'app/';
const viewPath = 'view/';
const paths = {
  scss: {
    src: [appPath + 'scss/**/*.scss'],
    dest: viewPath + 'cs',
    build: 'dist/cs'
  },
  js: {
    src: [appPath + 'js/concat/**/*.js'],
    dest: viewPath + 'js',
    build: 'dist/js'
  },
  twig: {
    src: [appPath + 'twig/**/*.twig'],
    dest: viewPath,
    build: 'dist'
  },
  img: {
    src: [appPath + 'img/**/*'],
    dest: viewPath + 'img',
    build: 'dist/img'
  },
  fonts: {
    src: [appPath + 'fonts/**/*'],
    dest: viewPath + 'fonts',
    build: 'dist/fonts'
  },
}

const excludePaths = {
  twig: ['partials', 'layouts']
}

Object.keys(excludePaths).map((key) => {
  excludePaths[key].map((folder) => {
    get(paths, `${key}.src`, []).push(`!${appPath}${key}/${folder}/**/*`)
  });
});

const changeEvent = (evt) => {
  const line = '---------------------------------------------------';
  gutil.log( line + '\n\tFile', gutil.colors.cyan(evt.path.replace(new RegExp('/.*(?=/' + appPath + ')/'), '')), 'was', gutil.colors.magenta(evt.type));
};

// reload
gulp.task('bs-reload', () => {
  browserSync.reload();
});


// Static server
gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: viewPath
    }
  });
});

// - HTML
gulp.task('html', () => {
  return gulp.src( paths.twig.src )
    .pipe($.plumber({
      errorHandler: (err) => {
        new gutil.PluginError('TWIG', err, {showStack: true});
        this.emit('end');
      }
    }))
    .pipe($.twig())
    .pipe( isProduction ? $.processhtml() : gutil.noop())
    .pipe( isProduction ? $.htmlmin({
      conditionals: true,
      empty: true,
      cdata: true,
      quotes: true
    }) : gutil.noop() )
    .pipe($.prettify({
      unformatted: ['pre', 'code'],
      indent_inner_html: true,
      indent_size: 2,
      brace_style: 'end-expand'
    }))

    .pipe( isProduction ? gulp.dest( paths.twig.build ) : gulp.dest( paths.twig.dest ) );
});

// - CSS
gulp.task('css', () => {
  return gulp.src( paths.scss.src )
    .pipe($.sass({
      outputStyle: 'expanded'
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(isProduction ? $.rename({
      suffix: '.min'
    }) : gutil.noop())
    .pipe( isProduction ? gulp.dest( paths.scss.build ) : gulp.dest( paths.scss.dest ) )
    .pipe( isProduction ? gutil.noop() : browserSync.stream());
});

// - JS
gulp.task('js', () => {
  return gulp.src( paths.js.src )
    .pipe($.plumber({
      errorHandler: (err) => {
        new gutil.PluginError('JS', err, {showStack: true});
        this.emit('end');
      }
    }))
    .pipe($.concat('app.js'))
    .pipe(isProduction ? gulp.dest( paths.js.build ) : gulp.dest( paths.js.dest ) );
});

gulp.task('js:nonConcat', () => {
  return gulp.src( appPath + 'js/*.js' )
    .pipe(gulp.dest( isProduction ? paths.js.build : paths.js.dest ));
});

// - IMAGES
gulp.task('images', () => {
  return gulp.src( paths.img.src )
    .pipe(gulp.dest( isProduction ? paths.img.build : paths.img.dest ));
});

// - FONTS
gulp.task('fonts', () => {
  return gulp.src( paths.fonts.src )
    .pipe(gulp.dest( isProduction ? paths.fonts.build : paths.fonts.dest ));
});

gulp.task('clean', del.bind(null, ['dist']));

gulp.task('ftp', () => {
  return gulp.src('dist/**')
    .pipe($.ftp(FTP_CONFIG))
    .on('finish', () => {
      var msg = 'Result URLs: ' + gutil.colors.magenta(ftpDomain + FTP_CONFIG.remotePath);
      var line = '===================================================';
      gutil.log('\n' + line + '\n' + msg + '\n' + line);
    });
});

// - Combine media query
gulp.task('cmq', () => {
  return gulp.src('dist/cs/*.css')
  .pipe($.groupCssMediaQueries())
  .pipe($.cleanCss())
  .pipe(gulp.dest( paths.scss.build ));
});

gulp.task('default', () => {
  return gulp.start('serve');
});

gulp.task('serve',['html','css','js', 'js:nonConcat', 'fonts', 'images', 'browser-sync'], () => {
  gulp.watch( appPath + 'twig/**/*.twig' ).on('change', (evt) => {
    changeEvent(evt);
    runSequence(['html'],'bs-reload');
  });
  gulp.watch(paths.scss.src, ['css']).on('change', (evt) => {
    changeEvent(evt);
  });
  gulp.watch( appPath + 'js/**/*.js' ).on('change', (evt) => {
    changeEvent(evt);
    runSequence(['js'],'bs-reload');
  });
  gulp.watch( paths.img.src ).on('change', (evt) => {
    changeEvent(evt);
    runSequence(['images'],'bs-reload');
  });
  gulp.watch( paths.fonts.src ).on('change', (evt) => {
    changeEvent(evt);
    runSequence(['fonts'],'bs-reload');
  });
});

// Build Production Files
gulp.task('build', ['clean'], (cb) => {
  runSequence(['html', 'css', 'js', 'js:nonConcat', 'fonts', 'images'], 'cmq', cb);
});
