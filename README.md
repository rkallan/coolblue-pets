# Senior React Assignment

In this assignment we would like you to build an amazing Pets web app using the provided mock-up designs. 🧑‍🏭

-   You can use the below mentioned REST API endpoint to request the information for your application
-   You have an option to either use this boilerplate setup or build your own, taking into consideration that the code should be properly linted and have a consistent structure

Carefully read the instructions before you proceed.

## Scope

The idea of the assignment is to develop an app that displays different types of `pets on a filter page`.

-   On this page, each pet profile should contain an `avatar picture, pet name, and a view option` to navigate to its own details page
-   On the top of the filter page there should be a `search option`, which performs a fuzzy search operation to filter pet results on the fly
-   At the bottom of the page you should show different `categories` for the pets
-   Use React hooks and build one custom hook (if possible)
-   State management (like redux, mobx, or recoil etc.) to store and share the data
-   Application should be responsive
-   Make it accessible and use Semantic HTML
-   Use proper CSS naming conventions
-   Make your components reusable (Styled components)
-   Fetch data from given REST API endpoint
-   Ensure it works on modern browsers

_Bonus points:_

-   `Navigating to "pet details page" from "filter page"` to display pet information with its avatar picture
-   Support for `screen readers`

Note: All the information for your application can be obtained from REST API endpoint which are mentioned below.

## Design specifics

### Designs

-   [Component Specifications](https://github.com/coolblue-development/react-frontend-exercise/blob/main/sr-react-frontend-exercise/designs/component-specifications.png)
-   [Filter Page - Desktop](https://github.com/coolblue-development/react-frontend-exercise/blob/main/sr-react-frontend-exercise/designs/filter-page-desktop.png)
-   [Filter Page - Mobile](https://github.com/coolblue-development/react-frontend-exercise/blob/main/sr-react-frontend-exercise/designs/filter-page-mobile.png)
-   [Search - Desktop](https://github.com/coolblue-development/react-frontend-exercise/blob/main/sr-react-frontend-exercise/designs/search-desktop.png)
-   [Search - Mobile](https://github.com/coolblue-development/react-frontend-exercise/blob/main/sr-react-frontend-exercise/designs/search-mobile.png)
-   [Pet Details Page - Desktop](https://github.com/coolblue-development/react-frontend-exercise/blob/main/sr-react-frontend-exercise/designs/pet-details-page-desktop.png)
-   [Pet Details Page - Mobile](https://github.com/coolblue-development/react-frontend-exercise/blob/main/sr-react-frontend-exercise/designs/pet-details-page-mobile.png)

### Static assets

All the required `icons and images` are added to the `./public` directory

### Colors used

-   Red: `#BF2C23`
-   Yellow: `#E0B833`
-   Light yellow: `#F8CF47`
-   Dark blue: `#285DAB`
-   Light blue: `#2B6DB1`
-   Dark grey: `#666666`
-   Grey: `#DDDDDD`
-   Light grey: `#F0F0F0`
-   White: `#FFFFFF`
-   Black: `#111111`

### Font used

`Open Sans`

## API specifics

All pet profile data is to be fetched from the following API endpoint:

### Pet results API

```
Method: GET
URL: https://61f6e0072e1d7e0017fd6f82.mockapi.io/api/v1/pets
```

## Conditions

Consider not spending more than 4 hours to complete the assignment.
In case you are not able to complete the assignment within the given timeframe, consider submitting the assignment with what you have completed.

### Submission instructions

All applicants must share their code by creating a zip file of their project folder
(excluding the node_modules directory) and submit by either uploading it to a cloud service (sharing the link with us like wetransfer or Google Drive).

We would like to get the assignment back from you 48 hours before the second interview at the latest.

## Usage

### Global dependencies

Make sure you have Node 14 installed. The project supports nvm:

-   [Node.js](https://nodejs.org/)
-   [Yarn](https://yarnpkg.com/)
-   [nvm](https://github.com/nvm-sh/nvm)

### Install dependencies

```
yarn
```

### Run development server

```
yarn start
```

Will open your default browser to [http://localhost:3000](http://localhost:3000).

Webpack will watch for changes in the `./src` directory.

### Build production bundles

```
yarn build
```

Will compile and minify. Will Minify and uglify JavaScript and output the bundled assets to `./build`.

## Stack

The boilerplate uses create react app and should run out of the box without any modifications.

## Questions

-   **Question**: How much time do I have?

-   **Answer**: Try to limit your time to 4 hours in total.

-   **Question**: Can I use CSS Frameworks like Bootstrap or Material-ui?

-   **Answer**: Yes, you can but make sure that the components must be styled to match the provided mockups.

If you have any other questions while working on the exercise feel free to reach out. We will be happy to help.

Happy coding! 😺
