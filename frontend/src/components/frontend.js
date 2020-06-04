import {provide} from '@liaison/component';
import {Storable} from '@liaison/storable';
import {ComponentHTTPClient} from '@liaison/component-http-client';

import {Root} from './root';
import {MovieList} from './movie-list';
import {Movie} from './movie';
import {Common} from './common';

export const getFrontend = async ({backendURL}) => {
  const client = new ComponentHTTPClient(backendURL, {mixins: [Storable]});

  const Backend = await client.getComponent();

  class Frontend extends Backend {
    @provide() static Root = Root;
    @provide() static MovieList = MovieList;
    @provide() static Movie = Movie(Backend.Movie);
    @provide() static Common = Common;
  }

  return Frontend;
};
