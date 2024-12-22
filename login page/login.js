function handle(event) {
    event.preventDefault()
    let inputs = document.querySelectorAll('input')
    let inputValues = []

    for(let i = 0; i < inputs.length; i++) {
        inputValues.push(inputs[i].value)
    }
    
    alert("Data have been submitted")
    console.log(inputValues)
}

let btn = document.querySelector('button')
btn.addEventListener('click', function(event) {
    handle(event)
})