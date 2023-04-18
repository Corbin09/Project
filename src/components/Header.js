import { NavLink } from 'react-router-dom';

const Header = ({ cartItem, quantity }) => {

    let button = null;

    if(cartItem)
    button = (
        <div>
            <button type="button" className="btn btn-primary">
                Cart<span className="badge text-bg-secondary">{quantity}</span>
            </button>
            <NavLink to="/login" type='button' className='link-underline-light ms-4' onClick={localStorage.setItem("username", "a")}>Login</NavLink>
        </div>
    )
    else{
        button = (
            <div>
                <NavLink to="/login" type='button' className='link-underline-light ms-4' onClick={localStorage.setItem("username", "a")}>Login</NavLink>
            </div>
        )
    }

    return <nav className="navbar bg-light ">
        <div className="container">
            <div className='d-flex'>
                <a className="navbar-brand d-flex align-items-center justify-content-start" href="/">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU"
                        alt="Bootstrap"
                        width={30}
                        height={24}
                    />
                    <p className="fs-6 pt-2">Shopify</p>
                </a>

                <NavLink to="/" type='button' className='link-underline-light ms-4' style={{ marginTop: "12px" }}>Home</NavLink>
            </div>
            <div>
                {button}
            </div>

        </div>
    </nav>
}

export default Header;