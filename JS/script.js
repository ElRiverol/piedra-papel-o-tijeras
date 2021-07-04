var games = 0;
var victories = 0;
var defeats = 0;
var draws = 0;

function pokemon(){
    document.getElementById("title").innerHTML = " Charmander, Squirtle o Bulbasaur"
    document.getElementById("1").innerHTML = `<img class="choice" onclick="game(pokemon, 1)" src='./pics/charmander.png'/>`;
    document.getElementById("2").innerHTML = `<img class="choice" onclick="game(pokemon, 2)" src='./pics/squirtle.png'/>`;
    document.getElementById("3").innerHTML = `<img class="choice" onclick="game(pokemon, 3)" src='./pics/bulbasaur.png'/>`;
}
function normal(){
    document.getElementById("title").innerHTML = "Piedra, Papel o Tijeras"
    document.getElementById("1").innerHTML = `<img class="choice" onclick="game(normal, 1)" src='./pics/rock.png'/>`;
    document.getElementById("2").innerHTML = `<img class="choice" onclick="game(normal, 2)" src='./pics/paper.png'/>`;
    document.getElementById("3").innerHTML = `<img class="choice" onclick="game(normal, 3)"  src='./pics/scissors.png'/>`;
}
function game(skin, option){
    games++;
    var computerChoice = Math.ceil(Math.random() * 3);
    var message;
    if(option == 1){
        if(skin == pokemon){
            imagePlayer = "charmander"
        }
        else{
            imagePlayer = "rock"
        }
    }
    else if(option == 2){
        if(skin == pokemon){
            imagePlayer = "squirtle"
        }
        else{
            imagePlayer = "paper";
        }
    }
    else{
        if(skin == pokemon){
            imagePlayer = "bulbasaur"
        }
        else{
            imagePlayer = "scissors";
        }
    }
    

    if(computerChoice == 1){
        if(skin == pokemon){
            imagePC = "charmander"
        }
        else{
            imagePC = "rock"
        }
    }
    else if(computerChoice == 2){
        if(skin == pokemon){
            imagePC = "squirtle"
        }
        else{
            imagePC = "paper";
        }
    }
    else{
        if(skin == pokemon){
            imagePC = "bulbasaur"
        }
        else{
            imagePC = "scissors";
        }
    }

    
    if(option == computerChoice){
        message = "¡Empate!";
        draws++;
    }
    else if(option == 1 && computerChoice == 2){
        if(skin == pokemon){
            message = "Squirtle gana a Charmander<br>Pierdes"
        }
        else{
            message = "Papel gana a piedra<br>Pierdes";
        }
        defeats++;
    }
    else if(option == 1 && computerChoice == 3){
        if(skin == pokemon){
            message = "Charmander gana a Bulbasaur<br>¡Ganas!"
        }else{
            message = "Piedra gana a tijeras<br>¡Ganas!";
        }
        victories++;
    }
    else if(option == 2 && computerChoice == 1){
        if(skin == pokemon){
            message = "Squirtle gana a Charmander<br>¡Ganas!"
        }else{
            message = "Papel gana a piedra<br>¡Ganas!";
        }
        victories++;
    }
    else if(option == 2 && computerChoice == 3){
        if(skin == pokemon){
            message = "Bulbasaur gana a Squirtle<br>Pierdes"
        }else{
            message = "Tijeras gana a papel<br>Pierdes";
        }
        defeats++;
    }
    else if(option == 3 && computerChoice == 1){
        if(skin == pokemon)
        {
            message = "Charmander le gana a Bulbasaur<br>Pierdes"
        }
        else{
            message = "Piedra gana a tijeras<br>¡Pierdes!";
        }
        defeats++;
    }
    else if(option == 3 && computerChoice == 2){
        if(skin == pokemon){
            message = "Bulbasaur le gana a Squirtle<br>¡Ganas!"
        }
        else{
            message = "Tijeras gana a papel<br>¡Ganas!";
        }
        victories++;
    }
    document.getElementById("total").innerHTML = games;
    document.getElementById("victories").innerHTML = victories;
    document.getElementById("defeats").innerHTML = defeats;
    document.getElementById("draws").innerHTML = draws;
    document.getElementById("messages").innerHTML = message;
    document.getElementById("imagePC").innerHTML = `<img class="choice" src='./pics/${imagePC}.png'/>`;
    document.getElementById("imagePlayer").innerHTML = `<img class="choice" src='./pics/${imagePlayer}.png'/>`;
}