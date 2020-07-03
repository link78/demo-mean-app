node {

	stage('Checkout Source Code') {
	  checkout scm
}

	stage('Building Docker Image') {
	sh 'docker build -t $DOCKER_HUB_USR/ng-app .'
	}
	stage('Push Docker image into docker hub'){
	sh 'docker login -u $DOCKER_HUB_USR -p $DOCKER_HUB_PASSWD'
	sh 'docker push $DOCKER_HUB_USR/ng-app'
}

stage('Removing Previous Container Name'){
    
      sh 'docker rm -f ng'
  }
  

	stage('Running Angular App') {
	  sh 'docker run --name ng -d -p 8050:80 $DOCKER_HUB_USR/ng-app'
	  
	
}


}
