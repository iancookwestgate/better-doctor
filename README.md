# Physician Supreme

#### By **Ian Cook Westgate**

## Description

Physician Supreme is an app designed for Epicodus to practice the use of the BetterDoctor API so as to retrieve doctor profiles in Portland, OR based on a user's input on medical issues and doctor names.

## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| User can enter where they hurt to receive a list of doctors who can help with that problem in Portland, OR. | "teeth" | The profiles of 2 doctors who specialize in dental care appear on the webpage. |
| User can enter a doctor's name and receive a list of doctors who have that name in Portland, OR. | "John Butler"| The profile of Dr. John Butler, MD appears on the webpage. |
| If the query response doesn't return any doctors, the application will return a notification that states that no doctors meet the criteria in Portland, OR. | "dysfunction" | "There are no doctors that meet that criteria in Portland, OR."

## Setup on OSX

* Install Node.js.
* Install karma-cli globally: `npm install -g karma-cli`.
* Clone the repo.
* `npm install` to install dependencies.
* `npm run start` to build and start the dev server.
* `npm run lint` to explicitly run ESLint.
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## Technologies Used

* HTML
* CSS
  * SASS
* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* BetterDoctor API

## Known Bugs

* There are no known bugs at this time.

## Support and contact details

_Email iwestgate@hotmail.com with any questions._

## License

This software is licensed under the MIT license.

Copyright (c) 2019 **Ian Cook Westgate**
