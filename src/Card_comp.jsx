import profile from './assets/my_pic.jpg'

function Card(){
    return(
        <div className="pic">
            <img className="pp" src={profile} alt="My profile pic"></img>
            <h3>It was my linked-in profile pic</h3>
            <p>I uploaded this pic as my linked-in profile pic.</p>
        </div>
    );
}
export default Card;