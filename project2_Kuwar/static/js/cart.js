updateCostSummary()

// Load Cart items onto page
cartItems = getCart()
for (let itemId of Object.keys(cartItems)) {
  qty = cartItems[itemId]

  cartItemDiv = jQuery("<div>", {
    "class": "cartItem",
    "id": itemId
  })
  cartItemContentSection = jQuery("<div>", {"class": "cartItemContentSection"})

  cartItemDeleteSection = jQuery("<div>", {"class": "cartItemDeleteSection"})
  cartItemDeleteSection.html("<p>&#10005;</p>")

  $(".cartItemSection").append(cartItemDiv)
  cartItemDiv.append(cartItemContentSection)
  cartItemDiv.append(cartItemDeleteSection)

  cartItemTextSection = jQuery("<div>", {"class": "cartItemTextSection"})
  cartItemTextSection.append(`<h2>${allItems[itemId]["name"]}</h2>`)
  cartItemTextSection.append(`<p>${allItems[itemId]["price"]}</p>`)

  cartItemContentSection.append(`<img src="${allItems[itemId]["thumbImg"]}" alt="${allItems[itemId]["name"]}">`)
  cartItemContentSection.append(cartItemTextSection)

  qtyContainer = jQuery("<div>", {"class": "qtyContainer"})
  qtyContainer.html(`Qty. <input type="number" class="quantity" name="quantity" min="0" max="99" value="${qty}">`)
  cartItemTextSection.append(qtyContainer)
}

function removeFromCart(itemDiv) {
  itemToDeleteId = itemDiv.attr("id")
  cartItems = getCart()
  delete cartItems[itemToDeleteId]
  setCart(cartItems)
  itemDiv.remove()
}

$(document).ready(function() {

  // check form

  $(function() {
  $("#userDataForm").on("submit", function(e) {
      // check items in cart
      if (getCartTotalQty() == 0) {
        console.log(getCartTotalQty());
        alert('Add items to cart');
        return false;
      }

      if ($.trim($("#fname").val()) === "") {
        alert('First name is empty.');
        return false;
      } else if ($.trim($("#lname").val()) === "") {
        alert('Last name is empty.');
        return false;
      } else if ($.trim($("#email").val()) === "") {
        alert('Email is empty.');
        return false;
      }

      setCart({})
      return true; // allow submit
    });
  });

  $(".clearCartButton").click(function() {
    setCart({})
    $(".cartItemSection").empty()
    updateCostSummary()
  })

  // Delete item
  $(".cartItemDeleteSection p").click(function() {
    itemDiv = $(this).parent().parent()
    removeFromCart(itemDiv)
    updateCostSummary()
  })

  // change in qty
  $(".quantity").change(function() {
    newQty = $(this).val()
    itemDiv = $(this).parent().parent().parent().parent()

    if (newQty > 99) {
      $(this).val(99)
      newQty = 99
    }

    if (newQty <= 0) {
      removeFromCart(itemDiv)
    } else {
      cartItems = getCart()
      cartItems[itemDiv.attr("id")] = newQty
      setCart(cartItems)
    }
    updateCostSummary()
  })
})
