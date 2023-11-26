import axios from "axios";
import { useState } from "react";
import {Form, Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Search(){
    const [searchNum, setSearchNum] = useState('');
    const [searchResult, setsearchResult] = useState([]);
    const navigate = useNavigate();

    const handleSearch = async() => {
        console.log(searchNum)
        try{
            const response = await axios.get(`/search/${searchNum}`);
            setsearchResult([response.data])
        }catch (error) {
            console.log("Error searching" ,error)
        }
        
    }
    return(
        <div style={{ width: '70%', margin: 'auto auto', textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'Lora serif', marginTop: '1rem' }}>Search a Customer</h1>
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                <Form>
                    <Form.Group>
                        <Form.Control
                            placeholder="Enter the Customer Number here"
                            value={searchNum}
                            onChange={(e) => setSearchNum(e.target.value)}
                            style={{ width:"150%", marginBottom: '1rem', marginTop:"2rem" }}
                        />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group>
                        <Button variant="outline-primary" 
                            style={{ marginBottom: '1rem', marginTop:"2rem" }}
                            onClick={handleSearch}>
                            SEARCH
                        </Button>
                    </Form.Group>
                </Form>
            </div>
            {searchResult.length>0 && (
                <div>
                    <h2 style={{fontFamily: 'Lora serif', marginTop: '1rem'}}>Search Results:</h2>
                    {searchResult.map((result) => (
                    <div key={result._id}>
                        <h4 style={{fontFamily:"Lora serif"}}>Customer Name : {result.customerName}</h4>
                        <h5 style={{fontFamily:"Lora serif"}}>Customer Number : {result.customerNumber}</h5>
                        <h5 style={{fontFamily:"Lora serif"}}>City : {result.city}</h5>
                        <h5 style={{fontFamily:"Lora serif"}}>State : {result.state}</h5>
                        <h5 style={{fontFamily:"Lora serif"}}>Pincode : {result.pincode}</h5>
                    </div>
                    ))}
                </div>
            )}
            <Button
                variant="outline-dark"
                style={{ width: '100%', marginTop: '1rem' }}
                onClick={() => navigate("/")}
            >BACK
            </Button> 
        </div>
    )
}
export default Search;