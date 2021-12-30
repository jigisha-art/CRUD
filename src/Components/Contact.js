import React from 'react'
import {Link} from "react-router-dom"
function Contact () {
    return (
        <div className="container">
        <div className="py-4">
            <h1> Login</h1>
            <form action>
         <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
         
          </div>
         <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
         <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
           </div>
       
             <Link button type="submit" class="btn btn-primary" to="/Userdetails">Submit</Link>
      
       </form>

        </div>
            
        </div>
    );
};

export default Contact;
