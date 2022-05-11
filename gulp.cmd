@SETLOCAL
@SET PATHEXT=%PATHEXT:;.JS;=;%
node  "%~dp0\node_modules\gulp\bin\gulp.js" %*
