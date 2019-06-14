var request=require("request");
var userDetails;

function initialize()
{
var options =   {
    url:'https://api.github.com/users/narenaryan',
    headers:
    {
'user-agent':'request'
    }
};
return new Promise(function(resolve,reject){
    request.get(options,function(err,resp,body)
    {
     if(err)
     {
         reject(err);
     }
     else{
         resolve(JSON.parse(body));
     }
    })
})

}
function main()
{
    var initializePromise=initialize();
    initializePromise.then(function(result)
    {
        userDetails=result;
        console.log("Initailsed user details");
        console.log(userDetails);
    
    },
    {
        function(err)
        {
            console.log(err);
        }
    })
}
main();

