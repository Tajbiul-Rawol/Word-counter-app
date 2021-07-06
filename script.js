var print = function(msg){
    let count = 0;
    let messageArray  = msg.split(" ");
    messageArray.forEach(element => {
        count++;
    });
   document.getElementById("output").innerHTML = "Number of words: " + count;
}


document.getElementById("btn").onclick = function(){
     print(document.getElementById("str").value);
}