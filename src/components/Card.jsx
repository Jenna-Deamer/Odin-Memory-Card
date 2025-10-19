function Cards({ pokemonData, selectedCards, setSelectedCards, setScore }) {

    const handleCardClick = (selectedCard) => {
        console.log('clicked ' + selectedCard)
        // if in selectedList  minus point else add
        if (selectedCards.includes(selectedCard)) {
            setScore(prev => prev - 1)
        } else {
            setScore(prev => prev + 1)
            setSelectedCards(selectedCards => [...selectedCards, selectedCard]);
        }

        ShuffleCards()
    }

    function ShuffleCards() {
        // Iterate over the array in reverse order
        for (let i = pokemonData.length - 1; i > 0; i--) {

            // Generate Random Index
            const j = Math.floor(Math.random() * (i + 1));

            // Swap elements
            [pokemonData[i], pokemonData[j]] = [pokemonData[j], pokemonData[i]];
        }
        return pokemonData;
    }


    return (
        <>
            {pokemonData?.map((pokemon) => (
                <button key={pokemon.name} onClick={() => handleCardClick(pokemon.name)}>
                    <div className="card">
                        <img src={pokemon.sprite} alt={pokemon.name} />
                        <div className="card-footer">
                            <h3>{pokemon.name}</h3>
                        </div>

                    </div>
                </button>

            ))}
        </>
    );
}

export default Cards;
