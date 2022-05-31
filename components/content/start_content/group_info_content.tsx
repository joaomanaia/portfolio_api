type GroupInfoContentType = {}

const GroupInfoContent: React.FC<GroupInfoContentType> = () => {
    return (
        <div className="flex flex-col space-y-12 justify-center items-center w-1/4 h-40 mr-12 xl:mr-64 text-white">
            <p className="text-5xl flex">
                <p className="text-blue-500">3</p> &nbsp;Elementos
            </p>
            <p className="text-5xl flex">
                <p className="text-blue-500">20</p> &nbsp;Projetos
            </p>
        </div>
    )
}

export default GroupInfoContent