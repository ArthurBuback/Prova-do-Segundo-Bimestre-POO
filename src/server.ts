import express from 'express';
import MainRouter from './routes/MainRoutes';
import UsuarioRouter from './routes/UsuarioRoutes';
import LeilaoRouter from './routes/LeilaoRoutes';
import LanceRouter from './routes/LanceRoutes';

const app = express();
app.use(express.json());

app.use(MainRouter);
app.use(UsuarioRouter);
app.use(LeilaoRouter);
app.use(LanceRouter);

app.listen(3000, function(){
    console.log("Server running on port 3000");
})