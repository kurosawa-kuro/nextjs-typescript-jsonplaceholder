interface HomeProps {
  params: {
    id: number;
  };
}

export default async function Home({ params }: HomeProps) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  console.log("user", user);

  return <h1>Hello {user.name}</h1>;
}
