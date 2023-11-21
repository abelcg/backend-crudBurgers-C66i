import jwt from 'jsonwebtoken';

const generateJWT = (uid, userName) => {
  //devolver una promesa
  return new Promise((resolve, reject) => {
    //resolve es para el caso satisfactorio y reject si falla

    //agreagar losd atos del payload
    const payload = { uid, userName };
    //firmamos el token
    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('Error generating token');
        }
        //si esta todo ok
        resolve(token);
      }
    );
  });
};

export default generateJWT;
