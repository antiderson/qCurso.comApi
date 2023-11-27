import "./styles.css"
import logo from "../../assets/logoTrans.png"
import Footer from "../../assets/Footer.png"


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
                            <a className="nav-link text-white" href="forum">Fórum</a>
                            <a className="nav-link text-white" href="#">Blog</a>
                        </ul>
                    </nav>
                </div>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                            <form>
                                <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    />
                                </div>
                                <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Senha
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                />
                                </div>
                                <div className="d-grid gap-2">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    >
                                    Entrar
                                </button>
                                </div>
                            </form>
                            <div className="text-center mt-3">
                                <p>
                                Ainda não tem uma conta?{' '}
                                <a className="nav-link text-black" href="register">Cadastrar</a>
                                </p>
                            </div>
                            </div>
                            <div className="imagem-no-fim">
                                <img src={Footer} alt="Imagem Exemplo" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </>
    )
}