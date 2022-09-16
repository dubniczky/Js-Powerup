output := dist/powerup.js


## Commands

# Create a production bundle
.PHONY: bundle
bundle: node_modules
	npx webpack bundle --mode production

# Start an auto build development bundler
.PHONY: dev
dev: node_modules
	npx webpack bundle --mode development --watch

# Run jest tests
.PHONY: test
test: $(output)
	npx jest

# Clean dist folder
.PHONY: clean
clean:
	rm -rf dist/**

# Install node modules
.PHONY: install
install:
	pnpm install

# Save current node version to .nvmrc
.PHONY: nvmrc
nvmrc:
	node -v > .nvmrc


## Dynamic dependencies

$(output): main.js prototypes/*.js
	$(MAKE) -s bundle

node_modules: package.json
	$(MAKE) -s install