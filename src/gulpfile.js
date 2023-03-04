const {src, dest} = require('gulp');
const concat = require('gulp-concat');

const cssBundle = () =>
    src([
        'css/main.css',
        'css/header.css'  , 
        'css/features.css'  , 
        'css/triple.css' ,  
        'css/hosting.css' ,  
        'css/saving.css'  , 
        'css/platform.css'  , 
        'css/plan.css'   ,
        'css/customer.css'  , 
        'css/problems.css'  , 
        'css/footer.css'   ,
        'css/burger-page.css',
    ])
    .pipe(concat('style.css'))
    .pipe(dest('styles'));

exports.cssBundle = cssBundle;