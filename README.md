# Bookmarks

This is test assignment submited by Michael Kilesa.

## Development server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`.
## Description

Bookmarks module contains everything needed. I added effects, mock json response and loading indicator to make it more complete. I use Ramda to handle immutability.

bookmarks.types describes persistent state.

bookmarks.constants contains actions and constants.

bookmarks.model contains reducer, selectors, any pure function for working with current data model (feature state).

bookmarks.effects contains effects.

bookmarks.component contains reactive form to handle transient state (new bookmark inputs).

## Screenshot

![Bookmarks screenshot](/src/assets/img/bookmarks-screenshot.png?raw=true "Bookmarks screenshot")
