import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import s from './SuperRadio.module.css'
type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        onChange && onChange(e);
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + "-" + i} className={s.input}>
            <input
                type={"radio"}
                value={o}
                name={name}
                onChange={onChangeCallback}
                checked={value===o}
                // name+, checked, value+, onChange+
            />
            {o}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
