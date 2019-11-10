$(document).ready(function () {

    let cold = ["We recommend you going to the doctor. This can be a more serious issue",
     "It sounds like you're having a hard time. We recommend taking advil or tylenol.", 
     "Get plenty of sleep and rest. Drink warm liquids. We recommend taking allergy medicines"];
    
    let fever = ["Take a fever reliever, if your temperature is over 104 and doesn't go down, call th doctor.", 
    "Take a fever reliever, drink plenty of liquids, get plenty of rest. Consider going to the doctor if the fever does not go down or rises up", 
    "Take a fever reliever, drink plenty of liquids, and get plenty of rest." ]
    
    let headache = ["It sounds like you have a migrane, which is to understate, very bad. Drink a lot of caffeine and put a hotpack on you. Take a break from work and rest. GO TO A DOCTOR, IT COULD BE FAR WORSE.",
                "Hmm, sounds like a bad case, but not too bad. Ibuprofen is our recommened take. Put a hot pack to soothen your neck and temples. Eat a full meal and go to sleep.",
            "It is not too bad, but we don't want it to get worse. What we recommend is to get some rest and not to watch anything on a screen. Do not strain your eyes. Eating will help you feel better"];
    
    let sickness;

    function postMessageUser(query){
        insertDiv = '<div class="chatArea you"><p class="chatmsg">' + query + '</p></div>'

        $('#inputLogs').append(insertDiv);
    }

    function postMessageCutie(){
        insertDiv = '<div class="chatArea cutie"><p class="chatmsg">Alright, now tell me how do you feel about your condition?</p></div>'
        $('#inputLogs').append(insertDiv);

        insertDiv = ""
    }

    function postSolution(){
        let randomNum = Math.floor(Math.random() * 3);

        if(sickness == 'cold' || sickness == 'Cold'){
            insertDiv = '<div class="chatArea cutie"><p class="chatmsg">'+ cold[randomNum] +'</p></div>'
            $('#inputLogs').append(insertDiv);
        }
        else if(sickness == 'fever' || sickness == 'Fever'){
            insertDiv = '<div class="chatArea cutie"><p class="chatmsg">'+ fever[randomNum] +'</p></div>'
            $('#inputLogs').append(insertDiv);
        } 
        else if(sickness == 'headache' || sickness == 'Headache'){
            insertDiv = '<div class="chatArea cutie"><p class="chatmsg">'+ headache[randomNum] +'</p></div>'
            $('#inputLogs').append(insertDiv);
        }

    }

    function watchSubmit(){
        $('#inputForm').submit(event =>{
			event.preventDefault();
            const messageTarget = $(event.currentTarget).find('#msgForm');

            const query = messageTarget.val();

            messageTarget.val("");


            postMessageUser(query);

            if(query == 'cold' || query == 'fever' || query == 'headache' || query == 'Cold' || query == 'Fever' || query == 'Headache'){
                sickness = query;
                postMessageCutie();
            }
            else{
                postSolution();
            }
            
        })
    }


    function init(){
        watchSubmit();
    }

    init();
})