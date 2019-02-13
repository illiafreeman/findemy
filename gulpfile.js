var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    sassmin     = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    autoprefixer= require('gulp-autoprefixer');
    sourcemaps  = require('gulp-sourcemaps');

gulp.task('sass', function(){
    //return gulp.src(['!app/sass/app.scss', 'app/sass/**/*.scss']) исключаем конкретный файл и берем все остальные во всех директориях
    //return gulp.src('app/sass/**/*.+(scss|sass)')
    return gulp.src('app/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    //.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('sassmin', function(){
    //return gulp.src(['!app/sass/app.scss', 'app/sass/**/*.scss']) исключаем конкретный файл и берем все остальные во всех директориях
    //return gulp.src('app/sass/**/*.+(scss|sass)')
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('scripts', function(){
    return gulp.src([
        'plugins/jquery_2.1.1.min.js',
        'plugins/owl.carousel.min.js',
        'plugins/jquery.slimscroll.js',
        'plugins/ion.rangeSlider.min.js',
        'plugins/progressbar.js',
        'plugins/slick.min.js'



    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js/'))
    
});

/*gulp.task('css-libs', ['sass'], function(){ // таск sass отрабатывает до css-libs
    return gulp.src('app/css/libs.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css'));
    
})*/

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('clean', function(){ 
    return del.sync('dist');
});

gulp.task('img', function(){ 
    return gulp.src('app/img/**/*')
    .pipe(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function(){ // в [] таски которые должны выполниться до watch
    gulp.watch('app/sass/**/*.scss', ['sass']); // когда наступает изменение в файлах срабатывает таск sass
    gulp.watch('app/*.html', browserSync.reload); // когда наступает изменение в файлах срабатывает reload
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('plugins/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'sass', 'sassmin', 'scripts'], function(){
    
    var buildcss = gulp.src('app/css/**/*')
        .pipe(gulp.dest('dist/css'));
    
    var buildfonts = gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
    
    var buildjs = gulp.src('app/js/*.js')
        .pipe(gulp.dest('dist/js'));
    
    var buildhtml = gulp.src('app/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['watch']);





