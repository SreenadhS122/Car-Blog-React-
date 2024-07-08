function NavBar(){
    return (
        <div className="header">
        <div className="container d-flex justify-content-between py-2">
        <div className="d-flex gap-2 align-items-center">
                <img src={require('../images/Slice.png')} alt="car" className="logo"/>
                <h2 className="logo-name">CLOG</h2>
            </div>
                <div className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid justify-content-end">
                    <button className="navbar-toggler w-100" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="dummy">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="dummy">Blogs</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="dummy">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="dummy">Contact US</a>
                        </li>
                        <li className='m-lg-3'>
                        <button className="btn subscribe-btn px-4 py-2">Subscribe</button>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>    
        </div>
        </div>
    )
}

export default NavBar;