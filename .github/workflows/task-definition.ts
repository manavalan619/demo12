module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "mongo-3755",
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
                  "sourceVolume": "nightchech"
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
                    "awslogs-group": "/ecs/nightchech",
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
        },
        {
            "name": "camunda-3755",
            "image": "geppettodistribution/camunda-local:Jan2021",
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8080",
                    "protocol": "tcp",
                    "hostPort": "8080"
                }
            ],
            "environmentFiles": null,
            "environment": null,
            "secrets": null,
            "mountPoints": [],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/nightchech",
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
        },
        // {
        //     "name": "apigateway-3755",
        //     "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-nightchech-3755-apigateway:1`,
        //     "memoryReservation": "300",
        //     "resourceRequirements": null,
        //     "essential": true,
        //     "portMappings": [
        //         {
        //             "containerPort": "8000",
        //             "protocol": "tcp",
        //             "hostPort": "8000"
        //         }
        //     ],
        //     "environmentFiles": null,
        //     "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/nightchech_3755?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}
        //     ,{"name":"SCHOOLURL","value":"http://127.0.0.1:8005"}
        //     ],
        //     "secrets": null,
        //     "mountPoints": [],
        //     "volumesFrom": null,
        //     "hostname": null,
        //     "user": null,
        //     "workingDirectory": null,
        //     "extraHosts": null,
        //     "logConfiguration": {
        //         "logDriver": "awslogs",
        //         "options": {
        //             "awslogs-group": "/ecs/nightchech",
        //             "awslogs-region": "us-east-1",
        //             "awslogs-stream-prefix": "ecs",
        //             "awslogs-create-group": "true"
        //         }
        //     },
        //     "ulimits": null,
        //     "dockerLabels": null,
        //     "dependsOn": null,
        //     "repositoryCredentials": {
        //         "credentialsParameter": ""
        //     }
        // },        
        // {
        //     "name": "authproxy-3755",
        //     "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-nightchech-3755-authproxy:1`,
        //     "memoryReservation": "300",
        //     "resourceRequirements": null,
        //     "essential": true,
        //     "portMappings": [
        //         {
        //             "containerPort": "8001",
        //             "protocol": "tcp",
        //             "hostPort": "8001"
        //         }
        //     ],
        //     "environmentFiles": null,
        //     "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/nightchech_3755?authSource=admin"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"}],
        //     "secrets": null,
        //     "mountPoints": [],
        //     "volumesFrom": null,
        //     "hostname": null,
        //     "user": null,
        //     "workingDirectory": null,
        //     "extraHosts": null,
        //     "logConfiguration": {
        //         "logDriver": "awslogs",
        //         "options": {
        //             "awslogs-group": "/ecs/nightchech",
        //             "awslogs-region": "us-east-1",
        //             "awslogs-stream-prefix": "ecs",
        //             "awslogs-create-group": "true"
        //         }
        //     },
        //     "ulimits": null,
        //     "dockerLabels": null,
        //     "dependsOn": null,
        //     "repositoryCredentials": {
        //         "credentialsParameter": ""
        //     }
        // },
        // {
        //     "name": "camundasvc-3755",
        //     "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-nightchech-3755-camunda:1`,
        //     "memoryReservation": "300",
        //     "resourceRequirements": null,
        //     "essential": true,
        //     "portMappings": [
        //         {
        //             "containerPort": "8002",
        //             "protocol": "tcp",
        //             "hostPort": "8002"
        //         }
        //     ],
        //     "environmentFiles": null,
        //     "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/nightchech_3755?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
        //     "secrets": null,
        //     "mountPoints": [],
        //     "volumesFrom": null,
        //     "hostname": null,
        //     "user": null,
        //     "workingDirectory": null,
        //     "extraHosts": null,
        //     "logConfiguration": {
        //         "logDriver": "awslogs",
        //         "options": {
        //             "awslogs-group": "/ecs/nightchech",
        //             "awslogs-region": "us-east-1",
        //             "awslogs-stream-prefix": "ecs",
        //             "awslogs-create-group": "true"
        //         }
        //     },
        //     "ulimits": null,
        //     "dockerLabels": null,
        //     "dependsOn": null,
        //     "repositoryCredentials": {
        //         "credentialsParameter": ""
        //     }
        // },
        // {
        //     "name": "securitymanager-3755",
        //     "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-nightchech-3755-securitymanager:1`,
        //     "memoryReservation": "300",
        //     "resourceRequirements": null,
        //     "essential": true,
        //     "portMappings": [
        //         {
        //             "containerPort": "8003",
        //             "protocol": "tcp",
        //             "hostPort": "8003"
        //         }
        //     ],
        //     "environmentFiles": null,
        //     "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/nightchech_3755?authSource=admin"},{"name":"CAMUNDAPOD_URL","value":"http://127.0.0.1:8080"},{"name":"SECURITYURL","value":"http://127.0.0.1:8003"},{"name":"AUTHPROXYURL","value":"http://127.0.0.1:8001"},{"name":"ADMINURL","value":"http://127.0.0.1:8004"},{"name":"CAMUNDAURL","value":"http://127.0.0.1:8002"},{"name":"APIGATEWAY","value":"http://127.0.0.1:8000"}],
        //     "secrets": null,
        //     "mountPoints": [],
        //     "volumesFrom": null,
        //     "hostname": null,
        //     "user": null,
        //     "workingDirectory": null,
        //     "extraHosts": null,
        //     "logConfiguration": {
        //         "logDriver": "awslogs",
        //         "options": {
        //             "awslogs-group": "/ecs/nightchech",
        //             "awslogs-region": "us-east-1",
        //             "awslogs-stream-prefix": "ecs",
        //             "awslogs-create-group": "true"
        //         }
        //     },
        //     "ulimits": null,
        //     "dockerLabels": null,
        //     "dependsOn": null,
        //     "repositoryCredentials": {
        //         "credentialsParameter": ""
        //     }
        // },
        {
            "name": "school-3755",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-nightchech-3755-school:1`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "9898",
                    "protocol": "tcp",
                    "hostPort": "9898"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@127.0.0.1:27017/_?authSource=admin"}],
            "secrets": null,
            "mountPoints": [],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/nightchech",
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
        },          
    ],
    "volumes": [
        {
            "host": {},
            "name": "nightchech"
        }
    ],
    "networkMode": "awsvpc",
    "memory": "3072",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "nightchech",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
