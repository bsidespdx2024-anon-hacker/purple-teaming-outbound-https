# Overview

The purpose of this Docker image it to serve as a target internal service using nodejs.

# Usage

`make`

# Output

Note that `200` is the expected output. See [server.js#L8](server.js#L8).

```
$ make
docker build -t nodejs-internal-service .
[+] Building 1.4s (9/9) FINISHED                                                                       docker:default
 => [internal] load build definition from Dockerfile                                                             0.0s
 => => transferring dockerfile: 140B                                                                             0.0s
 => [internal] load .dockerignore                                                                                0.0s
 => => transferring context: 2B                                                                                  0.0s
 => [internal] load metadata for docker.io/library/node:lts-buster                                               0.3s
 => [1/4] FROM docker.io/library/node:lts-buster@sha256:2daec43046b715994ce9c816b9c91478a0d5fb79029b59e45da277e  0.0s
 => [internal] load build context                                                                                0.0s
 => => transferring context: 336B                                                                                0.0s
 => CACHED [2/4] WORKDIR /usr/src/app                                                                            0.0s
 => [3/4] COPY . .                                                                                               0.1s
 => [4/4] RUN npm ci --omit=dev                                                                                  0.8s
 => exporting to image                                                                                           0.1s
 => => exporting layers                                                                                          0.1s
 => => writing image sha256:156940312b12441d077e3f360d4aaecaef9bbcfda2f07ebf4a07af1e508fedd1                     0.0s 
 => => naming to docker.io/library/nodejs-internal-service                                                       0.0s
docker run --rm nodejs-internal-service
200
```