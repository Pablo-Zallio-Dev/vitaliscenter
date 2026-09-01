import CenterSection from "./components/organism/CenterSection";
import CommentsSection from "./components/organism/CommentsSection";
import CtaSection from "./components/organism/CtaSection";
import HeroSection from "./components/organism/HeroSection";
import HeroWorkSection from "./components/organism/HeroWorkSection";
import SuccesSection from "./components/organism/SuccesSection";
import TeamSection from "./components/organism/TeamSection";



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
