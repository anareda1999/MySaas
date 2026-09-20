"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  CreditCard,
  ShieldCheck,
  Download,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Globe,
  Wallet,
} from "lucide-react";

function BillingContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const provider = searchParams.get("provider");

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"pro" | "enterprise">("pro");
  const [selectedProvider, setSelectedProvider] = useState<"chargily" | "stripe">("chargily");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [loading, setLoading] = useState(false);

  const invoices = [
    { id: "INV-2026-009", date: "20 Septembre 2026", amount: "3 900 DZD", method: "Edahabia", status: "Payé" },
    { id: "INV-2026-008", date: "20 Août 2026", amount: "3 900 DZD", method: "CIB", status: "Payé" },
    { id: "INV-2026-007", date: "20 Juillet 2026", amount: "29,00 €", method: "Visa", status: "Payé" },
    { id: "INV-2026-006", date: "20 Juin 2026", amount: "29,00 €", method: "Mastercard", status: "Payé" },
  ];

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: selectedPlan,
          billingCycle,
          provider: selectedProvider,
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Erreur lors de la redirection vers le paiement.");
      }
    } catch (err: any) {
      alert("Erreur de connexion : " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Success Notification Banner */}
      {status === "success" && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-300">
          <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
          <div className="text-sm">
            <span className="font-bold">Félicitations ! Votre paiement a été validé avec succès.</span>
            <p className="text-xs text-emerald-400/80 mt-0.5">
              {provider === "chargily"
                ? "Transaction enregistrée via le réseau monétique national (Edahabia / CIB)."
                : "Abonnement activé et synchronisé."}
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Facturation & Passerelles de Paiement</h1>
        <p className="text-sm text-slate-400 mt-1">
          Gérez votre forfait avec support multi-devises : <strong>Dinars (DZD)</strong> et <strong>Euros (€)</strong>.
        </p>
      </div>

      {/* Current Plan Overview Card */}
      <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-indigo-500/30 relative overflow-hidden">
        <div className="gradient-glow w-64 h-64 bg-indigo-600/10 top-0 right-0 pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" /> Formule Active
              </span>
              <span className="text-xs text-slate-400">Renouvellement automatique</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Plan Pro — 3 900 DZD <span className="text-sm font-normal text-slate-400">ou 29 € / mois</span>
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              Votre formule actuelle vous donne accès aux analytics illimités, aux prédictions IA en direct et au support prioritaire 24/7.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-md shadow-indigo-600/25 transition-all flex items-center gap-2"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Changer ou Renouveler
            </button>
          </div>
        </div>

        {/* Supported Payment Gateways Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="font-semibold text-white">Moyens de paiement acceptés :</span>
            <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2.5 py-1 rounded-md font-medium">
              💳 Carte Edahabia (Algérie Poste)
            </span>
            <span className="inline-flex items-center gap-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2.5 py-1 rounded-md font-medium">
              🏦 Carte Bancaire CIB (SATIM)
            </span>
            <span className="inline-flex items-center gap-1 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2.5 py-1 rounded-md font-medium">
              🌍 Visa & Mastercard (Stripe)
            </span>
          </div>
        </div>
      </div>

      {/* Invoices History */}
      <div className="rounded-2xl glass-panel p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Historique des Transactions</h2>
            <p className="text-xs text-slate-400">Vos reçus fiscaux et attestations de paiement</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-white/5 text-slate-400 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4 rounded-l-lg">Numéro</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Passerelle / Moyen</th>
                <th className="py-3 px-4">Montant</th>
                <th className="py-3 px-4">Statut</th>
                <th className="py-3 px-4 text-right rounded-r-lg">Reçu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-mono font-medium text-white">{inv.id}</td>
                  <td className="py-3.5 px-4 text-slate-400">{inv.date}</td>
                  <td className="py-3.5 px-4 font-medium text-slate-300">
                    <span className="bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {inv.method}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-bold text-white">{inv.amount}</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="h-3 w-3" /> {inv.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => alert(`Téléchargement de la facture ${inv.id} (format PDF).`)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-indigo-400 text-xs font-semibold border border-white/10 transition-colors"
                    >
                      <Download className="h-3 w-3" /> PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Upgrade / Checkout Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="rounded-2xl glass-panel max-w-xl w-full p-6 sm:p-8 border border-white/15 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Souscrire ou Modifier votre Forfait</h3>
                <p className="text-xs text-slate-400">Choisissez votre formule et votre moyen de règlement préféré</p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-white text-base"
              >
                ✕
              </button>
            </div>

            {/* Step 1: Select Plan */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                1. Choisissez votre Formule
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPlan("pro")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedPlan === "pro"
                      ? "border-indigo-500 bg-indigo-500/10 shadow-md shadow-indigo-500/20"
                      : "border-white/10 hover:border-white/20 bg-white/5"
                  }`}
                >
                  <span className="block font-bold text-sm text-white">Plan Pro</span>
                  <span className="block text-xs text-indigo-400 font-semibold mt-1">
                    3 900 DZD / 29 €
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPlan("enterprise")}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    selectedPlan === "enterprise"
                      ? "border-purple-500 bg-purple-500/10 shadow-md shadow-purple-500/20"
                      : "border-white/10 hover:border-white/20 bg-white/5"
                  }`}
                >
                  <span className="block font-bold text-sm text-white">Plan Entreprise</span>
                  <span className="block text-xs text-purple-400 font-semibold mt-1">
                    12 900 DZD / 99 €
                  </span>
                </button>
              </div>
            </div>

            {/* Step 2: Select Gateway */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                2. Moyen de Paiement & Devise
              </label>

              <div className="space-y-2">
                {/* Chargily Pay (Edahabia / CIB) */}
                <button
                  type="button"
                  onClick={() => setSelectedProvider("chargily")}
                  className={`w-full p-4 rounded-xl border text-left flex items-start justify-between gap-3 transition-all ${
                    selectedProvider === "chargily"
                      ? "border-amber-500 bg-amber-500/10 shadow-md"
                      : "border-white/10 hover:border-white/20 bg-white/5"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Wallet className="h-4 w-4 text-amber-400" />
                      <span className="font-bold text-sm text-white">
                        Paiement en Dinars Algériens (DZD)
                      </span>
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-bold">
                        🇩🇿 Algérie
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Règlement sécurisé par <strong>Carte Edahabia</strong> (Algérie Poste) ou <strong>Carte Bancaire CIB</strong>.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-white shrink-0">
                    {selectedPlan === "pro" ? "3 900 DZD" : "12 900 DZD"}
                  </span>
                </button>

                {/* Stripe (International) */}
                <button
                  type="button"
                  onClick={() => setSelectedProvider("stripe")}
                  className={`w-full p-4 rounded-xl border text-left flex items-start justify-between gap-3 transition-all ${
                    selectedProvider === "stripe"
                      ? "border-indigo-500 bg-indigo-500/10 shadow-md"
                      : "border-white/10 hover:border-white/20 bg-white/5"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-indigo-400" />
                      <span className="font-bold text-sm text-white">
                        Paiement International en Euros (€)
                      </span>
                      <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full font-bold">
                        🌍 Mondial
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Règlement sécurisé par <strong>Visa, Mastercard, Apple Pay</strong> via Stripe.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-white shrink-0">
                    {selectedPlan === "pro" ? "29 €" : "99 €"}
                  </span>
                </button>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Annuler
              </button>
              <button
                type="button"
                disabled={loading}
                onClick={handleCheckout}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg flex items-center gap-2 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <span>Redirection en cours...</span>
                ) : (
                  <>
                    <span>Procéder au Paiement</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function BillingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center p-12 text-slate-400 text-sm">
          Chargement de l&apos;espace de facturation...
        </div>
      }
    >
      <BillingContent />
    </Suspense>
  );
}
