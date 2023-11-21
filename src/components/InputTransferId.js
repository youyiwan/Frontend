import { useState } from "react"
import { v4 } from "uuid"


export default function InputTransferId({ label, value, setValue }) {    

    return (
        <input
            // type={v4}
            placeholder={`Auto Generate ${label} `}
            required={true}
            style={{ width: '300px' }}
            value={value}
            onChange={(event) => {
                setValue(event.target.value);
            }}
        />
    )
};