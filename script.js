var itemsOne = document.querySelectorAll('#timeline_first li');
var buttonPrev = document.querySelector('#timeline_first .prev');
var buttonNext = document.querySelector('#timeline_first .next');

var itemsTwo = document.querySelectorAll('#timeline_second li');
var buttonPrevTwo = document.querySelector('#timeline_second .prev');
var buttonNextTwo = document.querySelector('#timeline_second .next');

var itemsThree = document.querySelectorAll('#timeline_three li');
var buttonPrevThree = document.querySelector('#timeline_three .prev');
var buttonNextThree = document.querySelector('#timeline_three .next');

var itemsFhour = document.querySelectorAll('#timeline_fhour li');
var buttonPrevFhour = document.querySelector('#timeline_fhour .prev');
var buttonNextFhour = document.querySelector('#timeline_fhour .next');

function handleNextButton(items) {
    for (var i = 0; i < items.length - 1; i++) {
        if (items[i].classList.contains('progress')) {
            items[i].classList.remove('progress');
            items[i].classList.add('completed');
            items[i + 1].classList.add('progress');
            break;
        }
    }
}

function handlePrevButton(items) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].classList.contains('progress') && (i > 1)) {
            items[i].classList.remove('progress');
            items[i - 1].classList.remove('completed');
            items[i - 2].classList.add('completed');
            items[i - 1].classList.add('progress');
            break;
        } else if (i === 1 && (items[i].classList.contains('progress'))) {
            items[1].classList.remove('progress');
            items[0].classList.remove('completed');
            items[0].classList.add('progress');
        }
    }
}

buttonNext.addEventListener('click', function() {
    handleNextButton(itemsOne);
});
buttonPrev.addEventListener('click', function() {
    handlePrevButton(itemsOne);
});


buttonNextTwo.addEventListener('click', function() {
    handleNextButton(itemsTwo);
});
buttonPrevTwo.addEventListener('click', function() {
    handlePrevButton(itemsTwo);
});


buttonNextThree.addEventListener('click', function() {
    handleNextButton(itemsThree);
});
buttonPrevThree.addEventListener('click', function() {
    handlePrevButton(itemsThree);
});


buttonNextFhour.addEventListener('click', function() {
    handleNextButton(itemsFhour);
});
buttonPrevFhour.addEventListener('click', function() {
    handlePrevButton(itemsFhour);
});
