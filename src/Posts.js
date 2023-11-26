import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';


function Posts(){
    const navigate = useNavigate()
    const [posts, setPosts] = useState([]);
    const [updatePost, setUpdatePost] = useState([]);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios
            .get("/posts")
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
        axios
        .delete(`/delete/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))

        window.location.reload()
    }

    const handleUpdate = (post) => {
        setUpdatePost(post);
        handleShow();
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUpdatePost((prev) => {
            return{
                ...prev,
                [name]:value,
            };
        });
    }

    const saveUpdatedPost = () => {
        axios.put(`/update/${updatePost._id}`, updatePost)
        .then(res => console.log(res))
        .catch(err => console.log(err))

        handleClose()
        window.location.reload()
    }

    return(
        <div style={{width:"90%", textAlign:"center", margin:"auto auto"}}>
            <h1 style={{fontFamily:"Lora serif", marginTop:"1rem"}}>View Your Details Here</h1>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update a Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                        <Form.Control 
                                style={{marginBottom:"1rem"}} 
                                placeholder="customerName"
                                name = "customerName"
                                value={updatePost.customerName ? updatePost.customerName : ""}
                                onChange={handleChange}
                                />
                            <Form.Control 
                                style={{marginBottom:"1rem"}} 
                                placeholder="customerNumber"
                                name = "customerNumber"
                                value={updatePost.customerNumber ? updatePost.customerNumber : ""}
                                onChange={handleChange}
                                />
                            <Form.Control 
                                style={{marginBottom:"1rem"}} 
                                placeholder="city"
                                name = "city"
                                value={updatePost.city ? updatePost.city : ""}
                                onChange={handleChange}
                                />
                            <Form.Control 
                                style={{marginBottom:"1rem"}} 
                                placeholder="state"
                                name = "state"
                                value={updatePost.state ? updatePost.state : ""}
                                onChange={handleChange}
                                />
                            <Form.Control 
                                style={{marginBottom:"1rem"}} 
                                placeholder="pincode"
                                name = "pincode"
                                value={updatePost.pincode ? updatePost.pincode : ""}
                                onChange={handleChange}
                                />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveUpdatedPost}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {posts ? (
                <>
                    {posts.map((post) => {
                        return(
                            <div key={post._id} style={{border:"solid lightgrey 1px", borderRadius:"8px" , marginBottom:"1rem", padding:"1rem"}}>
                                <h4 style={{fontFamily:"Lora serif"}}>Customer Name : {post.customerName}</h4>
                                <h5 style={{fontFamily:"Lora serif"}}>Customer Number : {post.customerNumber}</h5>
                                <h5 style={{fontFamily:"Lora serif"}}>City : {post.city}</h5>
                                <h5 style={{fontFamily:"Lora serif"}}>State : {post.state}</h5>
                                <h5 style={{fontFamily:"Lora serif"}}>Pincode : {post.pincode}</h5>
                                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                    <Button onClick={() => handleUpdate(post)} variant="outline-info" style={{width:"100%", marginRight:"1rem"}}>UPDATE</Button>
                                    <Button onClick={() => handleDelete(post._id)} variant="outline-danger" style={{width:"100%", marginRight:"1rem"}}>DELETE</Button>
                                </div>
                            </div>
                        )
                    })}
                </>
            ) : ""}
            <Button onClick={() => navigate(-1)} variant="outline-dark" style={{width:"100%", marginBottom:"1rem"}}>BACK</Button>
        </div>
    )
}

export default Posts;