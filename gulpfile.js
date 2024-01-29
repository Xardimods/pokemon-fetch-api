const {src, dest, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css (done) {

    // Identify the scss file
    src("src/scss/app.scss")

        // Compile it
        .pipe(sass())

        // Save it 
        .pipe(dest("build/css"));

    done(); // To done the script
}

function dev (done) {

    watch("src/scss/app.scss", css);

    done();
}

exports.css = css;
exports.dev = dev;