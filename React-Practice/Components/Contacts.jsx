export default function Contacts(props){
    return(
        <>
        <div className="Contact-card">
            <img src={props.img} />
            <h3>{props.name}</h3>
            <div className="Info">
                <p>{props.phone}</p>
                <p>{props.email}</p>
            </div>
        </div>
        </>
    )
}
