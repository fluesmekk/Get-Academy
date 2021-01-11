function login() {
    for (let i = 0; i < model.users.length; i++) {
        if (model.users[i].username == model.inputs.inputUsername) {
            console.log('riktig brukernavn')
            if (model.users[i].password == model.inputs.inputPassword) {
                model.app.currentUser = model.inputs.inputUsername;
                console.log('riktig passord')
                if (model.app.currentUser != 'Admin') {
                    model.app.currentPage = 'vote';
                    changePage('vote');
                } 
                else if (model.app.currentUser == 'Admin') {
                    console.log('setting cp to createPoll')
                    model.app.currentPage = 'create Poll';
                    changePage('create Poll');
                }
            }
            
        }
    }
    updateView();
   
}