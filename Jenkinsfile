pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                echo 'npm ci && npm build'
            }
        }
        stage('test') {
            steps {
                echo 'node --version'
            }
        }
        stage('deploy') {
            steps {
                echo 'echo "deploying"'
            }
        }
    }
}
