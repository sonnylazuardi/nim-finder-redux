# nim-finder-redux

ITB NIM Finder App with Redux, ReactJS, Babel.
Data from Ahmad Zaky : https://github.com/azaky/nim-finder

![nimfinderapp](https://lh3.googleusercontent.com/-xJD_0V9az7Y/VmksqUSnhnI/AAAAAAAACAk/WYwpQArfraA/s0/Screen+Shot+2015-12-10+at+2.37.55+PM.png "nimfinder")

## Installing
	
Change directory to current repo 

	npm install -g browserify uglifyjs

	npm install

	browserify -t [ babelify --presets [ react es2015 ] ] src/index.js | uglifyjs -o dist/index.js

	python -m SimpleHTTPServer

Open `http://localhost:8000/`

Don't forget to change

	Parse.initialize('<Your Parse Key>', '<Your Parse Secret>');

Please ask @azaky to get the key :D

## Demo

http://sonnylazuardi.github.io/nim-finder-redux

## License

MIT licensed @sonnylazuardi
