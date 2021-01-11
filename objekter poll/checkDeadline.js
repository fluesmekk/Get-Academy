checkDeadline();
function checkDeadline() {
    
    for (let i = 0; i < model.polls.length; i++) {
        var date1 = Date.parse(model.polls[i].deadline)
        var date2 = Date.parse(new Date())
        if (date1 < date2) {
            model.polls[i].open = false;
        }
    }
}