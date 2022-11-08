const submit = document.querySelector('#submit')
const container = document.querySelector('body > main > section')
const ratingContainer = document.querySelector('.rating_container')

const ratingContainerElements = Array.from(ratingContainer.children)

const clearContainer = () => Array.from(container.children)
    .forEach(element => element.remove())

const getCheckedElement = ratingElement => Array.from(ratingElement.classList)
    .includes('checked_rating')

const getRating = (ratingContainerElements) => ratingContainerElements
    .find(getCheckedElement).dataset.rating

const getThankYouElements = ratingValue => `<img src="./images/illustration-thank-you.svg" alt="thank you">
<span class="thank_you">You selected ${ratingValue} out of 5</span>
<h2>Thank you!</h2>
<p>We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>`

const setContainer = (ratingValue, className) => {
    container.classList.add(className)
    container.innerHTML = getThankYouElements(ratingValue)
}

const togleCheckedRating = (ratingElement, target) => {
    const isCheckedRating = getCheckedElement(ratingElement)

    if (isCheckedRating) {
        ratingElement.classList.remove('checked_rating')
    }

    target.classList.add('checked_rating')
}

const setCheckedRating = ({ target }) => {
    const isTargertRating = target.dataset.rating

    ratingContainerElements.forEach(ratingElement => {
        if (isTargertRating) {
            togleCheckedRating(ratingElement, target)
        }
    })
}

const handleThankyouContainer = event => {
    event.preventDefault()

    clearContainer()
    setContainer(getRating(ratingContainerElements), 'container')
}

ratingContainer.addEventListener('click', setCheckedRating)
submit.addEventListener('click', handleThankyouContainer)
