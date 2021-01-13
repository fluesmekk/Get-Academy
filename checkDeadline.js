checkDeadline();
function checkDeadline() {
    
    for (let i = 0; i < model.polls.length; i++) {
        var deadline = new Date(reformatDate(model.polls[i].deadline, '-'))
        var dateNow = new Date();
        if (deadline < dateNow) {
            model.polls[i].open = false;
        }
    }
}