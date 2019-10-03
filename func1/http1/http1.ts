import { AzureFunction, Context } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: `Hello from the http1 function in the root dist folder 👋🏼`
    };

};

export default httpTrigger;
