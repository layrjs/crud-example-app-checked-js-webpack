# CRUD Example App

A simple example showing how to build a full-stack CRUD app with Liaison.

## Usage

### Running the app in development mode

Execute the following command:

```sh
FRONTEND_PORT=16577 \
  BACKEND_PORT=16578 \
  MONGODB_STORE_CONNECTION_STRING=mongodb://test:test@localhost:16579/test \
  MONGODB_PORT=16579 \
  npm run start
```

The frontend should then be available here: http://localhost:16577.
