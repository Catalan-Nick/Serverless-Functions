import fetch from 'node-fetch'

export const handler = async event => {
    const eventBody = JSON.parse(event.body);//Pokemons name
    const POKE_API = "https://pokeapi.co/api/v2/pokemon/" + eventBody

    
    const response = await fetch(POKE_API)
    const data = await response.json()
    return{//returns the entry for ach pokemon
        statusCode: 200,
        body: JSON.stringify({
            pokemon: data
        }),
    }
}