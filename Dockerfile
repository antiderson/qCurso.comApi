# Use a imagem base do OpenJDK 11
FROM openjdk:11-jre-slim

# Copie o arquivo JAR da sua aplicação para o contêiner
COPY target/qCurso.com-api-0.0.1-SNAPSHOT.jar /qCurso.com-api-0.0.1-SNAPSHOT.jar

# Exponha a porta em que a aplicação Spring Boot irá ouvir
EXPOSE 8080

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["java", "-jar", "qCurso.com-api-0.0.1-SNAPSHOT.jar"]