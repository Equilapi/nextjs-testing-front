async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

export default async function Home() {
  const users = await fetchUsers()
  console.log(users)
  return <div>
    <div>
      {JSON.stringify(users)}
    </div>
  </div>
}