export const htmlTemplate = (token) => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Email Confirmation</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
  /* Add your custom styles here */
  </style>
</head>
<body style="background-color: #e9ecef;">
  <h1>Confirm Your Email Address</h1>
  <p>Tap the button below to confirm your email address. If you didn't create an account, you can safely ignore this email.</p>
  <a href="http://localhost:3000/verify/${token}" target="_blank" style="padding: 16px 36px; background-color: #1a82e2; color: #ffffff; text-decoration: none; border-radius: 6px;">Verify your account</a>
</body>
</html>`;
};
