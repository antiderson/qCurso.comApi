# Estágio 1: Construir o projeto Maven
FROM maven:3.6.3-jdk-11 AS build
WORKDIR /root/
COPY . .
RUN mvn package

# Estágio 2: Criar a imagem final com o Amazon Corretto 20
FROM amazoncorretto:20
WORKDIR /var/www/app/
COPY --from=build /root/target/projetos.jar .
CMD ["java", "-jar", "projetos.jar"]