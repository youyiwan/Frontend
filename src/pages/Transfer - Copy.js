import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { TransferToEditContext } from '../contexts/TransferToEditContext';


import InputId from "../components/InputAccountdetails"
import InputName from "../components/InputName"
import InputDate from "../components/InputDate"
import InputCcy from "../components/InputCurrency"
import InputAmt from "../components/InputAmount"
import OutputBalance from '../components/OutputBalance';


axios.defaults.headers.put['Content-Type'] = 'application/json';


function InputFormTransfer({ editMode, setEditMode, Transfers, setAccounts,
    AidToEdit, setAidToEdit, AnameToEdit, setAnameToEdit, DateToEdit, setDateToEdit, CcyToEdit, setCcyToEdit, AmtToEdit, setAmtToEdit }) {

    function TransferForm() {

        console.log('InputFormTransfer: TransferForm')

        if (editMode === 'create') {

            var newBook = { 'Aid': AidToEdit, 'Aname': AnameToEdit, 'Date': DateToEdit, 'Ccy': CcyToEdit, 'Amt': AmtToEdit }
            setAccounts(Transfers.concat([newBook]));
        }
        else if (editMode === 'edit') {

            var Transfer = Transfers.find(Transfer => Transfer.Aid === AidToEdit)
            Transfer.Aid = AidToEdit
            Transfer.Aname = AnameToEdit
            Transfer.Date = DateToEdit
            Transfer.Ccy = CcyToEdit
            Transfer.Amt = AmtToEdit


            setEditMode('create')
        }

        setAidToEdit('')
        setAnameToEdit('')
        setDateToEdit('')
        setCcyToEdit('')
        setAmtToEdit('')
    }

    return (
        <>
            <h2>Create New Transfer</h2>

            <table border={'1'} style={{ width: '100%', position: "relative" }} >
                <tbody>
                    <tr>
                        <td width={'20%'}><b>Acount ID</b></td>
                        <td>
                            <InputId label='Account' value={AidToEdit} setValue={setAidToEdit} />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Account Name</b></td>
                        <td>
                            <InputName label='Account' value={AnameToEdit} setValue={setAnameToEdit} />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Transfer Date</b></td>
                        <td>
                            <InputDate minDate='1990-01-01' maxDate='2023-12-01' value={DateToEdit} setValue={setDateToEdit} />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Currency</b></td>
                        <td>
                            <InputCcy value={CcyToEdit} setValue={setCcyToEdit} />
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
                            <input type={'reset'} value={'Clear'} />
                            <input type={'button'} value='Transfer Now' onClick={TransferForm} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}


export default function TransferHist() {

    const [editMode, setEditMode] = useState('create')
    const [Transfers, setAccounts] = useState()
    const [AidToEdit, setAidToEdit] = useState('')
    const [AnameToEdit, setAnameToEdit] = useState('')
    const [DateToEdit, setDateToEdit] = useState('')
    const [CcyToEdit, setCcyToEdit] = useState('')
    const [AmtToEdit, setAmtToEdit] = useState('')

    return (
        <>
            <div className="row" style={{ width: '100%' }}>
                <div style={{ width: '100%', float: 'left' }}>
                    <h2 style={{ marginTop: '0px' }}></h2>
                </div>
            </div>
            <div className="row" style={{ width: '100%' }}>
                <InputFormTransfer editMode={editMode} setEditMode={setEditMode} Transfers={Transfers} setAccounts={setAccounts}
                    AidToEdit={AidToEdit} setAidToEdit={setAidToEdit}
                    AnameToEdit={AnameToEdit} setAnameToEdit={setAnameToEdit}
                    DateToEdit={DateToEdit} setDateToEdit={setDateToEdit}
                    CcyToEdit={CcyToEdit} setCcyToEdit={setCcyToEdit}
                    AmtToEdit={AmtToEdit} setAmtToEdit={setAmtToEdit} />
            </div>
            <div className="row" style={{ width: '100%' }}>
                <div style={{ width: '100%', float: 'left' }}>
                    <h2 style={{ marginTop: '50px' }}></h2>
                    <OutputBalance label='Available Balance'/>
                </div>
            </div>

        </>

        
    )
};