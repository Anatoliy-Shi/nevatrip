import '../../App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {    checkedDirection,
    checkedTimeBack,
    setCount,
    setFilterTime, setFinishTravel,
    setPrice,
    setTimeTravel} from "../../redux/slice/selectedSlice";
import {valueBtoA} from "../../variables/variables";
import {AtoB} from "./AtoB";
import {BtoA} from "./BtoA";




export const TaskSelect = () => {
    const dispatch = useDispatch()
    const {direction, count, time, price, timeBack, timeTravel, finishTravel} = useSelector(state => state.selected)
    const ref = useRef(null)

    useEffect(() => {
        ref.current.disabled = count < 1;
    }, [count])

    useEffect(() => {
        if (direction === 'из A в B') {
            const forward = new Date(`August 19, 1975 ${time}`)
            const newDate = new Date(forward.setMinutes(forward.getMinutes() + 50)).toTimeString().slice(0,5)
            dispatch(setFinishTravel(newDate))
        } else {
            const forward = new Date(`August 19, 1975 ${timeBack}`)
            console.log(forward)
            const newDate = new Date(forward.setMinutes(forward.getMinutes() + 50)).toTimeString().slice(0,5)
            dispatch(setFinishTravel(newDate))
        }
    }, [direction, time, timeBack, dispatch])

    useEffect(() => {
        if (direction === 'из A в B и обратно в А') {
            const forward = new Date(`August 19, 1975 ${time}`)
            const back = new Date(`August 19, 1975 ${timeBack}`)
            const minutes = (back - forward) / 60000 + 50
            dispatch(setTimeTravel(minutes))
        } else {
            dispatch(setTimeTravel('50'))
        }
    }, [direction, timeBack, time, dispatch])

    useEffect(() => {
        if (direction === 'из A в B и обратно в А') {
            const date = new Date(`August 19, 1975 ${time}`)
            dispatch(setPrice(1200))
            const filter = valueBtoA.filter((el) => {
                const newDate = new Date(`August 19, 1975 ${el}`)
                if (newDate - date >= 3000000) {
                    dispatch(setFilterTime(el))
                    return el
                }
                return ''
            })
            dispatch(checkedTimeBack(filter[0]))
        } else {
            dispatch(setPrice(700))
            valueBtoA.map(el => dispatch(setFilterTime(el)))
        }
    }, [direction, time, dispatch])

    const handleChange = (e) => {
        dispatch(checkedDirection(e.target.value))
    }
    const setTicketCount = (e) => {
        dispatch(setCount(e.target.value))
    }

    const travelTime = (direction === 'из B в A') ?  timeBack :  time


    const handleClick = (e) => {
        e.preventDefault()
        dispatch(setCount(''))
        alert(`
Вы выбрали количество билетов = ${count} 
по маршруту ${direction} стоимостью ${price * count}.
Это путешествие займет у вас ${timeTravel} минут. 
Теплоход отправляется в ${travelTime}, а прибудет в ${finishTravel}
        `)

    }

    return (
        <div className="App">
            <form className="form" action="">
                <select value={direction} onChange={(e) => handleChange(e)} name="route">
                    <option value="из A в B">из A в B</option>
                    <option value="из B в A">из B в A</option>
                    <option value="из A в B и обратно в А">из A в B и обратно в А</option>
                </select>

                {direction === 'из A в B' &&
                    <AtoB/>
                }

                {direction === 'из B в A' &&
                    <BtoA/>
                }

                {direction === 'из A в B и обратно в А' &&
                    <>
                        <AtoB/>
                        <BtoA/>
                    </>
                }

                <label htmlFor="num">Количество билетов</label>
                <input value={count} onChange={(e) => setTicketCount(e)} type={'number'}/>
                <button ref={ref} onClick={(e) => handleClick(e)}>Посчитать</button>
            </form>
        </div>
    );
}
