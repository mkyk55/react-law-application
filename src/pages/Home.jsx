import Header from "../components/header/header";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Practice from "../components/practice/Practice";
import Solution from "../components/solution/Solution";
import ProfileSection from "../components/profile/ProfileSection";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Practice />
      <Solution />
      <ProfileSection />
    </>
  );
}