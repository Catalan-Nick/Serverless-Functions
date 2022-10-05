# Up and Running with Serverless Functions 
Short running synchronous functions written in JavaScript

### Deployed on Netlify
serverless-by-catalan.netlify.app

## HTML, Javascript, CSS, Bootstrap 5

Serverless functions open a world of possibilities for running on-demand, server-side code without having to run a dedicated server.<br>
Serverless functions, branded as Netlify Functions when running on Netlify, are a way to deploy server-side code as API endpoints. These will spin up automatically when triggered by an event, handle and process server ran code, and then spin down until the next event.

## Pros
- lowers barrier to entry for devs
- inexpensive
- faster iteration
- quick deployments
- abstracts away the setup and maintenance of a physical server
## Cons
- not built for long running processes (10 sec limit)
- stateless: does not maintain data
- cold starts: referring to the time it takes to start up when a function is invoked or ephemeral containers

## R.A.P.I.D.
The front end of the website is a responsive Pokedex-like user interface, where the user can selected Regions of the Pokemon world and the different pokemon are displayed on cards with thier name and ID number.
