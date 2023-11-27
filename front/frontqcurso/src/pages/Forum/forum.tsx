import "../Forum/styles.css"
import logo from "../../assets/logo_Black.svg"
import Footer from "../../assets/Footer.png"


export default function Forum(){
    return(
        <>
        <div className="content2">
            <div className="container">
            <nav className="d-flex justify-content-between align-items-center pt-3">
                        <img src={logo} alt="" />
                        <ul className="nav justify-content-center">
                            <a className="nav-link text-black" href="#">Inicio</a>
                            <a className="nav-link text-black" href="#">Docs</a>
                            <a className="nav-link text-black" href="forum">Fórum</a>
                            <a className="nav-link text-black" href="#">Blog</a>
                        </ul>
                        <button className="button loginbutton">LOGIN</button>
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
            </div>
            <div className="imagem-no-fim">
                        <img src={Footer} alt="Imagem Exemplo" />
                </div>
        </>
    )
}