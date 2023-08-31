# Blend Commerce - Shopify Developer Interview Task

This test is designed to assess skills in Shopify theme development, Liquid, HTML, CSS, JavaScript, React, and understanding of Git and Shopify CLI.

## Required Tools
- Any code editor (we recommend VSCode)

## Task 1: Shopify Theme Development (45 minutes)
Create a small Shopify product card. When clicked, the product card should add product to cart via AJAX API and show a "Added to Cart" message.

**Initial Code**

```liquid
{% assign product = all_products['sample-product'] %}

<div class="product-card" onclick="addToCart()">
  <!-- HTML & Liquid goes here -->
</div>

<style>
  /* CSS goes here */
</style>

<script>
  function addToCart() {
    // JS goes here
  }
</script>
```


## Task 2: Knowledge (30 minutes)
You'll answer a series of questions and provide a small piece of code (if necessary).

1. What are React Hooks? Provide an example of a functional component that uses the useState and useEffect hooks.
2. Describe the process you would take to clone a create a new branch. You can use ready add-ons in your IDE.
3. You need to make a form accessible for screen readers. What HTML attributes would you use?
4. How would you display different prices for logged-in and logged-out users using Liquid? Show some example code.
5. How would you make a responsive navigation bar? Outline your approach.
6. How would you use Shopify CLI to create a new theme and then deploy it to a development store? Walk me through the steps.

*Note: We're not looking for perfection in this task, we're more interested in your understanding and approach to the problem.*

## Time Total: 1 hour 15 minutes
Please send the answers via email by discussed deadline.

- Font size: 20px (desktop) 16px (mobile), color: `#000000`.

#### Product Description
- Font size: 16px (desktop) 14px (mobile), color: `#333333`.

#### Product Price
- Font size: 22px (desktop) 16px (mobile), color: `#000080`.

#### Add to Cart Button
- Color: `#008000`, border radius: 5px, padding: 10px all around.

#### Filter Option
- Placed above the grid on the right, styled as a dropdown or checkboxes, font size: 18px (desktop) 14px (mobile).

## Task 2: React.js Knowledge (15 minutes)
You'll answer a series of questions and provide a small piece of code.

1. Explain the concept of virtual DOM in React.js and how it helps improve performance.
2. What are React Hooks? Provide an example of a functional component that uses the useState and useEffect hooks.
3. Write a small code showcasing a React component rendering a list of products. Each product should be an object with id, name, and price properties.

## Task 3: Version Control (Git) (15 minutes)
This task is focused on testing your understanding of GIT.

1. Describe the process you would take to clone a create a new branch. You can use ready add-ons in your IDE.
2. Describe how you commit changes to that branch. You can use ready add-ons in your IDE.

Note: We're not looking for perfection in this task, we're more interested in your understanding and approach to the problem.

## Time Total: 1 hour 15 minutes
Please send the answers via email by discussed deadline.

