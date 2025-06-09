import './ProfileCard.css';

export default function ProfileCard({ image, name, role, bio }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-img" />
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
    </div>
  );
}
