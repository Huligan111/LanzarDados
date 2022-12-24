        /***
        * @author Gancho <email>
        *
        * DADOS:
        * Escribe un script que simule el lanzamiento de dos dados de 6 caras
        *  tantas veces como se indique, sume el par resultante de cada lanzamiento,
        *  anote en un objeto clave-valor el número de veces que se da cada posible
        *  suma e imprima en la página el contenido del objeto.
        * 
        * Para completar este ejercicio debes:
        * - Enmarcar las instrucciones en funciones. 
        * - Utilizar, al menos, una función declarativa, una función flecha (con sentido) y paso de valores por parámetro en alguna función.
        * - Tener en cuenta que la suma de dos dados dará un número entre 2 y 12 y que algunas sumas se pueden obtener con diferentes valores, pero sigue siendo la misma suma. 
        * - Imprimir el objeto resultante tras 10.000 lanzamientos.
        *
        * EJEMPLO:
        * Sumas de 20 lanzamiento de dos dados:
        * 2: 3 veces
        * 3: 4 veces
        * ...
        * 12: 2 veces
        * 
        * (Puede imprimirlo como prefieras, pero que se vea la clave y el valor.)
        */

        //Función flecha que genera números aleatorios
        const simuladorDados = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        const patron = /^[0-9]+/; //patron que acepta uno o varios números

        //Función anónima recursiva que pide datos por teclado
        const cantidadL = function () {
            let dato = prompt("Por favor inserte la cantidad de veces que quieres lanzar los datos", 10000); //recibimos el dato
            //Comprobamos con el patron si coincide (salimos de la función si coincide)
            if (patron.test(dato)) {
                return dato;
            }
            mensaje = "ATENCIÓN EL DATO INGRESADO NO ES VALIDO\n" + mensaje;
            return dato = pedirDatos(patron, mensaje); //si no coincide llamamos remisivamente la función (atrapamos el usuario hasta que coincide)
        }

        //Función principal
        function lanzarDados() {
            //Generamos la estructura Map con claves de 2 a 12 y iniciamos el contador de 0 de cada uno
            const cantidadLanzamientos = new Map([[2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]]);
            //Pedimos al usuario la cantidad de veces que desea lanzar los dados
            let veces = cantidadL();
            for (let i = 0; i < veces; i++) {
                //Generamos los dos números aleatorios y los sumamos
                let suma = simuladorDados(1, 6) + simuladorDados(1, 6);
                //Acumulamos la suma de los dos dados en cada vuelta de cada numero de 2 a 12
                cantidadLanzamientos.set(suma, cantidadLanzamientos.get(suma) + 1);
            }
            return cantidadLanzamientos;
        }
        //Mostramos los datos obtenidos por pantalla
        lanzarDados().forEach(function (value, key) { document.write(`<h2> ${key}:  ${value} veces</h2>`) });
