import Hero from "@/components/Hero"
import Footer from '../components/Footer';
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import PSkills from "@/components/PSkills";
import Team from "@/components/Team";
import Quote from "@/components/Quote";
import Feedback from '../components/Feedback';
const page = () => {
  return (
    <div>
      <Hero/>
      <Footer/>
      <Skills/>
      <Projects/>
      <PSkills/>
      <Team/>
      <Quote/>
      <Feedback/>
      <Footer/>
    </div>
  )
}

export default page
