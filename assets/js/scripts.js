const cards = document.querySelectorAll('.memory-card'); //List of all memory-card element

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
	this.classList.toggle('flip')

	if (!hasFlippedCard) { //This is the first time the player has clicked a card
		hasFlippedCard = true;
		firstCard = this;

	} else {
		//Second click
		hasFlippedCard = false; 
		secondCard = this;

		// Does the 2 cards match ?
		console.log(firstCard.dataset.name);
		console.log(secondCard.dataset.name);
	}
}

cards.forEach(card => card.addEventListener('click', flipCard));
/*loop throught the cards list, and to each one of the cards we are going to 
attach an event listener, we are going to listen for a click event and whenever that element
is fired, we are going to execute a function named flipCard. */