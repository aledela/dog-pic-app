# Dog Pic App
This app is built in StencilJS using TypeScript to show dog images retrieved from the Dog CEO api (https://dog.ceo/dog-api/).
I had not used Typescript or Javascript for back-end development previously to building this app but I was able to learn how to build web components using those languages and I plan to keep working on the application to further develop my skills.

# Going Forward
The application will contain a searchable dropdown of the list of breeds for the user to search and select the breed to see a dog picture. There will be buttons for users to get random images of a dog and to choose how many images they obtain. Users will also be able to create a user profile, save their favorite dog pictures and share it with their other users.

#Stencil Starter App
Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

## Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
npm init stencil app
```

and run:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```
