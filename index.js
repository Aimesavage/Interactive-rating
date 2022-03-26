

document.querySelector(".submitBtn").addEventListener('click', function () { 

   document.querySelector(".ctnRating").classList.add('display'); 
   document.querySelector(".ctnSubmit").classList.remove('display')
  
   
 })

 const rateBtn = document.querySelectorAll('.rateBtn')

   for(let i = 0 ; i<rateBtn.length; i++){
       rateBtn[i].addEventListener("click", function (e) { 
          var chosenScore =  e.target.value
         console.log(document.getElementById('score').innerText = chosenScore)
        })
   }