#!/bin/bash

if [[ -z "${MONGODB_PORT}" ]]; then
  >&2 echo "'MONGODB_PORT' environment variable is missing"
  exit 1
fi

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

exec docker run \
  --name crud-example-app-database \
  --rm \
  --volume ${DIR}/data:/data/db \
  --volume ${DIR}/mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro \
  --publish 127.0.0.1:${MONGODB_PORT}:27017 \
  --env MONGO_INITDB_ROOT_USERNAME=test \
  --env MONGO_INITDB_ROOT_PASSWORD=test \
  mongo:4
