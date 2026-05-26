export function Navbar(props)

{

    if(props.layout==="sidebar"){

       return(

        <nav style={{width:'200px'}} className={`d-flex flex-column justify-content-between border border-1 border-secondary p-3 m-2`}>

            <div>

                <span className="fw-bold fs-5"> <span className={props.logo}></span> {props.brandTitle}</span>

            </div>

            <div>

                <ul className="list-group">

                  {

                     props.menuItems.map(item => <li className={`list-group-item list-group-item-${props.style} my-3`} key={item}> <span>{item}</span> </li>)

                  }

                </ul>

            </div>

            <div>

                <button className="btn btn-warning w-100">Signin</button>

            </div>

        </nav>

       )

    } else {

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

}



