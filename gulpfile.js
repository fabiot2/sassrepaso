const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// Define el origen y setea el destino del archivo 
function buildStyles() {
    return src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('./assets/css'))
}

// Cuando se guarda o aplican cambios a nuestro archivo, ejecuta la funcion para crear buildStyles
function watchTask () {
    watch(['./sass/**/*.scss'], buildStyles)
}

exports.default = series (buildStyles, watchTask)