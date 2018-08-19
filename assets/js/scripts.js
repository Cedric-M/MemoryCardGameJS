const cards = document.querySelectorAll('.memory-card'); //List of all memory-card element

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
	if (lockBoard) return;
	if (this === firstCard) return;
	this.classList.add('flip')

	if (!hasFlippedCard) { //This is the first time the player has clicked a card
		hasFlippedCard = true;
		firstCard = this;
		return;
	} 

	//Second click
	secondCard = this;

	checkForMatch();
}

function checkForMatch(){
	//Conditional (ternary) Operator
	let isMatch = firstCard.dataset.name === secondCard.dataset.name; 
	isMatch ? disableCards() : unflipCards();
}

function disableCards(){
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);

	resetBoard();
}

function unflipCards(){
	lockBoard = true;

	setTimeout(function(){ 
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip'); 
		
		resetBoard();
	}, 1500);
}

function resetBoard(){
	//ES6 Destructuring assignment
	[lockBoard, hasFlippedCard] = [false, false];
	[firstCard, secondCard] = [null, null];

}

cards.forEach(card => card.addEventListener('click', flipCard));
/*loop throught the cards list, and to each one of the cards we are going to 
attach an event listener, we are going to listen for a click event and whenever that element
is fired, we are going to execute a function named flipCard. */