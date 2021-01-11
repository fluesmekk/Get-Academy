function makePoll() {
    let count = model.polls.length;
    model.polls.push(
        {
        pollId: count,
        question: model.inputs.question,
        open: true,
        userHasVoted: [],
        alternatives: model.inputs.alternatives,
        deadline: reformatDate(model.inputs.deadline),
    }
    );
    model.polls[model.polls.length]
    model.drawnPage = '';
    drawPage();
}

function reformatDate(date) {
    return date.split('-').reverse().join('-');
}