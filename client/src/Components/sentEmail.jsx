import e from 'cors';
import React,{useState} from 'react'

const SentEmail = () => {

const [email, setEmail] = useState();
const [message, setMessage] = useState();
const [subject, setSubject] = useState();
const URL = process.env.REACT_APP_URL ?? "http://localhost:5000";

const sendEmail = async(e) => {

e.preventDefault();

    let dataSend = {
        email:email,
        subject:subject,
        message:message
    };

    const res = await fetch (`${URL}/api/users/email`, {
        method:"POST",
        body:JSON.stringify(dataSend),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    })
    .then ((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300){
            alert("send succesfuly");
        }
        else {alert("not working")}
    })
}


  return (
    <form action="">
        <div><label htmlFor="">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div><label htmlFor="">Subject</label>
        <input type="text" onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div><label htmlFor="">Message</label>
        <input type="text" onChange={(e) => setMessage(e.target.value)}/>
        </div>
        <button onClick={(e) => sendEmail(e)}>
            SendEmail
        </button>
    </form>
  )
}

export default SentEmail