using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Class_Library;
using Class_Library.Clients;

namespace TestEmailClient
{
    class Program
    {
        static void Main(string[] args)
        {
            EmailClient email = new EmailClient("drinkinrivne@gmail.com", "knyazisourall", "smtp.gmail.com");
            email.SendMessage("Hello, world!", "ivansmyalko@gmail.com", "Hello message");
        }
    }
}
