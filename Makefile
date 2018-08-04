# add node tools into build path
export PATH := node_modules/.bin:$(PATH)

dev:
	budo src/main.js:build.js -o -l -H 127.0.0.1

dist:
	browserify src/main.js -o docs/build.js
	cp -f index.html docs/index.html
	