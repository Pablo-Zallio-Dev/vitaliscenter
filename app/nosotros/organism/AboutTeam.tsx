import Container from '@/app/components/atoms/Container'
import SubHeading from '@/app/components/atoms/SubHeading'
import TextElement from '@/app/components/atoms/TextElement'
import AboutCardsTeam from './AboutCardsTeam'

const AboutTeam = () => {
      return (
            <Container id='aboutteam' className=' pt-20 px-5 bg-background-dark text-text-secondary ' >
                  <SubHeading text={'el equipo'} number='03' dark />
                  <div  className=" flex flex-col md:flex-row md:justify-between gap-8 pt-5 ">
                        <TextElement variant={'heading-lg'} as={'h2'} dark className=' max-w-md ' >
                              Personas con nombre y apellidos
                        </TextElement>
                        <TextElement variant={'text'} as={'p'} dark className=' max-w-75 ' >
                              Somos un equipo reducido, y eso es intencionado: eliges profesional al pedir cita y esa misma persona te acompaña todo el proceso.
                        </TextElement>
                  </div>
                  <AboutCardsTeam />
            </Container>
      )
}

export default AboutTeam