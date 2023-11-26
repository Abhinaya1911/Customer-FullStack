import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div style={{width:"90%", margin:"auto auto", textAlign:"center"}}>
      <h1 style={{fontFamily:"Lora serif", marginTop:"1rem"}}>Helloo</h1>
      <h3 style={{fontFamily:"Lora serif", marginTop:"1rem"}}>Customer Details</h3>
      <Button 
        variant="outline-dark" 
        style={{width:"80%", marginTop:"2rem"}} 
        onClick={() => navigate("/create")}
      >ADD CUSTOMER</Button>
      <Button
        variant="outline-secondary"
        style={{width:"80%", marginTop:"1rem"}}
        onClick={() => navigate("/posts")}
      >VIEW ALL DATA</Button>
      <Button
        variant="outline-primary"
        style={{width:"80%", marginTop:"1rem"}}
        onClick={() => navigate("/search")}
      >SEARCH CUSTOMER</Button>
      <Button
        variant="outline-danger"
        style={{width:"80%", marginTop:"1rem"}}
        onClick={() => navigate("/deleteById")}
      >DELETE CUSTOMER</Button>
    </div>
  );
}

export default App;
