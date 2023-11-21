import { useState } from "react"
import { Router } from "react-router-dom";


function OutputBalance(props){


    // const {
    //     books, setBooks
    // } = useContext(TransferToEditContext);    
    // useEffect(
    //     () => {
    //         axios.get('http://localhost:3001/Account').then((response) => {
    //             setAccount(response.data);
    //         })
    //     }, [reloadTransfers]
    // )

    const calculateBalance = (amt)=>{
        let Balance = 5000 - 200;

        return Balance;
    }
    return(




        <div style={ {textAlign: 'left'} }>
            <h2>Available Balance</h2>
            SGD: ${calculateBalance(props)}
        </div>
    );
}

export default OutputBalance;



