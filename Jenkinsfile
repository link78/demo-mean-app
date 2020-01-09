node {

	stage('Checkout Source Code') {
	  scm
}

	stage('Build Angular App with Gradle') {
	  sh './gradlew build'
}

	stage('Running Angular App') {
	  sh 'npm install'
	
}

	stage('Building Docker Image') {
	sh 'docker build -t $DOCKER_HUB_USR/ng-gradle .'
	sh 'docker login -u $DOCKER_HUB_USR -p $DOCKER_HUB_PASSWD'
	sh 'docker push $DOCKER_HUB_USR/ng-gradle'
}


}
