function Cards({ data }) {
    // console.log(data)
    return (
        <>
            {data?.map((pokemon) => (
                <div key={pokemon.name}>
                    <img src={pokemon.sprite} alt={pokemon.name} />
                    <p>{pokemon.name}</p>
                </div>
            ))}
        </>
    );
}

export default Cards;
