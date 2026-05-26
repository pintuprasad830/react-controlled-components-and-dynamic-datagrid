import { Navbar } from "../../controlled-components/navbar";



export function ControlDemo(){

    return(

        <div className="container-fluid">

             <Navbar brandTitle="Shopping" theme='bg-dark text-white' logo='bi bi-shop' menuItems={['Home', 'Shop', 'Electronics', 'Offers', 'About']} />

             <Navbar brandTitle="Food Delivery" theme='bg-success text-white' logo='bi bi-fork-knife' menuItems={['Order', 'Restaurants', 'Offers', 'Dine-In']} />

        </div>

    )

}



   

