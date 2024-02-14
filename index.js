import express from 'express';
import { Person} from './person.js'

const app = express();
const router = express.Router();
const port = +process.env.PORT || 4000

app.use(
    express.json(),
    router
    );


    router.get('^/$|/class', (req, res) => {
        res.json({
            status: res.statusCode,
            msg: 'you\'re home'
        })
    })

    router.get('/person1', (req, res) => {
        let person1 = new Person()
           person1.firstName = "Shawn"
            person1.LastName = "Louw"
            person1.Age = 23
            person1.Display()
            res.send('please check the console')
    })
    router.get('/person2', (req, res) => {
        let person2 = new Person()
        person2.FirstName = "Rethabile"
        person2.LastName = "Makaotsi"
        person2.Age = 45
            person2.Display()
            res.send('please check the console')
    })

    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`);
    })