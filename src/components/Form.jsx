import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

    const refForm = useRef();
    
    const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_401cuet"
    const templateId = "template_bs5utwm"
    const publicKey = "QH7-3V4RuM5CsDTYT"

    emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return <div id='contacto' className='h-[100vh] md:h-[120vh] xl:h-[100vh] bg-nav_footer'>
        <form ref={refForm} onSubmit={sendEmail}>
            <div className='flex justify-center items-center h-[10vh] md:h-[25vh] xl:h-[20vh] bg-slate-200'>
                <span className=" text-texto font-semibold font-brice text-movil md:text-[100px] xl:text-[110px] leading-[5rem]">Contacto</span>
            </div>
            <div className='bg-nav_footer h-[90vh] xl:h-[80vh] flex justify-center items-center md:px-10 xl:px-12'>
                <div className='bg-nav_footer h-[90vh] xl:h-[80vh] w-[100vw] xl:w-[80vw]'>
                    <div className='xl:grid grid-cols-2 w-[100%] h-[50%] xl:h-[35%]'>
                        <div className='h-[25vh] bg-nav_footer px-6 py-10 xl:px-10 xl:py-28'>
                            <h1 className='xl:px-10 h-[6vh] font-ptsans text-2xl'>Nombre/Empresa:</h1>
                            <input className='rounded-2xl w-full py-3 xl:py-3' type="text" name="user_name" placeholder='Ingresa tu nombre'/>
                        </div>
                        <div className='h-[25vh] bg-nav_footer px-6 xl:px-10 xl:py-28'>
                            <h1 className='xl:px-10 h-[6vh] font-brice text-2xl'>E-mail</h1>
                            <input className='rounded-2xl w-full py-3 xl:py-3' type="email" name="user_email" placeholder='ingresa tu email'/>
                        </div>
                    </div>
                    
                    <div className='bg-nav_footer h-[35%] xl:h-[35%] px-6 xl:px-10 xl:py-5'>
                        <h1 className='xl:px-10 h-[6vh] font-brice text-2xl'>Mensaje</h1>
                        <input className='rounded-2xl w-full xl:py-24 py-16' type='text' name="message" /><br/>
                    </div>
                    <div className='px-6 py-5 xl:px-10 xl:py-20 font-brice text-2xl h-[15%] xl:h-[10%]'>
                        <button className='rounded-full border-2 w-[150px] bg-fondo_botones' type="submit" value='Send'>Enviar</button>
                    </div>
                    
                </div>
                
                
            </div>   
        </form>
    </div>
}

export default Form