function makePoll() {
    let count = model.polls.length;
    model.polls.push(
        {
        pollId: count,
        question: model.inputs.question,
        newPoll: true,
        userHasVoted: [],
        alternatives: model.inputs.alternatives,
        deadline: reformatDate(model.inputs.deadline),
    }
    )
    model.polls[model.polls.length]
    model.drawnPage = '';
    drawPage();
    updateView();
}

function reformatDate(a) {
    return a.split('-').reverse().join('-');
}