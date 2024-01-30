const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber"); 

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

function dev (done) {

    watch("src/scss/**/*.scss", css);

    done();
}

exports.css = css;
exports.dev = dev;