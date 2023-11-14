import { validationResult } from 'express-validator';


const validationsResults = (req, res, next)=>{
    //validar
    const errors = validationResult(req);
    //preguntar i tengo errores
    if (!errors.isEmpty()) {
      res.send({ errors: errors.array() }); //deveulve la lista de errores
    }
    //le digo que continue con el flujo
    next()
}


export default validationsResults;
