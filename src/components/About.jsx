const About = () => {
  return (
    <div id="nosotros" className="flex bg-texto h-[40vh] md:h-[40vh]">
      <div className="flex w-[45%] justify-center items-center p-1">
        <img className="w-[500px]" src="/src/img/Logo-2.png"></img>
      </div>
      <div className="flex w-[55%] justify-center items-center p-4 md:p-14">
        <h1 className="text-white font-ptsans text-base md:text-xl">
          Creamos la imagen visual de tu marca, gestionamos e impulsamos tus
          redes sociales para que impacten en el mundo digital y creamos tu
          sitio web para potenciar tu presencia en línea.
        </h1>
      </div>
    </div>
  );
};

export default About;
