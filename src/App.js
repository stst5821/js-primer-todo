console.log("App.js: loaded");

export class App {
    mount() {
        // form id=js-formの要素を取得
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        // form要素でenterキーを押して送信すると、submitイベントが発生する。
        // その発生したイベントを、addEventListenerメソッドで受け取っている。
        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log(`入力欄の値: ${inputElement.value}`);
        });
    }
}