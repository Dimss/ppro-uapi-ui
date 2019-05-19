## UI Service for UAPI backend 

### Technology stack
- ReactJS
- Redux
- Serve - static web server for ReactJS app

## CI 
CI is done by GitLab CI public service and includes one stages (see `.gitlab-ci.yml`)
- build - create docker image

### CD 
Two modes of CD are available
- Standalone deployment with raw K8S yaml file deploy following objects 
    - K8S deployment for UI service 
    - K8S `NodePort 30080` service for UI service

    Deploy standalone instance of UI service with `export NODE_IP=$(minikube ip) && curl -qs https://gitlab.com/dimss/ppro-ui/raw/master/deploy/k8s.yaml | sed "s~K8S_EXTERNAL_NODE_IP~${NODE_IP}~g" | kubectl create -f -`
    
    Cleanup `export NODE_IP=$(minikube ip) && curl -qs https://gitlab.com/dimss/ppro-ui/raw/master/deploy/k8s.yaml | sed "s~K8S_EXTERNAL_NODE_IP~${NODE_IP}~g" | kubectl delete -f -`

- Deployment with UAPI Operator
    
    MongoDB: 
    - K8S deployment for MongoDB
    - K8S service for MongoDB
    
    API Service: 
    - K8S secret for API service 
    - K8S deployment for API service 
    - K8S `NodePort 30081` service for API service

    UI Service:  
    - K8S deployment for UI service 
    - K8S `NodePort 30080` service for API service       
    
    ### Deploying the app with uapi [operator](https://gitlab.com/dimss/ppro-uapiui-operator)
    
    - Deploy the Operator `kubectl create -f https://gitlab.com/dimss/ppro-uapiui-operator/raw/master/deploy/all-in-one.yaml`
    - Make sure the Operator container is up and running `kubectl get pods | grep uapi-operator`
    - Create new Custom Resource `kubectl create -f https://gitlab.com/dimss/ppro-uapiui-operator/raw/master/deploy/crds/uiapi_v1alpha1_uapi_cr.yaml`

