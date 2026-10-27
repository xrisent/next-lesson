export default async function SingleProfile({ params }) {
  const { id } = await params;
  return (
    <div>
      <h1>Личный профиль для {id}</h1>
    </div>
  );
}
