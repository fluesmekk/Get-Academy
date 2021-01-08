updateView();
function updateView() {
    let html = '';
    html = `
    <div class="container">

        
            <div id="selected">${model.app.currentPage}

                <select onchange="changePage(value)";>
                <option disabled selected="selected">-- select an option --</option>
                <option value="log in">Log In</option>
                <option value="vote">Vote</option>
                <option value="create Poll">Create Poll</option>
                <option value="view All Polls">View All Polls</option>
                </select>
            </div>
        
        
        <div class="page">
        <div id="currentUser">Logged In As:${model.app.currentUser}</div>
            ${model.drawnPage || ''}
            
        </div>
        
    </div>
    `;
    document.getElementById('app').innerHTML = html;
}
drawPage();
function drawPage() {
    if (model.app.currentPage == 'log in') {
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
    if (model.app.currentPage == 'vote') {
        let currentPoll = '';
        let alternatives = '';
        for (let i = 0; i < model.polls.length; i++) {
            if (model.polls[i].newPoll == true) {
                for (let j = 0; j < model.polls[i].alternatives.length; j++) {
                    alternatives += 
                    `
                    <div class="alternatives">
                    Alternative ${j + 1}: ${model.polls[i].alternatives[j].answer}
                    <button class="voteButton" onclick="vote(${i}, ${j})">Vote</button>
                    </div>
                    `;
                }
                currentPoll = `
                <div class="poll">
                <div class="question">
                Question : ${model.polls[i].question}
                </div>
                ${alternatives}
                </div>
                `
            }
        }
        model.drawnPage = `
        <div class="pollPage">
        ${currentPoll}
        </div>
        
        `;
    }
    let alternatives= '';
    if (model.app.currentPage == 'create Poll') {
        
        model.drawnPage = `
        <div class="createPoll">
            <div class="input">Question
            <input oninput="model.inputs.question = this.value"></input>

            <input type="date" date-format="DD MMMM YYYY" oninput="model.inputs.deadline = this.value"></input>
            </div>

            <div class="inputAlternatives">
            <div class="input">Alternative 1

            <input oninput="model.inputs.alternatives[0] = this.value"></input><button onclick="createAlternative()">+</button>
            </div>
            
            ${model.alternatives}
            </div>
            <button class="makePoll" onclick="makePoll()">Make poll</button>
        </div>
        
        `
    }

    // holder på med denne funksjonen! Må også fikse etter innlogging av admin så skal man komme rett inn i create Poll.
    if (model.app.currentPage == 'view All Polls') {
        model.drawnPage = `
        
        
        `
    }
    updateView();
}

function createAlternative() {
    model.inputs.alternatives.push('');
    model.inputs.inputCount += 1;
    model.alternatives += `
    <div class="input">Alternative ${model.inputs.inputCount}
            <input oninput="model.inputs.alternatives[${model.inputs.inputCount - 1}] = this.value"></input>
    </div>
    `;
    
    drawPage();
    updateView();
}