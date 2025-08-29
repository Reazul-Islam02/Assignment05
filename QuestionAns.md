1. DOM Selection(it is a common proces to make functional website)
getElementById("id") → single element by ID.
getElementsByClassName("class") → multiple elements (live HTMLCollection).
querySelector("selector") → first match (CSS selector).
querySelectorAll("selector") → all matches (static NodeList).

2. Create & Insert Element(the proces creat & insert element)
let div = document.createElement("div");
div.textContent = "Hello";
document.body.appendChild(div);   // insert


Other methods: append(), prepend(), insertBefore().

3. Event Bubbling
Event goes from target → parent → ancestor → document.
Example: clck on child triggers child handler, then parent’s handler.

4. Event Delegation
Add one lstener to parent, use event.target to detect child.
Benefit: fewer listeners, works with dynamic elements.

5. preventDefault() vs stopPropagation()
preventDefault() → blocks default action (e.g., stop form submit, link open).
stopPropagation() → stops event from bubbling/capturing further.