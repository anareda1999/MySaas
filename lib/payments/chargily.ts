export interface ChargilyCheckoutOptions {
  amount: number;
  currency: "dzd";
  successUrl: string;
  failureUrl: string;
  webhookUrl?: string;
  description: string;
  metadata?: Record<string, string>;
}

export async function createChargilyCheckout(options: ChargilyCheckoutOptions) {
  const apiKey = process.env.CHARGILY_SECRET_KEY;

  if (!apiKey) {
    // Si la clé Chargily n'est pas encore renseignée, on renvoie une URL de test/simulation avec succès immédiat
    return {
      simulation: true,
      checkoutUrl: `${options.successUrl}&payment_method=edahabia_simulated&amount=${options.amount}`,
    };
  }

  const isTestMode = apiKey.startsWith("test_");
  const baseUrl = isTestMode
    ? "https://pay.chargily.net/test/api/v2"
    : "https://pay.chargily.net/api/v2";

  const response = await fetch(`${baseUrl}/checkouts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount: options.amount,
      currency: "dzd",
      success_url: options.successUrl,
      failure_url: options.failureUrl,
      webhook_endpoint: options.webhookUrl,
      description: options.description,
      metadata: options.metadata,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erreur Chargily Pay (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  return {
    simulation: false,
    checkoutUrl: data.checkout_url,
    id: data.id,
  };
}
