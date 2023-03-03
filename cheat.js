var zadani = [];

var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");

setInterval(() =>{

    var zadaniTxt = document.querySelectorAll(".word")[0].innerHTML;
    

    if(!option0 || !option1)
        return;
    

    var obsahuje = false;
    var index = 0;

    for(let i = 0; i < zadani.length - 1; i++){
        if(zadani[i].text == zadaniTxt){
            obsahuje = true;
            index = i;
            break;
        }
    }

    if(obsahuje){
        if(zadani[index].ans == 1)
            option1.click();
        else
            option0.click();
    }else{
        option0.click();

        if(option0.getAttribute("class") == "card noselect option wrong"){
            zadani.push({text: zadaniTxt, ans: 1});
            option1.click();
        }
        else{
            zadani.push({text: zadaniTxt, ans: 0});
        }
    }

    

    console.log(zadani);
}, 100);
