import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Profile = ({githubData}) => {
      

    return (
        githubData.name && <div style={{minHeight: '400px', width: 'inherit', background: '#1F2A48', borderRadius: '10px', marginTop: '30px', paddingTop: '40px', paddingLeft: '40px', paddingRight: '40px'}}>
           <div style={{display: 'grid', gridTemplateColumns: '1fr 4fr'}}>
                <img src={githubData.avatar_url} style={{width: '120px', height: '118px', borderRadius: '50%'}} alt="avatar"/>
                <div > 
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <div>
                            <h2>{githubData.name}</h2>
                        </div>
                        <div style={{color: '#FFF', fontSize: '15px', paddingTop: '5px'}}>Joined {githubData.created_at && new Date(githubData.created_at).toString().slice(4, 15)}</div>
                    </div>
                    <small style={{color: '#0079FE'}}>@{githubData.login}</small>
                    <div style={{paddingTop: '30px', color: '#8E94A4'}}>{githubData.bio ? githubData.bio : "This profile has no bio"}</div>
                    <div style={{height: '100px', backgroundColor: '#141C2F', width: 'inherit', borderRadius: '10px', marginTop: '30px'}}>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', paddingTop: '20px', paddingLeft: '30px'}}>
                            <div>
                                <p style={{fontSize: '14px', color: '#8E94A4'}}>Repos</p>
                                <p style={{fontWeight: 'bold', fontSize: '23px'}}>{githubData.public_repos}</p>
                            </div>
                            <div>
                                <p style={{fontSize: '14px', color: '#8E94A4'}}>Followers</p>
                                <p style={{fontWeight: 'bold', fontSize: '23px'}}>{githubData.followers}</p>
                            </div>
                            <div>
                                <p style={{fontSize: '14px', color: '#8E94A4'}}>Following</p>
                                <p style={{fontWeight: 'bold', fontSize: '23px'}}>{githubData.following}</p>
                            </div>
                        </div>
                    </div>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: "repeat(2, 30px)", paddingTop: '20px', paddingBottom: '40px'}}>
                        <div style={{display: 'flex', alignItems: 'center', color: '#8E94A4'}}>
                        <FontAwesomeIcon icon={faLocationDot} style={{color: '#FFF', marginRight: '13px'}}/>
                        <p>{githubData.location ? githubData.location : "Not available"}</p>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', color: '#8E94A4'}}>
                        <FontAwesomeIcon icon={faTwitter} style={{color: '#FFF', marginRight: '13px'}}/>
                        <p>{githubData.twitter_username ? githubData.twitter_username : "Not available"}</p>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', color: '#8E94A4', cursor: 'pointer'}}>
                        <FontAwesomeIcon icon={faLink} style={{color: '#FFF', marginRight: '13px'}}/>
                        <a href={githubData.html_url && githubData.html_url} rel="noopener noreferrer" target="_blank" style={{color: 'inherit'}}>{githubData.html_url && githubData.html_url.slice(19)}</a>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', color: '#8E94A4',}}>
                        <FontAwesomeIcon icon={faBuilding} style={{color: '#FFF', marginRight: '13px'}}/>
                        <p>@github</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Profile;