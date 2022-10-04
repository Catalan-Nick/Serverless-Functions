import fetch from 'node-fetch'

import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

exports.handler = async event => {
    return{
        statusCode: 200,
        body: JSON.stringify({
            message: P.getPokemonByName('mew')
            // message: 'I wanna be the very best like no one ever was. Every challenge along the way with courage I will face. I will battle every day to claim my rightful place. Come with me, the time is right There\'s no better team. Arm in arm, we\'ll win the fight. It\'s always been our dream'
        }),
    }
}