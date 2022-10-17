pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                echo 'npm ci changed everything!'
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
