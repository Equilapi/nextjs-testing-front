export default function Users({ users }: any) {
    return (
        <ul className="flex gap-5">
            {
                users.map((user: any) => (
                    <li key={user.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img src={user.avatar} alt={user.email} />
                        <div>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.first_name} {user.last_name}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{user.email}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
