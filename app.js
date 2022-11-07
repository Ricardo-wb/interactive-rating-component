const submit = document.querySelector('#submit')
const container = document.querySelector('body > main > section')
const ratingContainer = document.querySelector('.rating_container')

ratingContainer.addEventListener('click', event => {
    const clickedElement = event.target
    const rating = Number(clickedElement.dataset.rating)

    if (clickedElement.dataset.rating){
        Array.from(ratingContainer.children).forEach(ratingElement => {
            if (Array.from(ratingElement.classList).includes('checked_rating')) {
                ratingElement.classList.remove('checked_rating')
            }
        })

        clickedElement.classList.add('checked_rating')
    }
})

submit.addEventListener('click', event => {
    event.preventDefault()

    //clean section container
    const containerElements = Array.from(container.children)
    containerElements.forEach(element => element.remove())

    //get rating
    const ratingValue = Array.from(ratingContainer.children).find(ratingElement => {
        if (Array.from(ratingElement.classList).includes('checked_rating')) {
            return ratingElement
        }
    })

    //create and insert 'thankyou' elements in container
    const thankYouElements = `<img src="./images/illustration-thank-you.svg" alt="thank you">
    <span class="thank_you">You selected ${ratingValue.dataset.rating} out of 5</span>
    <h2>Thank you!</h2>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
      don’t hesitate to get in touch!</p>`

    container.classList.add('container')
    container.innerHTML = thankYouElements
})

