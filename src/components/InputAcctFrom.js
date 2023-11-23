export default function InputAcctFrom({ label, value, setValue }) {
    return (
        <input
            type={"text"}
            autoFocus={true}
            placeholder={`Please enter Your ${label} ID`}
            required={true}
            style={{ width: '300px' }}
            value={value}
            onChange={(event) => {                
                setValue(event.target.value);
            }}
        />
    )
};