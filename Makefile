.PHONY: install build lint fix test mutation check

install:
	npm ci

build lint test:
	npm run $@

test: build
test: export PUBLIC_APP_URL :=

fix:
	npx typescript fix

mutation:
	npx typescript mutation

check: lint test mutation
