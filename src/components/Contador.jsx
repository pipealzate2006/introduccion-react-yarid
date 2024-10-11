import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-700 space-y-2">
      <p className="font-bold text-white text-3xl">{contador}</p>
      <button
        className="bg-blue-600 text-white p-2 rounded-lg font-bold hover:bg-blue-700"
        onClick={() => setContador(contador + 1)}
      >
        Incrementar
      </button>
      <button
        className="bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-lg p-2"
        onClick={() => setContador(0)}
      >
        Resetear
      </button>
    </div>
  );
};

export default Contador;
