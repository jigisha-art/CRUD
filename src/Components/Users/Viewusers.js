import React,{useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

const Viewusers = () => {
  const [user, setUser ] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    beneficiary: ""
  });
  const { id } = useParams();
  useEffect(() =>
  {loadUsers();
  },[]);
  const loadUsers= async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/Userdetails">
        Back to Userdetails
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">user name: {user.username}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">phone: {user.phone}</li>
        <li className="list-group-item">beneficiary: {user.beneficiary}</li>
      </ul>
    </div>
  );
};

export default Viewusers;
