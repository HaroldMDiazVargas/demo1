pipeline {
    agent { 
        node {
            label 'dev'                                     => This is our Docker Agent(includes python)
            }
      }
    triggers {                                                              => We set a new Build-trigger, automatically every 5min check if new one on github
        pollSCM '*/5 * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                // sh '''
                // cd myapp
                // pip install -r requirements.txt
                // '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                // sh '''
                // cd myapp
                // python3 hello.py
                // python3 hello.py --name=Brad
                // '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                // sh '''
                // echo "doing delivery stuff.."
                // '''
            }
        }
    }
}