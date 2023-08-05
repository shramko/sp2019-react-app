const {src, dest, parallel, series} = require("gulp");
const replace = require('gulp-replace');
const relativeLocationUrl = '/SiteAssets/react-sp';

function fixIndexHtml() {
    const replacedPath = '/static/';
    return src('build/index.html')
        .pipe(replace(replacedPath, `${relativeLocationUrl}${replacedPath}`))
        .pipe(dest('build/'));
};

exports.fixPath = series(parallel(fixIndexHtml));