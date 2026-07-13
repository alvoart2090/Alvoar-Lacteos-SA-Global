export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    const data = await request.json();

    const {
      Fname,
      Fcontact_number,
      Femail,
      Fmessage
    } = data;

    // Basic validation
    if (!Fname || !Fcontact_number || !Femail) {
      return Response.json(
        {
          success: false,
          message: "Please complete all required fields."
        },
        { status: 400 }
      );
    }

    // Send email using Resend
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Alvoar Website <noreply@alvoarlacteos.com>",
        to: ["info@alvoarlacteos.com"],
        reply_to: Femail,
        subject: "New Contact Form Submission",
        html: `
          <h2>New Website Contact Form</h2>

          <table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;font-family:Arial,sans-serif;">
            <tr>
              <td><strong>Name</strong></td>
              <td>${Fname}</td>
            </tr>

            <tr>
              <td><strong>Contact Number</strong></td>
              <td>${Fcontact_number}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${Femail}</td>
            </tr>

            <tr>
              <td><strong>Message</strong></td>
              <td>${Fmessage || "No message provided."}</td>
            </tr>
          </table>

          <br>

          <p>This message was submitted from the Alvoar Lacteos SA Global website.</p>
        `
      })
    });

    const resendResult = await resendResponse.json();

    if (!resendResponse.ok) {
      return Response.json(
        {
          success: false,
          message: resendResult.message || "Unable to send email.",
          error: resendResult
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Your message has been sent successfully."
    });

  } catch (error) {

    return Response.json(
      {
        success: false,
        message: error.message
      },
      { status: 500 }
    );

  }
}