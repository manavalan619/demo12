# Bambe DevOps Architecture

### AWS ECS(Farget) Service-to-Service Communication by Using Service Discovery

[Architecture Diagram](https://drive.google.com/file/d/1u-1x-HUfBP0Xaib6iXiyoTzrMuS_dDhC/view?usp=sharing)

* Service discovery uses AWS Cloud Map API actions to manage HTTP and DNS namespaces for your Amazon ECS services.
So each service uses Route 53 DNS to call another ECS service as internally.

* Created AWS ECS Service for each container so that deploying service as microservice-based architecture without disturbing others.

### Blue-Green Deployment By Using AWS CodeDeploy
manoano
[Architecture Diagram](https://drive.google.com/file/d/1p0iABjTuWuvwUjGK5NO1Smc6lbq9haLl/view?usp=sharing)

* Blue-green deployment is a technique that reduces downtime and risk by running two identical production environments called Blue and Green. At any time, only one of the environments is live, with the live environment serving all production traffic. For this example, Blue is currently live and Green is idle.

* Added the 443(HTTPS Port) for the production target group on each AWS ECS service. In the application load balancer, all production target groups are added under the 443 rules.

* Here we use the AWS CodeDeploy for Blue-Green Deployment and configured 10% traffic shifted to new Blue(Latest Deployment) and also set termination time as 30 mins. In case we found any run time issue found on the latest Blue deployment we have the option to "Rollback of the Previous Deployment"

### Auto-Deployment By Using CodeBuild

[Architecture Diagram](https://drive.google.com/file/d/1p0iABjTuWuvwUjGK5NO1Smc6lbq9haLl/view?usp=sharing)

* Created AWS CodeBuild & separate buildspec.yml for each service. Here code build should trigger only any commits on specific folders and use its buildspec.yml to build and push the docker image to AWS ECR. Once the latest docker image is pushed to AWS ECR, using AWS CLI to deploy the specific ECS service through the CodeDeploy.

### AWS MSK(Apache Kafka Event Driven)

AWS Apache Kafka was used for internal event-driven for our application. Currently using version 2.6.1 for POC. 
