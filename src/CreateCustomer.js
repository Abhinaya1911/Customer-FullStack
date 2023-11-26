import { Button , Form} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CreateCustomer(){
    const navigate = useNavigate();
    const [post, setPost] = useState({
        customerName : "",
        customerNumber : "",
        city : "",
        state : "",
        pincode : "",
    })

    const handleChange = (event) => {
        const {name, value} = event.target;

        setPost((prev) => {
            return{
                ...prev,
                [name] : value,
            }
        })
    }

    const handleClick = (event) => {
        event.preventDefault();
        axios
        .post("/create",post)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

        navigate("/posts")
    }
    
    return(
        <div style={{width:"90%", margin:"auto auto", textAlign:"center"}}>
            <h1 style={{fontFamily:"Lora serif", marginTop:"1rem"}}>Add a New Customer</h1>
            <Form>
                <Form.Group>
                <Form.Control
                        name = "customerName"
                        placeholder="CustomerName"
                        value={post.customerName}
                        onChange={handleChange}
                        style={{width:"80%", marginBottom:"1rem"}}
                    />
                    <Form.Control
                        name = "customerNumber"
                        placeholder="CustomerNumber"
                        value={post.customerNumber}
                        onChange={handleChange}
                        style={{width:"80%", marginBottom:"1rem"}}
                    />
                    <Form.Control
                        name="city"
                        placeholder="City"
                        value={post.city}
                        onChange={handleChange}
                        style={{width:"80%", marginBottom:"1rem"}}
                    />
                    <Form.Control
                        name="state"
                        placeholder="State"
                        value={post.state}
                        onChange={handleChange}
                        style={{width:"80%", marginBottom:"1rem"}}
                    />
                    <Form.Control
                        name="pincode"
                        placeholder="Pincode"
                        value={post.pincode}
                        onChange={handleChange}
                        style={{width:"80%", marginBottom:"1rem"}}
                    />
                    <Button 
                        variant="outline-success" 
                        style={{width:"100%", marginBottom:"1rem"}} 
                        onClick={handleClick}
                    >ADD CUSTOMER</Button>
                </Form.Group>
            </Form>
            <Button
                variant="outline-secondary"
                style={{width:"100%", marginBottom:"1rem"}}
                onClick={() => navigate("/posts")}
            >VIEW ALL DATA</Button>
            <Button 
                variant="outline-dark" 
                style={{width:"100%"}} 
                onClick={() => navigate(-1)}
            >BACK</Button>
            
        </div>
    );
}

export default CreateCustomer;