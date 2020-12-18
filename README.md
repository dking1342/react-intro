<h1>Multi-step form</h1>
<h2>Prerequisites</h2>
<a href="https://reactjs.org/">React</a>
<h2>Introduction</h2>
<p>This small exercise is a multi-step form made with React. This is seen on websites that requires quite
    a bit of information via a form, but a long form with lots of scrolling is not the best user experience.
    So, in comes a multi step form where the user can enter information and go forwards and backwards, if 
    neccessary, through the form until submission and success.
</p>
<p>
    This exercise is a front end exercise only. There is not a connection to a backend service that 
    can take in the request from the user. 
</p>
<p>
    This exercise did not include any styling. Apart from some minor styling within the component itself
    that was meant for the header and the buttons.
</p>
<h2>Exercise Overview</h2>
<h3>Components</h3>
<h4>UserForm</h4>
<p>
    This component is the parent component for each step of the form. This is a class component. When
    starting out you can import the rest of the components.
</p>

```
    import FormUserDetails from './FormUserDetails';
    import FormPersonalDetails from './FormPersonalDetails';
    import Confirm from './Confirm';
    import Success from './Success';
```

<p>
    From there you will go inside of the class and make the state. State in React is the data that makes the website or application dynamic. The data that is entered by the user implicitly or explicitly is meant to engage the user. In this exercise the form will consist of some basic input fields. However, depending on the need, the input fields can be adjusted depending on what information you need from the user.
</p>

```
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email:"",
        occupation:'',
        city:'',
        bio:''
    }
```

<p>
    The next step is creating the methods that will be used throughout the life cycle of this form. The first two methods help in navigating the form. They are the continue and back methods. They do as they would suggest, they are used in conjunction with the buttons on the user interface that allow the user to click if they want to move forward in the form or backwards.
</p>

```
    // method to proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // method to previous  step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

```

<p>
    The last method is the method that will handle the changes to the UI. When a user types into each input field then that change will be call the <code>handleChange</code> method in order to update the state. This method is meant to handle checkbox types or regular inputs that take in data from the user.
</p>

```
    // handle field changes
    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
```

<p>
    After destructuring the state to have an easier way of typing it into the components, the rest of this component works through a switch case. The primary focus is on the step property of the state. This helps keep track of which step of the multi-step form the user is on and what should appear on the screen.
</p>

```
        switch (step) {
            case 1:
                return(
                    <FormUserDetails
                        nextStep = { this.nextStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    />
                )
            case 2:
                return(
                    <FormPersonalDetails 
                        nextStep = { this.nextStep }
                        prevStep = { this.prevStep }
                        handleChange = { this.handleChange }
                        values = { values }
                    
                    />
                )
            case 3:
                return(
                    <Confirm 
                    nextStep = { this.nextStep }
                    prevStep = { this.prevStep }
                    handleChange = { this.handleChange }
                    values = { values }                
                    />
                )
            case 4:
                return(
                    <Success 
                        prevStep = { this.prevStep }
                    />
                )
            default:
                break;
        }

```

<h4>FormUserDetails</h4>
<p>
    This component is another class component. It handles the first step of the form. It will take in the first name, last name and email of the user. It is a typical form layout with the label, input, etc. Since the <code>nextStep</code> prop was passed down then we put this into a continue function.
</p>

```
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

```

<p>
    This is one of the input fields that the user would see...
</p>

```
    <label htmlFor="firstName">First Name</label>
    <input 
        type="text" 
        placeholder="Enter your first name" 
        id="firstName" 
        name="firstName"
        onChange={ handleChange }
        value = { values.firstName }
    />
```

<h4>FormPersonalDetails</h4>
<p>
    This component is a class component and follows the same format of the previous component mentioned. However, in this component, both the <code>nextStep</code> and <code>prevStep</code> is passed down since we are now on step two.
</p>

```
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

```

<p>
    More of the same is happening with each input field...
</p>

```
    <label htmlFor="occupation">Occupation</label>
    <input 
        type="text" 
        placeholder="Enter your occupation" 
        id="occupation" 
        name="occupation"
        onChange={ handleChange }
        value = { values.occupation }
    />
```

<p>
    As mentioned in the introduction, there was no styling used except some minor styles added. Those minor styles were added in each component to understand how it can be done. Normally, you would add your styles in a CSS file and link it to one or all the components. However, if you want specific styles for a particular component then you can try out using component styles. It is a slightly different syntax than CSS, and more resembles an object syntax.
</p>

```
    const btnStyles = {
        background:'#333',
        color:'#eee',
        border:'none',
        outline:'none',
        borderRadius:'5px',
        cursor:'pointer',
        padding:'10px 20px',
        fontFamily:'inherit'
    }
    const headerStyles = {
        display:'block',
        width:'100vw',
        height:'50px',
        textAlign:'center',
        background:'skyblue',
        color:'#eee',
    }
```

<p>
    These styles are added similar to inline styling in HTML. 
</p>

<h4>Confirm</h4>
<p>
    This component is a functional component. It is a culmination of all the state that was collected from the user in the previous steps of the form. The user can now read through all the data that they entered within a list and confirm whether or not the data is to their liking. If not, the user has the ability to go back to the respective step of the form to correct or edit any entry. Again, the reason the values are in the input fields when the user navigates to and fro is because each component is receiving that data from the state. The user can then go back to the confirmation step and see all the most updated data that they entered.
</p>

```
    <header style={ headerStyles }>
        <h1>Confirm Details</h1>
    </header>
    <ul>
        <li>
            <span>First Name:</span>  <span>{ values.firstName }</span>
        </li>
        <li>
            <span>Last Name:</span>  <span>{ values.lastName }</span>
        </li>
        <li>
            <span>Email:</span>  <span>{ values.email }</span>
        </li>
        <li>
            <span>Occupation:</span>  <span>{ values.occupation }</span>
        </li>
        <li>
            <span>City:</span>  <span>{ values.city }</span>
        </li>
        <li>
            <span>Bio:</span>  <span>{ values.bio }</span>
        </li>
    </ul>

    <button style={ btnStyles } onClick={ back }>Back</button>
    <button style={ btnStyles } onClick={ next }>Confirm</button>

```

<p>
    Another way of doing this is to add another component and map through the array of state then in the next component add the data. This would be more applicable to lists where you want to edit, delete or update the list. React needs what is called a key for each list item in that case. It helps React know which list item the user is selecting. This confirmation page is read only and any adjustments would be done by the user navigating back to the various steps.
</p>
<p>
    Since this is not connected to a backend service then no additional work is required. However, if you did want to have this be connected then you'd need to add a fetch API. The fetch API would send the data to the server and the server would take it from there and when finished then send back some type of message or data to the user.
</p>
<h4>Success</h4>
<p>
    The success component has no state and is there to let the user acknowledge that this process is complete. 
</p>

<h2>Conclusion</h2>
<p>
    Since forms on the internet are ubiquitous, it helps to know how you can create them. In this case, React helps ease the form making process with features such as state and props. If you wanted to take it a step further then you could always work on a form validation. I have made a form validation in another repo, and you are more than welcome to stroll over there and see how these two can be merged into one slightly larger exercise. Thanks for your time and happy coding!
</p>