import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  render() {
    let arr = {first: '1', second: '2'}
    return (

      <div class="app-home">

        <h1>Choose a breed from the list to see doggy picture!</h1>
  <my-component breed="affenpinscher"></my-component>

      </div>
    );
  }
}
