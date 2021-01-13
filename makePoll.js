function makePoll() {
    var alt = []
    for (let i = 0; i < model.inputs.alternatives.length; i++) {
        alt.push(
        {
            answer: `${model.inputs.alternatives[i]}`,
            votes: 0,
        },
        )
        console.table(alt)
    }
    let count = model.polls.length;
    model.polls.push(
        {
        pollId: count,
        question: model.inputs.question,
        open: true,
        userHasVoted: [''],
        alternatives: alt,
        deadline: reformatDate(model.inputs.deadline, '-'),
    }
    );
    model.polls[model.polls.length]
    model.drawnPage = '';
    
    model.inputs.deadline = '';
    model.inputs.alternatives = [''];
    model.inputs.question = '';
    drawPage();
    alert('Du har lagd en Poll')

}

function reformatDate(date, character) {
    return date.split(character).reverse().join(character);
}