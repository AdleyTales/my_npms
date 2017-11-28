const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

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

// gulp.task('default',['javascript','cpmpress']);
// gulp.task('default',['es6']);
gulp.task('default',['es6','watches6']);
