import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

type RangeSliderPropsType = {
    onChangeRange2?: (value: number | number[]) => void
    value?: [number, number]
}


export default function RangeSlider(props:RangeSliderPropsType) {
    const classes = useStyles();
    //const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: any, value: number | number[]) => {
        //setValue(newValue as number[]);
        props.onChangeRange2 && props.onChangeRange2(value as number[])
    };

    return (
        <div className={classes.root}>
            <Slider
                value={props.value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    );
}