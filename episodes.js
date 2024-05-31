function openTab(evt, tabName) { /* Defines a function named openTab that takes two parameters: evt and tabName. */
    var i, tabcontent, tablinks; /* Declares three variables i, tabcontent, and tablinks. */
    tabcontent = document.getElementsByClassName("tab-content"); /* Assigns all elements with the class name "tab-content" to the tabcontent variable. */
    for (i = 0; i < tabcontent.length; i++) { /* Starts a loop that will iterate through each element in tabcontent.*/
        tabcontent[i].style.display = "none"; /* Sets the display style of each "tab-content" element to "none" (hides the elements). */
    } /* Closes the for loop. */
    tablinks = document.getElementsByClassName("tablink"); /* Assigns all elements with the class name "tablink" to the tablinks variable. */
    for (i = 0; i < tablinks.length; i++) { /* Starts a loop that will iterate through each element in tablinks. */
        tablinks[i].className = tablinks[i].className.replace(" active", ""); /* Removes the "active" class from each "tablink" element. */
    } /* Closes the for loop. */
    document.getElementById(tabName).style.display = "block"; /*  Sets the display style of the element with the ID tabName to "block" (shows the element). */
    evt.currentTarget.className += " active"; /* Adds the "active" class to the element that triggered the event (evt.currentTarget). */
}

document.getElementById("defaultOpen").click(); /* Simulates a click on the element with the ID "defaultOpen". */

// Enhance keyboard navigation
document.querySelectorAll('.tablink').forEach(button => {
    button.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const nextTab = e.key === 'ArrowRight' ? button.nextElementSibling : button.previousElementSibling;
            if (nextTab) {
                nextTab.click();
                nextTab.focus();
            }
        }
    });
});
