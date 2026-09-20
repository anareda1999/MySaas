"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Comment fonctionne la période d'essai gratuit de 14 jours ?",
      answer:
        "Vous bénéficiez d'un accès illimité et complet à toutes les fonctionnalités du plan Pro pendant 14 jours. Aucune carte bancaire n'est exigée lors de votre inscription. À la fin des 14 jours, vous pouvez choisir de continuer avec le plan payant ou basculer automatiquement sur notre offre gratuite.",
    },
    {
      question: "Puis-je changer de forfait ou annuler à tout moment ?",
      answer:
        "Oui, totalement. Vous n'êtes soumis à aucun engagement de durée. Vous pouvez upgrader, downgrader ou résilier votre abonnement en un clic depuis votre espace Facturation. Si vous résiliez, vous conservez vos accès jusqu'à la fin de la période de facturation en cours.",
    },
    {
      question: "Comment mes données et paiements sont-ils sécurisés ?",
      answer:
        "Toutes vos données sont chiffrées selon les standards bancaires AES-256 au repos et TLS 1.3 en transit. Les paiements et cartes de crédit sont gérés directement par Stripe, leader mondial certifié PCI-DSS Niveau 1. Nous ne stockons jamais vos numéros de carte bancaire.",
    },
    {
      question: "L'application est-elle compatible avec les réglementations RGPD ?",
      answer:
        "Absolument. Nous respectons scrupuleusement la réglementation européenne RGPD. Vous pouvez à tout moment exporter l'intégralité de vos données au format JSON/CSV ou exercer votre droit à l'effacement depuis les paramètres de votre compte.",
    },
    {
      question: "Proposez-vous une API et des webhooks pour connecter mes systèmes ?",
      answer:
        "Oui, les plans Pro et Entreprise incluent un accès complet à notre API RESTful et au système de webhooks en temps réel pour synchroniser vos données avec vos outils préférés (Zapier, Make, Slack, bases de données externes, etc.).",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-wide">
            <HelpCircle className="h-3.5 w-3.5" />
            Des réponses à vos questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Foire Aux Questions
          </h2>
          <p className="text-slate-400 text-base">
            Tout ce que vous devez savoir avant de propulser votre activité avec NovaSaaS.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none hover:bg-white/[0.02]"
                >
                  <span className="font-semibold text-white text-base sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 bg-white/5 border border-white/10 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-indigo-500/20 text-indigo-400" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
