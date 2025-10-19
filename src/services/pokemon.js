export const fetchRandomPokemon = async (count = 12) => {
  const pokeSprites = [];

  for (let i = 0; i < count; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1000) + 1}`);
    const result = await res.json();
    const name = result.species.name.charAt(0).toUpperCase() + result.species.name.slice(1);

    pokeSprites.push({
      name,
      sprite: result.sprites.front_default
    });
  }

  return pokeSprites;
};