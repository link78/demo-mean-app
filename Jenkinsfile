pipeline {
  
  environment {
   dockerImage = ""
   DOCKER_IMAGE_NAME= "burk1212/angular-app"
  }
  agent any
  stages {
    stage('Checkout Source') {

      steps {

        git 'https://github.com/link78/demo-mean-app.git'

      }

    }

    stage('Build image and push to docker hub') {
      steps {
        script {
        docker.withRegistry( "https://registry.hub.docker.com","DOCKER_ID" ) {
            dockerImage = docker.build(DOCKER_IMAGE_NAME)
            dockerImage.push("${env.BUILD_NUMBER}")                         
            dockerImage.push("latest")
        }
      }
    }
  }

    stage('Run Image on docker') {
      steps {
        sh label: '',script: 'docker run --name my-angular -d -p 9090:80 burk1212/angular-app'
      }
    }

  }
}
