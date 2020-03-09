node {

	stage('Checkout Source Code') {
	  checkout scm
}


	stage('Running Angular App') {
	  sh 'npm install'
	  
	
}

	stage('Building Docker Image') {
	sh 'docker build -t $DOCKER_HUB_USR/ng-app .'
	sh 'docker login -u $DOCKER_HUB_USR -p $DOCKER_HUB_PASSWD'
	sh 'docker push $DOCKER_HUB_USR/ng-app'
}
	stage('Running Angular App') {
	  sh 'docker run --name ng -d -p 80:80 $DOCKER_HUB_USR/ng-app'
	  
	
}


}
