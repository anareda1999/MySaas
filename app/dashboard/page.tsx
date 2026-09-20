"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  CreditCard,
  Users,
  DollarSign,
  ArrowUpRight,
  Download,
  Filter,
  CheckCircle,
  Clock,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState<"7d" | "30d" | "12m">("30d");

  const transactions = [
    {
      id: "TX-9482",
      customer: "Acme Corporation",
      email: "billing@acme.com",
      plan: "Entreprise Annuel",
      amount: "948,00 €",
      status: "Succès",
      date: "Il y a 12 minutes",
    },
    {
      id: "TX-9481",
      customer: "Studio Design Pulse",
      email: "clara@studiopulse.io",
      plan: "Pro Mensuel",
      amount: "29,00 €",
      status: "Succès",
      date: "Il y a 1 heure",
    },
    {
      id: "TX-9480",
      customer: "Thomas V. (Freelance)",
      email: "thomas.v@gmail.com",
      plan: "Pro Mensuel",
      amount: "29,00 €",
      status: "En attente",
      date: "Il y a 3 heures",
    },
    {
      id: "TX-9479",
      customer: "Fintech Horizon",
      email: "finance@horizon-tech.fr",
      plan: "Entreprise Mensuel",
      amount: "99,00 €",
      status: "Succès",
      date: "Hier à 18:42",
    },
    {
      id: "TX-9478",
      customer: "NextScale Solutions",
      email: "contact@nextscale.dev",
      plan: "Pro Mensuel",
      amount: "29,00 €",
      status: "Succès",
      date: "Hier à 14:15",
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Top Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-900/60 via-purple-900/40 to-slate-900 border border-indigo-500/20 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Bonjour Anareda 👋
            </h1>
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> Stripe Live Connecté
            </span>
          </div>
          <p className="text-sm text-slate-300">
            Votre MRR est en hausse de <span className="text-emerald-400 font-semibold">+18.4%</span> sur les 30 derniers jours. 128 nouveaux abonnements enregistrés.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/billing"
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition-colors"
          >
            <CreditCard className="h-3.5 w-3.5 text-indigo-400" />
            Gérer la Facturation
          </Link>
          <button
            onClick={() => alert("Rapport PDF généré et prêt au téléchargement !")}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-indigo-600/20 transition-all"
          >
            <Download className="h-3.5 w-3.5" />
            Exporter CSV
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="rounded-2xl glass-panel p-5 space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Revenu Mensuel (MRR)</span>
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
              <DollarSign className="h-4 w-4" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white">48 950 €</div>
            <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
              <TrendingUp className="h-3.5 w-3.5" /> +18.4% vs mois dernier
            </div>
          </div>
        </div>

        <div className="rounded-2xl glass-panel p-5 space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Utilisateurs & Abonnés</span>
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <Users className="h-4 w-4" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white">1 842</div>
            <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
              <TrendingUp className="h-3.5 w-3.5" /> +128 cette semaine
            </div>
          </div>
        </div>

        <div className="rounded-2xl glass-panel p-5 space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Taux d&apos;Attrition (Churn)</span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <CheckCircle className="h-4 w-4" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white">0.82%</div>
            <div className="text-xs text-slate-400">
              Score d&apos;excellence &lt; 2%
            </div>
          </div>
        </div>

        <div className="rounded-2xl glass-panel p-5 space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-medium">Valeur Moyenne (LTV)</span>
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <TrendingUp className="h-4 w-4" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white">428,00 €</div>
            <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
              <TrendingUp className="h-3.5 w-3.5" /> +6.2% d&apos;expansion
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Chart & Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 rounded-2xl glass-panel p-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-white">Courbe de Revenu & Abonnements</h2>
              <p className="text-xs text-slate-400">Analyse détaillée de la trajectoire financière</p>
            </div>
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10 text-xs">
              <button
                onClick={() => setTimeRange("7d")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  timeRange === "7d" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                7 jours
              </button>
              <button
                onClick={() => setTimeRange("30d")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  timeRange === "30d" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                30 jours
              </button>
              <button
                onClick={() => setTimeRange("12m")}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  timeRange === "12m" ? "bg-indigo-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                12 mois
              </button>
            </div>
          </div>

          {/* Graphical Bars */}
          <div className="pt-6 h-52 flex items-end justify-between gap-3">
            {[
              { day: "Lun", h: "42%", val: "1 240 €" },
              { day: "Mar", h: "58%", val: "1 890 €" },
              { day: "Mer", h: "50%", val: "1 620 €" },
              { day: "Jeu", h: "75%", val: "2 340 €" },
              { day: "Ven", h: "88%", val: "2 950 €" },
              { day: "Sam", h: "64%", val: "1 980 €" },
              { day: "Dim", h: "95%", val: "3 210 €" },
            ].map((col, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {col.val}
                </span>
                <div
                  style={{ height: col.h }}
                  className="w-full rounded-t-lg bg-gradient-to-t from-indigo-600 to-purple-500 group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-200"
                />
                <span className="text-xs text-slate-400 font-medium">{col.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Plan Breakdown Mini Card */}
        <div className="rounded-2xl glass-panel p-6 flex flex-col justify-between space-y-4">
          <div>
            <h2 className="text-base font-bold text-white mb-1">Répartition des Formules</h2>
            <p className="text-xs text-slate-400">Segmentation des abonnés payants</p>

            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-indigo-300">Plan Pro (29€/m)</span>
                  <span className="text-white">68% (1 252)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full w-[68%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-purple-300">Plan Entreprise (99€/m)</span>
                  <span className="text-white">22% (405)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full w-[22%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-400">Plan Starter (Gratuit)</span>
                  <span className="text-white">10% (185)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-slate-500 rounded-full w-[10%]" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
            💡 <strong>Conseil IA :</strong> 42 utilisateurs du plan Starter ont atteint le seuil d&apos;utilisateurs cette semaine. Une offre d&apos;upsell automatique a été envoyée.
          </div>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="rounded-2xl glass-panel p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-white">Transactions Récentes</h2>
            <p className="text-xs text-slate-400">Flux d&apos;encaissements Stripe en temps réel</p>
          </div>
          <Link
            href="/dashboard/billing"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
          >
            Toutes les factures <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-white/5 text-slate-400 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4 rounded-l-lg">ID Transaction</th>
                <th className="py-3 px-4">Client</th>
                <th className="py-3 px-4">Formule</th>
                <th className="py-3 px-4">Montant</th>
                <th className="py-3 px-4">Statut</th>
                <th className="py-3 px-4 rounded-r-lg">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-3.5 px-4 font-mono font-medium text-slate-400">{tx.id}</td>
                  <td className="py-3.5 px-4">
                    <div className="font-semibold text-white">{tx.customer}</div>
                    <div className="text-[11px] text-slate-400">{tx.email}</div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-300">{tx.plan}</td>
                  <td className="py-3.5 px-4 font-bold text-white">{tx.amount}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                        tx.status === "Succès"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}
                    >
                      {tx.status === "Succès" ? (
                        <CheckCircle className="h-3 w-3" />
                      ) : (
                        <Clock className="h-3 w-3" />
                      )}
                      {tx.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
