
// Shared function 

function getInputValueById(id) {
  return parseFloat(document.getElementById(id).value);
}

function getTextById(id) {
  return parseFloat(document.getElementById(id).innerText);
}


// Card 1 - Donate button with addEventListener
document.getElementById('donate-btn1').addEventListener('click', function () {

  const inputAmount = getInputValueById('card1-input');
  const mainBalance = getTextById('main-balance');
  const cardBalance = getTextById('card1-added-balance')

  if(inputAmount > 0 && !isNaN(inputAmount) && inputAmount <= mainBalance){
    const afterDonate = mainBalance - inputAmount;
    document.getElementById('main-balance').innerText = afterDonate
    const afterDonate2 = inputAmount + cardBalance;
    document.getElementById('card1-added-balance').innerText = afterDonate2;
  }
  else {
    alert('Please input a valid ammount')
  }

  // for transaction 
  const transaction = document.createElement('div')
  transaction.innerHTML = `
  
  <div class="border p-5 container mx-auto rounded-lg shadow-md">
      <h3 class="text-lg font-semibold mb-2"> ${inputAmount} Taka is Donated Flood at Noakhali, Bangladesh</h3>
      <p> ${Date()} </p>
    </div>
  
  `

  // document.getElementById('history-section').appendChild(transaction) // system 1
  document.getElementById('history-section').prepend(transaction) // system 1
  


})


