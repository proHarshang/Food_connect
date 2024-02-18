import React from 'react'

const Button = ({ children, varient = 'solid', onClick, className }) => {

    let style;

    if (varient === 'solid') {
        style = 'bg-black text-white border-2 border-black';
    } else if (varient === 'outline') {
        style = 'bg-white text-black border-2 border-black hover:text-white hover:bg-black hoverAnimation';
    } else if (varient === 'secondary') {
        style = 'bg-white text-black font-light border-slate-500 border-2 border-black';
    } else if (varient === 'ghost') {
        style = 'bg-transparent text-black font-light';
    } else {
        style = 'bg-black text-white border-2 border-black';
    }

    return (
        <button className={`flex items-center justify-center gap-2 py-3 px-10 whitespace-nowrap active:scale-[0.98] h-[45px] leading-[normal]`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button