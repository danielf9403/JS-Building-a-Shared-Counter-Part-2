async function main(){
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    const confirmButton = document.querySelector('#confirm-button');
    const inputField = document.querySelector('#user-init-value-setup');
    const response = await fetch('http://localhost:9001/counter');
    const result = await response.json();
    
    let countValue = result.value;
    let userImputValue = 0;
    function increment(){
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement(){
        countValue--;
        countContainer.textContent = countValue;
    }

    function handeleImput(e) {
        userImputValue = e.target.value;
    }

    async function handleConfirmation() {
        await fetch('http://localhost:9001/counter', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                value: Number(userImputValue),
            }),
        });
        main();
    }
    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    inputField.addEventListener("change");
    confirmButton.addEventListener("click", confirm);
    countContainer.textContent = countValue;
}
main()