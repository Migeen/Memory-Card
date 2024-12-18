import React, { useEffect, useState } from 'react'
import GetImages from './GetImages';

const gameCards =  async (len) => {
    const cards = await GetImages(0, length);
  const CardsArray = [];
  cards.forEach((card) => {
    let flag = [card, 0];
    CardsArray.push(flag);
  });
  console.log(CardsArray);
  return CardsArray;
} 

const Card = () => {
    return (
        <div className='w-44 h-56 border border-black rounded p-1 cursor-pointer'>
            
        </div>
    );
}

const CardContainer = () => {
    
    const [score, setScore] = useState(0);
    const [card, setCard] = useState([]);
    const [highest, setHighest] = useState(0);
    const [load, setLoad] = useState(true);
    
    useEffect(()=> {
        async function loadCards() {
            const cardData = await gameCards(9);
            setCard(cardData);
            setLoad(false);
        }

    },[]);

    function shuffleArray(array) {
        for (var i = array.length - 1; i >= 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    
      function clickPic(pic, event) {
        event.currentTarget.blur();
        if (pic[1] == 0) {
          setScore(score + 1);
          if (score >= highest) {
            setHighest(score + 1);
          }
          setCard(
            card.map((car) => {
              if (car == pic) {
                //let it be read
                car[1] = 1;
                return car;
              } else return car;
            })
          );
          let newCard = card;
          shuffleArray(newCard);
          setCard(newCard);
        } else {
          setScore(0);
          setCard(
            card.map((car) => {
              return [car[0], 0];
            })
          );
        }
      }
    if(load) return <h1>Loading</h1>
    else{    
    return (
        <div className='bg-gray-700 w-ful h-4/5 p-7 flex justify-center'>
            <div className='bg-white w-4/5 h-full flex flex-wrap p-20 gap-14 '>
                {card.map((pic)=> (
                    <Card/>
                    
                ))}          
            </div>
        </div>
    )
}   

}

export default CardContainer