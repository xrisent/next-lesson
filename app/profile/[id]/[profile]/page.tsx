export default async function SingleProfile({ params }) {
  const { id, profile } = await params;
  return (
    <div>
      <h1>
        Личный профиль для {id} {profile}
      </h1>
    </div>
  );
}
