pipeline {
    agent any

    environment {
        NODEJS_HOME = tool 'NodeJS_LTS'  // Set NodeJS tool name configured in Jenkins
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/skuma2063/tm-tc-ui.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Angular Project') {
            steps {
                sh 'npm run build -- --configuration=production'
            }
        }

        stage('Deploy to Target Machine') {
            steps {
                sshagent(['target-server-ssh-credential']) {
                    sh '''
                    scp -r dist/angular-project/* user@target-machine:/var/www/html/
                    ssh user@target-machine "sudo systemctl restart nginx"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "Deployment successful!"
        }
        failure {
            echo "Build failed!"
        }
    }
}
