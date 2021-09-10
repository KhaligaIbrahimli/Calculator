let button = document.querySelectorAll("input[type='button']");
let screen = document.querySelector(".screen");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");

for(var i= 0;i<17;i++)
{
  if(i !=15 && i !=16){
    button[i].addEventListener("click", write);
  }
  
}
function write(){
screen.value = screen.value + this.value;
}

equal.addEventListener("click",total);
function total(){
  screen.value=eval(screen.value);
}

clear.addEventListener("click", btnclear);
function btnclear(){
  screen.value="";
}



