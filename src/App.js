import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function App() {

  const [githubData, setGithubData] = useState([])
  const [githubUser, setGithubUser] = useState()

  useEffect(() => {
      fetchData()
  }, [])
  
  const fetchData = () => {
      return fetch(`https://api.github.com/users/${githubUser}`)
        .then((response) => response.json())
        .then((data) => setGithubData(data));
    }

  return (
    <div className='container'>
      <Header/>
      <div style={{backgroundColor: '#1F2A48', height: '55px', borderRadius: '10px', display: 'grid', gridTemplateColumns: '0.4fr 6fr 1fr', alignItems: 'center'}}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:"#0079FE", justifySelf: 'end', fontSize: '20px'}}/>
            <input style={{background: 'transparent', border: 'none', outline: '0', marginLeft: '30px', color: 'inherit', fontFamily: 'inherit', fontSize: '15px'}} placeholder={"Search GitHub user..."} onChange={(e) => setGithubUser(e.target.value)}/>
            <button style={{width: '90px', height: '40px', borderRadius: '8px', color: '#FFFFFF', backgroundColor: '#0079FE', border: 'none', cursor: 'pointer', fontFamily: "'Space mono', monospace"}} onClick={fetchData}>Search</button>
        </div>
      <Profile githubData={githubData}/>
      <footer style={{position: "absolute", bottom: '0', left: '50%'}}><div style={{position: 'relative', left: '-50%'}}>Made with ❤️ by Samiun Black</div></footer>
    </div>
  );
}

export default App;
