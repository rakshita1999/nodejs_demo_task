var request=require("request")
module.exports=class Downloader
{
    constructor(arg)
    {
        this.req=arg[0];
        this.url=arg[1];
        this.size=arg[2];
    }

   
 
    start()
    {
        
        var cz=Math.floor(this.size/this.req);
        var s=0,e=cz-1;
        var promiseList = [];
        for(var i=0;i<this.req;i++){
            promiseList.push(this.fetch(this.url,s,e));
            
            s=e+1;
            e=e+cz;
            if(this.size-e<cz){
                e=e+this.size;
            }
        }
        Promise.all(promiseList)
        .then(values => {
            var s=0;
            for(var j=0;j<values.length;j++){
               s=s+parseInt(values[j]);
        }

            console.log(s); 
        });
    }
     fetch(url,s,e)
    {
        // console.log(url);
        var options = {
            url: this.url,
            headers: {
                'User-Agent': 'request',
                  'Range':'bytes='+s+'-'+e
            }
        };
        // Return new promise 
        return new Promise(function(resolve, reject) {
            // Do async job
            request.get(options, function(err, resp, body) {
                if (err) {
                    reject(err);
                } else {
                    // console.log(resp.headers['content-length']);
                      resolve(resp.headers['content-length']);
                    //   console.log(resp.headers['content-length']); --> to get sizes of each individual chunks.
                    //  resolve(body);
                    // console.log(body);--> to display body of those chunks individually.
                    
                }
            })
        })
    }
 }
    //     // console.log("Start says hello !");
    //     var initializePromise = this.fetch();
    // initializePromise.then(function(result) {
    //     // userDetails = result;
    //     // console.log("Initialized user details");
    //     // Use user details from here
    //      console.log(result);
    // }, function(err) {
    //     console.log(err);
    // })  
    // }
   

// export modules=Downloader;