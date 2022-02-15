import React, { useState } from "react"

type Props = {
    callback: (value: string) => void
}

export const Rating: React.FC<Props> = ({ callback }) => {
    const [value, setValue] = useState("5")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return (
        <div>
            <input type="range" min="1" max="10" value={value} onChange={handleChange} />
            {value}
            <p>
                <button onClick={() => callback(value)}>Rate</button>
            </p>
        </div>
    )
}
