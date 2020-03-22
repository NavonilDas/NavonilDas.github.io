#!bin/sh

rm -f ../*.js
rm -f ../*.css
rm -f ../*.html
rm -f ../*.ico
rm -f ../*.txt
rm -r -f ../assets
ng build --prod --aot --extract-css --base-href https://navonildas.github.io/ && cp -a dist/Portfolio/. ../