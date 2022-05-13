const input = document.getElementById("input");
const sumbit = document.getElementById("submit");
const set = document.getElementById("set");
const random = document.getElementById("random");
const example = document.getElementById("example");
const evaluation = document.getElementById("evaluation");
const dropdown = document.getElementById("dropdown");

let prns = [
    ['she', 'her', 'her', 'hers', 'herself'],
    ['he', 'him', 'his', 'his', 'himself'],
    ['they', 'them', 'their', 'theirs', 'themself'],
    ['it', 'it', 'its', 'its', 'itself'],
    ['ae', 'aer', 'aer', 'aers', 'aerself'],
    ['ve', 'ver', 'vis', 'vis', 'vimself'],
    ['xe', 'xem', 'xyr', 'xyrs', 'xemself'],
];

let sentences = [
    ["Will ", " come to the party tonight?", 0],
    ["I love ", ".", 1],
    ["Take a look at ", "!!", 1],
    ["That's ", " pencil", 2],
    ["both ", " hands press upon me", 2],
    ["I took ", " knife", 2],
    ["But not all of them knew of ", " existence;", 2],
    ["Next: how shall we define the whale, by ", " obvious externals", 2],
    ["I think that coat is ", ".", 3],
    ["There's something in that voice of ", "", 3]
    ["O whale! the mad fiend ", " is after ye!", 4],
    ["Sitting by ", ", alone.", 4],
];

let prnset = 0;
let ans = 0;
var selectedSentence = 0;

selectSet(0);

// Create dropdown option for each pronoun set in prns
for(let i in prns) {
    const opt = document.createElement("option");
    opt.label = prns[i][0]+' / '+prns[i][1]+' / '+prns[i][2]+' / '+prns[i][3]+' / '+prns[i][4];
    opt.value = i;
    dropdown.appendChild(opt);
}

// Prepare a random sentence to be tested with
function randomSentence() {
    selectedSentence = Math.floor(Math.random() * sentences.length);
    sentenceTest(sentences[selectedSentence][2], false);
    input.value = "";
    input.focus();
}

// Selecting a certain pronoun set to use
function selectSet(prnindex) {
    prnset = prns[prnindex];
    randomSentence();
}

// Choose a random pronoun set from prns
function randomSet() {
    selectSet(Math.floor(Math.random() * prns.length));
}

// Fill in the blank!
function sentenceTest(answer, ishard) {
    evaluation.innerText = "...";
    example.innerHTML = sentences[selectedSentence][0] + "___" + sentences[selectedSentence][1];
    ans = answer;
    if (ishard != true) {
        set.innerHTML = prnset[0] + '/' + prnset[1] + '/' + prnset[2] + '/' + prnset[3] + '/' + prnset[4]
    } else {
        if (prnset[0] == prnset[1]) {
            set.innerHTML = prnset[0] + '/' + prnset[2];
        }
        else {
            set.innerHTML = prnset[0] + '/' + prnset[1];
        }
    }
}

// Check if the input is correct!
function checkAnswer() {
    if (input.value == prnset[ans]) {
        evaluation.innerHTML = "correct! " + sentences[selectedSentence][0] + "<b>" + prnset[ans] + "</b>" + sentences[selectedSentence][1];
    }
    else {
        evaluation.innerHTML = "incorrect! the correct answer was: " + sentences[selectedSentence][0] + "<b>" + prnset[ans] + "</b>" + sentences[selectedSentence][1];
    }
}

// Submit if the key pressed was the enter key
function possiblySubmit(event) {
    if (event.keyCode == 13) {checkAnswer();}
}
