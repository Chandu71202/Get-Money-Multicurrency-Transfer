FROM openjdk:17
ADD target/cloud-gateway.jar .
EXPOSE 9090
ENTRYPOINT ["java","-jar","cloud-gateway.jar"]