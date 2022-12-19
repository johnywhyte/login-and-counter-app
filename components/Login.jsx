import { useRouter } from "next/router";
import { useState, useContext } from "react";
import Layout from "./Layout";
import styles from "../styles/AuthForm.module.css";
import { AuthContext } from "../contexts/AuthContext";

const INITIAL_USER_DETAILS = {
  username: "",
  password: "",
};

const DEFAULT_CREDENTIALS = {
  username: "adminuser",
  password: "password",
};

export default function LoginPage() {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);
  const [userDetails, setUserDetails] = useState(INITIAL_USER_DETAILS);
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username: defaultUsername, password: defaultPassword } =
      DEFAULT_CREDENTIALS;
    const { username, password } = userDetails;

    if (
      password !== defaultPassword ||
      username.toString().toLowerCase() !==
        defaultUsername.toString().toLowerCase()
    ) {
    setError('Invalid Credentials')
      return;
    }

    setError('');
    setUser(username);
    router.push("/counter");
  };

  return (
    <Layout title="User Login">
      <div className={styles.auth} style={{borderRadius: 6, marginTop: 100}}>
        <h1></h1>
            { error && <p style={{color: 'red', padding: 16, backgroundColor: 'pink', borderRadius: 4}}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div >
            <label htmlFor="username">Enter Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={userDetails.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userDetails.password}
              onChange={handleChange}
            />
          </div>
          {/* <button style={{color: 'blue', borderRadius: 4}}>Submit</button> */}
          <button className= {styles.button} ><span >Submit</span></button>
        </form>
      </div>
    </Layout>
  );
}
