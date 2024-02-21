function flip(form) {
    var card = document.getElementById('card');
    var cardInner = document.getElementById('cardInner');

    if (form === 'signup') {
        cardInner.style.transform = "rotateY(180deg)";
    } else {
        cardInner.style.transform = "rotateY(0deg)";
    }
}
