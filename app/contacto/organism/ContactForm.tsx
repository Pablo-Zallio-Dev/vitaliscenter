"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactFormValues } from "../type";
import TextElement from "@/app/components/atoms/TextElement";
import ButtonSecondary from "@/app/components/atoms/ButtonSecondary";

const ContactForm = () => {
      const {
            register,
            formState: { errors },
            handleSubmit,
            reset,
      } = useForm<ContactFormValues>();

      const [send, setSend] = useState(false);

      const onSubmit = (data: ContactFormValues) => {
            console.log(data);
            setSend(true);
           
            reset();
      };

      {
            if (!send) {
                  return (
                        <section className=" pb-8">
                              <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className=" flex flex-col gap-12 "
                              >
                                    <div className="  flex flex-col md:flex-row  gap-12 w-full ">
                                          <div className="flex flex-col gap-12 w-full">
                                                <div className=" relative flex flex-col ">
                                                      <label
                                                            htmlFor="nombre"
                                                            className=" font-catamaran text-xs text-text/75 uppercase tracking-widest "
                                                      >
                                                            01 . nombre
                                                      </label>
                                                      <input
                                                            id="nombre"
                                                            type="text"
                                                            className=" py-3 border-b border-border-25/50 placeholder:text-[15px] placeholder:text-text/50 focus:outline-none focus:border-accent transition-colors duration-200  "
                                                            placeholder="Tu nombre"
                                                            {...register("nombre", {
                                                                  required: "El nombre es obligatorio",
                                                                  maxLength: {
                                                                        value: 15,
                                                                        message: "Máximo 15 caracteres"
                                                                  }
                                                            })}
                                                      />
                                                      {errors.nombre && (
                                                            <p className="absolute -bottom-6 text-sm text-accent font-semibold ">{errors.nombre?.message}</p>
                                                      )}
                                                </div>
                                                <div className=" relative flex flex-col ">
                                                      <label
                                                            htmlFor="apellidos"
                                                            className=" font-catamaran text-xs text-text/75 uppercase tracking-widest "
                                                      >
                                                            02 . apellidos
                                                      </label>
                                                      <input
                                                            id="apellidos"
                                                            type="text"
                                                            className=" py-3 border-b border-border-25/50 placeholder:text-[15px] placeholder:text-text/50 focus:outline-none focus:border-accent transition-colors duration-200 "
                                                            placeholder="Tus apellidos"
                                                            {...register("apellidos", {
                                                                  required: "El apellido es obligatorio",
                                                                  maxLength: {
                                                                        value: 30,
                                                                        message: "Máximo 30 caracteres"
                                                                  }
                                                            })}
                                                      />
                                                      {errors.apellidos && (
                                                            <p className=" absolute -bottom-6 text-sm text-accent font-semibold ">
                                                                  {errors.apellidos?.message}
                                                            </p>
                                                      )}
                                                </div>
                                          </div>
                                          <div className="flex flex-col gap-12 w-full">
                                                <div className=" relative flex flex-col ">
                                                      <label
                                                            htmlFor="telefono"
                                                            className=" font-catamaran text-xs text-text/75 uppercase tracking-widest "
                                                      >
                                                            03 . telefono
                                                      </label>
                                                      <input
                                                            id="telefono"
                                                            type="tel"
                                                            className=" py-3 border-b border-border-25/50 placeholder:text-[15px] placeholder:text-text/50 focus:outline-none focus:border-accent transition-colors duration-200 "
                                                            placeholder="123 45 67 89"
                                                            {...register("telefono", {
                                                                  required: "El teléfono es obligatorio",
                                                                  pattern: {
                                                                        value: /^[0-9]+$/,
                                                                        message: "Solo se permiten números"
                                                                  }
                                                            })}
                                                      />
                                                      {errors.telefono && (
                                                            <p className=" absolute -bottom-6 text-sm text-accent font-semibold ">
                                                                  {" "}
                                                                  {errors.telefono?.message}{" "}
                                                            </p>
                                                      )}
                                                </div>
                                                <div className="relative flex flex-col ">
                                                      <label
                                                            htmlFor="email"
                                                            className=" font-catamaran text-xs text-text/75 uppercase tracking-widest "
                                                      >
                                                            04 . email
                                                      </label>
                                                      <input
                                                            id="email"
                                                            type="email"
                                                            className=" py-3 border-b border-border-25/50 placeholder:text-[15px] placeholder:text-text/50 focus:outline-none focus:border-accent transition-colors duration-200 "
                                                            placeholder="tucorreo@email.com"
                                                            {...register("email", {
                                                                  required: "El correo es obligatorio",
                                                                  pattern: {
                                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                        message: "El formato del correo no es válido",
                                                                  },
                                                            })}
                                                      />
                                                      {errors.email && (
                                                            <p className=" absolute -bottom-6 text-sm text-accent font-semibold ">
                                                                  {" "}
                                                                  {errors.email?.message}{" "}
                                                            </p>
                                                      )}
                                                </div>
                                          </div>
                                    </div>
                                    <div className=" relative flex flex-col ">
                                          <label
                                                htmlFor="mensaje"
                                                className=" font-catamaran text-xs text-text/75 uppercase tracking-widest "
                                          >
                                                05 . mensaje
                                          </label>
                                          <textarea
                                                id="mensaje"
                                                cols={30}
                                                rows={5}
                                                className=" py-3 border-b border-border-25/50 placeholder:text-[15px] placeholder:text-text/50 focus:outline-none focus:border-accent transition-colors duration-200 "
                                                placeholder="Cuéntanos brevemente qué te ocurre o qué servicio te interesa"
                                                {...register("mensaje", {
                                                      required: "El mensaje es obligatorio",
                                                      maxLength: {
                                                            value: 255,
                                                            message: "Máximo 255 caracteres"
                                                      }
                                                })}
                                          ></textarea>
                                          {errors.mensaje && (
                                                <p className=" absolute -bottom-6 text-sm text-accent font-semibold ">
                                                      {" "}
                                                      {errors.mensaje?.message}{" "}
                                                </p>
                                          )}
                                    </div>
                                    <div className="">
                                          <input
                                                type="submit"
                                                value="enviar consulta"
                                                className={` justify-center inline-flex py-4 px-8 bg-accent font-catamaran font-medium text-sm tracking-widest text-text-secondary uppercase lg:hover:brightness-105 transition-all duration-200  `}
                                          />
                                          <p className=" pt-3 text-xs text-text tracking-tighter ">
                                                Todos los campos son requeridos. Al enviar aceptas nuestra
                                                politica de privacidad
                                          </p>
                                    </div>
                              </form>
                        </section>
                  );
            } else {
                  return (
                        <section className=" pt-8 border-t border-border-25 ">
                              <TextElement variant={"heading-md"} as={"h3"}>
                                    ¡Gracias por escribirnos!
                              </TextElement>
                              <TextElement variant={"text"} as={"p"} className=" max-w-sm pt-4 " >
                                    Hemos recibido tu consulta y te responderemos lo antes posible. Si
                                    tienes prisa, escríbenos por WhatsApp.
                              </TextElement>
                              <button onClick={() => setSend(false)} className=" justify-center inline-flex py-4 px-8 mt-8 bg-accent font-catamaran font-medium text-sm tracking-widest text-text-secondary uppercase lg:hover:brightness-105 transition-all duration-200  ">
                                    Aceptar
                              </button>
                        </section>
                  );
            }
      }
};

export default ContactForm;
