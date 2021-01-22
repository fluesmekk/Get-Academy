function makePoll() {
    if (model.inputs.question == '' || model.inputs.deadline == '' || model.inputs.alternatives[0] == '') {
        alert('Fyll inn alle felter')
        return;
    }
    if (model.inputs.deadline.match(/^[a-zA-Z]+$/)){
        alert('Feil dato-format, endre dato og prøv igjen')
        return;
    }
    var alt = []
    for (let i = 0; i < model.inputs.alternatives.length; i++) {
        if (model.inputs.alternatives[i] !== '') {
            alt.push(
                {
                    answer: `${model.inputs.alternatives[i]}`,
                    votes: 0,
                },
                )
        }
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