pipeline {
    agent { docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm ci && npm build'
            }
        }
        stage('test') {
            steps {
                sh 'node --version'
            }
        }
        stage('deploy') {
            steps {
                sh 'echo "deploying"'
            }
        }
    }
}
