document.addEventListener("DOMContentLoaded", function() {
  const tagFilter = document.getElementById("tag-filter");
  const productBlocks = document.querySelectorAll(".interactive-product-showcase__product");

  tagFilter.addEventListener("change", function() {
    const selectedTag = tagFilter.value.toLowerCase();

    productBlocks.forEach(function(product) {
      const productTags = product.dataset.tags.toLowerCase();

      if (selectedTag === "" || productTags.includes(selectedTag)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});
