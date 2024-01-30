const {src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber"); 
const webp = require("gulp-webp");

function css (done) {

    // Identify the scss file
    src("src/scss/**/*.scss")

        // Adding Plumber
        .pipe(plumber())

        // Compile it
        .pipe(sass())

        // Save it 
        .pipe(dest("build/css"));

    done(); // Callback to end the function
}

function convertToWebp (done) {

    const imageQuality = {
        quality: 50
    };

    // Search the directory
    src("src/img/**/*.{png,jpg}")

    // Converts the image to webp
    .pipe(webp(imageQuality))

    // Save the convertion
    .pipe(dest("build/img"));

    done();
}

function dev (done) {

    // Watch the changes of the scss files
    watch("src/scss/**/*.scss", css);

    done();
}

exports.css = css;
exports.convertToWebp = convertToWebp;
exports.dev = parallel(convertToWebp, dev);