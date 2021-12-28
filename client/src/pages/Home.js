import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Home = () => {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [myPosts, setMyPosts] = useState(null);

  useEffect (()=>{
    getMyPosts();
  }, [])

  const getMyPosts = async () => {
    try {
      let res = await axios.get("/api/posts");
      setMyPosts(res.data);
    } catch (err) {
      console.log(err.response);
      alert("error getting posts")
    }
  }

  const addPost = (post) => {
    setMyPosts([...myPosts, post]);
  };

  const renderPosts = () => {
    return myPosts.map((p) => {
      return (
        <div style={{width: "500px", margin: "20px"}}>
          {/* <Post user={auth} post={p} /> */}
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Welcome to MySpace</h1>
      {JSON.stringify(auth)}
      <br />
      <button onClick={auth.handleLogin}>Login</button>
      <br />
      <button onClick={auth.handleLogout}>Logout</button>
      <br />
      <button onClick={() => navigate("/public")}>Public Page</button>
      <br />
      <Link to='/protected'>Protected</Link>
    </div>
  );
};

export default Home;