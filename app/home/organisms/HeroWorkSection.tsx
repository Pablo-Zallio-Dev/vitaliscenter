import SubHeading from "../../components/atoms/SubHeading"
import TextElement from "../../components/atoms/TextElement"
import CardWorkSection from "../../components/molecules/CardWorkSection"

const HeroWorkSection = () => {
      return (
            <div className=" flex flex-col items-center  py-20 md:py-28 px-5 md:px-12 bg-background ">
                  <div className=" w-full max-w-336  border-t border-border/20 ">
                        <div className=" flex flex-col md:flex-row justify-between gap-10 pt-6">
                              <div className=" flex flex-col gap-2 w-72 lg:w-96 ">
                                    <SubHeading number={"01"} text={"Areas de trabajo"} />
                                    <TextElement variant={"heading-lg"} as={"h2"}>
                                          Cuatro formas de tratar el movimiento
                                    </TextElement>
                              </div>
                              <div className=" md:w-105 md:pt-14 ">
                                    <TextElement variant={"text"} as={"p"}>
                                          No todos los cuerpos llegan en el mismo momento. Por eso el centro trabaja por tipos de tratamiento y no por paquetes cerrados: la primera valoración decide el camino.
                                    </TextElement>
                              </div>
                        </div>
                        <CardWorkSection />
                  </div>
            </div>
      )
}

export default HeroWorkSection

