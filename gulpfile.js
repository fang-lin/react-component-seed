'use strict';

const gulp = require('gulp');
const util = require('gulp-util');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');

gulp.task('sass:demo', () => {
  return gulp.src('./src/demo/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/demo'));
});

gulp.task('webpack:demo', (done) => {
  const webpackConfig = {
    entry: {
      main: './src/demo/main.js',
      vendor: ['react']
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015', 'stage-0']
          },
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json']
    },
    output: {
      filename: 'main.js'
    },
    plugins: [
      new webpack.webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
    ]
  };

  return gulp.src('./')
    .pipe(webpack(webpackConfig).on('data', util.log).on('error', done))
    .pipe(gulp.dest('./dist/demo'));
});

gulp.task('copy:demo', () => {
  return gulp.src('./src/demo/index.html')
    .pipe(gulp.dest('./dist/demo'));
});

gulp.task('watch:sass:demo', () => {
  return gulp.watch('./src/**/*.scss', ['sass:demo']);
});

gulp.task('watch:webpack:demo', () => {
  return gulp.watch('./src/**/*.js', ['webpack:demo']);
});

gulp.task('watch:copy:demo', () => {
  return gulp.watch('./src/demo/index.html', ['copy:demo']);
});

gulp.task('watch:demo', ['watch:sass:demo', 'watch:webpack:demo', 'watch:copy:demo']);

gulp.task('sass:build', () => {
  return gulp.src('./src/demo/my-component.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('webpack:build', (done) => {
  const webpackConfig = {
    entry: {
      main: './src/demo/main.js',
      vendor: ['react']
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          loader: 'babel',
          query: {
            presets: ['react', 'es2015', 'stage-0']
          },
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json']
    },
    output: {
      filename: 'main.js'
    },
    plugins: [
      new webpack.webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
    ]
  };

  return gulp.src('./')
    .pipe(webpack(webpackConfig).on('data', util.log).on('error', done))
    .pipe(gulp.dest('./dist/demo'));
});

//gulp.task('watch:sass:build', () => {
//  return gulp.watch('./src/**/*.scss', ['sass:build']);
//});
//
//gulp.task('watch:webpack:build', () => {
//  return gulp.watch('./src/**/*.js', ['webpack:build']);
//});

gulp.task('build', ['sass:build', 'webpack:build', 'watch:copy:demo']);

gulp.task('watch:demo', ['watch:sass:demo', 'watch:webpack:demo', 'watch:copy:demo']);