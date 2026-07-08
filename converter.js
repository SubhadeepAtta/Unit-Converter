const convertEl=document.getElementById("convert-btn")
const lengthEl=document.getElementById("length")
const volumeEl=document.getElementById("volume")
const massEl=document.getElementById("mass")
const inputEl=document.getElementById("input-el")

convertEl.addEventListener("click",function(){
  lengthEl.textContent=""
  volumeEl.textContent=""
  massEl.textContent=""
  const num=Number(inputEl.value)
  convert(num)
})

function convert(n){
  let ft=(n*3.28084).toFixed(3)
  let m=(n/3.28084).toFixed(3)

  let lt=(n*3.78541).toFixed(3)
  let gl=(n/3.78541).toFixed(3)

  let kg=(n/2.20462).toFixed(3)
  let pd=(n*2.20462).toFixed(3)
  lengthEl.textContent+= n + " meters = "+ ft + " feet | "+ n + " feet = "+ m + " meters"
  volumeEl.textContent+= n + " liters = "+ gl + " gallons | "+ n + " gallons = "+ lt + " liters"
  massEl.textContent+=n + " kilos = "+ pd + " pounds | "+ n + " pounds = "+ kg + " kilos"

}