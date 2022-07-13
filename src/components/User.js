export default function User({item, userButton}){
    return(
        <div>
            {item.id} - {item.name}
            <button onClick={()=>userButton(item)}>details</button>
        </div>
    )
}