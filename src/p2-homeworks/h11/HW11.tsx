import React, {useState} from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import RangeSlider from './common/c8-SuperDoubleRange/SuperDoubleRange2';

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    function onChangeRange(value: number) {
        setValue1(value)
    }

    const [value3, setValue3] = React.useState<number[]>([20, 37]);

    function onChangeRange2(value: number | number[]) {
        setValue3(value as number[]);
        setValue1(value3[0])
        setValue2(value3[1])
    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>{/*    // сделать так чтоб value1 и value2 изменялось*/}
                <RangeSlider
                    onChangeRange2={onChangeRange2}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
