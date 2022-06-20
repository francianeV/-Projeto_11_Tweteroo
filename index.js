import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); 
app.use(express.json());

const user = [{username:'Vovó Juju', 
              avatar:'https://pbs.twimg.com/media/FEfsN-aWYAUt3_H.jpg'}];


const tweets = [{username: "Vovó Juju",
                avatar:'https://pbs.twimg.com/media/FEfsN-aWYAUt3_H.jpg',
                tweet:"Abacate é tudo de bom 🥑"}]

app.post("/sign-up", (req, res) => {
    user.push(req.body);
    res.send("OK");            
});


app.post("/tweets", (req, res) => {
    const name = req.body.username;
    let currentUser = user.find(e => e.username === name);
    tweets.push({
        username: name,
        avatar: currentUser.avatar,
        tweet: req.body.tweet
    })
    res.send("OK");
});


app.get('/tweets', (req, res) => {
    const recentTweets = tweets.slice(-10);
    res.send(recentTweets);
});

            
app.listen(5000);

