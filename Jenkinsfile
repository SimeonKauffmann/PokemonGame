pipeline {
    agent any
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
