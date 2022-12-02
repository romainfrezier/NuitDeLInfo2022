import "../../styles/components/checkbox.scss"
import {useEffect, useState} from "react";

const CheckBox = ({ onChange, initialState }) => {

    const [checked, setChecked] = useState(false)

    useEffect( () => {
        // console.log(initialState())
        initialState() ? setChecked(true) : setChecked(false)
    },[])

    return(
        <input
            type="checkbox"
            checked={checked}
            className="switch_1"
            onChange={ e => {
                setChecked(!checked)
                onChange(e)
            }
            } />
    )
}

export default CheckBox