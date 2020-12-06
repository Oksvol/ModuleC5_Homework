function onload() {
    const button = document.querySelector("button");
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    const div = document.querySelector(".result");

    if (Boolean(localStorage.getItem("temp"))) {
        div.innerHTML = localStorage.getItem("temp");
    };
    
    button.addEventListener("click", () => {
        
        let page = +input1.value, limit = +input2.value;
        let correctPage = (page >= 1) && (page <= 10), correctLimit = (limit >= 1) && (limit <= 10), correctStatement = correctPage || correctLimit;
        
        if (!correctStatement) {
            div.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
        } else if (!correctPage) {
            div.innerHTML = "Номер страницы вне диапазона от 1 до 10";
        } else if (!correctLimit) {
            div.innerHTML = "Лимит вне диапазона от 1 до 10";
        } else {
            fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
                .then((response) => {
                    const result = response.json();
                    return result;
                })
                .then((data) => {
                    displayResult(data, div);
                })
                .catch(() => {console.log('error')})
        };
    });
};

function displayResult(data, div) {
    let context = "", newContext = "";
    data.forEach(item => {
        newContext = `
        <img src="${item.download_url}" width=200/>`;
        context = context + newContext;
    });
    div.innerHTML = context;
    localStorage.setItem("temp", context);
};