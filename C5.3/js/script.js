function onload() {
    const button = document.querySelector("button");
    const input = document.querySelector("input");
    const div = document.querySelector(".result");

    button.addEventListener("click", () => {
        if ((input.value >= 1) && (input.value <= 10)) {
            request(`https://picsum.photos/v2/list?limit=${input.value}`, displayResult);
        } else {
            div.innerHTML = "Число вне диапазона от 1 до 10";
        };
    });

    function request (url, cb) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function () {
            if (xhr.status != 200) {
                div.innerHTML = `Request status : ${xhr.status}`;
            } else {
                const result = JSON.parse(xhr.response);
                if (cb) {
                    cb(result);
                };
            };
        };
        xhr.onerror = function () {
            div.innerHTML = `Error, request status : ${xhr.status}`;
        };
        xhr.send();
    }

    function displayResult(data) {
        let context = "";
        data.forEach(item => {
            const newContext = `
            <img src="${item.download_url}" width=200/>`;
            context = context + newContext;
        });
        div.innerHTML = context;
    };
};