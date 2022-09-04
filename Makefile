output := dist/powerup.js

.PHONY: bundle
bundle:
	npx webpack bundle

.PHONY: test
test: $(output)
	npx jest

.PHONY: clean
clean:
	rm -rf dist


$(output): main.js prototypes/*.js
	$(MAKE) -s bundle