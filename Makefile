dist := dist
output := powerup.js
output_min := powerup.min.js


## Commands

# Create a production bundle
.PHONY: bundle
bundle: node_modules
	npx webpack bundle --mode production --env=minimize

# Create a development bundle
.PHONY: bundle-dev
bundle-dev: node_modules
	npx webpack bundle --mode development

# Create a release bundle
.PHONY: release
release: node_modules
	npx webpack bundle --mode production --output-filename $(output)
	npx webpack bundle --mode production --env=minimize --output-filename $(output_min)

# Start an auto build development bundler
.PHONY: dev
dev: node_modules
	npx webpack bundle --mode development --watch

# Run jest tests
.PHONY: test
test: $(dist)/$(output)
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

$(dist)/$(output): main.js prototypes/*.js
	$(MAKE) -s bundle

node_modules: package.json
	$(MAKE) -s install