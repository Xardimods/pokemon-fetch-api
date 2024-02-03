const {src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber"); 
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");

// Images
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

// JS
const terser = require("gulp-terser-js");

function css (done) {

    // Identify the scss file
    src("src/scss/**/*.scss")

        // Compile and save the reference when inspects
        .pipe(sourcemaps.init())

        // Adding Plumber
        .pipe(plumber())

        // Compile it
        .pipe(sass())

        // Compile to one coding line
        .pipe(postcss([autoprefixer(), cssnano()]))

        // Where is going to save
        .pipe(sourcemaps.write("."))

        // Save it 
        .pipe(dest("build/css"));

    done(); // Callback to end the function
}

function transportSvg (done) {

    src("src/img/**/*.svg")
    // .pipe(cache(imagemin(options)))
    .pipe(dest("build/img"));

    done(); 
}

function optimizeImages (done) {

    const options = {
        optimizationLevel: 3
    };

    src("src/img/**/*.{png,jpg,ico}")
    .pipe(cache(imagemin(options)))
    .pipe(dest("build/img"));

    done();
}

function convertToWebp (done) {

    const options = {
        quality: 50
    };

    // Search the directory
    src("src/img/**/*.{png,jpg}")

    // Converts the image to webp
    .pipe(webp(options))

    // Save the convertion
    .pipe(dest("build/img"));

    done();
}

function convertToAvif(done) {
    const opciones = {
        quality: 50
    }; // calidad de imagen

    src('src/img/**/*.{png,jpg}')
        .pipe(avif(opciones))
        .pipe(dest('build/img'));
    done();
} // convierte imagenes a formato webp

function compileJavaScript (done) {
    src("src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/js"));

    done();
}

function dev (done) {

    // Watch the changes of the scss files
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", compileJavaScript);

    done();
}

exports.css = css;
exports.transportSvg = transportSvg;
exports.compileJavaScript = compileJavaScript;
exports.optimizeImages = optimizeImages;
exports.convertToWebp = convertToWebp;
exports.convertToAvif = convertToAvif;
exports.dev = parallel(optimizeImages, convertToWebp, convertToAvif, compileJavaScript, dev);