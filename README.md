## `the-movie-db` — Ionic 2 app

`the-movie-db` is a sample project with Ionic 2 framework using [`The Movie DB API`][TheMovieDB].
* You can see the latest movies released in homepage.
* You can search your favourites movies with a search bar.

## Getting Started

To get you started you can simply clone the `the-movie-db` repository and install the dependencies:

### Prerequisites

You need git to clone the `the-movie-db` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `the-movie-db`. You must have Node.js and its package manager (npm) installed. You can get them from [here][node].

### Clone `the-movie-db`

Clone the `the-movie-db` repository using git:

```
git clone https://github.com/jasus/the-movie-db.git
cd the-movie-db
```

### Install Dependencies

We need to install Ionic framework, Cordova and project dependencies with npm.

* We install Ionic and Cordova globally with `-g`:
```
npm install -g ionic cordova
```

* We get the tools we depend upon via `npm`, the [Node package manager][npm].

We run following command for installing project dependencies :

```
npm install
```

### Run the Application

The simplest way to start the app locally is:

```
ionic serve
```

Automatically will be opened the browser. Also you can browse to the app at [`localhost:8100`][local-app-url].


[git]: https://git-scm.com/
[local-app-url]: http://localhost:8100/
[TheMovieDB]: https://developers.themoviedb.org/3
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/

