import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

function Delete(){
    const [delNum, setDelNum] = useState('');
    const navigate = useNavigate();

    const handleDelete = async() => {
        axios.delete(`/deleteById/${delNum}`)
        .then((res) => {
            console.log(res)
            setDelNum([res.data])
        })
        .catch(err => console.log(err))
        navigate("/")
    }
    return(
        <div style={{width:"70%", margin:"auto auto",textAlign:"center"}}>
            <h1 style={{fontFamily:"Lora serif", marginTop:"1rem"}}>Delete a Customer</h1>
            <div style={{display:"flex", flexDirection:"row",justifyContent:"space-around"}}>
                <Form>
                    <Form.Group>
                        <Form.Control
                            placeholder="Enter the Customer Number here"
                            value={delNum}
                            onChange={(e) => setDelNum(e.target.value)}
                            style={{width:"150%",marginBottom:"1rem", marginTop:"2rem"}}
                        />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group>
                        <Button variant="outline-danger"
                            style={{width:"150%",marginBottom:"1rem", marginTop:"2rem"}}
                            onClick={handleDelete}>
                            DELETE
                        </Button>
                    </Form.Group>
                </Form>
            </div>
            <Button
                variant="outline-dark"
                style={{width:"100%", marginTop:"1rem"}}
                onClick={() => navigate("/")}>
            BACK
            </Button>
            
        </div>
    )
}
export default Delete;