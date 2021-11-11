import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(10)
    const [value2, setValue2] = useState(100)

    const changeRange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setValue1(values[0])
            setValue2(values[1])
        } else {
            setValue1(values)
        }
    }

    return (
        <div className={s.container}>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.range}>
                <span>{value1}</span>
                <SuperRange onChangeRange={changeRange} value1={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={s.doubleRange}>
                <span>{value1}</span>
                <SuperDoubleRange value={[value1, value2]} onChangeRange={changeRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
