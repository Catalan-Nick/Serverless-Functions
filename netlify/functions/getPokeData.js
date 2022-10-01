import fetch from 'node-fetch'


import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();


exports.handler = async (event, context) => {
    const eventBody = JSON.parse(event.body);
    const POKE_API = 'https://pokeapi.co/api/v2/pokedex/' + eventBody.name

    const response = await P.getPokemonByName(eventBody.name)
        console.log(response);
    return{
        statusCode: 200,
        body: JSON.stringify({
            pokemon: response
        }),
    }
}