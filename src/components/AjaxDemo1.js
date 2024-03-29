import axios from "axios";
import { useState } from "react";

function AjaxDemo1()
{
    const [customersArray, setCustomersArray] = useState([]);

    function getDataClick()
    {       
        let url= "https://www.w3schools.com/angular/customers.php";
        axios.get(url).then( (resData) => 
        {
               console.log(resData);
              //  console.log(resData.data);
              //  console.log(resData.data.records);
                setCustomersArray(resData.data.records);
        });
        // other code 
    }

    let resultsArray = customersArray.map( (item, index) => 
    <tr  key={index}>
        <td>{item.Name}</td>
        <td>{item.City}</td>
        <td>{item.Country}</td> 
    </tr>
    );

    return (
    <>
       <h3>Server Communication in React JS using AXIOS</h3>
       <hr/>

        <input type="button" value="Get Data" onClick={getDataClick} />

        <table  border="2"  width="500">
            <tr>
                <th>Customer Name</th>
                <th>City Name</th>
                <th>Country Name </th> 
            </tr>

            {resultsArray}

        </table>    
    </>);
}

export default AjaxDemo1;