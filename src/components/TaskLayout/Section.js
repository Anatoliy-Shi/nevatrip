import {useEffect, useState} from "react";

const {nanoid} = require("nanoid");

export const Section = ({obj}) => {

    const [time, setTime] = useState([])
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const {times} = obj
        if (times.length > 4) {
            setTime(times.map((el, key) => key < 3 ? el : 'еще...').slice(0,4))
        } else {
            setTime([...times])
        }
    }, [obj])

    const handleClick = (lastElement) => {
        if(lastElement.target.textContent === 'еще...') {
            setVisible(true)
        }
    }

    return (
        <section>
            <div className='picture'>
                <img className='picture__img'
                     src={require("../../assets/" + obj.img)}
                     alt="картинка"/>
                {obj.imgText === 'Новинка' &&
                    <p className='picture__text color'>{obj.imgText}</p>
                }
                {obj.imgText === 'Круглый год' &&
                    <p className='picture__text'>{obj.imgText}</p>
                }
            </div>
            <div className='container'>
                <div className='container__reverse'>
                    <div className='clock'>
                        <img className='clock__img'
                             src={require("../../assets/" + obj.clock)}
                             alt="часы"/>
                        <p className='clock__text'>{obj.clockText}</p>
                    </div>
                    <h4>
                        {obj.name}
                    </h4>
                </div>

                <div className='list'>
                    <ul>
                        {obj.benefit.map(el => {
                            return (
                                <li key={nanoid()} className='list__items'>
                                    {el}
                                </li>
                            )
                        })}
                    </ul>
                    <div className='times'>
                        {visible &&
                            obj.times.map((time) => {
                                    return (
                                        <div key={nanoid()} className='time'>
                                            {time}
                                        </div>
                                    )
                                })
                        }
                        {!visible &&
                           time.map((time, key, array) => {
                                return (
                                    <div onClick={array[3] === 'еще...' ? (lastElement) => handleClick(lastElement) : undefined}
                                        key={nanoid()} className='time'>
                                        {time}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='price'>
                    <div className='price__flex'>
                        <p className='price__cost'>
                            {obj.cost}
                        </p>
                        {obj.costPier &&
                            <p className='price__cost-pier'>
                                {obj.costPier}
                            </p>
                        }
                    </div>
                    <button className='price__info'>Подробнее</button>
                </div>
            </div>
        </section>
    )
}
