import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    let colors= ["#8a2be2","#9932cc","#00ced1","pink","yellow","red"]
console.log(props.mode);
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/About">About</a>
                            {/* <Link className="nav-link active" aria-current="page" to="/About">About</Link> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.abouttext}</a>
                        </li>
                    </ul>

                    <div className='colorPicker d-flex'>
                        {
                            colors?.map((item,index) => {
                                return (
                                    <Fragment key={index}>
                                    <div className="m-2" onClick={()=>props.colorPicker(item)} style={{backgroundColor:item,width:"30px",borderRadius:"5px",height:"30px"}}></div>
                                    </Fragment>
                                )
                            })
                        }
                        {/* <div className="m-2" onClick={()=>props.colorPicker("#8a2be2")} style={{backgroundColor:"#8a2be2",width:"30px",height:"30px"}}></div>
                        <div className="m-2" onClick={()=>props.colorPicker("#9932cc")} style={{backgroundColor:"#9932cc",width:"30px",height:"30px"}}></div>
                        <div className="m-2" onClick={()=>props.colorPicker("#00ced1")} style={{backgroundColor:"#00ced1",width:"30px",height:"30px"}}></div> */}
                    </div>

                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    abouttext : PropTypes.string,
}
// Navbar.defaultProps = {
//         // title : 'set title here',
//         abouttext : 'About text here'
// }
