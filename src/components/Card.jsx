import { useState } from 'react';

function Cards({ pokemonData, selectedCards, setSelectedCards, setScore }) {
    const [animatingCard, setAnimatingCard] = useState(null);
    const [animationType, setAnimationType] = useState('');

    const handleCardClick = (selectedCard) => {
        let isWrong = selectedCards.includes(selectedCard);

        if (isWrong) {
            setScore(prev => prev - 1);
            setAnimationType('shake-wrong');
        } else {
            setScore(prev => prev + 1);
            setSelectedCards(cards => [...cards, selectedCard]);
            setAnimationType('shake-right');
        }

        setAnimatingCard(selectedCard);

        // Wait for animation to finish before shuffling
        setTimeout(() => {
            setAnimatingCard(null);
            // ShuffleCards();
        }, 400); // animation duration
    };


    function ShuffleCards() {
        for (let i = pokemonData.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pokemonData[i], pokemonData[j]] = [pokemonData[j], pokemonData[i]];
        }
    }

    return (
        <>
            {pokemonData?.map((pokemon) => (
                <button
                    key={pokemon.name}
                    onClick={() => handleCardClick(pokemon.name)}
                    className={`card-button ${animatingCard === pokemon.name ? animationType : ''}`}
                >
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
