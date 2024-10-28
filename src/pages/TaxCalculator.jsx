import React, { useState, useRef, useEffect } from 'react'
import TaxCard from '../components/TaxCard'
import NavBar from '../components/NavBar'
import './TaxCalculator.css'
import AddIcon from '@mui/icons-material/Add';

const TaxCalculator = () => {
  const [taxCards, setTaxCards] = useState([]);
  const [indexGenerator, setIndexGenerator] = useState();

  useEffect(() => {
    let cards = JSON.parse(localStorage.getItem('tax-cards')) || [
      { cardId: 1, selectedTaxType: "", inputNumber: "", totalTax: 0, message: "", displayTaxLaws: false }
    ];

    if (cards.length === 0) {
      cards = [{ cardId: 1, selectedTaxType: "", inputNumber: "", totalTax: 0, message: "", displayTaxLaws: false }]
    }
    setTaxCards(cards);

    let index = parseInt(JSON.parse(localStorage.getItem('current-index'))) || 1;
    setIndexGenerator(index);
  }, []);

  function persistCardsData(newCardsArray) {
    localStorage.setItem('tax-cards', JSON.stringify(newCardsArray));
  }

  function persistIndexData(newCurrentIndex) {
    localStorage.setItem('current-index', JSON.stringify(newCurrentIndex));
  }

  function handleAddCard() {
    const newArray = [...taxCards,
    { cardId: (indexGenerator + 1), selectedTaxType: "", inputNumber: "", totalTax: 0, message: "", displayTaxLaws: false }
    ]
    setIndexGenerator(indexGenerator + 1);
    setTaxCards(newArray);

    persistCardsData(newArray);
    persistIndexData(indexGenerator + 1);
  };

  function handleEditCard(cardId, selectedTaxType, inputNumber, totalTax, message, displayTaxLaws) {
    const newArray = [...taxCards];
    const cardIndex = newArray.findIndex(x => x.cardId == cardId)
    const card = newArray[cardIndex];
    const newCard = { cardId, selectedTaxType, inputNumber, totalTax, message, displayTaxLaws }
    newArray[cardIndex] = newCard;

    setTaxCards(newArray);
    persistCardsData(newArray);
  }

  function handleDeleteCard(cardId) {
    const newArray = taxCards.filter((taxCard) => {
      return taxCard.cardId !== cardId
    });
    setTaxCards(newArray);
    persistCardsData(newArray);
  }

  return (
    <div>
      <NavBar />
      <div className='calculation-section'>
        <div className='cal-header'>
          Hãy liệt kê những nguồn thu nhập của bạn bên dưới:
        </div>
        {taxCards.map((taxCard, index) => {
          return (
            <TaxCard
              key={taxCard.cardId}
              index={index}
              cardId={taxCard.cardId}
              taxType={taxCard.selectedTaxType}
              inNum={taxCard.inputNumber}
              totTax={taxCard.totalTax}
              mess={taxCard.message}
              disTaxLaws={taxCard.displayTaxLaws}
              handleDeleteCard={handleDeleteCard}
              handleEditCard={handleEditCard}
            />
          )
        })}
        <button onClick={handleAddCard} className='add-card-button'>
          <AddIcon />
        </button>
      </div>
    </div>
  )
}

export default TaxCalculator
