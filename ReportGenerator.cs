using System;
using System.Net.Mail;

public class ReportGenerator
{
    private string[] addresses;
    private string subject;
    private string content;

    private string[] email_list = { "riley.conlin@ndsu.edu", "jacob.baumann@ndsu.edu" };

	static void Main()
    {
        foreach (string email_to in email_list)
        {
            MailMessage mail = new MailMessage();
            mail.To.Add(new MailAddress(email_to));
            mail.Subject = "This is a code test :)";
            mail.From = new MailAddress("riley.conlin@ndsu.edu");
            mail.Body = "Test";
            SmtpClient smtp = new SmtpClient("SMTP Server");
            smtp.Send(mail);
        }
    }
}
