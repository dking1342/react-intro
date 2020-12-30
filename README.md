<h1>Portfolio</h1>
<h2>Prerequisites</h2>
<a href="https://www.reactjs.org">React</a><br></br>
<h2>Overview</h2>
<p>
In this exercise it focused on getting data from an external API using the fetch API. After retrieving the data, which shows a loading component until the data returns, then there is a portfolio of several people. The useState is used and in one piece of state the data from the API is set as the state and the other is the index of the array of data. The useEffect hook is used to call the function after the loading has been completed.
</p>
<p>
I used a loading animation that I made previously so that it would show up when the data is being retrieved.
</p>
<p>
A new thing learned is the dynamic nature of the class. In the buttons that will render each person, the class is dynamic to show which one is being actively rendered to the user. This is done by using the value state and comparing the index of the array that has been mapped for the buttons to that of the value or index of the dataset. It uses the shorthand && method to have a truthy statement return the active class.
</p> 
