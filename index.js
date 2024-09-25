// Function to handle donations
function handleDonation(donationId, totalDisplayId, inputId) {
  const inputElement = document.getElementById(inputId);
  const totalDisplayElement = document.getElementById(totalDisplayId);
  const inputValue = parseFloat(inputElement.value);

  // Get the current total balance and donation totals dynamically from the DOM
  let totalBalance = parseFloat(document.getElementById("totalBalancee").innerHTML);
  let noakhaliTotal = parseFloat(document.getElementById("noakhali").innerHTML);
  let feniTotal = parseFloat(document.getElementById("feni").innerHTML);
  let quotaTotal = parseFloat(document.getElementById("quota").innerHTML);

  // Check if input value is a valid number and positive
  if (!isNaN(inputValue) && inputValue > 0) {
    if (inputValue <= totalBalance) {
      totalBalance -= inputValue;

      // Add the donation amount to the respective total
      if (donationId === 'noakhali') {
        noakhaliTotal += inputValue;
        document.getElementById("noakhali").textContent = noakhaliTotal;
      } else if (donationId === 'feni') {
        feniTotal += inputValue;
        document.getElementById("feni").textContent = feniTotal;
      } else if (donationId === 'quota') {
        quotaTotal += inputValue;
        document.getElementById("quota").textContent = quotaTotal;
      }

      // Update the total balance display in the DOM
      document.getElementById("totalBalancee").textContent = totalBalance;

      // Clear the input field after the donation
      inputElement.value = '';

      // Show a confirmation modal or message
      my_modal_5.showModal();

    } else {
      alert('Insufficient balance. Please enter an amount less than or equal to your balance.');
    }
  } else {
    alert("Please enter a valid positive amount.");
  }
}

// Add event listeners for each donation button
document.getElementById("noakhaliDonate").addEventListener("click", function() {
  handleDonation("noakhali", "noakhaliTotal", "noakhaliAmound");
});

document.getElementById("feniDonate").addEventListener("click", function() {
  handleDonation("feni", "feniTotal", "feniAmound");
});

document.getElementById("quotaDonate").addEventListener("click", function() {
  handleDonation("quota", "quotaTotal", "quotaAmount");
});


//for Blog and Home button
function openHome() {
    window.location.href = 'index.html'; // Redirects to index.html
  }
  function openFaq() {
    window.location.href = 'faq.html'; // Redirects to index.html

  }
  
  
  
