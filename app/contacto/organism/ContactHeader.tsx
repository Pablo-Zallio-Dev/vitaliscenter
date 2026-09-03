import Container from '@/app/components/atoms/Container'
import SubHeading from '@/app/components/atoms/SubHeading'
import TextElement from '@/app/components/atoms/TextElement'

const ContactHeader = () => {

 


      return (
            <Container className=' pt-30  md:pt-20 pb-10 bg-background ' >
                  <SubHeading text={'contacto'} number='01' />

                  <div className=" flex flex-col lg:flex-row lg:justify-between gap-10 mt-8 ">
                        <TextElement variant={'heading-xl'} as={'h1'} className=' w-2xs sm:w-3xl max-w-150 '>
                              Pide cita o cuéntanos qué te pasa
                        </TextElement>
                        <TextElement variant={'text'} as={'p'} className=' lg:self-end w-md '>
                              Respondemos el mismo día laborable. Si prefieres algo rápido, escríbenos directamente por WhatsApp.
                        </TextElement>
                  </div>
            </Container>
      )
}

export default ContactHeader