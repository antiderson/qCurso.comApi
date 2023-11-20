import { Link } from "react-router-dom";
import logo from "../../assets/logo_white_background.jpg";
import './style.css'

export default function Header() {
    return (
        <header className="text-white d-flex">
              <div className="container d-flex justify-content-between align-items-center ">
                <img className="col-md-3 " src={logo} alt="logo" />

                <nav className="col-md-3 ">
                    <ul className="list-inline d-flex justify-content-around m-auto list-  ">
                        {/* <li className="fs-5 list-inline-item text-body-secondary "><a className="text-dark" href="#">Usúarios</a></li> */}
                        <li className="fs-5 list-inline-item text-body-secondary">
                            <Link to={`/`} className="text-dark">Inicio</Link>
                        </li>
                        <li className="fs-5 list-inline-item text-body-secondary">
                            <Link to={`/usuarios`} className="text-dark">Usúarios</Link>
                        </li>
                        <li className="fs-5 list-inline-item text-body-secondary">
                            <Link to={`/posts`} className="text-dark">Posts</Link>
                        </li>
                    </ul>
                </nav>
                <button className="fs-5 fw-semibold btn btn-primary col-md-3" style={{ backgroundColor: '#6610f1' }}>LOGIN</button>
            </div>
        </header>
    )
}
