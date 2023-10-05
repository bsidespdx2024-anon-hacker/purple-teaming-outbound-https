# Overview

Demonstrates the Language Binary Attack Path.

# Usage

* `make` for the full output.
* `make run_head` for abbreviated output.

# Output

The `Sending: ...` and `Receiving: ...` output PoCs interception of the HTTPS content in the clear.

```
$ make run_head
$ make run_head
docker build -t bsides/language-binary-attack-path .
[+] Building 0.5s (19/19) FINISHED                                                                                 docker:default
 => [internal] load .dockerignore                                                                                            0.0s
 => => transferring context: 2B                                                                                              0.0s
 => [internal] load build definition from Dockerfile                                                                         0.0s
 => => transferring dockerfile: 602B                                                                                         0.0s
 => [internal] load metadata for docker.io/bsides/nodejs-internal-service:latest                                             0.0s
 => [internal] load metadata for docker.io/library/node:lts-buster                                                           0.3s
 => [build  1/11] FROM docker.io/library/node:lts-buster@sha256:2daec43046b715994ce9c816b9c91478a0d5fb79029b59e45da277e2935  0.0s
 => [stage-1 1/2] FROM docker.io/bsides/nodejs-internal-service                                                              0.0s
 => [internal] load build context                                                                                            0.0s
 => => transferring context: 83B                                                                                             0.0s
 => CACHED [build  2/11] RUN apt-get update && apt-get     install -y curl git build-essential python3                       0.0s
 => CACHED [build  3/11] WORKDIR /build                                                                                      0.0s
 => CACHED [build  4/11] COPY node-v18.17.1.tar.gz .                                                                         0.0s
 => CACHED [build  5/11] RUN tar -xzf node-v18.17.1.tar.gz                                                                   0.0s
 => CACHED [build  6/11] WORKDIR /build/node-v18.17.1                                                                        0.0s
 => CACHED [build  7/11] RUN ./configure                                                                                     0.0s
 => CACHED [build  8/11] RUN make -j$(nproc) | grep -vF 'g++ -o /build/node'                                                 0.0s
 => CACHED [build  9/11] COPY modified_ssl_lib.c     deps/openssl/openssl/ssl/ssl_lib.c                                      0.0s
 => CACHED [build 10/11] RUN make -j$(nproc) | grep -vF 'g++ -o /build/node'                                                 0.0s
 => CACHED [build 11/11] RUN make install | grep -vF 'g++ -o /build/node'                                                    0.0s
 => CACHED [stage-1 2/2] COPY --from=build     /usr/local/bin/node     /usr/local/bin/node                                   0.0s
 => exporting to image                                                                                                       0.0s
 => => exporting layers                                                                                                      0.0s
 => => writing image sha256:4d0d2855af5b5d86207aea78401e8235bd018780a4ac15101fa358f54846e833                                 0.0s
 => => naming to docker.io/bsides/language-binary-attack-path                                                                0.0s
docker run --rm bsides/language-binary-attack-path 2>&1 | head -n 15
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