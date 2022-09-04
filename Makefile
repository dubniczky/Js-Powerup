output := dist/powerup.js


## Commands

.PHONY: bundle
bundle: node_modules
	npx webpack bundle

.PHONY: test
test: $(output)
	npx jest

.PHONY: clean
clean:
	rm -rf dist

.PHONY: install
install:
	pnpm install


## Dynamic dependencies

$(output): main.js prototypes/*.js
	$(MAKE) -s bundle

node_modules: package.json
	$(MAKE) -s install