const menuButton = document.getElementById('menu')

function showMenu() {
    const subMenu = document.getElementById('sub-menu')


    if(subMenu.style.display === 'flex') {
        subMenu.style.display = 'none'
    }else {
        subMenu.style.display = 'flex'
    }
    
}

menuButton.addEventListener('click', showMenu)

function showDetails() {
    const questions = document.querySelectorAll('.question')
    const answers = document.querySelectorAll('.answer')
    const icons = document.querySelectorAll('.down')

    questions.forEach((question, index) => {
        question.addEventListener('click', () => {
            const clickedQuestion = question
            const clickedAnswer = answers[index]
            const clickedIcon = icons[index]

            if(clickedAnswer.style.display === '' || clickedAnswer.style.display === 'none') {
                answers.forEach((clickedAnswer, i) => {
                    if(i !== index) {
                        clickedAnswer.style.display = 'none'

                        const otherIcon = icons[i];

                        if (otherIcon) {
                           otherIcon.classList.remove('fa-angle-up');
                           otherIcon.classList.add('fa-angle-down');
                        }
                    }
                })

                clickedAnswer.style.display = 'block'

                if(clickedIcon) {
                    clickedIcon.classList.remove('fa-angle-down')
                    clickedIcon.classList.add('fa-angle-up')
                }

                //console.log('jello')
            } else if (clickedAnswer.style.display === 'block') {
                clickedAnswer.style.display = 'none'

                if(clickedIcon) {
                    clickedIcon.classList.remove('fa-angle-up')
                    clickedIcon.classList.add('fa-angle-down')
                }
            }

            //console.log(clickedAnswer.innerHTML)
        })
    })

    //console.log(questions.length, answers.length, icons.length)
}

showDetails()