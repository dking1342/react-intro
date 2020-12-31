<h1>Lorem</h1>
<h2>Prerequisites</h2>
<a href="https://www.reactjs.org">React</a><br></br>
<h2>Overview</h2>
<p>
In this exercise a paragraph generator was made using React. The form gave state to the components in order to know how many paragraphs were needed to be shown. The state changes every time a new number is selected by the user.
</p>
<p>
The trick to get this to work properly is the slice method. The edge cases for numbers below zero and above the length of the dataset would need a conditional statement in order to have it fit within the number of dataset values there are exisiting. Those selections by the user will then be guided back into the acceptable range. Another way around this would be to add a min and max attributes to the input field and have that be dynamic depending on the dataset.
</p>
