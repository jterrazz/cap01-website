.PHONY: install build lint fix test mutation check

install:
	npm ci

build lint test:
	npm run $@

test: build

fix:
	npx typescript fix

mutation:
	npx typescript mutation

check: lint test mutation
