export default function validation(inputs){
    const errors = {};
    const regexName = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/i;
    const regexNumber =  /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
    const regex3 = /.{3,}/;

            //validacion name
            if (!regexName.test(inputs.name)) {
                errors.name = 'Debe ser un nombre'
            }
            if (!inputs.name) {
               errors.name = 'El nombre no puede estar vacio'}
           if (!regex3.test(inputs.name)) {
              errors.name = 'Debe tener mas de 3 caracteres'}
//validation lastName
            if (!regexName.test(inputs.lastName)) {
                errors.lastName = 'Debe ser un apellido'
            }
            if (!inputs.lastName) {
               errors.lastName = 'El apellido no puede estar vacio'}
               if (!regex3.test(inputs.lastName)) {
                errors.lastName = 'Debe tener mas de 3 caracteres'}
            
        //validation fecha de nacimiento 
        const fechaNacimientoObj = new Date(inputs.dob);
        const fechaActual = new Date();
    
        if (fechaNacimientoObj > fechaActual) {
          errors.dob= 'La fecha de nacimiento no puede estar en el futuro';
        }
        if(!inputs.dob)
        {errors.dob = 'La fecha no puede estar vacia';}
//validation nationality
if(!inputs.nationality)
{errors.nationality = 'Seleccione una nacionalidad';}
            
//validation description
const regexMasDeTresPalabras = /^(\S+\s+){3,}\S+$/i;
if(!regexMasDeTresPalabras.test(inputs.description))
{errors.description = 'La descripcion debe ser mas de tres palabras';}

//validation teams
const cadenaJSON = JSON.stringify(inputs.teams);
//const regexJSON = k;


return errors;
        }