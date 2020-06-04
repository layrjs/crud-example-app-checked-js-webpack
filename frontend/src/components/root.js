import {Component, consume} from '@liaison/component';
import React from 'react';
import {view, useBrowserRouter} from '@liaison/react-integration';

export class Root extends Component {
  @consume() Frontend;
  @consume() Common;

  @view() static Main() {
    const [router, isReady] = useBrowserRouter(this.Root);

    if (!isReady) {
      return null;
    }

    const content = router.callCurrentRoute({fallback: this.Common.RouteNotFound});

    return (
      <div>
        <h1>CRUD example app</h1>
        {content}
      </div>
    );
  }
}
