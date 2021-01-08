function vote(questionIndex, alternativeIndex) {
    if (model.polls[questionIndex].userHasVoted.includes(model.app.currentUser)) {
        console.log('User has already voted')
        return;
    }
    model.polls[questionIndex].alternatives[alternativeIndex].votes + 1;
    alert(`Du har stemt på ${model.polls[questionIndex].alternatives[alternativeIndex].answer}`)
    model.drawnPage = '';
    updateView();
    model.polls[questionIndex].userHasVoted.push(model.app.currentUser);
    
}