import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/payments/stripe";
import { createChargilyCheckout } from "@/lib/payments/chargily";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { planId, billingCycle, provider } = body;
    const origin = req.nextUrl.origin;

    // Définition des tarifs
    const isAnnual = billingCycle === "annual";
    const pricing = {
      pro: {
        eur: isAnnual ? 23 * 12 : 29,
        dzd: isAnnual ? 3200 * 12 : 3900,
        name: "Plan Pro NovaSaaS",
      },
      enterprise: {
        eur: isAnnual ? 79 * 12 : 99,
        dzd: isAnnual ? 10500 * 12 : 12900,
        name: "Plan Entreprise NovaSaaS",
      },
    };

    const selectedPlan = planId === "enterprise" ? pricing.enterprise : pricing.pro;

    // 1. PASSERELLE CHARGILY PAY (Algérie - Edahabia / CIB en DZD)
    if (provider === "chargily") {
      const result = await createChargilyCheckout({
        amount: selectedPlan.dzd,
        currency: "dzd",
        description: `Abonnement ${selectedPlan.name} (${isAnnual ? "Annuel" : "Mensuel"})`,
        successUrl: `${origin}/dashboard/billing?status=success&plan=${planId}&provider=chargily`,
        failureUrl: `${origin}/dashboard/billing?status=cancelled`,
        metadata: {
          planId,
          billingCycle: isAnnual ? "annual" : "monthly",
        },
      });

      return NextResponse.json({ url: result.checkoutUrl });
    }

    // 2. PASSERELLE STRIPE (International - Visa / Mastercard en EUR)
    if (stripe) {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "eur",
              product_data: {
                name: selectedPlan.name,
                description: `Accès illimité NovaSaaS - Facturation ${isAnnual ? "Annuelle (-20%)" : "Mensuelle"}`,
              },
              unit_amount: Math.round(selectedPlan.eur * 100),
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `${origin}/dashboard/billing?status=success&plan=${planId}&provider=stripe`,
        cancel_url: `${origin}/dashboard/billing?status=cancelled`,
      });

      return NextResponse.json({ url: session.url });
    }

    // Si la clé Stripe n'est pas encore définie, simulation de redirection sécurisée
    return NextResponse.json({
      url: `${origin}/dashboard/billing?status=success&plan=${planId}&provider=stripe_simulated`,
    });
  } catch (error: any) {
    console.error("Checkout route error:", error);
    return NextResponse.json(
      { error: error.message || "Erreur lors de la création de la session de paiement" },
      { status: 500 }
    );
  }
}
