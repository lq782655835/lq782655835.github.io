#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# Commit changes.
msg="deploy at `date`"
if [ $# != 0 ]
  then msg="$*"
fi
git add -A
git commit -m "$msg"
echo 'local commited'

git push -f https://github.com/lq782655835/lq782655835.github.io.git develop
echo 'remote commited'

git push origin `git subtree split --prefix site master`:master --force
# git subtree push --prefix site origin gh-pages
echo 'build in gh-pages'
# cd -