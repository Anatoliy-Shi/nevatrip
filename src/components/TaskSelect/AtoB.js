import {nanoid} from "nanoid";
import {useDispatch, useSelector} from "react-redux";
import {checkedTime} from "../../redux/slice/selectedSlice";
import {valueAtoB} from "../../variables/variables";

export const AtoB = () => {
    const dispatch = useDispatch()
    const {time} = useSelector(state => state.selected)

    const handleChange = (e) => {
        dispatch(checkedTime(e.target.value))
    }

    return (
        <>
            <label htmlFor="time">Выберите время из A в B</label>
            <select value={time} onChange={(e) => handleChange(e)} name="time">
                {valueAtoB.map(el => <option key={nanoid()} value={el}>{el}</option>)}
            </select>
        </>
    )
}