const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const htmlmin = require('htmlmin');

// 合并
gulp.task('javascript',() => {
  return gulp.src('./lib/*.js')
    .pipe(concat('my.js'))
    .pipe(gulp.dest('./dist'));
});

// 合并 压缩
// 小坑 js里面有es2015的语法，需要引入babel
gulp.task('cpmpress', function(){
  return gulp.src('./lib/*.js')
    .pipe(concat('my.min.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

// 利用gulp-babel编译es6 需要的包： gulp-babel babel-core babel-preset-es2015
gulp.task('es6',() => {
  pump([
        gulp.src('lib/es6.js'),
        babel({'presets': ['es2015']}),
        gulp.dest('dist/')
    ])
});

// 实时监听es6.js文件 变化就执行es6的任务
gulp.task('watches6',() => {
  gulp.watch('lib/es6.js',['es6']);
});

// 压缩html文件
gulp.task('minHtml',() => {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };

    gulp.src('html/*.html')
      .pipe(htmlmin(options))
      .pipe(gulp.dest('dist/html'));

});

// gulp.task('default',['javascript','cpmpress']);
// gulp.task('default',['es6']);
// gulp.task('default',['es6','watches6']);
gulp.task('default',['minHtml']);
