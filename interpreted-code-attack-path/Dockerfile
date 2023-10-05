# prepare the modified_index.js

FROM node:lts-buster AS build

WORKDIR /tmp

RUN npm install node-fetch@3.3.2
COPY inject.js .
RUN sed node_modules/node-fetch/src/index.js \
    -e '/fetch-blob\/from.js/r inject.js' \
    -e '/fetch(url, options_).*$/a \
    options_.agent = new LoggingAgent();' \
    > modified_index.js

# apply the code injection

FROM bsides/nodejs-internal-service

COPY --from=build \
    /tmp/modified_index.js \
    node_modules/node-fetch/src/index.js

