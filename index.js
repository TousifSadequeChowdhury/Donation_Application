const DonationButton = document.getElementById('donate');
DonationButton.addEventListener('click',function(){
const Amound=parseFloat(document.getElementById('amound').value);
const Totalbal = parseFloat(document.getElementById('totalBalance').innerText);
const Totalbalelement=document.getElementById('totalBalance');
const TotalBalance=Totalbal-Amound;
Totalbalelement.innerText=TotalBalance;

const NoakhaliElement=document.getElementById('noakhali');
const NoakhaliAmount=parseFloat(NoakhaliElement.innerText);
const NoakhaliTotal=NoakhaliAmount+Amound;
NoakhaliElement.innerText= NoakhaliTotal;
})
function openHome() {
    window.location.href = 'index.html'; // Redirects to index.html
  }
  function openFaq() {
    window.location.href = 'faq.html'; // Redirects to index.html
  }
  
  
  
