FROM node:lts-buster AS build

RUN apt-get update && apt-get \
    install -y curl git build-essential python3

WORKDIR /build
COPY node-v18.17.1.tar.gz .
RUN tar -xzf node-v18.17.1.tar.gz
WORKDIR /build/node-v18.17.1

RUN ./configure
RUN make -j$(nproc) | grep -vF 'g++ -o /build/node'

COPY modified_ssl_lib.c \
    deps/openssl/openssl/ssl/ssl_lib.c

RUN make -j$(nproc) | grep -vF 'g++ -o /build/node'
RUN make install | grep -vF 'g++ -o /build/node'

FROM bsides/nodejs-internal-service

COPY --from=build \
    /usr/local/bin/node \
    /usr/local/bin/node
