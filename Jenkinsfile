#!/usr/bin/env groovy
pipeline {
    agent any
    environment {
        def PROJECT_NAME = 'translate.madrov.com'
    }
    stages {
        stage("Config") {
            steps {
                script {
                    withCredentials( [ string( credentialsId: 'configureci', variable: 'SECRET') ] ) {
                        sh("$SECRET")
                    }
                }
            }
        }
        stage('Development') {
            when {
                expression {
                    return ! env.TAG_NAME && env.BRANCH_NAME != 'master' && env.BRANCH_NAME == 'dev';
                }
            }
            steps {
                withCredentials( [file( credentialsId: 'devtranslate.madrov.com', variable: 'FILE' ) ] ) {
                    sh "mv $FILE .env.dev && chmod 700 .env.dev"
                }
                echo 'Building development'
                sh ". ./deployStaticSite.sh && evaluateBrachName dev${PROJECT_NAME} ${PROJECT_NAME}"
            }
        }
        stage('Production') {
            when {
                buildingTag()
            }
            steps {
                withCredentials( [file( credentialsId: 'translate.madrov.com', variable: 'FILE' ) ] ) {
                    sh "mv $FILE .env.pro && chmod 700 .env.pro"
                }
                echo 'Building production'
                sh "sh productionRelease.sh ${env.TAG_NAME} ${PROJECT_NAME}"
            }
        }
    }
}
