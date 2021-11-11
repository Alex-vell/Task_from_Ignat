import React from 'react'
import {Slider} from "@material-ui/core";


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: number | number[],
    min?:number,
    max?:number,
    step?:number,
    disable?:number
    //min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,  min, max, value
        // min, max, step, disable,
    }
) => {
    // сделать самому, можно подключать библиотеки
    const minDistance = 10;
    const onChangeCallback = (e: Event, value: number | number[], activeThumb: number,) => {
        if (!Array.isArray(value)) {
            return;
        }
        if (activeThumb === 0) {
            onChangeRange && onChangeRange([Math.min(value[0], value[1] - minDistance), value[1]]);
        } else {
            onChangeRange && onChangeRange([value[0], Math.max(value[1], value[0] + minDistance)]);
        }
    }

    return (
        <>
            <Slider value={value}
                    getAriaLabel={() => 'Minimum distance'}
                    disableSwap
                    aria-labelledby="range-slider"
                    style={{'width':'300px'}}
                    onChange={onChangeCallback}
                    valueLabelDisplay="auto"/>
        </>
    )
}

export default SuperDoubleRange





