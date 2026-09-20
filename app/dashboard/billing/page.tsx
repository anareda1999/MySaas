"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CreditCard,
  ShieldCheck,
  Download,
  Check,
  ExternalLink,
  Zap,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export default function BillingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const invoices = [
    { id: "INV-2026-009", date: "20 Septembre 2026", amount: "29,00 €", status: "Payé" },
    { id: "INV-2026-008", date: "20 Août 2026", amount: "29,00 €", status: "Payé" },
    { id: "INV-2026-007", date: "20 Juillet 2026", amount: "29,00 €", status: "Payé" },
    { id: "INV-2026-006", date: "20 Juin 2026", amount: "29,00 €", status: "Payé" },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Facturation & Abonnement</h1>
        <p className="text-sm text-slate-400 mt-1">
          Gérez votre forfait, votre mode de paiement et téléchargez vos factures fiscales.
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Plan Pro — 29,00 € / mois</h2>
            <p className="text-sm text-slate-300 max-w-xl">
              Votre formule actuelle vous donne accès aux analytics illimités, aux prédictions IA en direct et au support prioritaire 24/7.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-md shadow-indigo-600/25 transition-all"
            >
              Changer de Formule
            </button>
            <a
              href="https://stripe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition-colors"
            >
              Portail Client Stripe <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Usage meters */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-300">Utilisateurs Actifs</span>
              <span className="text-indigo-400 font-bold">1 842 / Illimité</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full w-full" />
            </div>
            <p className="text-[11px] text-slate-500">Aucune restriction d&apos;audience</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-300">Requêtes API mensuelles</span>
              <span className="text-purple-400 font-bold">482 910 / 1 000 000</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full w-[48%]" />
            </div>
            <p className="text-[11px] text-slate-500">48% consommés — Réinitialisation le 1er</p>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-300">Espaces / Projets actifs</span>
              <span className="text-cyan-400 font-bold">4 / 5 Projets</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div className="h-full bg-cyan-500 rounded-full w-[80%]" />
            </div>
            <p className="text-[11px] text-slate-500">1 emplacement disponible</p>
          </div>
        </div>
      </div>

      {/* Payment Method Details */}
      <div className="rounded-2xl glass-panel p-6 space-y-4">
        <h2 className="text-base font-bold text-white">Moyen de Paiement Enregistré</h2>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/80 border border-white/5">
          <div className="flex items-center gap-4">
            <div className="h-10 w-14 rounded-lg bg-gradient-to-tr from-slate-800 to-slate-700 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white">
              VISA
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Visa se terminant par •••• 4242</p>
              <p className="text-xs text-slate-400">Expire le 12/2028 • Carte par défaut</p>
            </div>
          </div>
          <button
            onClick={() => alert("Mise à jour du moyen de paiement Stripe déclenchée.")}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline"
          >
            Mettre à jour la carte
          </button>
        </div>
      </div>

      {/* Invoices History */}
      <div className="rounded-2xl glass-panel p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Historique des Factures</h2>
            <p className="text-xs text-slate-400">Téléchargez vos justificatifs conformes pour votre comptabilité</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-white/5 text-slate-400 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4 rounded-l-lg">Numéro</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Montant TTC</th>
                <th className="py-3 px-4">Statut</th>
                <th className="py-3 px-4 text-right rounded-r-lg">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-mono font-medium text-white">{inv.id}</td>
                  <td className="py-3.5 px-4 text-slate-400">{inv.date}</td>
                  <td className="py-3.5 px-4 font-semibold text-white">{inv.amount}</td>
                  <td className="py-3.5 px-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="h-3 w-3" /> {inv.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => alert(`Téléchargement de la facture ${inv.id} au format PDF.`)}
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

      {/* Upgrade Modal Simulator */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="rounded-2xl glass-panel max-w-lg w-full p-6 border border-white/15 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white">Changer de formule</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border-2 border-indigo-500 bg-indigo-500/10 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white">Passer au Plan Entreprise</span>
                  <span className="text-sm font-bold text-indigo-400">99,00 € / mois</span>
                </div>
                <p className="text-xs text-slate-300">
                  Débloquez le SLA 99.99%, des membres d&apos;équipe illimités et un gestionnaire de compte dédié.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white">Basculer sur le Plan Annuel Pro (-20%)</span>
                  <span className="text-sm font-bold text-emerald-400">276 € / an</span>
                </div>
                <p className="text-xs text-slate-300">
                  Économisez 72 € par an en passant à la facturation annuelle en 1 clic.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  alert("Changement d'abonnement confirmé avec succès !");
                  setModalOpen(false);
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold"
              >
                Valider la mise à niveau
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
