function login() {
    for (let i = 0; i < model.users.length; i++) {
        if (model.users[i].username == model.inputs.inputUsername) {
            console.log('riktig brukernavn')
            if (model.users[i].password == model.inputs.inputPassword) {
                model.app.currentUser = model.inputs.inputUsername;
                console.log('riktig passord')
            }
            
        }
    }
    updateView();
   
}