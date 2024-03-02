import React from 'react'

const Button = ({ children, varient = 'solid', onClick, className }) => {

    let style;

    if (varient === 'solid') {
        style = 'primary_color text-white border-2';
    } else if (varient === 'outline') {
        style = 'bg-white text-black border-2 border-[#2f71ff] hover:text-white hover:primary_color hoverAnimation';
    } else if (varient === 'secondary') {
        style = 'bg-white text-black font-light border-slate-500 border-2 border-black';
    } else if (varient === 'ghost') {
        style = 'bg-transparent text-black font-light';
    } else {
        style = 'primary_color text-white border-2 border-[#2f71ff]';
    }

    return (
        <button className={`flex items-center justify-center gap-2 py-3 px-10 whitespace-nowrap active:scale-[0.98] h-[45px] leading-[normal] ${style} ${className}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button