IMAGE_NAME=bsides/interpreted-code-attack-path

build:
	docker build -t ${IMAGE_NAME} .

run: build
	docker run --rm ${IMAGE_NAME}

run_head: build
	docker run --rm ${IMAGE_NAME} 2>&1 | head -n 15

.DEFAULT_GOAL := run