import { useState } from "react";

export default function useSwitch(initialValue = false) {

    const [value, setValue] = useState(initialValue);

    const toggle = () => {
        setValue(currentValue => !currentValue);
        console.log(value);
    };

    return [value, toggle]
}