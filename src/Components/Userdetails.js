import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
 const Userdetails= () => 
        {
     const [users, setUser] = useState([]);
     
     useEffect(() => {
         loadUsers();
     }, []);

     const loadUsers = async()=> {
         const result = await axios.get("http://localhost:3003/Users");
         setUser(result.data.reverse());
     };
     const deleteUser = async id => {
       await axios.delete(`http://localhost:3003/users/${id}`);
     }
    return(
        <>  <center> <h1>
        <Link className="btn btn-info btn-lg float-right outline-dark " to= "/users/add">Add user</Link> </h1> </center>
        <Link to= "/users/add">Add user</Link>
        <div className="container">
          <div className="py-4">
             <table class="table table-success table-striped">
                <thead class="thead-dark">
                 <tr>
                  <th scope="col">#</th>
                 <th scope="col">Name</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col-6">Actions</th>
                  </tr>
                </thead>
                  <tbody>
                     {
                      users.map((user,index) =>(
                          <tr>
                          <th scope="row">{index +1}</th>
                          <td>{user.name} </td>
                          <td>{user.username}</td>
                          <td>{user.phone}</td>
                          <td>
                          <Link class="btn btn-primary mx-2" to={`/Viewusers/${user.id}`}>View</Link>
                          <Link class="btn btn-outline-primary mx-2" to={`/users/edit/${user.id}`}>Edit</Link>
                          <Link class="btn btn-danger" onClick={ () => {deleteUser(user.id)}}>Delete</Link>
                          </td>
                          </tr>
                      ))}
                  </tbody>
             </table>
            </div>
        </div>
        </>
    ); 
  }

export default Userdetails;
