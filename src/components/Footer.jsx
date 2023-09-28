import { RiInstagramLine, RiFacebookCircleLine, RiPhoneLine } from 'react-icons/ri'

const Footer = () => {
    return <div className="xl:px-5 xl:py-4 h-[25vh] md:h-[25vh] bg-texto">
        <div className="md:grid md:grid-cols-3 md:px-20 xl:px-40 md:gap-3 xl:gap-4 md:h-full bg-texto">
            <div className="bg-texto md:h-[100%] grid grid-cols-2 gap-2 md:gap-4 xl:gap-3 md:grid-cols-1 xl:grid-cols-1">
                <div className=" bg-texto px-3 py-4 xl:h-full xl:w-full">
                    <div className='xl:h-[50%] xl:w-full pt-5'>
                        <span className='flex justify-center items-end xl:h-full xl:text-2xl xl:font-ptsans text-white'>Seguinos</span>
                    </div>
                    <div className='flex justify-center items-start xl:h-[50%]'>
                        <a href='https://www.instagram.com/pardimkt/' target='blank' className='text-white text-xl px-1 xl:text-3xl xl:px-2 transition ease-in-out delay-150 bg-texto hover:-translate-y-1 hover:scale-110 hover:bg-texto duration-300'><RiInstagramLine /></a>
                        <a href='https://www.facebook.com/profile.php?id=100093444108196&locale=es_LA' target='blank' className='text-white text-xl px-1 xl:text-3xl xl:px-2 transition ease-in-out delay-150 bg-texto hover:-translate-y-1 hover:scale-110 hover:bg-texto duration-300'><RiFacebookCircleLine /></a>
                        <a href='+54 351 268-8699' className='text-white text-xl px-1 xl:text-3xl xl:px-2 transition ease-in-out delay-150 bg-texto hover:-translate-y-1 hover:scale-110 hover:bg-texto duration-300'><RiPhoneLine /></a>
                    </div>
                </div>
                <div className='bg-texto h-full md:hidden px-3 py-4'>
                    <img src='/src/img/imagen_footer.png'></img>
                </div>
            </div>
            
            <div className="bg-texto md:h-[100%] grid grid-cols-2 gap-2 md:gap-0 md:grid-cols-1 xl:h-[100%]">
                <div className='px-2 flex justify-center items-center md:flex md:justify-center md:text-center h-[100%] md:h-[50%] xl:h-[100%]'>
                    <img src='/src/img/logo2.png' className='h-16 md:object-cover md:h-16 xl:h-32'></img>
                </div>
                <div className='px-2 flex justify-center items-center md:flex md:place-items-end md:justify-center md:h-[50%] xl:h-[50%]'>
                    <span className=' text-white font-ptsans'>Pardi Marketing 2023. Todos los derechos reservados.</span>
                </div>
            </div>

            <div className="bg-texto md:h-[20vh] px-3 py-2">
                <div className='px-7 flex justify-center items-center md:flex md:items-center md:justify-center md:h-full md:w-full'>
                    <img src='/src/img/Imagen-Footer.png' className='h-24 md:h-40 md:w-70'></img>
                </div>
            </div>
        </div>

    </div>
}

export default Footer