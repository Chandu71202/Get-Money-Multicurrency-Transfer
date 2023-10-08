FROM openjdk:17
ADD target/cloud-config-server.jar .
EXPOSE 9296
ENTRYPOINT ["java","-jar","cloud-config-server.jar"]