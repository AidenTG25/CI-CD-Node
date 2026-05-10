pipeline {
    agent any
    tools {
            nodejs 'NodeJS-20' // Use the name you defined in Tools
        }
    stages {
        stage('Clone') { 
            steps { 
                git branch: 'main',url: 'https://github.com/AidenTG25/CI-CD-Node.git' 
            } 
            } 
            
        stage('Install Dependencies') { 
            steps { 
                bat 'npm install' 
            } 
            } 
            
        stage('Run Application') { 
            steps { 
                bat 'node app.js' 
            } 
            } 
            
        stage('Run Tests') { 
            steps { 
                bat 'npm test' 
            } 
            } 
            
        stage('Build Docker Image') { 
            steps { 
                bat 'docker build -t ci-cd-node .' 
            } 
            } 
            
        stage('Run Docker Container') { 
            steps { 
                bat 'docker run -d -p 3001:3001 --name ci-container ci-cd-node' 
            } 
            } 
    }
}