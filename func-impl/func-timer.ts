import { AzureFunction, Context } from "@azure/functions"
import { GoodbyeService } from '../tslib/index'

const timerTrigger: AzureFunction = async function (context: Context, myTimer: any): Promise<void> {
    var timeStamp = new Date().toISOString();
    
    if(myTimer.isPastDue)
    {
        context.log('Timer function is running late!');
    }
    context.log('Timer trigger function ran!', timeStamp);   
    const svc = new GoodbyeService()
    context.log(svc.say('timer function'))
};

export default timerTrigger;
