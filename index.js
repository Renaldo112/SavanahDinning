const reservation = document.getElementById('reservation-fill-out')

const firstName = document.getElementsByClassName('firstname')
const lastName = document.getElementsByClassName('lastname')
const date = document.getElementsByClassName('date')
const time = document.getElementsByClassName('time')
const guest = document.getElementById('guest')
const submit = document.getElementsByClassName('submit')

let reserved = document.getElementById('reserved') 


reservation.addEventListener("submit", function (e) {
   e.preventDefault()
   reserved.textContent = ` ${firstName[0].value}   ${lastName[0].value}  has  ${guest.value}  reservations  on  ${date[0].value} at ${time[0].value} `
  
  


})




  

