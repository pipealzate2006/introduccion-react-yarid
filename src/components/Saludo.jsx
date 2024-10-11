const Saludo = ({ nombre, idioma }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-950">
      <div className="space-y-5">
        <h1 className="text-white font-bold text-3xl">{nombre}</h1>
        <h1 className="text-white font-bold text-3xl">{idioma}</h1>
      </div>
    </div>
  );
};

export default Saludo;
