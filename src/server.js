import app from './app';

const port = process.env.APP_PORT;
app.listen(port);




// app.listen(port, () => {
//   console.log('Escutando na porta');
//   console.log(`http://localhost:${port}`);
// });
