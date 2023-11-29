import "../Forum/styles.css"
import logo from "../../assets/logo_Black.svg"
import Footer from "../../assets/rodape.png"
import forumpost from "../../assets/forumPost.png"
import postHeader from "../../assets/postHeader.png"
import infoheader from "../../assets/infoheader.png"
import footerForum from "../../assets/forum-footer.png"
import { Link } from "react-router-dom"


export default function Forum() {
    return (
        <>
            <div className="content2">
                <div className="container">
                    <nav className="d-flex justify-content-between align-items-center pt-3">
                        <img src={logo} alt="" />
                        <ul className="nav justify-content-center">
                            <a className="nav-link text-black" href="#"><Link to={`/`} className="text-dark">Inicio</Link></a>
                            <a className="nav-link text-black" href="#">Docs</a>
                            <a className="nav-link text-black" href="forum"><Link to={`/forum`} className="text-dark">Fórum</Link></a>
                            <a className="nav-link text-black" href="#">Blog</a>
                        </ul>
                        <button className="button loginbutton"><Link to={`/login`} className="text-white">LOGIN</Link></button>
                    </nav>
                    <div className="d-flex justify-content-center" style={{ paddingTop: "3%" }}>
                        <div className="text-center ">
                            <div className="input-group text-center" style={{ paddingTop: "8%" }}>
                                <span className="input-group-text">🔍</span>
                                <input type="text" className="form-control" placeholder="Buscar" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    <div className=" row forumPost " >
                        <img className=" row forumPostinfo " src={infoheader} alt="" />
                        <img className=" row forumPostheader " src={postHeader} alt="" />
                        <img className=" align-items-center" src={forumpost} alt="" />
                        {/* <img className=" align-items-center" src={footerForum} alt="" /> */}
                    </div>
                </div>
                <div >
                    <img className="footerForum" src={Footer} alt="Imagem Exemplo" />
                </div>
            </div>
        </>
    )
}