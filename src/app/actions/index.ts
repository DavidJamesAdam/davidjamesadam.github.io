"use server";
import "../envConfig";

export const sendDiscordMessage = async (_prevState: unknown, formData: Iterable<readonly [PropertyKey]>) => {
  try {
    const rawFormEntries = Object.fromEntries(formData);

    if (!process.env.DISCORD_WEBHOOK_URL) {
      throw new Error(
        "Discord webhook URL is not configured. Set DISCORD_WEBHOOK_URL in your environment variables.",
      );
    }

    const payload = {
      username: rawFormEntries?.username || "Contact Form",
      avatar_url: rawFormEntries?.dp || "https://i.imgur.com/mDKlggm.png",
      content: rawFormEntries?.message || "No message provided.",
      embeds: [
        {
          fields: [
            {
              name: "Email",
              value: rawFormEntries?.email || "Not provided",
              inline: true,
            },
            {
              name: "Message Type",
              value: rawFormEntries?.type || "General",
              inline: true,
            },
          ],
        },
      ],
    };

    const response = await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Discord webhook request failed (${response.status}): ${errorText}`,
      );
    }

    return {
      success: true,
      message: `Your message has been successfully sent.`,
    };
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    return {
      success: false,
      message: `Problem sending message ${errorMessage}`,
    };
  }
};
