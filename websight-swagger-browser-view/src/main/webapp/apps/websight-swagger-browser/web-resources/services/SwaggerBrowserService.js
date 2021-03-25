import RestClient from 'websight-rest-atlaskit-client/RestClient';

class SwaggerBrowserService {
    constructor() {
        this.client = new RestClient('websight-swagger-browser-service');
    }

    getSpecs(onSuccess) {
        this.client.get({
            action: 'find-specs',
            onSuccess: onSuccess
        });
    }
}

export default new SwaggerBrowserService();
