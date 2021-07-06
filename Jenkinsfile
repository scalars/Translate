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
                    return ! env.TAG_NAME && env.BRANCH_NAME != 'master';
                }
            }
            steps {
                echo 'Building development'
                sh ". ./deployStaticSite.sh && evaluateBrachName ${env.BRANCH_NAME} ${PROJECT_NAME}"
            }
        }
        stage('Production') {
            when {
                buildingTag()
            }
            steps {
                echo 'Building production'
                sh "sh productionRelease.sh ${env.TAG_NAME} ${PROJECT_NAME}"
            }
        }
    }
}
