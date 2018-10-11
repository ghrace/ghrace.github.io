#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git init
git config user.name 'ghrace'
git config user.email 'ghrsevn@live.com'
git add -A
git commit -m 'deploy'

git push -f git@github.com:ghrace/ghrace.github.io.git master

cd -