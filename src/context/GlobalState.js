import React , {createContext , useReducer} from "react";
import AppReducer from './AppReducer';

const storedData = localStorage.getItem("myData");


const initialState ={
  
    transactions : [JSON.parse(storedData)]
}



export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer , initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        });
      
      
    }

    function addTransaction(transaction){
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        });
        // Save the data to localStorage
    localStorage.setItem("myData", JSON.stringify(transaction)); 
    }

    return (
        <GlobalContext.Provider  value={
            {
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    )
}