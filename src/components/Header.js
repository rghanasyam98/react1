import keyconcept from '../assets/images/key-concepts.png'
import '../index.css';




export default function Header(){
    return(
        <header>
        <img src={keyconcept} className='keyconcept-logo'></img>
         <h1>Key React Concepts</h1>
         <p>Selected key react concepts you should know about</p>
        </header>
    );
}