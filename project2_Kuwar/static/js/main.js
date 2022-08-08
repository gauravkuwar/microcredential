// Project 2 - Sales Website - Furniture
// EverUp Software Engineering
// Author: Gaurav Kuwar

// Sources:
// Information and Images from:
//
// https://www.livefeather.com
// https://www.pexels.com
// https://www.iconfinder.com

// initialize cart if cartItems doesn't exist
if (sessionStorage.cartItems === undefined) {
  setCart({})
} else {
  updateCartQty(getCart())
}

// function to open modal on click
function openModal(id) {
  if (id in getCart()) {
    updateCartAddAgain()
  } else {
    $("#modalCartButton").attr("class", "addToCart")
    $("#modalCartButton").text('Add to Cart')
  }

  $(".modalThumbImg").attr({
    "src": allItems[id]["thumbImg"],
    "alt": allItems[id]["name"]
  })
  for (let i=0; i<3; i++) {
    $(`.modalImg${i+1}`).attr({
      "src": allItems[id]["imgPaths"][i],
      "alt": allItems[id]["name"]
    })
  }

  $(".modalContent h1").text(allItems[id]["name"])
  $(".modalContent p").text(allItems[id]["description"])
  $(".modalPrice").text(`$${allItems[id]["price"]}`)

  $(".modalWindow").css("display", "block",)
  $(".modalBody").css("display", "block",)
  $("body").css("overflow", "hidden")
}

// function to close modal on click
function closeModal() {
  console.log("closing");
  $(".modalWindow").css("display", "none")
  $(".modalBody").css("display", "none",)
  $("body").css("overflow", "auto")
}

function swapAtResize(elem1Name, elem2Name, mediaWidth) {
  if (window.matchMedia('(max-width: 872px)').matches) {
    elem1 = $(elem1Name)
    elem1.remove()
    $(elem2Name).after(elem1)
  } else {
    elem2 = $(elem2Name)
    elem2.remove()
    $(elem1Name).after(elem2)
  }
}

function onResize() {
  swapAtResize(".firstLeft", ".firstRight", '(max-width: 872px)')
}
onResize()


$(document).ready(function() {
  // go to top button
  $(document).scroll(function() {
    if (window.scrollY > 200) {
      $('.goToTop').css({
        'opacity': '80%',
        'visibility': 'visible'
      })
    } else {
      $('.goToTop').css({
        'opacity': '0%',
        'visibility': 'hidden'
      })
    }
  })

  // MODAL WINDOW
  $(".item").click(function() {
    itemId = this.id
    openModal(this.id)
  })
  $(".cartItemTextSection h2").click(function() {
    itemId = $(this).parent().parent().parent().attr("id")
    openModal(itemId)
  })

  $(".closeModal").click(closeModal)
  $(".modalWindow").click(closeModal).children().click(function(e) {
    return false
  })

  // ADD TO CART BUTTON
  $("#modalCartButton").click(function() {
    updateCartAddAgain()

    cartItems = getCart()
    if (!(itemId in cartItems)) {
      cartItems[itemId] = 0
    }
    cartItems[itemId] = parseInt(cartItems[itemId]) + 1
    setCart(cartItems)
    updateCostSummary()
    $(".quantity").val(cartItems[itemId])
  })

  $(window).resize(onResize)
})
