export default function UserDetails({user}){
    return(
        <div>
            <h2> details {user.id} - {user.email} - {user.username}</h2>
        </div>
    )
}