import 'reflect-metadata'
import express from 'express'
import sequelizeStart from './config/db'
import router from './routes/Router'
import cors from "cors";
import bodyParser from 'body-parser';
import path from "path";


const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/yeyoPerrasHouse/uploads', express.static(path.join(__dirname, 'public/uploads')));

const corsOptions = {
    origin: 'http://127.0.0.1:5500', 
    methods: ['GET', 'POST', 'PUT', 'DELETE',],
    allowedHeaders: ['Content-Type', 'Authorization'] 
};

app.use(cors(corsOptions));

app.use('/yeyoPerrasHouse', router)

const empiezaELChingoteo = async () => {
    try {
        await sequelizeStart.authenticate()
        console.log('Se prendio el yoyeteo');

        await sequelizeStart.sync()
        app.listen(3000, () => {
            console.log('Las perras estan escuchando en el port 3000');
        })
        
    } catch (err) {
        console.log('Las perras estan dormidas', err);
    }
}

empiezaELChingoteo()