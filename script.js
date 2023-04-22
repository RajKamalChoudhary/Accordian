const accordian = document.querySelectorAll('.accordian')

accordian.forEach(accordian => {
    const icon = accordian.querySelector('.icon');
    const answers = accordian.querySelector('.answers');

    accordian.addEventListener('click' , () => {
        icon.classList.toggle('active');
        answers.classList.toggle('active');
    })
})