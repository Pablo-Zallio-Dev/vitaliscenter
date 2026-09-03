import CenterSection from "./home/organisms/CenterSection";
import CommentsSection from "./home/organisms/CommentsSection";
import CtaSection from "./components/organisms/CtaSection";
import HeroSection from "./home/organisms/HeroSection";
import HeroWorkSection from "./home/organisms/HeroWorkSection";
import SuccesSection from "./home/organisms/SuccessSection";
import TeamSection from "./home/organisms/TeamSection";



export default function Home() {
      return (
            <>
            <HeroSection />
            <HeroWorkSection />
            <TeamSection />
            <CenterSection />
            <SuccesSection />
            <CommentsSection />
            <CtaSection subtitle='cita previa' text='¿Empezamos por una valoración?' description='Cuéntanos qué te pasa y te decimos con sinceridad si podemos ayudarte.' />
            </>
      )
}
