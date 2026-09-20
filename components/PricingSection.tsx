"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight, Wallet, Globe } from "lucide-react";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [currency, setCurrency] = useState<"dzd" | "eur">("dzd");

  const plans = [
    {
      name: "Starter",
      description: "Parfait pour tester votre idée et valider vos premiers clients payants.",
      priceEurMonthly: "0€",
      priceEurAnnual: "0€",
      priceDzdMonthly: "0 DZD",
      priceDzdAnnual: "0 DZD",
      period: "pour toujours",
      features: [
        "Jusqu'à 100 utilisateurs actifs",
        "Tableau de bord analytics de base",
        "Export CSV des métriques",
        "Support communautaire",
        "Paiement Edahabia & CIB ou Carte",
      ],
      ctaText: "Démarrer gratuitement",
      ctaHref: "/register",
      popular: false,
    },
    {
      name: "Pro",
      description: "La formule complète pour accélérer votre croissance et automatiser vos flux.",
      priceEurMonthly: "29€",
      priceEurAnnual: "23€",
      priceDzdMonthly: "3 900 DZD",
      priceDzdAnnual: "3 100 DZD",
      period: "/ mois",
      badge: "Le plus populaire",
      features: [
        "Utilisateurs actifs illimités",
        "Analytics & prédictions IA en temps réel",
        "Gestion multi-projets (jusqu'à 5)",
        "Webhooks & API illimitée",
        "Support prioritaire par email & chat (< 2h)",
        "Portail client et factures conformes",
        "Exports automatisés & rapports PDF",
      ],
      ctaText: "Commencer l'essai de 14 jours",
      ctaHref: "/register?plan=pro",
      popular: true,
    },
    {
      name: "Entreprise",
      description: "Pour les structures exigeantes nécessitant haute disponibilité et sur-mesure.",
      priceEurMonthly: "99€",
      priceEurAnnual: "79€",
      priceDzdMonthly: "12 900 DZD",
      priceDzdAnnual: "10 500 DZD",
      period: "/ mois",
      features: [
        "Tout ce qui est inclus dans le plan Pro",
        "Projets et espaces d'équipe illimités",
        "SLA garanti 99.99%",
        "Gestionnaire de compte dédié",
        "Sécurité SSO / SAML & audit logs",
        "Intégrations sur mesure avec votre API",
        "Contrat de confidentialité & facturation personnalisée",
      ],
      ctaText: "Contacter l'équipe",
      ctaHref: "/register?plan=enterprise",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="gradient-glow w-96 h-96 bg-indigo-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-wide">
            <Sparkles className="h-3.5 w-3.5" />
            Tarifs clairs et transparents
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Investissez dans la rentabilité de votre entreprise
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Réglez en <strong>Dinars (Edahabia / CIB)</strong> ou en <strong>Euros / Dollars (Carte Internationale)</strong>.
          </p>

          {/* Currency and Billing Controls */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Currency Selector */}
            <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setCurrency("dzd")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  currency === "dzd"
                    ? "bg-amber-500 text-slate-950 font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Wallet className="h-3.5 w-3.5" />
                DZD (Edahabia / CIB)
              </button>
              <button
                type="button"
                onClick={() => setCurrency("eur")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  currency === "eur"
                    ? "bg-indigo-600 text-white font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Globe className="h-3.5 w-3.5" />
                EUR € (International)
              </button>
            </div>

            {/* Monthly / Annual Toggle Switch */}
            <div className="flex items-center gap-3">
              <span className={`text-xs font-medium ${billingCycle === "monthly" ? "text-white" : "text-slate-400"}`}>
                Mensuel
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
                className="relative inline-flex h-6 w-12 items-center rounded-full bg-slate-800 p-1 transition-colors border border-white/10 hover:border-indigo-500/50"
                aria-label="Changer le cycle de facturation"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-indigo-500 shadow-md transition-transform ${
                    billingCycle === "annual" ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
              <div className="flex items-center gap-1.5">
                <span className={`text-xs font-medium ${billingCycle === "annual" ? "text-white" : "text-slate-400"}`}>
                  Annuel
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  -20%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price =
              currency === "dzd"
                ? billingCycle === "monthly"
                  ? plan.priceDzdMonthly
                  : plan.priceDzdAnnual
                : billingCycle === "monthly"
                ? plan.priceEurMonthly
                : plan.priceEurAnnual;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-slate-900/90 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 lg:-translate-y-2"
                    : "glass-panel glass-panel-hover"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-400 min-h-[40px] leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {price}
                    </span>
                    <span className="text-sm font-medium text-slate-400">{plan.period}</span>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
                      Ce qui est inclus :
                    </p>
                    <ul className="space-y-3 text-sm text-slate-300">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-4 w-4 text-indigo-400 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    href={plan.ctaHref}
                    className={`w-full py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                        : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                    }`}
                  >
                    {plan.ctaText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
