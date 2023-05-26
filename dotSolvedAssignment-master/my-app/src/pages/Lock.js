import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import user from '../assets/user.png';

const LockScreen = () => {
    const [unlockId, setUnlockId] = useState('');
    const [showError,setShowError] = useState('');
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('loggedIn') || '[]');
    const matchPassword = () => {
        if(userData.password === unlockId)
            navigate('/dashboard');
        else
            setShowError('Password is incorrect!');
    }
    return (
        <div className="lockScreen">
            <img src={user} alt='profile_img' name='profileImg' />
            <span>{userData.firstName}</span>
            <input value={unlockId} name='lock' onChange={(e) => setUnlockId(e.target.value)} type='password' />
            {showError && <span className="font400 error">{showError}</span>}
            <button onClick={matchPassword} className="btn-primary">Unclock</button>
        </div>
    )
}

export default LockScreen;