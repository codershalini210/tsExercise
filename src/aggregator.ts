
 function averageScores(...scores: number[]):number{
    if(scores.length===0)
    {
        return 0
    }
    const total = scores.reduce((sum,score)=>sum+score,0)
    return total/scores.length
 }
 console.log(averageScores(10,20,30))
 console.log(averageScores(10,20))
 console.log(averageScores())
type CallbackFunction = (message:string,value:number)=>void;
function executeCallback(callback:CallbackFunction):void{
    callback("demo message",1111)
}
function mycallback(msg:string,val:number):void{
    console.log(`callback called with message: ${msg} and values: ${val}`)
}
executeCallback(mycallback)