import Container from '@/app/components/atoms/Container'
import SubHeading from '@/app/components/atoms/SubHeading'
import TextElement from '@/app/components/atoms/TextElement'
import ContactForm from './ContactForm'

const ContactFormSection = () => {
      return (
            <Container className=' bg-background pt-16 '>
                  <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 pb-18 ">
                        <div className=" flex flex-col gap-5 ">
                              <SubHeading text={'formulario'} number='04' />
                              <TextElement variant={'heading-lg'} as={'h3'}>Escríbenos</TextElement>
                              <TextElement variant={'text'} as={'p'} className=' max-w-85 justify-self-center '>Rellena los datos y te contactamos para confirmar la cita y el profesional que mejor encaje con tu caso.</TextElement>
                        </div>
                        <ContactForm />
                  </div>
            </Container>
      )
}

export default ContactFormSection