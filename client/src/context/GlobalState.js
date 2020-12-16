import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// init state
const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 },
    ],
    error: null,
    loading: true
}

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(AppReducer,initialState);

    // actions
    const getTransactions = async () => {
        const response = await fetch('/api/v1/transactions');
        const data = await response.json();

        if(data.success === false){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: data
            })
        } else {
            dispatch({
                type:'GET_TRANSACTIONS',
                payload: data.data
            })
        }
    }

    const deleteTransactions = async (id) => {
        
        const response = await fetch(`/api/v1/transactions/${id}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id: id}) 
          });
          const data = await response.json();
          console.log(data);

        if(data.success === false){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: data.error
            });
        } else {
            dispatch({
                type:'DELETE_TRANSACTION',
                payload:id
            })
        }
    }

    const addTransactions = async (transaction) => {

        const response = await fetch(`/api/v1/transactions/`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
          });
          const data = await response.json();
          console.log(data);

        if(data.success === false){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: data.error
            });
        } else {
            dispatch({
                type:'ADD_TRANSACTION',
                payload: data.data
            });
        }
    }

    return ( <GlobalContext.Provider value={{ 
        transactions: state.transactions,
        error: state.error,
        loading:state.loading,
        getTransactions,
        deleteTransactions,
        addTransactions 
    }}>
        { children }
    </GlobalContext.Provider> )
}