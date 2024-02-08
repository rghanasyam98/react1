import '../index.css';
export default function BoxComponent(props){
    return (
        // <div>
        //    <img src={props.image}></img>
        //    <h2>{props.title}</h2>
        //    <p>{props.description}</p>
        // </div>



        <li className="concept">
        <img src={props.data.image} ></img>
        <h2 >{props.data.title}</h2>
        <p >{props.data.description}</p>
     </li>
    );
}