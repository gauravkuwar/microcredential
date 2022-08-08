// Author: Gaurav Kuwar
// Items Home (Top 6)

let path = window.location.pathname;
let currentHtmlFile = path.split("/").pop();

function loadItems(itemsPerRow) {
  let showItemCount = 6;
  if (currentHtmlFile === "shop_all.html") {
    showItemCount = Object.keys(allItems).length
  }

  for (let i=0; i < showItemCount; i++) {
    let item = jQuery("<div>")
    item.attr("class", "item")

    item.attr("id", i)
    shopImgContainer = jQuery("<div>", {"class": "shopImgContainer"})
    shopTextContainer = jQuery("<div>", {"class": "shopTextContainer"})

    itemWrap = jQuery("<div>", {"class": "itemWrap"})
    $(".itemsContainer").append(itemWrap)
    itemWrap.append(item)
    item.append(shopImgContainer)
    item.append(shopTextContainer)

    shopImgContainer.append(`<img src="${allItems[i]["thumbImg"]}" alt="${allItems[i]["name"]}">`)
    shopTextContainer.append(`<h2>${allItems[i]["name"]}</h2>`)
    shopTextContainer.append(`<p>$${allItems[i]["price"]}</p>`)
  }
}
loadItems(3)
