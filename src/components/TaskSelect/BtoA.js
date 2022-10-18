import {nanoid} from "nanoid";
import {useDispatch, useSelector} from "react-redux";
import {checkedTimeBack} from "../../redux/slice/selectedSlice";

export const BtoA = () => {
    const dispatch = useDispatch()
    const {filterTime, timeBack} = useSelector(state => state.selected)


    const handleChange = (e) => {
        dispatch(checkedTimeBack(e.target.value))
    }

    return (
        <>
            <label htmlFor="time">Выберите время из B в A</label>
            <select value={timeBack} onChange={(e) => handleChange(e)} name="time">
                {filterTime.map(el => <option key={nanoid()} value={el}>{el}</option>)}
            </select>
        </>
    )
}