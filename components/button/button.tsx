type ButtonType = {
    text: string
    onClick: () => void
}

const Button: React.FC<ButtonType> = ({text, onClick}) => {
    return (
        <button
            onClick={() => onClick()}
            className='cursor-pointer transition-all ease-in-out duration-300 bg-blue-500 text-white hover:bg-white hover:text-black text-lg py-2 px-4 rounded-full mt-12'>
            {text}
        </button>
    )
}

export default Button