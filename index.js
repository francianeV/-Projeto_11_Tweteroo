
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); 
app.use(express.json());

const user = [{username: "teste", 
              avatar: "https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg?w=2000"}];


const tweets = [{username: "teste"},
                {tweet:"só testanto"}]

app.post("/sign-up", (req, res) => {
    user.push(req.body);
    res.send("OK");            
});

app.post("/tweets", (req, res) => {
    tweets.push(req.body);
    res.send("OK");
});
            
app.listen(5000);

