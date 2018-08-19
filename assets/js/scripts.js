const cards = document.querySelectorAll('.memory-card'); //List of all memory-card element

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
	this.classList.add('flip')

	if (!hasFlippedCard) { //This is the first time the player has clicked a card
		hasFlippedCard = true;
		firstCard = this;

	} else {
		//Second click
		hasFlippedCard = false; 
		secondCard = this;

		//The two card has now been revealed, does they match ?

		if (firstCard.dataset.name === secondCard.dataset.name) {
			//Yes, it's a match !
			firstCard.removeEventListener('click', flipCard);
			secondCard.removeEventListener('click', flipCard);

		} else {
			//No the cards don't match
			setTimeout(function(){ 
				firstCard.classList.remove('flip');
				secondCard.classList.remove('flip'); 
			}, 1500);
		
		}

	}
}

cards.forEach(card => card.addEventListener('click', flipCard));
/*loop throught the cards list, and to each one of the cards we are going to 
attach an event listener, we are going to listen for a click event and whenever that element
is fired, we are going to execute a function named flipCard. */