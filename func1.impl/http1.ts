import { AzureFunction, Context } from "@azure/functions"
import { HelloService } from '@tslib/index'

const httpTrigger: AzureFunction = async function (context: Context): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const svc = new HelloService()
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: svc.say('http1')
    };
    
};

export default httpTrigger;
