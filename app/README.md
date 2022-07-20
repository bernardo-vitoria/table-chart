## Development Journal

Hi there, first of all thank you so much to take time to see my challenge, even If I don't move forward in the process I would love to hear your feedback to get better.
I'll try my best to explain my decisions, by any means if you got any question don't hesitate to contact me.
Here are some points that i find important to explain my decisions:

-Architecture and Responsabilities
-Used libs and why
-Pains/Next steps

## Architecture and Responsabilities

The organization I tried to follow is by functionality.
P.S: You will see a lot of index, to simplify imports

```bash
app
├─ src
│ ├─ api
│ ├─ components
│ ├─ context
│ ├─ mocks
│ ├─ pages
│ ├─ repository
│ ├─ service
│ ├─ utils
```

### api

- What?
  the folder that is responsible to keep all the endpoints and DTO interfaces
- Why?
  This way we've a dedicated folder to keep all the endpoint, all the varations and DTO interfaces, this should scale per functionality.

### components

- What?
  Atomic components
- Why?
  This way we've dummy components that can be used throughout all the app, their objective is only to render they do threat logic. Also, we can handle use cases in a similar way.
  Each component seperate by a folder, in each folder may contain .tsx file, .test.tsx file and .scss file

### context

- What
  All contexts
- Why?
  The idea here is going with the rule by functionality, so in this case, we've just context "Metric" to keep and scale all information for Metrics, in this case we're only handling the selected metric,
  In each context, we've 4 files.
  - "Types" to keep all types and interfaces.
  - "Context" store and create context can be found here too
  - "State" Reducer initializer, action dispatcher, Provider wrapper
  - "Reducer" action resolver

### pages

- What?
  all routes
- Why?
  page equals a route,
  inside each page, we'll find components.
  These components are the group of components that are needed to render the page

```bash
├─ pages
│ │ ├─ mainPage
│ │ │ ├─ MainPage.tsx
│ │ │ ├─ mainPage.test.tsx
│ │ │ ├─ mainPage.scss
│ │ │ ├─ index.ts
│ │ │ ├─ components
│ │ │ │ ├─ index.ts
│ │ │ │ ├─ chart
│ │ │ │ │ ├─ Chart.tsx
│ │ │ │ │ ├─ chart.scss
│ │ │ │ │ ├─ index.ts
│ │ │ │ ├─ menuBar
│ │ │ │ │ ├─ MenuBar.tsx
│ │ │ │ │ ├─ menuBar.scss
│ │ │ │ │ ├─ index.ts
│ │ │ │ ├─ metricsTable
│ │ │ │ │ ├─ index.ts
│ │ │ │ │ ├─ MetricsTable.tsx
│ │ │ │ │ ├─ metricsTable.test.tsx
│ │ │ │ │ ├─ components
│ │ │ │ │ │ ├─ index.ts
│ │ │ │ │ │ ├─ metricsRow
│ │ │ │ │ │ │ ├─ metricsRow.scss
│ │ │ │ │ │ │ ├─ MetricsRow.tsx
│ │ │ │ │ │ ├─ updateMetricModal
│ │ │ │ │ │ │ ├─ updateMetricModal.scss
│ │ │ │ │ │ │ ├─ UpdateMetricModal.tsx
```

### service

- what?
  services are where store the data for the app
- why?
  in this way we're creating a layer to communicate to external services, think of this level as a raw CRUD

### repository

- why?
  a layer to handle with data
  what?
- repository uses services but services never use repository.\
  repository doesn't need to know how to get data he needs to know how to handle it.\
  the service is to fetch data repository is the way we handle data.

### utils

this is where we have all utils to help develop the application

### utils

for MSW

## Libs

- React to build the app
- react-router to route
- axios to handle http requests
- Typescript for strongly typed language
- jest for unit testing
- MSW for mocking REST endpoints in tests
- react testing library also for testing
- lodash to provide utility functions
- sass for styline
- react-query to cache http requests
- Apollo Client for GraphQL

## Pains

- I'm used to working on a design system, so doing CSS it's not my strongest point, so the CSS might be not the best in terms of coding and naming. The convention i tried to follow was {'functionality'\_'section'--'modifier'} e.g: 'table_content--width'.
- This was my first time workin with: node, graphQL, MSW(implementing)
  - At first I used REST, but with as I've been told you guys use graphQL so I wanted to give it a try, probably it was horrible but it was fun to mess with it
  - It was a huge pain to figure it out how GraphQL in node
- Organizing components, I think the way I orgzanized the folders "components" its ok but it gives you huge deepth of layers that meaning in some files huge paths to import.
  - Also I don't know if I like to create index for every layer, but I start with it I went with it till the end
- Probably the biggest pain was to figgure out a way to present data in the chart, because we had a huge mix of types/categories/types
  - A way to table interact with Chart
- Great Pain I battle was with time, in the week-end I didn't had much time, so that's why in the end I had so much tech debt (specially with unit test coverage)

## Future

- For sure the next step would be to improve coverage:
  - Figuring out to test the chart
  - Implementing e2e with Cypress
  - Testing Modal, Row and MenuBar
- Improve code in "useMetricsGET"
  - It started with REST but with the implementing of GraphQL it went a bit messy
    - Reorganize the Query
  - Thats what I call tech debt :P
- Create some fixture, now at the final straight I found that I repeated couple of times the respones from backend
- Reorganize folders components inside Pages/MainPage

## Run the app by docker

⚠️ Need to have [docker](https://www.docker.com/get-started/) installed\
I don't have much experience with docker, but I like to work with it, so I tried to dockerize the two apps to run it.

#### pull the api image

```sh
docker pull bernardovitoria/tablechart-api:latest
```

#### pull the app image

```sh
docker pull bernardovitoria/tablechart-app:latest
```

#### run the app-api image in port 8000

```sh
docker run --publish 8000:8000 bernardovitoria/tablechart-api:latest
```

#### open a new terminal and run the app image in port 3000

```sh
docker run --publish 3000:3000 bernardovitoria/tablechart-app:latest
```

#### open browser and visit

```sh
localhost:3000
```
