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

The data was crawled in April 2015 and has 13855 records, which means that there are 13855 students who take at least a class in the second semester of 2014/2015. Those data are stored in Parse.

## Demo

http://sonnylazuardi.github.io/nim-finder-redux

## License

MIT licensed @sonnylazuardi
