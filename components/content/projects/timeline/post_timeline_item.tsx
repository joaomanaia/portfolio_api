import Image from "next/image"
import PostTimeLineDataType from "../../../../data/timeline/PostTimeLineDataType"

type PostTimeLineItemType = {
    postData: PostTimeLineDataType
    onMoreInfoClicked: () => void
}

const PostTimeLineItem: React.FC<PostTimeLineItemType> = ({postData, onMoreInfoClicked}) => {
    return (
        <div className="flex flex-col items-start justify-center w-full h-auto">
            <div className="flex">
                <div className="relative w-11 h-11">
                    <Image
                        className="rounded-full"
                        src={postData.author.photoUrl}
                        alt={postData.author.name}
                        layout="fill"/>
                </div>

                <div className="ml-4">
                    <p className="text-gray-400">
                        {postData.postDate}
                    </p>
                    <p className="text-white text-lg">
                        {postData.author.name}
                    </p>
                </div>
            </div>

            <div className="grow flex ml-5 mt-1 w-full">
                <div className={`w-1 h-auto bg-blue-800 mb-4 rounded-2xl`}></div>
                <div className="rounded-2xl bg-gray-800 p-2 ml-8 w-full mx-12 mb-8">
                    <div className="relative w-full aspect-video">
                        <Image
                            src={postData.postImage}
                            alt={postData.postDescription}
                            className="rounded-2xl"
                            layout="fill"/>
                    </div>
                    <p className="text-white text-xl mt-4">
                        {postData.postTitle}
                    </p>
                    <p className="text-white mt-2">
                        {postData.postDescription}
                    </p>
                    <button 
                        onClick={onMoreInfoClicked}
                        className="mt-4 rounded-full bg-blue-700 py-2 px-4 text-white transition ease-in-out duration-300 hover:bg-white hover:text-black">
                        Ver mais informações
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostTimeLineItem