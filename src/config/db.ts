import { Sequelize } from "sequelize-typescript";
import { Clientes, Perras } from "../models";

const sequelizeStart: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username:'root',
    password: '',
    database: 'logistic_perras_database',
    models: [Perras, Clientes]
})

// Sincroniza los modelos con la base de datos
// sequelizeStart.sync({ alter: true }) // Usar `alter: true` para ajustar la base de datos al esquema de modelos
//     .then(() => {
//         console.log('Database & tables created or updated!');
//     })
//     .catch((error) => {
//         console.error('Error syncing database:', error);
// });

export default sequelizeStart