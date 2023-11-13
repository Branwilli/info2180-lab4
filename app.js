function starter() {
    var searchButton = document.getElementsByClassName("btn");
    var query = document.getElementById("query");
    var result = document.getElementById("result");
    searchButton.addEventListener('click',handleClick);
    var httpRequest = new XMLHttpRequest();

    function handleClick(clickEvent) {
        clickEvent.preventDefault();
        var URL = "superheroes.php?query=" + query.value;
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
}