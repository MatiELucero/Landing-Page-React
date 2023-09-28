const Proyectos = () => {
  return (
    <div className="bg-slate-200 h-[160vh] md:h-full px-6 md:p-4">
      <div className=" text-texto font-ptsans text-center text-xl xl:text-3xl py-2">
        Estos son algunos de nuestros mejores trabajos realizados para nuestros
        clientes.
      </div>
      <div className="px-2 py-2 xl:py-4 xl:px-60 md:h-[100vh] md:grid grid-cols-2 grid-rows-2 xl:gap-16">
        <div className="shadow-[12px_10px_7px_0px_rgba(0,0,0,0.2)] md:shadow-[20px_20px_7px_0px_rgba(0,0,0,0.2)] md:pl-2">
          <div className="h-[80%]">
            <img
              className="h-full w-full"
              src="/src/img/imagen_trinity.png"
            ></img>
          </div>
          <div className="bg-white flex justify-start items-center h-[20%] text-xl font-ptsans px-6">
            <span>
              <strong>Trinity Houses - Branding</strong> <br />
              Estados Unidos
            </span>
          </div>
        </div>
        <div className="shadow-[12px_10px_7px_0px_rgba(0,0,0,0.2)] md:shadow-[20px_20px_7px_0px_rgba(0,0,0,0.2)] pt-3 md:pt-0 md:pl-2">
          <div className="h-[80%]">
            <img
              className="h-full w-full"
              src="/src/img/imagen_brig.png"
            ></img>
          </div>
          <div className="bg-white flex justify-start items-center h-[20%] text-xl font-ptsans px-6">
            <span>
              <strong>Bright Next - Branding</strong> <br />
              Estados Unidos
            </span>
          </div>
        </div>
        <div className="shadow-[12px_10px_7px_0px_rgba(0,0,0,0.2)] md:shadow-[20px_20px_7px_0px_rgba(0,0,0,0.2)] pt-3 md:pl-2">
          <div className="h-[80%]">
            <img
              className="h-full w-full"
              src="/src/img/imagen_master_house.png"
            ></img>
          </div>
          <div className="bg-white flex justify-start items-center h-[20%] text-xl font-ptsans px-6">
            <span>
              <strong>Master House - Redes Sociales</strong> <br />
              Argentina
            </span>
          </div>
        </div>
        <div className="shadow-[12px_10px_7px_0px_rgba(0,0,0,0.2)] md:shadow-[20px_20px_7px_0px_rgba(0,0,0,0.2)] pt-3 md:pl-2">
          <div className="h-[80%]">
            <img
              className="h-full w-full"
              src="/src/img/imagen_beFit.png"
            ></img>
          </div>
          <div className="bg-white flex justify-start items-center h-[20%] text-xl font-ptsans px-6">
            <span>
              <strong>Be Fit - Redes Sociales</strong> <br />
              Argentina
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
