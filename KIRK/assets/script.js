var quantityInput = document.getElementById('quantity');
//   var totalValue = document.getElementById('total-value');
  var errorMessage = document.getElementById('error-message');

  function increment() {
    var currentQuantity = parseInt(quantityInput.value); 
    quantityInput.value = currentQuantity + 1;
  }

  function decrement() {
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
    }
  }

  function calculateTotal() {
    var quantity = parseInt(quantityInput.value);

    // Simple validation for demonstration purposes
    if (quantity < 1) {
      errorMessage.textContent = 'Please select at least 1 item.';
    } else {
      errorMessage.textContent = '';

      // Calculate total value (for example, $10 per item)
      var totalPrice = quantity * 10;

      // Display total value
      totalValue.textContent = 'Total: $' + totalPrice;

      // Here you can perform additional actions, such as submitting the form or other logic.
      // For now, let's just log the data to the console.
      console.log('Quantity:', quantity);
      console.log('Total Price:', totalPrice);
    }
  }




  $('#btn').on('click' , function(){
    $('#text').Connect-Wallet('button.bg-color.wallet margin')
  })