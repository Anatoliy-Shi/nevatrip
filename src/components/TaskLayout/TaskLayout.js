import './style/style.scss';
import {Section} from "./Section";
import {nanoid} from "nanoid";

const description = {
    obj: {
        benefit: ['Билет на целый день', ' Неограниченное число катаний', '6 остановок у главных достопримечательностей', 'Ближайший рейс сегодня'],
        times: ['12:00', '12:00', '12:00', '12:00', '12:00', '12:00', '12:00'],
        name: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019',
        img: 'sankt-peterburg-piter-st-3495.png',
        imgText: 'Новинка',
        clock: 'clock-circular-outline.png',
        clockText: '2 часа',
        cost: '1200',
        costPier: '1200 р на причале'
    },
    obj2: {
        benefit: ['Билет на целый день', ' Неограниченное число катаний', '6 остановок у главных достопримечательностей', 'Ближайший рейс сегодня'],
        times: ['12:00', '12:00', '12:00', '12:00'],
        name: 'АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019',
        img: 'ekskursii-po-spb-na-avtobuse.png',
        imgText: 'Круглый год',
        clock: 'clock-circular-outline.png',
        clockText: '2 часа',
        cost: '1200',
    },
    obj3: {
        benefit: ['Билет на целый день', ' Неограниченное число катаний', '6 остановок у главных достопримечательностей', 'Ближайший рейс сегодня'],
        times: ['12:00', '12:00', '12:00'],
        name: 'Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2020',
        img: 'pianino.png',
        clock: 'clock-circular-outline.png',
        clockText: '2 часа',
        cost: '1200',
        costPier: '1200 р на причале'
    }

}

export const TaskLayout = () => {
    return (
        <>
            {Object.keys(description).map(el => (
                <Section key={nanoid()} obj={description[el]}/>
            ))}
        </>
    )
}