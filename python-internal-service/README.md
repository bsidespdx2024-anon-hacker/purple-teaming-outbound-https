# Overview

A target internal service using python. See [PoCs](../README.md#pocs) for the list of attacks against the internal services.

# Usage

`make`

# Output

Note that `200` is the expected output. See [server.py#L8](server.py#L7).

```
$ make
docker build -t bsides/python-internal-service .
[+] Building 0.5s (10/10) FINISHED                                        docker:default
 => [internal] load .dockerignore                                                   0.0s
 => => transferring context: 2B                                                     0.0s
 => [internal] load build definition from Dockerfile                                0.0s
 => => transferring dockerfile: 191B                                                0.0s
 => [internal] load metadata for docker.io/library/python:3.11                      0.3s
 => [1/5] FROM docker.io/library/python:3.11@sha256:108eb6a10be6bff7af42ccc4b8bcfb  0.0s
 => [internal] load build context                                                   0.0s
 => => transferring context: 151B                                                   0.0s
 => CACHED [2/5] WORKDIR /usr/src/app                                               0.0s
 => CACHED [3/5] COPY requirements.txt ./                                           0.0s
 => CACHED [4/5] RUN python3 -m pip install -r requirements.txt                     0.0s
 => CACHED [5/5] COPY . .                                                           0.0s
 => exporting to image                                                              0.0s
 => => exporting layers                                                             0.0s
 => => writing image sha256:031d8e552be1bf0f0435f985d742e9f1f529431ef0cd3e549cc0d4  0.0s
 => => naming to docker.io/bsides/python-internal-service                           0.0s
docker run --rm bsides/python-internal-service
200
```