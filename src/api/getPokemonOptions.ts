import { pokemonApi } from "./pokemonApi";
import type { Pokemon } from "env";

const getPokemons = ():number[] =>{
    const pokemonArr = Array.from(Array(650))
    return pokemonArr.map((_, index)=> index +1)
}

console.log(getPokemons())

const getPokemonOptions =()=>{
    const pokemons = getPokemons()
    console.log(pokemons)
}
export default getPokemonOptions