import "./styles.css"
import logo from "../../assets/logoTrans.png"
import reactLogo from "../../assets/react-logo.svg"
import htmlLogo from "../../assets/html-logo.svg"
import vueLogo from "../../assets/vue-logo.svg"
import angularLogo from "../../assets/angular-logo.svg"
import javascriptLogo from "../../assets/javascript-logo.svg"
import typeScriptLogo from "../../assets/type-logo.svg"
import bancoLogo from "../../assets/db-logo.svg"
import javaLogo from "../../assets/java-logo.svg"
import outroLogo from "../../assets/outro-logo.svg"
import layout from "../../assets/layout.png"
import syntax from "../../assets/syntax.png"
import element from "../../assets/element.png"
import content from "../../assets/content.png"
import documentacao from "../../assets/documentacao.png"
import ideia from "../../assets/ideia.png"
import duvida from "../../assets/duvida.png"
import colabore from "../../assets/colabore.png"
import footer from "../../assets/rodape.png"
import { Link } from "react-router-dom"
import Header from "../../Components/Header/header"
import { Button } from "tamagui"


export default function Home() {
    return (
        <>
            <Header />
        </>
        // <>
        //     <div className="content">
        //         <div className="container">
        //             <nav className="d-flex justify-content-between align-items-center pt-3">
        //                 <img src={logo} alt="" />
        //                 <ul className="nav justify-content-center">
        //                     <a className="nav-link text-white" href="#"><Link to={`/`} className="text-white">Inicio</Link></a>
        //                     <a className="nav-link text-white" href="#">Docs</a>
        //                     <a className="nav-link text-white" href="forum"><Link to={`/forum`} className="text-white">Fórum</Link></a>
        //                     <a className="nav-link text-white" href="#">Blog</a>
        //                 </ul>
        //                 <button className="button loginbutton"><Link to={`/login`} className="text-white">Login</Link></button>
        //             </nav>
        //             <div className="d-flex justify-content-center" style={{ paddingTop: "10%" }}>
        //                 <div className="text-center ">
        //                     <h1 className="text-white d-flex">Como podemos te ajudar ?</h1>
        //                     <p className="text-white">Digite palavras chave sobre temas que deseja pesquisar</p>
        //                     <div className="input-group text-center" style={{ paddingTop: "8%" }}>
        //                         <span className="input-group-text">🔍</span>
        //                         <input type="text" className="form-control" placeholder="Buscar" aria-label="Username" aria-describedby="basic-addon1" />
        //                     </div>
        //                     <div>
        //                         <h6 className="text-white">Pesquisas sugeridas:</h6>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div style={{ paddingTop: "8%", marginBottom: "5%" }}>
        //                 <section className="layout" >
        //                     <div className="itemTable">
        //                         <div className="iconL">
        //                             <img src={reactLogo} alt="" />
        //                         </div>
        //                         <div>
        //                             <h6 className="text-Dark">React.js</h6>
        //                             <p>245 Posts</p>
        //                         </div>
        //                     </div>
        //                     <div className="itemTable">
        //                         <div className="iconL">
        //                             <img src={htmlLogo} alt="" />
        //                         </div>
        //                         <div>
        //                             <h6 className="text-Dark">HTML/CSS</h6>
        //                             <p>245 Posts</p>
        //                         </div>
        //                     </div>
        //                     <div className="itemTable">
        //                         <div className="iconL">
        //                             <img src={vueLogo} alt="" />
        //                         </div>
        //                         <div>
        //                             <h6 className="text-Dark">Vue.js</h6>
        //                             <p>245 Posts</p>
        //                         </div>
        //                     </div>
        //                     <div className="itemTable">
        //                         <div className="iconL">
        //                             <img src={angularLogo} alt="" />
        //                         </div>
        //                         <div>
        //                             <h6 className="text-Dark">Angular</h6>
        //                             <p>245 Posts</p>
        //                         </div>
        //                     </div>
        //                     <div className="itemTable">
        //                         <div className="iconL">
        //                             <img src={javascriptLogo} alt="" />
        //                         </div>
        //                         <div>
        //                             <h6 className="text-Dark">JavaScript</h6>
        //                             <p>245 Posts</p>
        //                         </div>
        //                     </div>
        //                     <div className="itemTable">
        //                         <div className="iconL">
        //                             <img src={typeScriptLogo} alt="" />
        //                         </div>
        //                         <div>
        //                             <h6 className="text-Dark">TypeScript</h6>
        //                             <p>245 Posts</p>
        //                         </div>
        //                     </div>
        //                     <div className="itemTable">
        //                         <div className="iconL">
        //                             <img src={bancoLogo} alt="" />
        //                         </div>
        //                         <div>
        //                             <h6 className="text-Dark">Banco de Dados</h6>
        //                             <p>245 Posts</p>
        //                         </div>
        //                     </div>
        //                     <div className="itemTable">
        //                         <div className="iconL">
        //                             <img src={javaLogo} alt="" />
        //                         </div>
        //                         <div>
        //                             <h6 className="text-Dark">Java</h6>
        //                             <p>245 Posts</p>
        //                         </div>
        //                     </div>
        //                     <div className="itemTable">
        //                         <div className="iconL">
        //                             <img src={outroLogo} alt="" />
        //                         </div>
        //                         <div>
        //                             <h6 className="text-Dark">Outro</h6>
        //                             <p>245 Posts</p>
        //                         </div>
        //                     </div>
        //                 </section>
        //             </div>
        //             <div className="containerSeg justify-content-center">
        //                 <h1 className="text-center" >Tópicos recomendados</h1>
        //                 <div className="teste d-flex flex-wrap">
        //                     <img src={element} alt="" />
        //                     <img src={content} alt="" />
        //                     <img src={syntax} alt="" />
        //                     <img src={layout} alt="" />
        //                 </div>
        //             </div>

        //             <div id="teste" className="justify-content-center">
        //                 <h3 className="text-center" >Como qCurso funciona</h3>
        //                 <div className="teste2 d-flex row">
        //                     <a className="nav-link text-white" href="#"><img src={duvida} alt="" /></a>
        //                     <a className="nav-link text-white" href="#"><img src={ideia} alt="" /></a>
        //                     <a className="nav-link text-white" href="#"><img src={documentacao} alt="" /></a>
        //                 </div>
        //             </div>
        //             <div className=" d-flex justify-content-center">
        //                 <img className="colabore" src={colabore} alt="" />
        //             </div>
        //             <hr />
        //             <footer >
        //                 <img className="footer" src={footer} alt="" />
        //             </footer>
        //         </div>
        //     </div>
        // </>
    )
}