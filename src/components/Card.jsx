function Cards({ data, selectedCards, setSelectedCards, score, setScore }) {

    const handleCardClick = (selectedCard) => {
        console.log('clicked ' + selectedCard)

        // if in selectedList  minus point else add
        if (selectedCards.includes(selectedCard)) {
            setScore(prev => prev - 1)
        } else {
            setScore(prev => prev + 1)
            setSelectedCards(selectedCard)
        }

        ShuffleCards()
    }

    const ShuffleCards = () => {

    }

    return (
        <>
            {data?.map((pokemon) => (
                <button onClick={() => handleCardClick(pokemon.name)}>
                    <div key={pokemon.name} className="card">
                        <img src={pokemon.sprite} alt={pokemon.name} />
                        <h3>{pokemon.name}</h3>
                    </div>
                </button>

            ))}
        </>
    );
}

export default Cards;
