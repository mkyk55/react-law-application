
import Hero from "../components/hero/Hero";
import Practice from "../components/practice/Practice";
import Solution from "../components/solution/Solution";
import ProfileSection from "../components/profile/ProfileSection";
import Testimonal from "../components/testimonials/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Practice />
      <Solution />
      <ProfileSection />
      <Testimonal />
    </>
  );
}