pipeline {
  agent any
  stages {
    stage('Checkout Source Code') {
      steps {
        sh 'git clone https://github.com/link78/demo-mean-app.git'
      }
    }

    stage('Build Application') {
      steps {
        sh 'npm install -g @angular/cli'
        sh 'npm install'
      }
    }

    stage('Start App') {
      steps {
        sh 'npm start'
      }
    }

    stage('Build image and push to docker hub') {
      steps {
        echo 'Building image'
      }
    }

    stage('Run Image on docker') {
      steps {
        echo 'Running image'
      }
    }

  }
}