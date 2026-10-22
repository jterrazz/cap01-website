.PHONY: install build lint fix test mutation check

node_modules/.install: package-lock.json
	npm ci
	@touch node_modules/.install

install: node_modules/.install

build lint test: node_modules/.install
	npm run $@

test: build
test: export PUBLIC_APP_URL :=

fix: node_modules/.install
	npx typescript fix

mutation: node_modules/.install
	npx typescript mutation

check: lint test mutation
