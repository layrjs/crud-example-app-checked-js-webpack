import {ComponentHTTPServer} from '@liaison/component-http-server';
import {MongoDBStore} from '@liaison/mongodb-store';

import {Movie} from './components/movie';

const connectionString = process.env.MONGODB_STORE_CONNECTION_STRING;

if (!connectionString) {
  throw new Error(`'MONGODB_STORE_CONNECTION_STRING' environment variable is missing`);
}

new MongoDBStore(connectionString, Movie);

const componentServer = new ComponentHTTPServer(Movie, {port: 16578});

componentServer.start();
