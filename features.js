const donationBtn = document.getElementById('donation-btn');
const historyBtn = document.getElementById('history-btn');





historyBtn.addEventListener('click', function () {

  historyBtn.classList.add('text-black', 'bg-btnPrimary')
  donationBtn.classList.add('btn-outline')
  donationBtn.classList.remove('text-black', 'bg-btnPrimary')

  document.getElementById('history-section').classList.remove('hidden')
  document.getElementById('main-donate-section').classList.add('hidden')

})


donationBtn.addEventListener('click', function () {
  historyBtn.classList.remove('text-black', 'bg-btnPrimary')
  donationBtn.classList.add('text-black', 'bg-btnPrimary')

  document.getElementById('history-section').classList.add('hidden')
  document.getElementById('main-donate-section').classList.remove('hidden')

})



