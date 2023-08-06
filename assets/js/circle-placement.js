(function () {
  "use strict"; // Start of use strict
  const reposition = () => {
    // bullets container
    const container = document.getElementById("bullets");

    // radius of the circle
    let radius = ((container.clientWidth + 5) * 75) / 100;

    // looping through items
    container
      .querySelectorAll(".bullet-wrapper")
      .forEach((el, index) => {
        // using icon as center of measuring
        const icon = el.querySelector(".icon");

        let rect = icon.getBoundingClientRect();
        let x = rect.left + 30;
        let y =
          rect.top +
          30 -
          document.getElementById("section-4").getBoundingClientRect()
            .top;

        let correctX =
          container.clientWidth - Math.sqrt(radius ** 2 - y ** 2);
        if (correctX != x) {
          el.style.transform = `translate(${Math.round(
            correctX - x
          )}px,0)`;
        }
        console.log(radius);
        console.log(
          `x-${index}: ${x}, y-${index}: ${y} x should be: ${correctX}`
        );
      });
  };
  window.addEventListener("load", () => {
    reposition();
  });
  window.addEventListener("resize", () => {
    setTimeout(reposition, 500);
  });
})(); // End of use strict
