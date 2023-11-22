import { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { TransferToEditContext } from '../contexts/TransferToEditContext';
import { v4 as uuid } from "uuid"


import AutoId from "../components/InputTransferId"
import InputAcctFrom from "../components/InputAcctFrom"
import InputDate from "../components/InputDate"
import InputAcctTo from "../components/InputAcctTo"
import InputAmt from "../components/InputAmount"
import OutputBalance from '../components/OutputBalance'


axios.defaults.headers.put['Content-Type'] = 'application/json';


function InputFormTransfer() {


    // New unique id
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 12);


    const {
        editMode, setEditMode,
        TransferFrom, setEditTransferFrom,
        TransferTo, setEditTransferTo,
        Aid, setAid,
        DateToEdit, setDateToEdit,
        AmtToEdit, setAmtToEdit,
        reloadTransfers, setReloadTransfers
    } = useContext(TransferToEditContext);

    function resetInputState() {  // Clear  

        setEditTransferFrom('')
        setEditTransferTo('')
        setDateToEdit('')
        setAmtToEdit('')
    }

    function TransferForm() {   // Transfer now  

        if (editMode === 'create') {

            // var newTransfer = { 'Aid': small_id, 'TransferFrom': TransferFrom, 'TransferTo': TransferTo, 'Date': DateToEdit, 'Amt': AmtToEdit }

            var newTransfer = {
                "TRANSFER_ID": small_id,
                "ACCOUNT_ID_FROM": TransferFrom,
                "ACCOUNT_ID_TO": TransferTo,
                "DATE": DateToEdit,
                "AMOUNT": AmtToEdit
            }

            console.log('TransferForm')
            console.log(newTransfer)

            axios.put('http://localhost:3001/Transfer', newTransfer).then((response) => {
                resetInputState();
                setReloadTransfers(!reloadTransfers)
            })
        }

    }


    return (
        <>
            <h2>Create New Transfer</h2>

            <table border={'1'} style={{ width: '100%', position: "relative" }} >
                <tbody>
                    <tr>
                        <td width={'20%'}><b>Transfer ID</b></td>
                        <td>
                            <AutoId label='Transfer ID' value={Aid} setValue={setAid} />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Transfer From</b></td>
                        <td>
                            <InputAcctFrom label='Account' value={TransferFrom} setValue={setEditTransferFrom} />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Transfer To</b></td>
                        <td>
                            <InputAcctTo value={TransferTo} setValue={setEditTransferTo} />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Transfer Date</b></td>
                        <td>
                            <InputDate minDate='1990-01-01' maxDate='2023-12-01' value={DateToEdit} setValue={setDateToEdit} />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Amount</b></td>
                        <td>
                            <InputAmt value={AmtToEdit} setValue={setAmtToEdit} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={'2'} style={{ textAlign: 'left' }}>
                            <input type={'reset'} value={'Clear'} onClick={resetInputState} />
                            <input type={'button'} value='Transfer Now' onClick={TransferForm} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}


export default function Transfer() {

    const [editMode, setEditMode] = useState('create')
    const [Aid, setAid] = useState('')
    const [TransferFrom, setEditTransferFrom] = useState('')
    const [TransferTo, setEditTransferTo] = useState('')
    const [DateToEdit, setDateToEdit] = useState('')
    const [AmtToEdit, setAmtToEdit] = useState('')
    const [reloadTransfers, setReloadTransfers] = useState(true)


    return (
        <>
            <TransferToEditContext.Provider value={{
                editMode, setEditMode,
                Aid, setAid,
                TransferFrom, setEditTransferFrom,
                TransferTo, setEditTransferTo,
                DateToEdit, setDateToEdit,
                AmtToEdit, setAmtToEdit,
                reloadTransfers, setReloadTransfers
            }}>
                <div className="row" style={{ width: '100%' }}>
                    <InputFormTransfer />
                </div>
                // <div className="row" style={{ width: '100%' }}>
                //     <div style={{ width: '100%', float: 'left' }}>
                //         <h2 style={{ marginTop: '50px' }}></h2>
                //         <OutputBalance label='Available Balance' />
                //     </div>
                // </div>
            </TransferToEditContext.Provider>

        </>


    )
};
