import { useState } from "react";

export function loginModel() {
    const [isChecked, setChecked] = useState(false);

    return{
        isChecked,
        setChecked
    }
}