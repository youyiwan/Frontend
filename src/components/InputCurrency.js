export default function InputCountry({value, setValue}) {
    return (
        <select
            value={value}
            onChange={(event) => {            
                setValue(event.target.value);
            }}
            onClick={(event) => {                
                setValue(event.target.value);
            }}
        >
            <option value={"SGD"}>SGD</option>
            <option value={"USD"}>USD</option>
            <option value={"EUR"}>EUR</option>
            <option value={"GBP"}>GBP</option>
            <option value={"AUD"}>AUD</option>
            <option value={"JPY"}>JPY</option>
        </select>
    )
};