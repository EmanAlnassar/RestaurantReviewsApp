# **Restaurant Reviews** App

This is an _accessibility_ project at [**Udacity's FEND**](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011). It requires to make the provided site fully responsive across different devices (mobile-ready) and assessable throw keyboard and voice-over  users. Furthermore, update it to be an offline-first application.

## Folder Content

- index.html
- restaurant.html
- /css
- /data
- /img
- /js
- sw.js

## Getting Started & Experience

1. In this folder, run up a simple HTTP server to serve up the site files on your local computer. 

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8228` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8228`. 
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8228`.
2. With your server running, visit the site throw Google Chrome: `http://localhost:8228`.

## User Experience

1. Look around the site for a bit to see what the experience looks like.
   - The site becomes fully responsive with the power of using `<meta>` viewport,  `%` value and `@media` query - _open the developer tool_ - to see how the site act with different devices.
2. Use your keyboard to see how the site navigation behaves.
   - Skip links and `tabindex` add to improve the navigation with the `tab` key by focusing important info and links.
3. Use ChromeVox Classic Extension or another voice-over app to experiance the site navigation.
   - role`, `aria-label` and `alt` attributes are used to make the reader-device read an explanation of hard to reach elements like visual content to provide smooth accessibility and powerful web browsing.
4. Check that a service worker is enabled by going to `chrome://inspect/#service-workers` and looking for `http://localhost:8228/sw.js`.
   - Add a ServiceWorker script to approach offline first power as if there is no internet connection to enhance the accessibility of the site.