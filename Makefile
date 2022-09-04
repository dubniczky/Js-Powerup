output := dist/powerup.js

bundle::
	npx webpack bundle

test:: $(output)
	npx jest

clean::
	rm -rf dist


$(output): main.js prototypes/*.js
	$(MAKE) -s bundle