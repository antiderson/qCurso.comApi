import "./styles.css"
import logo from "../../assets/logoTrans.png"
import Footer from "../../assets/Footer.png"

export default function Register() {
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
                                        <div className="mb-1">
                                            <label htmlFor="email" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email" />
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="nome" className="form-label">
                                                Nome
                                            </label>
                                            <input
                                                type="name"
                                                className="form-control"
                                                id="nome" />
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="password" className="form-label">
                                                Senha
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="password" />
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="confpassword" className="form-label">
                                                Confirmar Senha
                                            </label>
                                            <input
                                                type="confpassword"
                                                className="form-control"
                                                id="confpassword" />
                                        </div>
                                        <div className="d-grid gap-2">

                                            <button
                                                type="button"
                                                className="btn btn-primary">
                                                Cadastrar
                                            </button>
                                        </div>
                                    </form>
                                    <div className="text-center mt-3">
                                        <p>
                                            Já tem uma conta?{' '}
                                            <a className="nav-link text-black" href="login">Logar</a>
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <footer >
                    <img className="footerregister" src={Footer} alt="Imagem Exemplo" />
                </footer>
            </div>
        </>

    )
}