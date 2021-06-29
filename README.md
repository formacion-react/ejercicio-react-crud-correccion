# Ejercicio CRUD

Crea con React un listado CRUD de tipos de gatos. La aplicación debe mostrar el listado y:

- en cada item debe haber una opción de borrar
- tiene que haber un formulario para crear un item
- al hacer clic en un item, debe aparecer un formulario para modificar el item
- si la API devuelve un error, tiene que aparecer el mensaje de error
- mientras se espera la respuesta de la API, tiene que aparecer el spinner

Usa la API local tipos-gatos para este ejercicio, con la que podrás comunicarte así:

GET http://localhost:3001/tipos/ <- devuelve el listado de tipos

DELETE http://localhost:3001/tipos/3 <- borra el tipo con id 3

PUT http://localhost:3001/tipos/3 <- modifica el tipo con id 3 (hay que mandarle el tipo modificado en el body)

POST http://localhost:3001/tipos/ -> crea un tipo (hay que mandarle el nuevo tipo en el body)

La API se levanta con `npm start`, y si quieres que responda con delay, se levanta con `npm start -- --delay 2000`
