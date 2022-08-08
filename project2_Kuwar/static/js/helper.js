// Helper functions

const DELIVERY_PRICE = 50

function getFinalTotal() {
  subTotal = parseFloat(getCartSubTotalCost())
  if (getCartTotalQty() === 0) {
    return 0
  }

  return subTotal + DELIVERY_PRICE
}

function updateCostSummary() {
  subTotal = parseFloat(getCartSubTotalCost())
  finalTotal = getFinalTotal()

  $("#total_cost").val(finalTotal)
  $("#subTotal").text(`$${moneyFormat(subTotal)}`)
  $("#delivery").text(`$${moneyFormat(DELIVERY_PRICE)}`)
  $("#finalTotal").text(`$${moneyFormat(finalTotal)}`)
}

function moneyFormat(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

function getCartSubTotalCost() {
  totalCost = 0;
  cartItems = getCart()
  for (let k of Object.keys(cartItems)) {
    totalCost += parseInt(cartItems[k]) * parseFloat(allItems[k]["price"])
  }
  return moneyFormat(totalCost);
}

function getCartTotalQty() {
  total = 0;
  cartItems = getCart()
  for (let k of Object.keys(cartItems)) {
    total += parseInt(cartItems[k])
  }
  return total;
}
function updateCartQty(cartItems) {
  cartTotalQty = getCartTotalQty(cartItems)
  if (cartTotalQty > 0) {
    $(".cartItemCounter").css("display", "block")
  }
  else {
    $(".cartItemCounter").css("display", "none")
  }
  $(".cartItemCounter").text(cartTotalQty)
  sessionStorage.setItem('cartTotalQty', cartTotalQty)
}

// get cart from sessionStorage
function getCart() {
  return JSON.parse(sessionStorage.getItem('cartItems'))
}
// set cart value to sessionStorage
function setCart(cartItems) {
  sessionStorage.setItem('cartItems', JSON.stringify(cartItems))
  updateCartQty(cartItems)
}

function updateCartAddAgain() {
  $("#modalCartButton").attr("class", "addToCartAgain")
  $("#modalCartButton").html('<img src="static/images/check_marks/check_mark_white.svg" alt="Item in Cart">')
}
