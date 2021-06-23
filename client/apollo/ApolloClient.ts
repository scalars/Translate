import { BaseService } from '@/client/services/BaseService';
import { ApolloClientManager } from './ApolloClientManager';

class ApolloClient {
    private readonly baseService: BaseService;

    constructor ( clientManager: ApolloClientManager ) {
        this.baseService = new BaseService( clientManager );
    }

    public get queries (): BaseService {
        return this.baseService;
    }
}

export { ApolloClient };
