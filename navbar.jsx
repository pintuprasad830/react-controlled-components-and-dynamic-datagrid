export function Navbar(props)

{

    return(

        <nav className={`p-4 m-2 align-items-center border border-1 border-secondary ${props.theme} d-flex justify-content-between`}>

            <div>

                <span className="fs-3 fw-bold"> <span className={props.logo}></span> {props.brandTitle}</span>

            </div>

            <div>

                {

                    props.menuItems.map(item=><span className="mx-3" key={item}>{item}</span>)

                }

            </div>

            <div>

                <span className="bi bi-giftbox"></span>

                <span className="bi bi-heart mx-2"></span>

                <button className="btn btn-warning">Signin</button>

            </div>

        </nav>

    )

}


