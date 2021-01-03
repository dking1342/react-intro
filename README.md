<h1>Sidebar Modal</h1>
<h2>Prerequisities</h2>
<a href="https://reactjs.org/">React</a>
<h2>Overview</h2>
<p>
In this exercise the useContext hook was used and learned. It was used in a dummy site where there was a sidebar navigation and a modal. The data could have been passed around through the parent component and then through the children component, but instead the useContext hook helped avoid that. When using the useContext hook we are able to access state and/or functions by wrapping the parent component in the app provider tag. 
</p>
<p>
The key to passing the state and/or functions is by adding a value attribute in the exported hook. You can choose to make a custom hook that incorporates the useContext and AppProvider into one complete function, or you can export/import then separately into each child component that requires the state and/or functions.
</p>