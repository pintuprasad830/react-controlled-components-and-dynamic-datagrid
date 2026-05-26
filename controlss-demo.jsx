

import { useState } from "react"

import { DataGrid } from "../../controlled-components/data-grid"



export function ControlDemo(){



    const [employees] = useState([{FirstName:'Raj', LastName:'Kumar', Designation:'Clerk', Salary:52000}, {FirstName:'Kiran', LastName:'Kumar', Designation:'Admin', Salary:12000}])

    const [products] = useState([{Name:'TV', Price:13000}, {Name:'Mobile', Price:56000}, {Name:'Watch', Price:2000}]);

    return(

        <div className="container-fluid">

            <DataGrid caption="Employee Details" fields={employees} records={employees} />

            <DataGrid theme='table-hover table-dark w-50' caption="Products Info" fields={products} records={products} />

        </div>

    )

}