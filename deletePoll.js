function deletePoll(index) {
    model.polls.splice(index, 1)
    drawPage();
}