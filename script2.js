const close = document.querySelector("#closebtn");
const overlay = document.querySelector("#overlay");
const makebtn = document.querySelector("#makebtn");
const maketask = document.querySelector("#maketask");

localStorage.setItem("tasks", stringi([]));

close.addEventListener("click", function(){
    overlay.style.display = "none";
});

makebtn.addEventListener("click", function(){
    overlay.style.display = "initial";
});

maketask.addEventListener("click", function(){
    var valueoftitle = document.querySelector("#title").value;
    var valueofdata = document.querySelector("#data").value;
    
    const ans = parser(localStorage.getItem("tasks"));
    ans.push({title: valueoftitle, data: valueofdata})

    localStorage.setItem("tasks", stringi(ans));
});


function parser(data){
    return JSON.parse(data);
}

function stringi(data){
    return JSON.stringify(data);
}

