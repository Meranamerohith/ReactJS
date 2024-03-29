import { useState } from "react";
import axios from "axios";

function Users(){


    const [usersArray, setusersArray ] = useState([]); 

function getDataClick(){
    let url= "https://reqres.in/api/users";
    axios.get(url).then( (resData) => 
        {
            console.log(usersArray);

            setusersArray(resData.data.data);
        });    

}
            let resultsArray = usersArray.map( (item, index) => 
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td> 
                <td>{<img src ={item.avatar} alt="User_avatar"/>}</td>
            </tr>
            );
        
            return (
            <>
               <h3>Server Communication in React JS using AXIOS</h3>
               <hr/>
        
                <input type="button" value="Get Data" onClick={getDataClick} />
        
                <table class="center" border="5%"  width="100%">
                    <tr>
                        <th>User id</th>
                        <th>User FirstName</th>
                        <th>User LastName </th> 
                        <th>User avatar</th>
                    </tr>
        
                    {resultsArray}
        
                </table>  
               
            </>);
}
export default Users;