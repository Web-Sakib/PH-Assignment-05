
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

  if (inputAmount > 0 && !isNaN(inputAmount) && inputAmount <= mainBalance) {
    const afterDonate = mainBalance - inputAmount;
    document.getElementById('main-balance').innerText = afterDonate
    const afterDonate2 = inputAmount + cardBalance;
    document.getElementById('card1-added-balance').innerText = afterDonate2;
    document.getElementById('card1-input').value = '';
    // alert('You Have donated successfully')

    // for history transaction 
    const transaction = document.createElement('div')
    transaction.innerHTML = ` 
    <div class="border p-5 container mx-auto rounded-lg shadow-md">
      <h3 class="text-lg font-semibold mb-2"> ${inputAmount} Taka is Donated for flood at Noakhali, Bangladesh</h3>
      <p> ${new Date().toLocaleString()} </p>
    </div>
    `
    document.getElementById('history-section').prepend(transaction)

    //for Modal
    const modal = document.getElementById('my_modal_1')
    modal.showModal()
  

  }
  else {
    alert('Please input a valid amount')
    document.getElementById('card1-input').value = '';
  }



})


// Card 2 - Donate button with addEventListener
document.getElementById('donate-btn2').addEventListener('click', function () {

  const inputAmount = getInputValueById('card2-input');
  const mainBalance = getTextById('main-balance');
  const cardBalance = getTextById('card2-added-balance')

  if (inputAmount > 0 && !isNaN(inputAmount) && inputAmount <= mainBalance) {
    const afterDonate = mainBalance - inputAmount;
    document.getElementById('main-balance').innerText = afterDonate
    const afterDonate2 = inputAmount + cardBalance;
    document.getElementById('card2-added-balance').innerText = afterDonate2;
    document.getElementById('card2-input').value = ' ';
    // alert('You Have donated successfully')

    // for history transaction 
    const transaction = document.createElement('div')
    transaction.innerHTML = ` 
    <div class="border p-5 container mx-auto rounded-lg shadow-md">
      <h3 class="text-lg font-semibold mb-2"> ${inputAmount} Taka is Donated for flood relief in Feni, Bangladesh</h3>
      <p> ${new Date().toLocaleString()} </p>
    </div>
    `
    document.getElementById('history-section').prepend(transaction)

     //for Modal
     const modal = document.getElementById('my_modal_1')
     modal.showModal()
  }
  else {
    alert('Please input a valid amount')
    document.getElementById('card2-input').value = '';
  }



})

// Card 3 - Donate button with addEventListener
document.getElementById('donate-btn3').addEventListener('click', function () {

  const inputAmount = getInputValueById('card3-input');
  const mainBalance = getTextById('main-balance');
  const cardBalance = getTextById('card3-added-balance')

  if (inputAmount > 0 && !isNaN(inputAmount) && inputAmount <= mainBalance) {
    const afterDonate = mainBalance - inputAmount;
    document.getElementById('main-balance').innerText = afterDonate
    const afterDonate2 = inputAmount + cardBalance;
    document.getElementById('card3-added-balance').innerText = afterDonate2;
    document.getElementById('card3-input').value = ' ';
    // alert('You Have donated successfully')

    // for history transaction 
    const transaction = document.createElement('div')
    transaction.innerHTML = ` 
    <div class="border p-5 container mx-auto rounded-lg shadow-md">
      <h3 class="text-lg font-semibold mb-2"> ${inputAmount} Taka is Donated for injured in the Quota Movement</h3>
      <p> ${new Date().toLocaleString()} </p>
    </div>
    `
    document.getElementById('history-section').prepend(transaction)

     //for Modal
     const modal = document.getElementById('my_modal_1')
     modal.showModal()

  }
  else {
    alert('Please input a valid amount')
    document.getElementById('card3-input').value = '';
  }



})

