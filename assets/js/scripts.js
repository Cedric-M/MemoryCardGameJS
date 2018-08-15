const cards = document.querySelectorAll('.memory-card'); //List of all memory-card element

function flipCard() {
	this.classList.toggle('flip')
}

cards.forEach(card => card.addEventListener('click', flipCard));
/*loop throught the cards list, and to each one of the cards we are going to 
attach an event listener, we are going to listen for a click event and whenever that element
is fired, we are going to execute a function named flipCard. */