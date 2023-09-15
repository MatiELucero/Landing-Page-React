const Hero = () => {
  return (
    <div className="bg-[url('/src/img/Imagen-Fondo.png')] bg-cover bg-bottom h-[90vh] p-4">
      <div className="flex justify-center h-[50%] md:h-[50%] items-end">
        <span className="text-fondo_botones text-movil md:text-6xl/[128px] font-brice ">
          diseño
        </span>
      </div>
      <div className="flex justify-center">
        <span className="text-fondo_botones text-movil md:text-6xl/[128px] font-brice">
          y tecnologia
        </span>
      </div>
    </div>
  );
};

export default Hero;