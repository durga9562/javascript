const hasMeeting = false;
const meeting = new Promise((resolve , reject)=>{
    if(!hasMeeting){
        const meetingDetails = {
            name : "Making meeting",
            location : "Skype",
            time : "12:00 PM"
        }
        resolve(meetingDetails)
    }else{
        reject(new Error('meeting already scheduled'));
    }
});
meeting
.then(res => {
    console.log('meeting scheduled');
    console.log(res);
})
.catch(err =>{
    console.log(err.message);
})