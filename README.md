# 1. Componentes de clase y Funcionales

## ¿Cuál es la diferencia entre un componente UI y un componente funcional en React?

### Respusta

Un componente UI son los componentes que contienen HTML y CSS, que se encargan de darle estilo a la interfaz que va a visualizar el usuario, es decir que solo contiene elementos visuales y ningun tipo de logica.

Mientras que los componentes funcionales nos sirven para crear logica y aplicarla a otros componentes (Reutilizar), como hacer llamados a un API.

# 2. Props

## ¿Qué son las props en React y cuál es su propósito principal?

### Respuesta

Las props son la colección de datos que un componente recibe del contenedor padre, y que pueden usarse para definir los elementos de React que retornará el componente. En términos prácticos, si un componente necesita recibir información para funcionar, la puede recibir vía props, como pasarle un arreglo o un objeto para mostrar en ese componente hijo.

# 3. Children Props

## ¿Qué son los children props en React y por qué no se recomienda su uso excesivo?

### Respuesta

Las props children en React son un tipo de props especial que se pasa a los componentes, y en esa prop se puede poner elementos que envuelve todo el componente, como parrafos, titulos, imagenes, etc.

```js
<Contenedor>
  <p>Este es el contenedor</p>
</Contenedor>;

const Contenedor = ({ children }) => {
  return (
    <div className="flex justify-center items-center min-h-screen text-3xl font-bold text-white bg-blue-950">
      <p className="border-2 border-white p-3">{children}</p>
    </div>
  );
};

export default Contenedor;

en el parrafo que tiene el componente Contenedor se va a redireccionar el texto "Este es el contenedor", ya que se paso por las props children
```

El uso excesivo de las props children puede hacer que el codigo sea más dificil de leer, ya que el contenido pasado no es claro en el componente

# 4. useState

## ¿Qué es useState en React y para qué se utiliza principalmente?

### Respuesta

Es una funcion que crea internamente una variable donde podremos almacenar el estado de nuestro componente. Acepta un valor iniciar para esa variable y devuelve un array con dos elementos, el valor de la variable y la funcion para actualizar esa variable

```js
const [contador, setContador] = useState(0);

<div className="flex flex-col justify-center items-center min-h-screen bg-gray-700 space-y-2">
      <p className="font-bold text-white text-3xl">{contador}</p>
      <button
        className="bg-blue-600 text-white p-2 rounded-lg font-bold hover:bg-blue-700"
        onClick={() => setContador(contador + 1)}
      >
        Incrementar
      </button>
      <button
        className="bg-yellow-600 text-white font-bold rounded-lg p-2"
        onClick={() => setContador(0)}
      >
        Resetear
      </button>
```

Se usa principalmente para manejar el estado de los componentes como lo dice su nombre, por ejemplo en el codigo de arria se usa para inicializar la variable con el valor 0, y despues en el boton de incrementar se usa la funcion "setContador" para actualizar su estado, en este caso se incrementa en 1 cada vez que se hace click en el boton, y ya con el boton de resetear cuando se hace click, actualiza su estado con el valor inicial que es 0.
# introduccion-react-yarid
