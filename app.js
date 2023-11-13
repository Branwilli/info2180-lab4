starter.addEventListener('load',() => {
    let searchButton = document.querySelector(".btn");
    let query = document.querySelector(".query");
    let result = document.querySelector(".result");
    searchButton.addEventListener('click',handleClick);
    let httpRequest = new XMLHttpRequest();

    function handleClick(Event) {
        Event.preventDefault();
        let URL = "superheroes.php?query=" + query.value;
        httpRequest.onreadystatechange = fetchData;
        httpRequest.open('GET',URL,true);
        httpRequest.send();
    }

    function fetchData() {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
            var response = httpRequest.responseText;
            result.innerHTML = response;
        }
        else {
            result.innerHTML = "SUPERHERO NOT FOUND"
        }
    }
});