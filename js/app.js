document.addEventListener("DOMContentLoaded", function () {

    var dropDownList = document.querySelectorAll('.drop_down_list');

    function chooseFromList() {
        this.querySelector('.list_panel').classList.toggle('visible_list');
        //na obiekcie na którym wywołuję funkcję przełączam klasę, aby lista była widoczna
        var listElements = this.querySelectorAll('li');
        //pobieram listę znaczników li na obiekcie na którym wywołuję funkcję
        var thisLabel = this.querySelector('.list_label');
        //pobieram pole list_label na obiekcie na którym wywołuję


        //dla każdego elemenu listy dodaję nasłuchiwanie na kliknięcie
        for (var i = 0; i < listElements.length; i++) {
            listElements[i].addEventListener('click', function () {
                thisLabel.innerText = this.innerText;
                //do pola list_label na obiekcie, na którym wywołuję
                //wstawiam tekst z klikniętego elementu li
            })
        }
    }

    for (var i = 0; i < dropDownList.length; i++) {
        dropDownList[i].addEventListener('click', chooseFromList);
    }

});