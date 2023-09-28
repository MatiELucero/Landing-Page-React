const Hero = () => {
  return (
    <div className="bg-[url('/src/img/imagen_fondo.jpeg')] bg-cover bg-bottom h-[90vh] p-4">
      <div className="flex justify-center h-[50%] md:h-[50%] items-end">
        <span className="text-fondo_botones text-4xl md:text-6xl/[128px] xl:text-5xl font-brice md:tracking-widest">
          diseño
        </span>
      </div>
      <div className="flex justify-center">
        <span className="text-fondo_botones text-4xl md:text-6xl/[128px] font-brice xl:leading-[4rem] md:tracking-widest">
          y tecnologia
        </span>
      </div>
    </div>
  );
};

export default Hero;