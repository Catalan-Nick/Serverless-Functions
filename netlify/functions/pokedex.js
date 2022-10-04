import fetch from 'node-fetch'


export const handler = async event => {
    const eventBody = JSON.parse(event.body);//the region
    const POKE_API = 'https://pokeapi.co/api/v2/pokedex/' + eventBody.region

    const response = await fetch(POKE_API)
    const data = await response.json()
    return{//returns the name and url of each pokemon int the region
        statusCode:200,
        body: JSON.stringify({
            pokemon: data.pokemon_entries
        })
    }
}