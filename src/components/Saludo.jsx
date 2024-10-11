const Saludo = ({ idioma }) => {
  const language =
    idioma === "en" ? "Hello World" : idioma === "es" ? "Hola Mundo" : "短语";

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-950">
      <div className="space-y-5">
        <h1 className="text-white font-bold text-3xl">{language}</h1>
      </div>
    </div>
  );
};

export default Saludo;
