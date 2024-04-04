import server from './server';

const port = process.env.PORT || 3000;

// const server = server.listen(3030)

server.listen(Number(port), () => {
  console.log(`Server listening on port ${port}`);
});
