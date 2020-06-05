import {ComponentHTTPServer} from '@liaison/component-http-server';
import {MongoDBStore} from '@liaison/mongodb-store';

import {Movie} from './components/movie';

const port = Number(process.env.BACKEND_PORT);

if (isNaN(port)) {
  throw new Error(`'BACKEND_PORT' environment variable is missing`);
}

const connectionString = process.env.MONGODB_STORE_CONNECTION_STRING;

if (!connectionString) {
  throw new Error(`'MONGODB_STORE_CONNECTION_STRING' environment variable is missing`);
}

const store = new MongoDBStore(connectionString);
store.registerRootComponent(Movie);

const componentServer = new ComponentHTTPServer(Movie, {port});
componentServer.start();
