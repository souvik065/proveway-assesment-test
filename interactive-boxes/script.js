document.addEventListener("DOMContentLoaded", () => {
  // Get all boxes
  const boxes = document.querySelectorAll(".box")
  const radioButtons = document.querySelectorAll(".unit-radio")
  const totalElement = document.querySelector(".total")

  // Set default selection for radio button but don't expand any box initially
  document.getElementById("unit2").checked = true
  document.getElementById("box2").classList.add("active")

  // Function to collapse all boxes
  function collapseAllBoxes() {
    boxes.forEach((box) => {
      box.classList.remove("expanded")
    })
  }

  // Add click event to box headers
  boxes.forEach((box) => {
    const boxHeader = box.querySelector(".box-header")
    const radio = box.querySelector(".unit-radio")

    boxHeader.addEventListener("click", () => {
      // Uncheck all radios and remove active class from all boxes
      radioButtons.forEach((rb) => (rb.checked = false))
      boxes.forEach((b) => b.classList.remove("active"))

      // Check the radio and add active class to the clicked box
      radio.checked = true
      box.classList.add("active")

      // Toggle expansion of the clicked box
      const isExpanded = box.classList.contains("expanded")

      // First collapse all boxes
      collapseAllBoxes()

      // Then expand the clicked box if it wasn't already expanded
      if (!isExpanded) {
        box.classList.add("expanded")
      }

      // Update total based on selection
      updateTotal(box.querySelector(".current-price").textContent)
    })
  })

  // Function to update total
  function updateTotal(price) {
    totalElement.textContent = `Total : ${price}`
  }

  // Add event listeners to select elements for demonstration
  const selects = document.querySelectorAll("select")
  selects.forEach((select) => {
    select.addEventListener("change", function () {
      console.log(`Selected ${this.previousElementSibling.textContent}: ${this.value}`)
    })
  })

  // Add click event to Add to Cart button
  const cartButton = document.querySelector(".cart-button")
  cartButton.addEventListener("click", () => {
    const selectedBox = document.querySelector(".box.active")
    const unitCount = selectedBox.querySelector(".unit-count").textContent
    const price = selectedBox.querySelector(".current-price").textContent

    alert(`Added to cart: ${unitCount} for ${price}`)
  })
})
