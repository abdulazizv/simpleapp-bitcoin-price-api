## To run the project first you need to run this command:

```shell
npm install
```

# After installing the dependencies, you can run the project with docker commands as well, but firstly need to give credentials to .env file. After giving credentials you can run the project with docker these two commands:

```docker
docker build -t ${name} .
```
after this command, second command:

```docker 
docker run -d -p ${port}:${port} --env-file .env ${name of the container which you give in the previous command}
```