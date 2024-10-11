const Saludo = ({ idioma, react }) => {
  const language =
    idioma === "en"
      ? "!Welcome to"
      : idioma === "es"
      ? "!Bienvenido a"
      : "!欢迎来到";

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-950">
      <div className="space-y-5">
        <h1 className="text-white font-bold text-3xl">
          {language} {react}
        </h1>
      </div>
    </div>
  );
};

export default Saludo;
