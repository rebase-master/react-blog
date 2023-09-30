import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
        <h1>Log In</h1>
            {error && <p className="error">{error}</p>}
        <label>
            <input type="text"
                   placeholder="Email address"
                   value={email}
                   onChange={e => setEmail(e.target.value)}
            />
        </label>
        <label>
            <input type="password"
                   placeholder="Password"
                   value={password}
                   onChange={e => setPassword(e.target.value)}
            />
        </label>
        <button onClick={logIn}>Log In</button>
        <Link to="/register">Don't have an account? Create one here.</Link>
        </>
    )
}

export default LoginPage;
