const Contenedor = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen text-3xl font-bold text-white bg-blue-950">
      <p className="border-2 border-white p-3">{children}</p>
    </div>
  );
};

export default Contenedor;
