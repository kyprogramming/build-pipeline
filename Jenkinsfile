pipeline {
    agent any
    stages {

        stage("Build")
        {
            steps
            {
                script {
                        echo "INFO: Build Stage"
                        sh "docker build -t node-app:latest ."
                        echo "INFO: Docker Image build" 
                    }
            }
        }

        stage("Deploy")
        {
            steps
            {
                script {
                        echo "INFO: Deploy Stage"
                        sh "docker build -t node-ap || true"
                        sh "docker run --restart always -p 3000:300 -d --name node-app node-app:latest"
                        echo "INFO: Deployed" 
                    }
            }
        }
    }
}