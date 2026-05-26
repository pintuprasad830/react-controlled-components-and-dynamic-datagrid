
import { Navbar } from "../../controlled-components/navbars";



export function ControlDemo(){

    return(

        <div className="container-fluid">

             <Navbar brandTitle="Shopping" style='success' layout="sidebar" theme='bg-dark text-white' logo='bi bi-shop' menuItems={['Home', 'Shop', 'Electronics', 'Offers', 'About']} />

             <Navbar brandTitle="Food" layout="navbar" theme='bg-success text-white' logo='bi bi-fork-knife' menuItems={['Order', 'Restaurants', 'Offers', 'Dine-In']} />

        </div>

    )

}




