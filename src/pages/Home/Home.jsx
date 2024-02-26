import React, { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
    const [currentStep, setCurrentStep] = useState(1);
    const [userWR, setUserWR] = useState(false);
    const handleNextStep = () => {
        setCurrentStep(currentStep < 4 ? currentStep + 1 : currentStep);
    };

    const stepClassName = (step) => {
        return currentStep === step ? "stepLogin stepLoginActive" : "stepLogin";
    };

    const iconClassName = (step) => {
        return currentStep === step ? "step-styles-active" : "step-styles-done";
    };

    const textClassName = (step) => {
        return currentStep === step ? "activeStp" : "";
    };
    useEffect(() => {
        const audio = new Audio();
        audio.src = "/audio.mp3";
        audio.loop = true;
        audio.volume = 0.9;
        audio.autoplay = true; // Reproducción automática

        const playAudio = () => {
            audio
                .play()
                .then(() => {
                    console.log("Audio playing...");
                })
                .catch((error) => {
                    console.error("Audio play error:", error);
                });
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                audio.pause();
            } else {
                playAudio();
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        playAudio();

        return () => {
            audio.pause();
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return (
        <>
            {userWR === "tyc" ? (
                <>
                    <main className="background-main">
                        <section
                            className="terms"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: "1",
                                maxHeight: "80%",
                                maxWidth: "80%",
                                padding: '2rem 1rem',
                                backgroundColor: "var(--color1)",
                                borderColor: "rgba(83, 83, 83, 0.671)",
                                border: "2px solid rgba(83, 83, 83, 0.671)",
                                borderRadius: "25px",
                                margin: "auto",
                                alignItems: "left",
                                fontFamily: "arial"
                            }}
                        >
                            <h2>Terminos de Uso</h2>
                            <h3>
                                Bienvenido a TushySonic. Al acceder y utilizar nuestro sitio web, usted
                                acepta cumplir con los siguientes términos y condiciones:
                            </h3>

                            <h2>Contenido para Adultos</h2>
                            <h3>
                                TushySonic es un sitio web que ofrece contenido exclusivo para adultos. Al
                                ingresar a nuestro sitio, usted confirma que es mayor de edad en su
                                jurisdicción y tiene derecho legal para acceder a este tipo de contenido.
                            </h3>

                            <h2>Propiedad Intelectual</h2>
                            <h3>
                                Todo el contenido, incluyendo pero no limitado a imágenes, videos, texto y
                                logotipos, en este sitio web es propiedad exclusiva de TushySonic y está
                                protegido por las leyes de propiedad intelectual.
                            </h3>

                            <h2>Uso del Sitio</h2>
                            <h3>
                                Usted acepta utilizar nuestro sitio web de manera responsable y legal. No
                                está permitido copiar, distribuir o modificar cualquier contenido sin
                                autorización. Además, se compromete a no utilizar nuestro sitio para
                                actividades ilegales o que violen los derechos de otros.
                            </h3>

                            <h2>Limitación de Responsabilidad</h2>
                            <h3>
                                TushySonic no se hace responsable de cualquier daño o perjuicio derivado
                                del uso o la imposibilidad de utilizar nuestro sitio web. Todo el contenido
                                se proporciona "tal cual" sin garantías de ningún tipo.
                            </h3>

                            <h2>Enlaces Externos</h2>
                            <h3>
                                Nuestro sitio web puede contener enlaces a sitios de terceros. TushySonic no
                                tiene control sobre el contenido o las políticas de privacidad de estos
                                sitios, por lo que no asume responsabilidad por ellos.
                            </h3>

                            <h2>Modificaciones</h2>
                            <h3>
                                Nos reservamos el derecho de modificar estos Términos de Uso en cualquier
                                momento sin previo aviso. Le recomendamos que revise periódicamente esta
                                página para estar al tanto de cualquier cambio.
                            </h3>

                            <h2>Aceptación de Términos</h2>
                            <h3>
                                Al utilizar nuestro sitio web, usted acepta estos Términos de Uso en su
                                totalidad. Si no está de acuerdo con alguno de estos términos, le
                                recomendamos que no utilice nuestro sitio.
                            </h3>

                            <h2>Contacto</h2>
                            <h3>
                                Si tiene alguna pregunta o inquietud sobre nuestros Términos de Uso, no dude
                                en ponerse en contacto con nosotros a través de tushysonic@gmail.com
                            </h3>
                            <button style={{ padding: '8px', width: '320px', borderRadius: '10px', fontSize: '12px', fontFamily: "arial", paddingTop: '1rem', marginTop: '20px' }} onClick={() => setUserWR(false)}>Volver al menú principal</button>
                        </section>
                    </main>
                </>
            ) : userWR === "pp" ? (
                <>
                    <main className="background-main">
                        <section
                            className="terms"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: "1",
                                maxHeight: "80%",
                                maxWidth: "80%",
                                padding: '2rem 1rem',
                                backgroundColor: "var(--color1)",
                                borderColor: "rgba(83, 83, 83, 0.671)",
                                border: "2px solid rgba(83, 83, 83, 0.671)",
                                borderRadius: "25px",
                                margin: "auto",
                                alignItems: "left",
                                fontFamily: "arial"
                            }}
                        >
                            <h2>Politica de Privacidad</h2>
                            <h3>
                                En TushySonic, la privacidad y seguridad de nuestros usuarios son de suma
                                importancia. Esta Política de Privacidad describe cómo recopilamos, usamos y
                                protegemos la información personal que usted proporciona mientras utiliza
                                nuestro sitio web.
                            </h3>

                            <h2>Información Recopilada</h2>
                            <h3>
                                Al visitar nuestro sitio web, podemos recopilar cierta información
                                automáticamente, como su dirección IP, tipo de navegador, páginas visitadas
                                y la hora y fecha de su visita. También recopilamos información que usted
                                nos proporciona voluntariamente al registrarse para obtener una cuenta o
                                suscribirse a nuestro contenido.
                            </h3>

                            <h2>Uso de la Información</h2>
                            <h3>
                                Utilizamos la información recopilada para personalizar su experiencia en
                                nuestro sitio, brindarle acceso al contenido exclusivo, mejorar nuestros
                                servicios y comunicarnos con usted sobre novedades, ofertas especiales y
                                actualizaciones.
                            </h3>

                            <h2>Protección de Datos</h2>
                            <h3>
                                Nos comprometemos a proteger la información personal de nuestros usuarios.
                                Implementamos medidas de seguridad físicas, electrónicas y administrativas
                                para prevenir el acceso no autorizado, el uso indebido o la divulgación de
                                la información que recopilamos.
                            </h3>

                            <h2>Compartir Información</h2>
                            <h3>
                                No compartimos su información personal con terceros sin su consentimiento, a
                                menos que sea necesario para proporcionarle los servicios solicitados o
                                exigido por la ley.
                            </h3>

                            <h2>Consentimiento</h2>
                            <h3>
                                Al utilizar nuestro sitio web, usted acepta esta Política de Privacidad y
                                el procesamiento de su información personal de acuerdo con lo establecido
                                aquí.
                            </h3>

                            <h2>Contacto</h2>
                            <h3>
                                Si tiene alguna pregunta o inquietud sobre nuestra Política de Privacidad, no
                                dude en ponerse en contacto con nosotros a través de tushysonic@gmail.com
                            </h3>
                            <button style={{ padding: '8px', width: '320px', borderRadius: '10px', fontSize: '12px', fontFamily: "arial", paddingTop: '1rem', marginTop: '20px' }} onClick={() => setUserWR(false)}>Volver al menú principal</button>
                        </section>
                    </main>
                </>
            ) : (
                /* Este es el fondo del registro */
                <main className="background-main">
                    {/* Esto es un card central que incluye dos columnas con más hijos */}
                    <section style={{ marginTop: "3rem" }} className="login-section-card">
                        {/* Esto es una de las columnas hijo, en este caso son los steps para iniciar sesion */}
                        <div className="steps-login-column">
                            <picture
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginBottom: "2rem",
                                }}
                            >
                                <h2>Sonic World</h2>
                            </picture>
                            {/* Estos son los steps */}
                            {[1, 2].map((step) => (
                                <div key={step} className={stepClassName(step)}>
                                    <div className="step-styles">
                                        <h2 className={iconClassName(step)}></h2>
                                    </div>
                                    <div className="stepLogin-column-txt">
                                        <div className="step-styles">
                                            <h2 className={textClassName(step)}>Paso {step}</h2>
                                            {step === 1 && (
                                                <p className={textClassName(step)}>
                                                    Ingresar a Sonic World
                                                </p>
                                            )}
                                            {step === 2 && (
                                                <p className={textClassName(step)}>
                                                    Verificar tu cuenta
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <hr />

                        <div className="process-login-column">
                            {currentStep === 1 ? (
                                <div className="process-auth">
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            marginTop: "0",
                                        }}
                                    >
                                        <div style={{ height: "250px", width: "100%" }}>
                                            <img
                                                style={{
                                                    objectFit: "cover",
                                                    height: "60%",
                                                    width: "100%",
                                                    marginTop: "0",
                                                }}
                                                src="https://i.ibb.co/Sf3g6BK/Picsart-24-02-24-15-32-13-718.png"
                                                alt=""
                                            />
                                            <h2>Inicia Sesion en Sonny Network</h2>
                                        </div>
                                        <hr />
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "60%",
                                            textAlign: "center",
                                        }}
                                    >
                                        <p style={{ fontSize: "28px" }}>
                                            Tu nombre de usuario de Telegram
                                        </p>
                                        <input
                                            style={{
                                                width: "330px",
                                                fontFamily: "Dash-Horizon-Demo",
                                                fontSize: "26px",
                                                padding: "0px 0px 10px 0px",
                                                borderRadius: "5px",
                                                border: "1px solid rgb(142, 178, 255)",
                                                outline: "none",
                                                textAlign: "center",
                                                color: "rgb(142, 178, 255)",
                                                boxShadow: "0px 0px 10px 0px rgb(142, 178, 255)",
                                                backgroundColor: "rgb(0, 0, 0)",
                                            }}
                                            placeholder="@TushySonic."
                                            type="text"
                                        />
                                    </div>
                                    <br />
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            width: "100%",
                                            textAlign: "center",
                                        }}
                                    >
                                        <button onClick={() => setCurrentStep(2)}>Ingresar</button>
                                        <p style={{ fontSize: "22px" }}>
                                            Al ingresar, acepta los
                                            <span
                                                style={{
                                                    color: "rgb(142, 178, 255)",
                                                    fontSize: "24px",
                                                }}
                                                onClick={() => setUserWR("tyc")}
                                            >
                                                {" "}
                                                Terminos y Condiciones{" "}
                                            </span>
                                            y la
                                            <span
                                                style={{
                                                    color: "rgb(142, 178, 255)",
                                                    fontSize: "24px",
                                                }}
                                                onClick={() => setUserWR("pp")}
                                            >
                                                {" "}
                                                Política de Privacidad
                                            </span>
                                            .
                                        </p>
                                    </div>
                                </div>
                            ) : currentStep === 2 ? (
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: "15px",
                                        height: "100%",
                                    }}
                                >
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem", backgroundColor: "#272727", padding: "4rem" }}>
                                        <img style={{marginTop:'2rem', objectFit: "cover" , border: '2px solid black'}} height={"60%"} width={"100%"} src="https://i.ibb.co/q9PJ2KZ/Icon-7.jpg" alt="" />
                                        <h2 style={{fontSize:'25px',fontWeight:'normal',color:'white', margin:"0",fontFamily:'fantasy'}}>
                                            Verificá tu cuenta
                                        </h2>

                                        <Link to={"https://t.me/PurpleSonic_bot"}>
                                        <button style={{color:'white', margin:"0",fontFamily:'fantasy', backgroundColor:'black',fontWeight:'normal', letterSpacing:'0', border: '2px solid black', marginTop: "0",padding:'5px',fontSize:'22px',width:'220px'}}>@PurpleSonic_bot</button>
                                        
                                        </Link>
                                        
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </section>
                </main>
            )}
        </>
    );
}
