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

    return <div id='contacto' className='h-[100vh]'>
        <form ref={refForm} onSubmit={sendEmail} className='h-full'>
            <div className='flex justify-center items-center h-[15vh] xl:h-[30vh] bg-slate-200'>
                <span className=" text-texto font-semibold font-brice text-movil md:text-[100px] xl:text-[110px] leading-[5rem]">Contacto</span>
            </div>
            <div className='bg-nav_footer h-[70vh] flex justify-center items-center px-12'>
                <div className='bg-nav_footer h-[65vh] w-[80vw]'>
                    <div className='grid grid-cols-2 w-[100%]'>
                        <div className='h-[25vh] bg-nav_footer px-10 py-16'>
                            <h1 className='px-10 h-[5vh] font-ptsans text-2xl'>Nombre/Empresa:</h1>
                            <input className='rounded-2xl w-full py-3' type="text" name="user_name" placeholder='Ingresa tu nombre'/>
                        </div>
                        <div className='h-[25vh] bg-nav_footer px-10 py-16'>
                            <h1 className='px-10 h-[5vh] font-brice text-2xl'>E-mail</h1>
                            <input className='rounded-2xl w-full py-3' type="email" name="user_email" placeholder='ingresa tu email'/>
                        </div>
                    </div>
                    
                    <div className='bg-nav_footer h-[25vh] px-10 py-10'>
                        <h1 className='px-10 h-[5vh] font-brice text-2xl'>Mensaje</h1>
                        <input className='rounded-2xl w-full py-12' type='text' name="message" /><br/>
                    </div>
                    <div className='px-10 py-10 font-brice text-2xl'>
                        <button className='rounded-full border-2 w-[150px] bg-fondo_botones' type="submit" value='Send'>Enviar</button>
                    </div>
                    
                </div>
                
                
            </div>   
        </form>
    </div>
}

export default Form