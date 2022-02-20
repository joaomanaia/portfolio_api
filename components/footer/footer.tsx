import Image from "next/image"

type FooterType = {}

const Footer: React.FC<FooterType> = ({}) => {
    return (
        <footer className="w-screen text-white py-8 bg-gray-800">
            <a
                className="flex items-center justify-center"
                href="https://infinitepower.ml"
                target="_blank"
                rel="noopener noreferrer">
                Powered by
                <p className="font-bold ml-1"> InfinitePower</p>
                <div className="ml-1 w-6 h-6 relative">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/infinitepower-ipc.appspot.com/o/logo1-ipc.png?alt=media&token=b6a2a1ec-409a-4e67-a3e9-217b958283f2"
                        alt="InfinitePower Logo"
                        layout="fill" />
                </div>
            </a>
        </footer>
    )
}

export default Footer