// add Stars
function addReviewStars(i, reviewStars) {
  starCount = reviews[i]["stars"]
  wholeStars = Math.floor(starCount)
  remaining = Math.floor(5 - starCount)

  for (let s=0; s < wholeStars; s++) {
    reviewStars.append(`<img src="static/images/star/star_icon_full.svg" alt="Full star">`)
  }
  if (!(wholeStars === starCount)) {
    reviewStars.append(`<img src="static/images/star/star_icon_half.svg" alt="Half star">`)
  }
  for (let r=0; r < remaining; r++) {
    reviewStars.append(`<img src="static/images/star/star_icon_empty.svg" alt="Empty star">`)
  }
}

// initialize reviews
function addReviews(count, startFrom) {
  for (let i=0; i < count; i++) {
    i += startFrom
    reviewItem = jQuery("<div>", {
                    "class": "reviewItem",
                    "reviewId": i
                  })

    $('.nextReview').before(reviewItem)

    reviewStars = jQuery("<div>", {"class": "reviewStars"})
    reviewContent = jQuery("<div>", {"class": "reviewContent"})

    reviewItem.append(reviewStars)
    reviewItem.append(reviewContent)

    reviewText = jQuery("<p>", {"class": "reviewText"})
    reviewAuthor = jQuery("<p>", {"class": "reviewAuthor"})

    reviewText.text(reviews[i]["content"])
    reviewAuthor.text(`- ${reviews[i]["author"]}`)

    reviewContent.append(reviewText)
    reviewContent.append(reviewAuthor)

    // add stars
    addReviewStars(i, reviewStars)
  }
}

// move review next if direction=1 or prev if direction=-1
function reviewMove(direction) {
  reviewContainers = $(".reviewRow").children()

  for (let i=1; i < reviewContainers.length-1; i++) {
    reviewItem = $(reviewContainers[i])
    reviewItemNext = parseInt(reviewItem.attr("reviewId")) + direction

    if (reviewItemNext >= reviews.length) {
      reviewItemNext = 0
    }
    if (reviewItemNext < 0) {
      reviewItemNext = reviews.length - 1
    }

    reviewItem.find('.reviewStars').remove()
    reviewStars = jQuery("<div>", {"class": "reviewStars"})
    addReviewStars(reviewItemNext, reviewStars)

    reviewContent = reviewItem.find(".reviewContent")
    reviewContent.before(reviewStars)

    reviewItem.attr("reviewId", reviewItemNext)
    reviewItem.find(".reviewText").text(reviews[reviewItemNext]["content"])
    reviewItem.find(".reviewAuthor").text(`- ${reviews[reviewItemNext]["author"]}`)
  }
}

function updateReview(newReviewsShow) {
  reviewContainers = $(".reviewRow").children()
  currentReviewShown = reviewContainers.length - 2

  if (currentReviewShown > newReviewsShow) {
    // remove reviews shown
    toRemoveCount = currentReviewShown - newReviewsShow
    for (let i=0; i < toRemoveCount; i++) {
      reviewContainers[reviewContainers.length - 2 - i].remove()
    }
  } else {
    // add reviews shown
    if (currentReviewShown == 0) {
      startFromId = 0
    } else {
      startFromId = parseInt($(reviewContainers[reviewContainers.length - 2]).attr("reviewId")) + 1
    }
    addReviews(newReviewsShow - currentReviewShown, startFromId)
  }
}

function responsiveReview() {
  // changes the amount of reviews shown based on windosize
  if (window.matchMedia('(min-width: 1461px)').matches) {
    updateReview(3)
  } else if (window.matchMedia('(max-width: 1112px)').matches) {
    updateReview(1)
  } else {
    updateReview(2)
  }

  if (window.matchMedia('(max-width: 625px)').matches) {
    $(".reviewItem").click(function() {
      reviewMove(1)
    })
  } else {
    $(".reviewItem").prop("onclick", null).off("click");
  }
}
responsiveReview()

$(document).ready(function() {
  // On next review
  $(".nextReview").click(function() {
    reviewMove(1)
  })
  $(".prevReview").click(function() {
    reviewMove(-1)
  })

  // changes the amount of reviews shown based on windosize
  $(window).resize(responsiveReview)

})
