//create array to store all the correct answers of the quiz
const correctAnswers = ['B','B','B', 'B'];
const form =document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    //create score for user based on their answer
    let score = 0;
    //get user answers from each input field
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //compare user inputs to the correct answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
           score += 25; 
        }
    });

    //show result on page
    scrollTo(0,0);//use to scroll to the very top of the page
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
});