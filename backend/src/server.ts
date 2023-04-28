import cors from 'cors';
import express, { Request, Response } from 'express';
import helmet from 'helmet';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({origin: 'http://localhost:5173', credentials: true}))
app.use(helmet())


app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  //console.log(req.cookies); aparece como undefined
  console.log(req.rawHeaders[req.rawHeaders.length - 1]);
  
  console.log(getCookie('token', req))
  
  res.cookie('token', 'umtokenaleatorio', {
    httpOnly: true,
    expires: new Date(new Date().getTime() + 1000 * 60 *60),
    sameSite: 'strict'
  })

  return res.json({msg: 'requisição finalizada'})
})


function getCookie(cookieName: string, req: Request): string {
  let cookies: any = {};
  
  req.rawHeaders[req.rawHeaders.length - 1].split(';').forEach(function(el: any) {
    let [key,value] = el.split('=');
    cookies[key.trim()] = value;
  })

  return cookies[cookieName];
}

app.listen(3001, () => console.log("Servidor escutando na porta 3001"))