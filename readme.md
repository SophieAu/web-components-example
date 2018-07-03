# Web Component Micro Frontend - A Minimal Example

This project shows how to create simple web components using vanilla JS and how to load all of them on a website.

## Naming Conventions
According to the spec, the name of the web component needs to include a dash('-') to ensure that it'll never clash with valid html tags. In this app I used the convention `ws-[framework]`.


## To prevent CORS from complaining
run

    python -m http.server
or

    python -m SimpleHTTPServer

to launch a small server in your pwd (which ideally would be your project root).


## Browser Support
This project uses HTML Imports and Custom Elements from the Web Components spec which are only supported by Chrome (and Firefox by setting `about:config` variables). In any other browsers. In any other browsers, the Custom Element simply won't show up.
