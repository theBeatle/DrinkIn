using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace Class_Library.Clients
{
    public class EmailClient
    {
        private SmtpClient SmtpClient { get; set; }

        /// <summary>
        /// Creates empty EmailClient instance
        /// </summary>
        public EmailClient()
        {
            SmtpClient = new SmtpClient();
            SmtpClient.UseDefaultCredentials = false;
            SmtpClient.Credentials = new NetworkCredential();
        }

        /// <summary>
        /// Creates EmailClient instance with specified credentials
        /// </summary>
        /// <param name="Email">Email(username) of the SMTP Server account</param>
        /// <param name="Password">Password of the SMTP Server account</param>
        /// <param name="Host">Network address of SMTP Server</param>
        /// <example>
        /// This sample shows how to create EmailClient instance
        /// <code>
        /// EmailClient client = new EmailClient("email@email.com", "password", "https://smtp.gmail.com");
        /// </code>
        /// </example>
        public EmailClient(string Email, string Password, string Host)
        {
            SmtpClient = new SmtpClient();
            SmtpClient.Host = Host;
            SmtpClient.Port = 587;
            SmtpClient.EnableSsl = true;
            SmtpClient.UseDefaultCredentials = false;
            SmtpClient.Credentials = new NetworkCredential(Email, Password);
        }

        /// <summary>
        /// Sends email to specified email address with specified message and subject
        /// </summary>
        /// <param name="Message">Email message body</param>
        /// <param name="Adress">Email receiver</param>
        /// <param name="Subject">Subject of message</param>
        /// <example>
        /// This sample shows how to call the SendMessage() method
        /// <code>
        /// EmailClient client = new EmailClient("email@email.com", "password");
        /// client.SendMessage("Hello, world!", "anotheremail@email.com", "Hello Message");                        
        /// </code>
        /// </example>

        public void SendMessage(string Message, string Adress, string Subject)
        {
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("drinkinrivne@gmail.com", "DrinkIn No-Reply");
            mailMessage.To.Add(Adress);
            mailMessage.Body = Message;
            mailMessage.Subject = Subject;

            SmtpClient.Send(mailMessage);
        }
    }
}
