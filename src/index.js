import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database';
import router from './routes/products.routes';

//console.log('desde mi backend');

//crear instancia de express

const app = express();

//configurar un puerto

app.set('port', process.env.PORT || 4002);

app.listen(app.get('port'), () => {
    console.log('====================================');
    console.log('Estoy en el puerto ' + app.get('port'));
    console.log('====================================');
})


//middleware
app.use(morgan('dev')); //nosa da info de la consulta: tipo, status y tiempo de ejecución
app.use(cors()); //nos permite recibir peticiones remotas a nuestra API
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //Estos dos últimos nos permiten recibir e interpretar el json de la req

//app.use(express.static('public'));

app.use(express.static(path.join(__dirname, '../public')));

//rutas ejemplo

app.use('/api-v1', router)


/* 
app.get('/', (req, res) => {
    res.send('Esto es una prueba de un get desde mi backend')
})

app.delete('/borrarProducto', (req, res) => {
    res.send('El proucto fue borrado')
})
 */
