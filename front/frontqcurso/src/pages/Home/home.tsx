import "./styles.css"
import logo from "../../assets/logoTrans.png"


export default function Home() {
    return (
        <>
            <div className="content">
                <div className="container">
                    <nav className="d-flex justify-content-between align-items-center pt-3">
                        <img src={logo} alt="" />
                        <ul className="nav justify-content-center">
                            <a className="nav-link text-white" href="#">Inicio</a>
                            <a className="nav-link text-white" href="#">Docs</a>
                            <a className="nav-link text-white" href="#">Fórum</a>
                            <a className="nav-link text-white" href="#">Blog</a>
                        </ul>
                        <button className="button loginbutton">LOGIN</button>
                    </nav>
                    <div className="d-flex justify-content-center" style={{ paddingTop: "10%" }}>
                        <div className="text-center ">
                            <h1 className="text-white d-flex">Como podemos te ajudar ?</h1>
                            <p className="text-white">Digite palavras chave sobre temas que deseja pesquisar</p>
                            <div className="input-group text-center" style={{ paddingTop: "8%" }}>
                                <span className="input-group-text">🔍</span>
                                <input type="text" className="form-control" placeholder="Buscar" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div>
                                <h6 className="text-white">Pesquisas sugeridas:</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}