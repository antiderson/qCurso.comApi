import "../Forum/styles.css"
import logo from "../../assets/logo_Black.svg"
import Footer from "../../assets/rodape.png"
import A1 from "../../assets/a1.svg"
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
                </div>
                <div className="row">
                    <div className="col text-center forumPost" >
                        <h1>TEST 1</h1>
                    </div>
                    <div className="col-md-2 text-center ListaTopics">
                        <h5>Fórums</h5>
                        <ul className="list-group list-group-flush">
                            <a href="">
                                <li className="list-group-item d-flex justify-content-between align-items-left">
                                    <img className="IconeLista" src={A1}></img>
                                    Account Management
                                    <span className="tag tag-pill">1</span>
                                </li>
                            </a>
                            <a href="">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <img className="IconeLista" src={A1}></img>
                                    Aprimo Theme Support
                                    <span className="tag tag-pill">2</span>
                                </li>
                            </a>
                            <a href="">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <img className="IconeLista" src={A1}></img>
                                    Deksi Theme
                                    <span className="tag tag-pill">3</span>
                                </li>
                            </a>
                            <a href="">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <img className="IconeLista" src={A1}></img>
                                    Docly Theme Support
                                    <span className="tag tag-pill">4</span>
                                </li>
                            </a>
                            <a href="">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <img className="IconeLista" src={A1}></img>
                                    Gullu Theme Support
                                    <span className="tag tag-pill">5</span>
                                </li>
                            </a>
                            <a href="">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <img className="IconeLista" src={A1}></img>
                                    kbDoc Template Support
                                    <span className="tag tag-pill">6</span>
                                </li>
                            </a>
                            <a href="">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <img className="IconeLista" src={A1}></img>
                                    Product Support
                                    <span className="tag tag-pill">7</span>
                                </li>
                            </a>
                            <a href="">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <img className="IconeLista" src={A1}></img>
                                    Rogan Theme Support
                                    <span className="tag tag-pill">8</span>
                                </li>
                            </a>
                            <a href="">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <img className="IconeLista" src={A1}></img>
                                    User Feedback
                                    <span className="tag tag-pill">9</span>
                                </li>
                            </a>
                        </ul>
                        <div className="ListaComents text-center">
                            <div className="list-group">
                            <h5>Topicos Recentes</h5>
                                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">TEST</h5>
                                        <small>3 days ago</small>
                                    </div>
                                    <p className="mb-1">Yep.</p>
                                    <small>Out of Here</small>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">TEST</h5>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <p className="mb-1">Yep.</p>
                                    <small className="text-muted">Out of Here</small>
                                </a>
                                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">TEST</h5>
                                        <small className="text-muted">3 days ago</small>
                                    </div>
                                    <p className="mb-1">Yep.</p>
                                    <small className="text-muted">Out of Here</small>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <img className="footerForum" src={Footer} alt="Imagem Exemplo" />
                </div>
            </div>
        </>
    )
}