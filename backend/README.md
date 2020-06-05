# CRUD example app / backend

## Usage

### Running the backend in development mode

Execute the following command:

```sh
BACKEND_PORT=16578 MONGODB_STORE_CONNECTION_STRING=mongodb://test:test@localhost:16579/test \
  npm run start
```

### Debugging

Set the following environment variables:

```sh
DEBUG=liaison:* DEBUG_DEPTH=10
```
