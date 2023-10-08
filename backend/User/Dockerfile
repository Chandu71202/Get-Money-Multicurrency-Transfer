FROM openjdk:17
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} User-Service.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/User-Service.jar"]