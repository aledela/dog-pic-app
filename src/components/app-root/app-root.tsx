import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Dog Lover App</h1>
          <a href="/profile/stencil" class = "button">Profile Page</a>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>

        <footer>
        <p>*All of the links to the dog images are obtained through the Dog API : https://dog.ceo/dog-api/*</p>
        </footer>
      </div>
    );
  }
}
