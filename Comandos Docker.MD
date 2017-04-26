# Comandos Docker
## docker ps
Este comando lista los contenedores que estan corriendo
```
>>docker ps
```

## docker ps -a 
Este comando lista **TODOS** los contenedores que estan instalados.
```
>> docker ps -a
```

##docker stop 'id' o 'nombre'
Este comando **detiene** los o el contenedor que este corriendo.
```
>> docker stop 12mM23 micontenedor
>> docker stop 12
>> docker stop m
>> docker stop 12 mi 
```

##docker start 'id' o 'nombre'
Este comando **levanta** los o el contenedor que este detenido.
```
>> docker start 12mM23 micontenedor
>> docker start 12
>> docker start m
>> docker start 12 mi 
```

##docker rm 'id' o 'nombre'
Este comando **elimina** los o el contenedor que este detenido.
```
>> docker rm 12mM23 micontenedor
>> docker rm 12
>> docker rm m
>> docker rm 12 mi 
```
*No se puede **borrar** los contenedores que esten corriendo
## Mysql
Para utilizar docker con mysql se va a utilizar el siguiente cimando:
```
 docker run --name anny -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=anny -e MYSQL_USER=anny -e MYSQL_PASSWORD=123456 -p 3306:3306 -d mysql
```
### --name anny
El nombre del contenedor

## -e MYSQL_ROOT_PASSWORD
-e Dice al docker que es una variable de entorno
La clave de usuario **root**

## -e MYSQL_DATABASE=anny

## PostGresql

```
>> docker run --name postgresanny -e POSTGRES_PASSWORD=123456 -e POSTGRES_USER=anny -e POSTGRES_DB=javascript -p 5432:5432 -d postgres
```


