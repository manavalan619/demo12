module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "mongo-2000",
            "image": "geppettotest/mongo-local:april2020",
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "27017",
                    "protocol": "tcp",
                    "hostPort": "27017"
                }
            ],
            "environmentFiles": null,
            "environment": [{
                "name": "MONGO_INITDB_ROOT_PASSWORD",
                "value": "password"
              },
              {
                "name": "MONGO_INITDB_ROOT_USERNAME",
                "value": "admin"
              }],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/data/db",
                  "sourceVolume": "newtesting"
                }
              ],
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
    "taskRoleArn": `arn:aws:iam::${process.env.Accout_no}:role/${process.env.role_name}`

};
var myJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(myJSON))

console.log(jsonConfig)
