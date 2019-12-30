pipeline {
  agent any
  stages {
    stage('Checkout Source Code') {
      steps {
        sh 'npm --version'
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