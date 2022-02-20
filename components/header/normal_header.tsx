import Link from "next/link"

type NormalHeaderType = {}

const NormalHeader: React.FC<NormalHeaderType> = () => {

    return (
        <div className="fixed flex items-center top-0 z-50 w-screen h-16 bg-blue-800">
            <Link
                href="/">
                <a className="text-xl ml-8 text-white cursor-pointer">
                    Portfolio API
                </a>
            </Link>
        </div>
    )
}

export default NormalHeader