import HeaderConte from "../../Components/HeaderConte/headerConte";
import PostComponent from "../../Components/PostComponent/postComponent";

export default function Post() {
    return (
        <>
            <HeaderConte />
            <div className="container fluid">
                {/* <h1 className="text-dark">Postagens</h1> */}
                <PostComponent />
                {/* chama tambe o footer */}
            </div>
        </>

    )
}