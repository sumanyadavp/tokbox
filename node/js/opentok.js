const session=OT.initSession(apiKey,sessionId);
session.on("streamCreated", function(event) {
    // streamContainer is a DOM element
    subscriber = session.subscribe(event.stream, 'subscriber');
  });

  session.on("streamDestroyed", function(event) {
    console.log("Stream " + event.stream.name + " ended. " + event.reason);
});
  
// session.on({
//     streamCreated:(event) => {
//         session.subscribe(event.stream,'subscriber');
//     }, 
//     streamDestroyed :(event) => {
//        alert("someone stopped publishing") ;
//     },
// });
session.connect(token,(error)=>{
if(error){
alert("error publishing");
}
else{
const publisher=OT.initPublisher('publisher');
session.publish(publisher);
}
});
