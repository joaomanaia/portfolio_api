type HeaderType = {
    headerTransparent: boolean
}

const Header: React.FC<HeaderType> = ({headerTransparent}) => {
    return (
        <div className={`fixed flex items-center top-0 z-50 w-screen h-16 transition-all ease-in-out duration-500 ${headerTransparent ? "bg-transparent" : "bg-blue-800"}`}>
            <p className="text-xl ml-8 text-white">
                Portfolio API
            </p>

            {/**
             * <div className="grow text-white flex items-center justify-end space-x-2 mr-8">
                <div>
                    <p>Inicio</p>
                </div>
                <div>
                    <p>Participantes</p>
                </div>
            </div>
             */}
      </div>
    )
}

export default Header