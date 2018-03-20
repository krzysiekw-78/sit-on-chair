document.addEventListener("DOMContentLoaded", function () {

    var prevBtn = document.querySelector('.arrowLeft');
    var nextBtn = document.querySelector('.arrowRight');
    var liElementsArray = document.querySelectorAll('.div-image li');
    var currentIndex = 0;

    liElementsArray[currentIndex].classList.add('visible');

    function clickNext(event) {


        liElementsArray[currentIndex].classList.toggle('visible');
        currentIndex++;

        if (currentIndex >= liElementsArray.length) {
            currentIndex = 0;
        }
        liElementsArray[currentIndex].classList.toggle('visible');
    }

    function clickPrev(event) {

        liElementsArray[currentIndex].classList.toggle('visible');
        currentIndex--;
        if (currentIndex < 0){
            currentIndex = liElementsArray.length-1;
        }
        liElementsArray[currentIndex].classList.toggle('visible');
    }

    nextBtn.addEventListener('click', clickNext);
    prevBtn.addEventListener('click', clickPrev);

});