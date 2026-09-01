import Image from "next/image";
import TextElement from "../atoms/TextElement";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const CardWorkSection = () => {
      return (
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-8 lg:gap-y-16 w-full mt-20">
                  <section className="lg:col-start-1 lg:col-end-3 lg:justify-self-start  w-full  sm:w-115 lg:w-3/4 group ">
                        <div className="relative z-20 h-60 lg:h-90 overflow-hidden">
                              <Image
                                    src="/images/image_service_01.webp"
                                    alt="Sesión de fisioterapia y terapia manual"
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300 "
                              />
                        </div>
                        <div className="flex gap-8 mt-5 pt-4 border-t border-border-25">
                              <p className=" font-crimsonText text-sm font-semibold text-accent">
                                    01
                              </p>
                              <div className="flex flex-col gap-3 ">
                                    <TextElement variant={"heading-md"} as={"h3"}>
                                          Fisioterapia y terapia manual
                                    </TextElement>
                                    <TextElement variant={"text"} className="max-w-80" as={"h3"}>
                                          Valoración y tratamiento manual para aliviar el dolor y recuperar
                                          la movilidad.
                                    </TextElement>
                                    <div className=" flex items-center text-accent ">
                                          <Link
                                                className="  text-[11px] font-semibold uppercase "
                                                href={""}
                                          >
                                                ver tratamiento{" "}
                                          </Link>
                                          <div className=" group-hover:translate-x-1.5 transition-transform duration-300 ">
                                                <BsArrowRightShort size={18} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className="lg:col-start-3 lg:col-end-4  w-full  sm:w-115 lg:w-full group">
                        <div className="relative z-20 w-full h-60 lg:h-90 overflow-hidden">
                              <Image
                                    src="/images/image_service_02.webp"
                                    alt="Sesión de fisioterapia y terapia manual"
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300  "
                              />
                        </div>
                        <div className="flex gap-8 mt-5 pt-4 border-t border-border-25">
                              <p className=" font-crimsonText text-sm font-semibold text-accent">
                                    02
                              </p>
                              <div className="flex flex-col gap-3 ">
                                    <TextElement variant={"heading-md"} as={"h3"}>
                                          Entrenamiento personal
                                    </TextElement>
                                    <TextElement variant={"text"} className="max-w-80" as={"h3"}>
                                          Programas individuales para ganar fuerza, movilidad y prevenir
                                          lesiones.
                                    </TextElement>
                                    <div className=" flex items-center text-accent ">
                                          <Link
                                                className="  text-[11px] font-semibold uppercase "
                                                href={""}
                                          >
                                                ver tratamiento{" "}
                                          </Link>
                                          <div className=" group-hover:translate-x-1.5 transition-transform duration-300 ">
                                                <BsArrowRightShort size={18} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className="lg:col-start-1 lg:col-end-2  w-full  sm:w-115 lg:w-full group">
                        <div className="relative z-20 w-full h-60 lg:h-90 overflow-hidden">
                              <Image
                                    src="/images/image_service_03.webp"
                                    alt="Sesión de fisioterapia y terapia manual"
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300  "
                              />
                        </div>
                        <div className="flex gap-8 mt-5 pt-4 border-t border-border-25">
                              <p className=" font-crimsonText text-sm font-semibold text-accent">
                                    02
                              </p>
                              <div className="flex flex-col gap-3 ">
                                    <TextElement variant={"heading-md"} as={"h3"}>
                                          Entrenamiento personal
                                    </TextElement>
                                    <TextElement variant={"text"} className="max-w-80" as={"h3"}>
                                          Programas individuales para ganar fuerza, movilidad y prevenir
                                          lesiones.
                                    </TextElement>
                                    <div className=" flex items-center text-accent ">
                                          <Link
                                                className="  text-[11px] font-semibold uppercase "
                                                href={""}
                                          >
                                                ver tratamiento{" "}
                                          </Link>
                                          <div className=" group-hover:translate-x-1.5 transition-transform duration-300 ">
                                                <BsArrowRightShort size={18} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

                  <section className="lg:col-start-2 lg:col-end-5 lg:justify-self-end  w-full  sm:w-115 lg:w-3/4 group">
                        <div className="relative z-20 h-60 lg:h-90 overflow-hidden">
                              <Image
                                    src="/images/image_service_04.webp"
                                    alt="Sesión de fisioterapia y terapia manual"
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300  "
                              />
                        </div>
                        <div className="flex gap-8 mt-5 pt-4 border-t border-border-25">
                              <p className=" font-crimsonText text-sm font-semibold text-accent">
                                    01
                              </p>
                              <div className="flex flex-col gap-3 ">
                                    <TextElement variant={"heading-md"} as={"h3"}>
                                          Fisioterapia y terapia manual
                                    </TextElement>
                                    <TextElement variant={"text"} as={"h3"} className="max-w-80">
                                          Valoración y tratamiento manual para aliviar el dolor y recuperar
                                          la movilidad.
                                    </TextElement>
                                    <div className=" flex items-center text-accent ">
                                          <Link
                                                className="  text-[11px] font-semibold uppercase "
                                                href={""}
                                          >
                                                ver tratamiento{" "}
                                          </Link>
                                          <div className=" group-hover:translate-x-1.5 transition-transform duration-300 ">
                                                <BsArrowRightShort size={18} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default CardWorkSection;
