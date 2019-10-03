import { AzureFunction, Context } from "@azure/functions"
import * as tslib from '@tslib/HelloService'

const httpTrigger: AzureFunction = async function (context: Context): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const svc = new tslib.HelloService()
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: svc.say('http1')
    };

};

export default httpTrigger;
