module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            name: process.env.API_URL,
            "image": "harishsundhar/fargate:apigateway-8442",
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8000",
                    "protocol": "tcp",
                    "hostPort": "8000"
                }
            ],
            "environment": null,
            "environmentFiles": [],
            "secrets": null,
            "mountPoints": null,
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/APIFargate",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        }
    ],
    "volumes": [
        {
            "host": {},
            "name": "newtesting"
        }
    ],
    "networkMode": "awsvpc",
    "memory": "512",
    "cpu": "256",
    "executionRoleArn": `arn:aws:iam::${process.env.Accout_no}:role/${process.env.role_name}`,
    "family": "APIFargate",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${{secrets.ACCOUNT_NO}}:role/${process.env.role_name}`

};
var myJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(myJSON))

console.log(jsonConfig)
