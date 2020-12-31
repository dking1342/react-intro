import React, { useState, useEffect } from 'react';

// custom components
import List from './components/List';
import Alert from './components/Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  } else{
    return []
  }
}

const App = () => {
  // state
  const [name,setName]=useState('');
  const [list,setList]=useState(getLocalStorage());
  const [isEditing,setIsEditing]=useState(false);
  const [editID, setEditID]=useState(null);
  const [alert,setAlert]=useState({
    show:false,
    msg:'',
    type:''
  });

  // helper functions 

  // show alert function
  const showAlert = (show=false,type="",msg="")=>{
    setAlert({show, type, msg})
  }

  //  CRUD FUNCTIONS
  // clears the list
  const clearList = () => {
    showAlert(true,'danger','emptied the list');
    setList([]);
  }

  // removes single item
  const removeItem = (id) => {
    showAlert(true,'danger','item removed')
    setList(list.filter(item=> item.id !== id));
  }

  // edits the item
  const editItem = (id) => {
    const specificItem = list.find((item)=> item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title)
  }

  // hooks
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name){
      // display alert
      showAlert(true,'danger','Please enter value');
    } 
    else if(name && isEditing){

      // setting list state
      setList(list.map((item)=>{
        if(item.id === editID){
          return { ...item, title:name }
        }
        return item;
      }))

      // set other state
      setIsEditing(false);
      setEditID(null);
      setName('');

      // display alert
      showAlert(true,'success','item has been edited');
    } 
    else {
      // show alert
      showAlert(true,'success','item added to the list');

      // get new state
      const newItem={
        id:new Date().getTime().toString(),
        title:name
      };

      // set state
      setList([...list, newItem]);
      setName('');
    }
  }


  return (
    <section className="section-center">
      <form onSubmit={ handleSubmit } className="grocery-form">

        {alert.show && <Alert { ...alert } removeAlert={ showAlert } list={ list }/>}

        <h3>grocery bud</h3>
        <div className="form-control">
          <input 
            type="text" 
            className="grocery" 
            placeholder="e.g. eggs"
            value={ name }
            onChange={ (e)=> setName(e.target.value) }
          />

          <button className="submit-btn" type="submit">
            { isEditing ? 'edit' : 'submit' }
          </button>
        </div>
      </form>

      {list.length > 0 && (
      <div className="grocery-container">
          <List 
            items={ list }
            removeItem={ removeItem }
            editItem={ editItem }
          />
          <button onClick={ clearList } className="clear-btn">clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
