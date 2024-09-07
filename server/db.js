import { createPool } from 'mysql2/promise';

export const pool = createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',  // Usuario predeterminado de MySQL en XAMPP
    password: '',  // Contraseña predeterminada para root es vacía en XAMPP
    database: 'tasksdb'
});
