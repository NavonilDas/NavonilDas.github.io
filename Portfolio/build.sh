#!bin/sh

rm -f ../*.js
rm -f ../*.css
rm -f ../*.html
rm -f ../*.ico
rm -f ../*.txt
rm -r -f ../assets
ng build --prod --aot --extract-css && cp -a dist/Portfolio/. ../
