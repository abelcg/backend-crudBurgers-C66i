import jwt from 'jsonwebtoken';

const validateJWT = (req, res, next) => {
  //recibir el token enviado en header de la request

  const token = req.header('x-access-token');
  if (!token) {
    //error 401 es error de autentificación
    res.status(401).json({ message: 'Need to send a token in the request' });
  }
  //si existe token
  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    req.id = payload.uid;
    req.name = payload.userName;
  } catch {
    res
      .status(401)
      .json({ message: 'invalid token - authentification failed' });
  }
  next();
};


export default validateJWT;
