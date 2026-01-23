import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendWhatsAppAlert = async (to, productName, price, url) => {
  try {
    const message = await client.messages.create({
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`,
      to: `whatsapp:${to}`,
      body: `🚨 Price Drop Found!\n\n${productName} is now ₹${price}.\n\nView here: ${url}`
    });
    return { success: true, sid: message.sid };
  } catch (error) {
    console.error("WhatsApp Send Error:", error);
    return { success: false, error: error.message };
  }
};