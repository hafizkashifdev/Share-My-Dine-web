#!/usr/bin/env groovy

def deployImg(){

          withCredentials([
            usernamePassword(credentialsId: 'bitbucket_dev-team-workspace', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')
          ]) {
            sshagent(['SMD-ec2']) {
              sh """
                ssh -o StrictHostKeyChecking=no -tt ubuntu@52.56.159.116 '
                  git config --global credential.helper "store --file=/home/ubuntu/.git-credentials"
                  echo -e "https://$USERNAME:$PASSWORD@bitbucket.org/dev-team-workspace/sharemydine_salesite.git" > /home/ubuntu/.git-credentials
                  cd sharemydine_salesite
                  git pull origin master
                  docker-compose up -d --build
                  docker system prune -a -f
                '
              """
            }
          }

}
return this
