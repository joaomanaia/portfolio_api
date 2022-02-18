import Image from "next/image"

type PostTimeLineItemType = {
    hasPostAbove: boolean
    hasPostBelow: boolean
    authorName: string
    authorPhoto: string
    postDate: string
    postTitle: string
    postDescription: string
    postImage: string
}

const PostTimeLineItem: React.FC<PostTimeLineItemType> = ({
    hasPostAbove,
    hasPostBelow,
    authorName,
    authorPhoto,
    postDate,
    postTitle,
    postDescription,
    postImage
}) => {
    return (
        <div className="flex flex-col items-start justify-center w-full h-auto">
            {hasPostAbove && <div className="w-1 h-8 ml-5 mb-2 bg-blue-800 rounded-b-2xl"></div>}
            
            <div className="flex">
                <div className="relative w-11 h-11">
                    <Image
                        className="rounded-full"
                        src={authorPhoto}
                        alt={authorName}
                        layout="fill"/>
                </div>

                <div className="ml-4">
                    <p className="text-gray-400">
                        {postDate}
                    </p>
                    <p className="text-white text-lg">
                        {authorName}
                    </p>
                </div>
            </div>

            <div className="grow flex ml-5 mt-1 w-full">
                <div className={`w-1 h-auto bg-blue-800 ${hasPostBelow ? "rounded-t-2xl" : "rounded-2xl"}`}></div>
                <div className="rounded-2xl bg-gray-800 p-2 ml-8 w-full mx-12">
                    <div className="relative w-full aspect-video">
                        <Image
                            src={postImage}
                            alt={postDescription}
                            className="rounded-2xl"
                            layout="fill"/>
                    </div>
                    <p className="text-white text-xl mt-4">
                        {postTitle}
                    </p>
                    <p className="text-white mt-2">
                        {postDescription}
                    </p>
                    <button className="mt-4 rounded-full bg-blue-700 py-2 px-4 text-white transition ease-in-out duration-300 hover:bg-white hover:text-black">
                        Ver mais informações
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostTimeLineItem