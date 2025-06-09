import ProfileCard from './ProfileCard.jsx';
import './ProfileCard.css';
import practice from '../../assets/images/practice.jpg';


export default function ProfileSection() {
  return (
    <section className="profile-section">
      <h2>Meet Our Lawyers</h2>
      <div className="card-grid">
        <ProfileCard
          image={practice}
          name="Jane Smith"
          role="Family Lawyer"
          bio="Expert in custody, divorce, and mediation law."
        />
        <ProfileCard
          image={practice}
          name="John Doe"
          role="Corporate Lawyer"
          bio="Over 10 years helping businesses stay compliant."
        />
        <ProfileCard
          image={practice}
          name="Sarah Brown"
          role="Criminal Defense"
          bio="Aggressively defends client rights in all cases."
        />

         <ProfileCard
          image={practice}
          name="Sarah Brown"
          role="Criminal Defense"
          bio="Aggressively defends client rights in all cases."
        />

         <ProfileCard
          image={practice}
          name="Sarah Brown"
          role="Criminal Defense"
          bio="Aggressively defends client rights in all cases."
        />

         <ProfileCard
          image={practice}
          name="Sarah Brown"
          role="Criminal Defense"
          bio="Aggressively defends client rights in all cases."
        />
      </div>
    </section>
  );
}
