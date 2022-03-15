let counted = document.getElementById("counterValue")
let count = 0
function onIncrement() {
  count = count + 1;
  counterValue.innerText = count;
  document.getElementById('counterValue').style.color ="green";
}
function onDecrement(){
    count = count-1;
    counterValue.innerText =count;
    document.getElementById('counterValue').style.color ="red";
}
function onReset(){
    count = 0
    counterValue.innerText =count;
    document.getElementById('counterValue').style.color ="black";
}