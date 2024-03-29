import { tab } from '@testing-library/user-event/dist/tab';
import {useState}  from 'react';

function Product()
{
    
    const [pname, setpname] = useState("");
    const [uprice, setuprice] = useState("");
    const [pquantity, setpquantity] = useState("");
    const [tamount, settamount] = useState(0);
    


    function Total()
    {
            let tprice=uprice*pquantity  ;
           settamount(tprice);
           
    }

    return (<>

        <h3>Working with State in React JS</h3>
        <hr/>

       <fieldset>
            <legend>Product Bill</legend>

            Product Name :  
            <input  type="text"  onChange={ (e) => setpname(e.target.value) } pname />
            <br/><br/> 

            Unit Price:
            <input  type="number"  onChange={ (e) => setuprice(e.target.value) } />
            <br/><br/>

            Quantity:
            <input type="number"  onChange={(e) => setpquantity(e.target.value)} />
            <br></br>

            <input type="button"  onClick={Total}  value="Get Total" />
            <br></br>


            <h5>Total amount: {tamount}</h5>
    
       </fieldset>
        
    
    
    </>);

}
export default Product;