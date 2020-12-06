function onload() {
    const button = document.querySelector("button");
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    const div = document.querySelector(".result");
    
    button.addEventListener("click", () => {
        if (!(((+input1.value >= 100) && (+input1.value <= 300)) && ((+input2.value >= 100) && (+input2.value <= 300)))) {
            div.innerHTML = "одно из чисел вне диапазона от 100 до 300";
        } else {
            fetch(`https://picsum.photos/${+input1.value}/${+input2.value}`)
                .then((response) => {
                    div.innerHTML = `<img src="${response.url}"/>`;
                })
                .catch(() => {console.log('error')})
        };
    });
};