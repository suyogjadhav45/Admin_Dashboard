import React from 'react'
import './Switch.css'
import cx from "classnames";

export default function Switch({rounded = true,isToggled,onToggle}) {

    const sliderCX = cx('slider',{
        'rounded': rounded
    })
    return (
        <label className='switch'>
            <input type="checkbox" name='toggle' value={isToggled} onChange={onToggle} />
            <span className={sliderCX} />
        </label>
    )
}
