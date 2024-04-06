import { useEffect, useState } from "react";
import axios from "axios";

function GetMethod() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get("https://660fa01d356b87a55c51d6dd.mockapi.io/Students")
      .then((res) => setUsers(res.data))
      .catch(err => {
        setError(err.message);
      });
  }, []);
  
  return (
    <>
     <div className="get">
     {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user,index) => (
          <li key={index}>Name:{user.name}
          </li>
        ))}
      </ul>
     </div>
    </>
  );
}

export default GetMethod;
