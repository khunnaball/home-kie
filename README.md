# h0me

## h0me is a minimalist start page written with Vue.js

## Features
* Customisable bookmarks
* Clock with changeable 12/24hr time preference
* Change your search engine preference (google, ddg, etc.)
* Easy configuration with the included config.js file.

## Usage
Currently you will need to host this yourself, you can either do with with Github pages, something like Vercel (which is what I use) or any other hosting provider.

## Customisation
All settings can be managed in the `config.js` file.
# General
Change the default name, change if links open in a new tab and title etc.
```
// General
name: 'kie',
openInNewTab: false,
title: 'kie-home',
```
# Clock
Change between 12/24hr format.
```
// Clock
twelveHourFormat: true,
```
# Search Bar
Customise your search engine (google, duck duck go), add search bar placeholder text as well as turn on/off auto focus.
```
// Search
searchEngine: 'google', // google, ddg
barPlaceholder: 'search..', // Set to ' ' for no placeholder
autoFocusBar: true,
```

# Bookmarks
Change your bookmarks, there are 5 on each row with 2 rows. To display less on each row just remove the values from name & link.
```
// Bookmarks
firstBookmarksList: [
    {
        id: '1', // entry ID, do not change.
        name: 'youtube', // Name of bookmark
        link: 'https://youtube.com/', // Link for bookmark
    },
    {
        id: '2',
        name: 'twitter',
        link: 'https://twitter.com/',
    },
]
```

## Updates
I will continue work on this project as there are still quite a few featues I would like to add, these will most likely be optional as I want to keep this start page as minimalist as possible.

Some of the features I intend to add are:
* Weather
* Themes
* Greetings
* Backgrounds (possibly animated backgrounds too)