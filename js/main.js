  let query = document.querySelector(".query");
    let searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener('click', () => {
    let url = "https://www.google.com/search?q=" + query.value;
    window.open(url);
    query.value = "";
});
