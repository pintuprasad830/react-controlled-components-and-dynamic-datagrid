export function DataGrid(props)

{

    return(

        <table className={`table ${props.theme} table-hover table-striped caption-top`}>

            <caption>{props.caption}</caption>

            <thead>

                <tr>

                    {

                        Object.keys(props.fields[0]).map(key=><th key={key}>{key}</th>)

                    }

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {

                    props.records.map((record,index)=> 

                    <tr key={index}>

                        {

                            Object.values(record).map(value=> <td key={value}>{value}</td>)

                        }

                        <td>

                            <button className="btn btn-warning bi bi-pen-fill"></button>

                            <button className="btn btn-danger bi bi-trash-fill mx-2"></button>

                        </td>

                    </tr>

                   )

                }

            </tbody>

        </table>

    )

}

