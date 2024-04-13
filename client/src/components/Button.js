import React, {memo} from "react";


const Buton = ({text, textColor, bgColor, IconAfter, onClick, fullWidth}) => {
    return (
        <button 
        type="button" 
        className={`py-2 px-4 ${fullWidth &&`w-full`} ${textColor} ${bgColor} outline-none rounded-md hover:underline flex items-center justify-center gap-1`}
        onClick={onClick}>
            <span>{text}</span>
            <span>{IconAfter && <IconAfter/>}</span>
        </button>
    )
}

export default memo(Buton)