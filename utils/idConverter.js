export default function idConverter(pokemonid) {
    return '0'.repeat(3 - pokemonid.toString().length) + pokemonid.toString()
}