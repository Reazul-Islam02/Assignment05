

1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

document.getElementById("id")  **

Selects a single element by ID.

Returns one element (or null if not found).

Fastest because IDs are unique in a page.

Example:

let box = document.getElementById("box");


document.getElementsByClassName("class")

Selects all elements with the given class.

Returns a live HTMLCollection (updates automatically if DOM changes).

Example:

let items = document.getElementsByClassName("item");


document.querySelector("selector")

Selects the first element that matches a CSS selector (#id, .class, div > p).

Returns one element (or null).

Example:

let firstItem = document.querySelector(".item");


document.querySelectorAll("selector")

Selects all elements that match a CSS selector.

Returns a static NodeList (doesn’t auto-update).

Example:

let allItems = document.querySelectorAll(".item");


Differences:

getElementById → only by ID, single element.

getElementsByClassName → by class, returns live HTMLCollection.

querySelector → first match, any CSS selector.

querySelectorAll → all matches, static NodeList.

2. How to create and insert a new element into the DOM

You can use document.createElement() + appendChild() or append().

Example:

let newDiv = document.createElement("div"); ** create element
newDiv.textContent = "Hello World!";       ** add text
newDiv.className = "box";                  ** add class

document.body.appendChild(newDiv); ** insert into body


Alternative (insert at specific place):

parentElement.insertBefore(newElement, referenceElement);


Modern method:

parentElement.append(newElement);   ** adds at end
parentElement.prepend(newElement);  ** adds at beginning

3. What is Event Bubbling and how does it work?

Event Bubbling = when an event (like a click) happens on an element, it first runs on the target element, then moves up the DOM tree (parent → grandparent → document).

Default behavior in JavaScript.

Example:

<div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});


Button logs:

Child clicked
Parent clicked

4. What is Event Delegation? Why is it useful?

Event Delegation = Attaching one event listener to a parent element instead of multiple child elements, and handling events based on the target.

Uses event bubbling.

Example:

document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Item clicked:", e.target.textContent);
  }
});




Saves memory (one listener instead of many).

Works for dynamically added elements.

Cleaner, scalable code.

5. Defference between preventDefault() and stopPropagation()

preventDefault()

Prevents the default browser action for an event.

Example: stop form from submitting or stop link from opening.

document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault(); ** stop link from opening
  console.log("Link blocked!");
});


stopPropagation()

Stops the event from bubbling up (or capturing down).

Example:

document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation(); ** parent won't get the click
  console.log("Only child clicked");
});