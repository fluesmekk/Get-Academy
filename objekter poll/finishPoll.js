function finishPoll(questionIndex) {
    model.polls[questionIndex].open = false;
    drawPage();
}