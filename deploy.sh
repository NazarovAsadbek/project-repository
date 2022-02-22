#!/usr/bin/env sh

set -e

yarn
yarn build

cd dist

cp index.html 404.html

git init
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/NazarovAsadbek/project-repository.git master:gh-pages

cd -
