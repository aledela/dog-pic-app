import { Component, State, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @State() images: string[]
  @State() imageUrls: string[]

  componentDidLoad() {
    let urlList = `https://dog.ceo/api/breeds/list/all`;

    // Retrieve the list of breeds through the Dog CEO api and fill the {images} array with the list.
    fetch(urlList).then(response => {
      response.json().then(json => {
        this.images = Object.keys(json.message);
      });
    });

    //getImageUrls() does not update {imageUrls} unless imageUrls has been initialized first. The element {imageUrls[0]} will be ignored.
    this.imageUrls = ["initialElement"];
    this.getImageUrls();
  }

  render() {
    return (
      <div class="container">
      <ul>
        {this.images.map((use, index) =>
          <li><a href={`${this.imageUrls[index+1]}`}>{use}</a></li>
        )}
      </ul>
      </div>
    )
  }
  // getImageUrls(): function to retrieve a random image from the Dog CEO api for every dog breed.
  // The retrieved images are saved in the {imageUrls} array. The function does not return a value.
  async getImageUrls(){
    for(let i = 0; i< this.images.length-1; i++){
      let urlImages = `https://dog.ceo/api/breed/${this.images[i]}/images/random`;
      await fetch(urlImages).then(response => {
        response.json().then(json => {
          this.imageUrls=[...this.imageUrls, json.message];
        });
      });
    }
  }
}
