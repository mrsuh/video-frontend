#!/bin/sh

set -xe

cd "$( cd `dirname $0` && pwd )/../web"
npm install

cd ..

cp web/config/config.js.dist web/config/config.js
npm install
./node_modules/grunt-cli/bin/grunt build