export default function InputAcctTo({ label, value, setValue }) {
    return (
        <input
            type={"text"}
            placeholder={`Enter Counterparty's ID`}
            required={true}
            style={{ width: '300px' }}
            value={value}
            onChange={(event) => {                
                setValue(event.target.value);
            }}
        />
    )
};