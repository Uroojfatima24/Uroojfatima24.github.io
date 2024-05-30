/* Defines a function named toggleBubble that takes the ID of the bubble element as a parameter. */
function toggleBubble(bubbleId) { 
/* Retrieves the bubble element from the document based on its ID. */
    var bubble = document.getElementById(bubbleId);
/* Toggles the presence of the CSS class show on the bubble element. If the class is present, 
it is removed; if it is absent, it is added. This class likely controls the visibility of the bubble, 
as defined in the CSS .bubble-container.show rule. */
    bubble.classList.toggle('show');
}
