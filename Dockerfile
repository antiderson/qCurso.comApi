# Definição de build para a imagem do Spring boot
FROM openjdk:20 as build

WORKDIR /app

COPY mvnw .
COPY pom.xml .

RUN chmod +x ./mvnw

COPY src src


FROM openjdk:20 as production
ARG DEPENDENCY=/app/target/dependency


# Rodar a aplicação Spring boot
ENTRYPOINT ["java", "-cp", "app:app/lib/*","br.com.uniamerica.qCurso.com.qCurso.comapi"]