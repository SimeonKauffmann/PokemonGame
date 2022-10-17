pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                'npm ci && npm build'
            }
        }
        stage('test') {
            steps {
                'node --version'
            }
        }
        stage('deploy') {
            steps {
                'echo "deploying"'
            }
        }
    }
}
