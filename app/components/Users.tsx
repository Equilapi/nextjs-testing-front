export default function Users({users}: any) {
    return (
        <ul>
            {
                users.map((user : any) => (
                    <li key={user.id}>
                        <div>
                            <h5>{user.first_name} {user.last_name}</h5>
                            <p>{user.email}</p>
                        </div>
                        <img src={user.avatar} alt={user.email} />
                    </li>
                ))
            }
        </ul>
    )
}
