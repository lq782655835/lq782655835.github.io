#!/usr/bin/env sh

# build
npm run docs:build

# upload git
git add -A
git commit -m 'deploy'
git push -f git@github.com:lq782655835/lq782655835.github.io.git master

echo 'done'