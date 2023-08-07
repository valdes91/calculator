# calculator

This is my submission for the Calculator project from The Odin Project.

# Challenges and lessons learned

1. Event delegation was something I attempted first before deciding to just make event listeners for each individual button. I thought it'd be better to just make one event listener for the entire buttons div, but that caused some unwanted behavior. In the end I decided that the numbers, operators, delete, clear, and equals buttons will all have their own listeners with respective functionality. I had heard that event delegation is ideal for dynamic pages, but since this is just a calculator and no additional html elements will be created, it was fine to just make multiple listeners for the buttons.

2. Repeating code. I often found that I was repeating code when creating the functionality for the buttons, especially with setting numbers. I took the duplicate code and refactored it into a function to follow good coding practices.

3. CSS. Getting the calculator displayed correctly was challenging, especially keeping the window that shows the results a uniform height. I also had to google a bit on how to keep the numbers from overflowing outside of the calculator. I also think grid would have been a better choice to lay out the buttons with, but since I havent covered that part so far in the Odin Project I decided to use flexbox instead.
