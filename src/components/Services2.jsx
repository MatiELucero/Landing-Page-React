const Services2 = () => {
  return (
    <div className="h-[250vh] md:h-[90vh] xl:h-[70vh] w-full md:grid grid-cols-3 md:grid-cols-6 xl:px-9 bg-fondo_servicio">
      <div className="bg-fondo_servicio col-start-1 col-end-3 h-[50vh] md:h-[35vh] xl:px-9">
        <div className="text-texto font-ptsans text-2xl flex items-center h-[15%] md:h-[30%] px-7 md:p-1 xl:px-10">
          <span className="flex justify-center items-center rounded-full bg-fondo_botones w-full md:text-center md:text-[17px] xl:text-2xl md:h-[45px]">
            Redes Sociales
          </span>
        </div>
        <div className="text-texto font-ptsans text-xl flex items-center px-10 py-7 xl:py-1 xl:px-10">
          <span>
            Impulsamos tu marca, interactuamos con tu audiencia y creamos
            contenido atractivo, mientras tú te concentras en hacer crecer tu
            negocio.
          </span>
        </div>
      </div>
      <div className="bg-fondo_servicio col-start-3 col-end-5 h-[50vh] md:h-[35vh] xl:px-9">
        <div className="text-texto font-ptsans text-2xl flex items-center h-[15%] md:h-[30%] px-7 md:p-1 xl:px-10">
          <span className="flex justify-center items-center rounded-full bg-fondo_botones w-full md:text-center md:text-[17px] xl:text-2xl md:h-[45px]">
            Desarrollo Web
          </span>
        </div>
        <div className="text-texto font-ptsans text-xl flex items-center px-10 py-7 xl:py-1 xl:px-10">
          <span>
            Creamos soluciones web que destacan y generan resultados,
            potenciando tu presencia en internet y generamos interacciones con el cliente.
          </span>
        </div>
      </div>
      <div className="bg-fondo_servicio col-start-5 col-end-7 h-[50vh] md:h-[35vh] xl:px-9">
        <div className="text-texto font-ptsans text-2xl flex items-center h-[15%] md:h-[30%] px-7 md:p-1 xl:px-10">
          <span className="flex justify-center items-center rounded-full bg-fondo_botones w-full md:text-center md:text-[17px] xl:text-2xl md:h-[45px]">
            Producción Audiovisual
          </span>
        </div>
        <div className="text-texto font-ptsans text-xl flex items-center px-10 py-7 xl:py-1 xl:px-10">
          <span>
            Elevamos la calidad y el atractivo de tu contenido, generando
            imagenes y videos reales de tus productos o servicios.
          </span>
        </div>
      </div>
      <div className="bg-fondo_servicio col-start-1 col-end-4 h-[50vh] md:h-[35vh] xl:px-9">
        <div className="text-texto font-ptsans text-2xl flex items-center h-[15%] md:h-[30%] px-7 md:p-1 xl:px-36">
          <span className="flex justify-center items-center rounded-full bg-fondo_botones w-full md:text-center md:text-[17px] xl:text-2xl md:h-[45px]">
            Branding
          </span>
        </div>
        <div className="text-texto font-ptsans text-xl flex items-center px-10 py-7 xl:py-1 xl:px-36">
          <span>
            Construiremos tu imagen de marca con colores, tipografías y
            elementos visuales coherentes que reflejen un mayor impacto visual.
          </span>
        </div>
      </div>
      <div className="bg-fondo_servicio col-start-4 col-end-7 h-[50vh] md:h-[35vh] xl:px-9">
        <div className="text-texto font-ptsans text-2xl flex items-center h-[15%] md:h-[30%] px-7 md:p-1 xl:px-36">
          <span className="flex justify-center items-center rounded-full bg-fondo_botones w-full md:h-[45px] xl:text-2xl md:text-[17px]">
            Google Ads
          </span>
        </div>
        <div className="text-texto font-ptsans text-xl flex items-center px-10 py-7 xl:py-1 xl:px-36">
          <span>
            Maximizamos tu presencia en línea y alcanzamos a tu audiencia ideal
            generando mayor interés en tu negocio con Google Ads.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services2;
