const nodemailer = require("nodemailer");

const sendEmail= async(req,res)=>{
    //res.send("I am sending Mail");

    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'gregorio16@ethereal.email',
            pass: 'AvN1ddXvfjUCvfuAc4'
        }
    });

    let info = await transporter.sendMail({
        from: '"Gregorio Crona" <gregorio16@ethereal.email>', // sender address
        to: "iam@gmail.com", // list of receivers
        subject: "Hello, this is my Email Project", // Subject line
        text: "Hello guys, this is my Email Project", // plain text body
        html: "<b>Hello guys, this is my Email Project</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      res.json(info);
}

module.exports= sendEmail;