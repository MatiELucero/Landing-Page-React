const About = () => {
  return (
    <div id="nosotros" className="flex bg-texto h-[40vh] md:h-[40vh]">
      <div className="flex w-[40vw] justify-center items-center px-2 py-6">
        <img className="xl:w-[500px]" src="/src/img/Logo-2.png"></img>
      </div>
      <div className="flex w-[60vw] justify-center items-center px-2 py-3 md:p-14">
        <span className="text-white flex justify-center items-center font-ptsans text-base md:text-xl h-full w-full">
          Creamos la imagen visual de tu marca, gestionamos e impulsamos tus
          redes sociales para que impacten en el mundo digital y creamos tu
          sitio web para potenciar tu presencia en línea.
        </span>
      </div>
    </div>
  );
};

export default About;
