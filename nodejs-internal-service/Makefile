IMAGE_NAME=nodejs-internal-service

build:
	docker build -t ${IMAGE_NAME} .

run: build
	docker run --rm ${IMAGE_NAME}

.DEFAULT_GOAL := run