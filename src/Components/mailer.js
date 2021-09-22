import emailjs from 'emailjs-com'
const Mailer = () => {
    function sendEmail(e)
    {
        e.preventDefault();
        emailjs.sendForm('service_jywpdvd','template_rp5z4qr',e.target,'user_cnZ0XG4zpPPL6C7ovio9H').then(res=>{
            console.log(res);
        }).catch(err=>console.log(err));
    }
    return (
        <div className="container border"
        style={{marginTop:"50px", width:'50%',
        backgroundImage : "url('https://www.solidbackgrounds.com/images/7680x4320/7680x4320-glaucous-solid-color-background.jpg')",
        backgroundPosition:'center',
        backgroundSize:'cover'}}>
            <h1 style={{marginTop:'25px'}}>Contact Form</h1>
            <form className="row" style={{margin:'25px 85px 75px 100px '}}
            onSubmit={sendEmail}>
                <label>name</label>
                <input type='text' name='name' className="form-control"/>
                <lable>Email</lable>
                <input type="email" name="user_email" className="form-control"/>
                
                <label>Message</label>
                <textarea name='message' rows='4' className="form-control"/>
                <input type="submit" value="Send" className='form-control btn btn-primary'
                    style={{marginTop:'30px'}}
                />
            </form>
        </div>
    );
};

export default Mailer;

