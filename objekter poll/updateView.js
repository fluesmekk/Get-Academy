updateView();
function updateView() {
    let html = '';
    html = `
    <div class="container">

        
            <div id="selected">
            <div id="currentPage">
            ${model.app.currentPage}
            </div>

                <div id="select">
                <select onchange="changePage(value)";>
                <option disabled selected="selected">-- select an option --</option>
                <option value="log in">Log In</option>
                <option value="vote">Vote</option>
                <option value="create Poll">Create Poll</option>
                <option value="view All Polls">View All Polls</option>
                </select>
                </div>
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
        console.log('vote')
        let question = ''
        let currentPoll = '';
        let alternatives = '';
        for (let i = 0; i < model.polls.length; i++) {
            if (model.polls[i].open == true) {

                for (let j = 0; j < model.polls[i].alternatives.length; j++) {
                    alternatives += 
                    // tegne opp alle som er åpene, med added func som tegner opp til bruker hvis bruker ikke har stemt.
                    // fikse at det man skriver inn ikke forsvinner når man legger til alternativ.
                    `
                    <div class="alternatives">
                    Alternative ${j + 1}: ${model.polls[i].alternatives[j].answer}
                    <button class="voteButton" onclick="vote(${i}, ${j})">Vote</button>
                    </div>
                    `;
                }
                currentPoll += `
                <div class="poll">
                <div class="question">
                Question : ${model.polls[i].question}
                </div>
                ${alternatives}
                </div>
                `;
                alternatives = '';
            
            }
        }
        model.drawnPage = `
        <div class="pollPage">
        ${currentPoll}
        
        </div>
        
        `;
    }
    if (model.app.currentPage == 'create Poll') {
/// lage denne på nytt? lurt å tegne opp alle inputs fra en loop, enklere å holde styr på!
        model.drawnPage = `
        <div class="createPoll">
            <div class="input">Question
            <input oninput="model.inputs.question = this.value" value="${model.inputs.question}"></input>

            <input type="date" date-format="DD MMMM YYYY" oninput="model.inputs.deadline = this.value"></input>
            </div>

            <div class="inputAlternatives">
            <div class="input">Alternative 1

            <input oninput="model.inputs.alternatives[0] = this.value" value="${model.inputs.alternatives[0]}"></input><button onclick="createAlternative()">+</button>
            </div>
            
            ${model.alternatives}
            </div>
            <button class="makePoll" onclick="makePoll()">Make poll</button>
        </div>
        
        `
    }

    if (model.app.currentPage == 'view All Polls') {
        let poll = '';
        for (let i = 0; i < model.polls.length; i++) {
            poll += `
            <div class="poll">
            <div class="question">${model.polls[i].question}</div>
            
            
            `;
            for (let j = 0; j < model.polls[i].alternatives.length; j++) {
                var end = '';
                //lukker poll med tilhørende knapper og informasjon
                if (j == (model.polls[i].alternatives.length - 1)) {

                    end = ` <div class="finished">
                            <button onclick="finishPoll(${i})" ${model.polls[i].open ? '' : 'disabled'}>
                            Finish
                            </button>
                            <div>${model.polls[i].deadline}</div>
                            <div>state: ${model.polls[i].open ? 'Ongoing' : 'Finished'}</div>
                            </div>
                            </div>`
                }
                //putter inn alternativ
                poll += `
                <div class="alternatives">${model.polls[i].alternatives[j].answer} <div>Votes: ${model.polls[i].alternatives[j].votes} </div></div>
                ${end}
                `
                
            };
            model.drawnPage = `
            <div class="pollPage">
                ${poll}
            </div>
        
            `;
        }
        
    }
    updateView();
};

function createAlternative() {
    numbers = model.numbers;
    model.inputs.alternatives.push('.');
    model.inputs.inputCount += 1;
    console.log(numbers)
    model.alternatives += `
    
    `;
    model.numbers += 1;
    drawPage();
}

