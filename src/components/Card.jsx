function Cards({ data, selectedCards, setSelectedCards, setScore }) {

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

    const ShuffleCards = () => {

    }

    return (
        <>
            {data?.map((pokemon) => (
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
