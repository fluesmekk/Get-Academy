updateView();
function updateView() {
    let html = '';
    html = `
    <div class="container">

        <div class="sidebar">
            <div id="selected">${model.app.currentPage}</div>

                <select onchange="changePage(value)";>
                <option value="logIn">Log In</option>
                <option value="vote">Vote</option>
                <option value="createPoll">Create Poll</option>
                <option value="viewAllPolls">View All Polls</option>
                </select>
            
        </div>
        
        <div class="page">
            ${model.drawnPage || ''}
        </div>
        <div id="currentUser">Logged In As:${model.app.currentUser}</div>
    </div>
    `;
    document.getElementById('app').innerHTML = html;
}
drawPage();
function drawPage() {
    if (model.app.currentPage == 'logIn') {
        model.drawnPage = `
            <div class="userInfo">
            
            <div>Username</div>
            <input class="username" oninput="model.inputs.inputUsername = this.value"></input>
            <div class="password">Password</div>
            <input type="password" class="password" oninput="model.inputs.inputPassword = this.value"></input>
            <button class="login" onclick="login()">Enter</button>
            
            </div>
        `;
    }
    updateView();
}