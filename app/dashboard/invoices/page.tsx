"use client";

import { useState } from "react";
import {
  FileText,
  Plus,
  Printer,
  Trash2,
  CheckCircle2,
  Clock,
  Download,
  Building,
  User,
  Sparkles,
  ArrowLeft,
  DollarSign,
  TrendingUp,
} from "lucide-react";

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

export default function InvoicesPage() {
  const [view, setView] = useState<"list" | "create">("list");
  const [docType, setDocType] = useState<"Facture" | "Devis">("Facture");
  const [currency, setCurrency] = useState<"DZD" | "EUR" | "USD">("DZD");

  // Émetteur
  const [companyName, setCompanyName] = useState("SARL Digital Solutions");
  const [companyNif, setCompanyNif] = useState("001916109482718");
  const [companyRc, setCompanyRc] = useState("16/00-094821B19");
  const [companyAddress, setCompanyAddress] = useState("12 Rue Didouche Mourad, Alger");

  // Client
  const [clientName, setClientName] = useState("Cabinet Alpha Consulting");
  const [clientAddress, setClientAddress] = useState("Hydra, Alger");
  const [invoiceNumber, setInvoiceNumber] = useState("FAC-2026-084");
  const [invoiceDate, setInvoiceDate] = useState("2026-09-20");

  // Items
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: "1", description: "Abonnement Plateforme SaaS (Licence Mensuelle)", quantity: 1, unitPrice: 3900 },
    { id: "2", description: "Accompagnement & Configuration personnalisée", quantity: 2, unitPrice: 5000 },
  ]);

  const [tvaRate, setTvaRate] = useState<number>(19); // 19% en Algérie
  const [applyTimbre, setApplyTimbre] = useState<boolean>(true); // Timbre fiscal

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now().toString(), description: "Nouvelle prestation", quantity: 1, unitPrice: 1000 },
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // Calculs
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const tvaAmount = (subtotal * tvaRate) / 100;
  const timbreAmount = applyTimbre && currency === "DZD" ? Math.min(Math.round(subtotal * 0.01), 2500) : 0;
  const totalTtc = subtotal + tvaAmount + timbreAmount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Styles for print mode */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          header, aside, .no-print {
            display: none !important;
          }
          .print-only-sheet {
            display: block !important;
            box-shadow: none !important;
            border: none !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
        }
      `}</style>

      {/* Header with Switcher */}
      <div className="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Facturation & Devis B2B</h1>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Conforme Fiscalité
            </span>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Éditez des devis et factures professionnels avec calcul automatique de la TVA et du timbre fiscal.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {view === "create" ? (
            <>
              <button
                onClick={() => setView("list")}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold border border-white/10 flex items-center gap-1.5 transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Retour à la liste
              </button>
              <button
                onClick={handlePrint}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold shadow-md flex items-center gap-1.5"
              >
                <Printer className="h-3.5 w-3.5" />
                Imprimer / Exporter PDF
              </button>
            </>
          ) : (
            <button
              onClick={() => setView("create")}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold shadow-md shadow-indigo-600/25 flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Créer une Facture ou Devis
            </button>
          )}
        </div>
      </div>

      {view === "list" ? (
        /* LIST VIEW */
        <div className="no-print space-y-6">
          {/* KPI Mini Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="rounded-2xl glass-panel p-5 space-y-2">
              <span className="text-xs text-slate-400 font-medium">Total Facturé ce mois</span>
              <p className="text-2xl font-bold text-white">482 000 DZD</p>
              <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                <TrendingUp className="h-3.5 w-3.5" /> +24% vs mois dernier
              </span>
            </div>

            <div className="rounded-2xl glass-panel p-5 space-y-2">
              <span className="text-xs text-slate-400 font-medium">Encaissé (Réglé)</span>
              <p className="text-2xl font-bold text-emerald-400">394 000 DZD</p>
              <span className="text-xs text-slate-400">Taux de recouvrement : 82%</span>
            </div>

            <div className="rounded-2xl glass-panel p-5 space-y-2">
              <span className="text-xs text-slate-400 font-medium">En Attente de Règlement</span>
              <p className="text-2xl font-bold text-amber-400">88 000 DZD</p>
              <span className="text-xs text-slate-400">2 factures à relancer</span>
            </div>
          </div>

          {/* Table of invoices */}
          <div className="rounded-2xl glass-panel p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-white">Documents Émis Récemment</h2>
              <span className="text-xs text-slate-400">Toutes les devises incluses</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-white/5 text-slate-400 uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3 px-4 rounded-l-lg">Numéro</th>
                    <th className="py-3 px-4">Client</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Montant TTC</th>
                    <th className="py-3 px-4">Statut</th>
                    <th className="py-3 px-4 text-right rounded-r-lg">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { id: "FAC-2026-084", client: "Cabinet Alpha Consulting", date: "20 Sept 2026", amount: "16 541 DZD", status: "Payée" },
                    { id: "FAC-2026-083", client: "Sarl Numidia Tech", date: "18 Sept 2026", amount: "38 900 DZD", status: "En attente" },
                    { id: "DEV-2026-012", client: "Agence Oasis Média", date: "15 Sept 2026", amount: "125 000 DZD", status: "Brouillon" },
                    { id: "FAC-2026-082", client: "NextScale SAS (Paris)", date: "10 Sept 2026", amount: "348,00 €", status: "Payée" },
                  ].map((doc) => (
                    <tr key={doc.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-white">{doc.id}</td>
                      <td className="py-3.5 px-4 font-medium text-slate-200">{doc.client}</td>
                      <td className="py-3.5 px-4 text-slate-400">{doc.date}</td>
                      <td className="py-3.5 px-4 font-bold text-white">{doc.amount}</td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                            doc.status === "Payée"
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                              : doc.status === "En attente"
                              ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              : "bg-slate-500/10 text-slate-400 border border-white/10"
                          }`}
                        >
                          {doc.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => setView("create")}
                          className="text-indigo-400 hover:text-indigo-300 font-semibold"
                        >
                          Ouvrir / Éditer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        /* CREATE / EDIT & PRINT VIEW */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Editor Sidebar */}
          <div className="no-print lg:col-span-4 rounded-2xl glass-panel p-6 space-y-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300 border-b border-white/10 pb-3">
              Paramètres du Document
            </h2>

            {/* Type & Currency */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs text-slate-400">Type</label>
                <select
                  value={docType}
                  onChange={(e) => setDocType(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white"
                >
                  <option value="Facture" className="bg-slate-900">Facture Officielle</option>
                  <option value="Devis" className="bg-slate-900">Devis / Proforma</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-slate-400">Devise</label>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white"
                >
                  <option value="DZD" className="bg-slate-900">DZD (Dinars Algériens)</option>
                  <option value="EUR" className="bg-slate-900">EUR (€ Euros)</option>
                  <option value="USD" className="bg-slate-900">USD ($ Dollars)</option>
                </select>
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Building className="h-3.5 w-3.5 text-indigo-400" /> Émetteur (Votre Société)
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Nom entreprise"
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white"
              />
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={companyNif}
                  onChange={(e) => setCompanyNif(e.target.value)}
                  placeholder="NIF"
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white"
                />
                <input
                  type="text"
                  value={companyRc}
                  onChange={(e) => setCompanyRc(e.target.value)}
                  placeholder="RC"
                  className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white"
                />
              </div>
              <input
                type="text"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
                placeholder="Adresse"
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white"
              />
            </div>

            {/* Client Info */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-purple-400" /> Client
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Nom du client"
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white"
              />
              <input
                type="text"
                value={clientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
                placeholder="Adresse client"
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white"
              />
            </div>

            {/* Tax Settings */}
            <div className="space-y-3 pt-2">
              <label className="text-xs font-semibold text-slate-300">Taux de TVA & Taxes</label>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">TVA (%) :</span>
                <input
                  type="number"
                  value={tvaRate}
                  onChange={(e) => setTvaRate(Number(e.target.value))}
                  className="w-20 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white"
                />
              </div>
              {currency === "DZD" && (
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={applyTimbre}
                    onChange={(e) => setApplyTimbre(e.target.checked)}
                    className="rounded border-white/20"
                  />
                  <span>Appliquer le droit de timbre fiscal (1%)</span>
                </label>
              )}
            </div>
          </div>

          {/* DOCUMENT SHEET PREVIEW (PRINTABLE) */}
          <div className="lg:col-span-8 bg-white text-slate-900 rounded-2xl p-8 sm:p-12 shadow-2xl print-only-sheet space-y-8">
            {/* Sheet Header */}
            <div className="flex justify-between items-start border-b border-slate-200 pb-6">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-indigo-600 uppercase">
                  {companyName}
                </h2>
                <p className="text-xs text-slate-600 mt-1">{companyAddress}</p>
                <div className="text-[11px] text-slate-500 font-mono mt-2 space-y-0.5">
                  <p><strong>NIF :</strong> {companyNif}</p>
                  <p><strong>RC :</strong> {companyRc}</p>
                </div>
              </div>

              <div className="text-right">
                <h3 className="text-3xl font-extrabold uppercase text-slate-900 tracking-tight">
                  {docType}
                </h3>
                <p className="text-xs font-mono font-bold text-indigo-600 mt-1">N° {invoiceNumber}</p>
                <p className="text-xs text-slate-500 mt-1">Date : {invoiceDate}</p>
              </div>
            </div>

            {/* Client Info Block */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Facturé à :</p>
              <h4 className="text-base font-bold text-slate-900 mt-1">{clientName}</h4>
              <p className="text-xs text-slate-600 mt-0.5">{clientAddress}</p>
            </div>

            {/* Articles Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b-2 border-slate-900 text-slate-900 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="py-3">Désignation</th>
                    <th className="py-3 text-center">Quantité</th>
                    <th className="py-3 text-right">Prix Unitaire</th>
                    <th className="py-3 text-right">Total HT</th>
                    <th className="py-3 text-right no-print">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="py-3 font-medium text-slate-800">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) => updateItem(item.id, "description", e.target.value)}
                          className="w-full p-1 border-b border-dashed border-slate-300 focus:outline-none focus:border-indigo-600 bg-transparent text-xs"
                        />
                      </td>
                      <td className="py-3 text-center">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, "quantity", Number(e.target.value))}
                          className="w-12 text-center p-1 border-b border-dashed border-slate-300 focus:outline-none focus:border-indigo-600 bg-transparent text-xs"
                        />
                      </td>
                      <td className="py-3 text-right">
                        <input
                          type="number"
                          value={item.unitPrice}
                          onChange={(e) => updateItem(item.id, "unitPrice", Number(e.target.value))}
                          className="w-20 text-right p-1 border-b border-dashed border-slate-300 focus:outline-none focus:border-indigo-600 bg-transparent text-xs"
                        />
                      </td>
                      <td className="py-3 text-right font-bold text-slate-900">
                        {(item.quantity * item.unitPrice).toLocaleString()} {currency}
                      </td>
                      <td className="py-3 text-right no-print">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-rose-500 hover:text-rose-700 p-1"
                          title="Supprimer la ligne"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="no-print pt-3">
                <button
                  type="button"
                  onClick={addItem}
                  className="text-xs text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-1"
                >
                  <Plus className="h-3.5 w-3.5" /> Ajouter une prestation
                </button>
              </div>
            </div>

            {/* Totals Section */}
            <div className="flex justify-end pt-4 border-t border-slate-200">
              <div className="w-64 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Total HT :</span>
                  <span className="font-semibold">{subtotal.toLocaleString()} {currency}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>TVA ({tvaRate}%) :</span>
                  <span className="font-semibold">{tvaAmount.toLocaleString()} {currency}</span>
                </div>
                {timbreAmount > 0 && (
                  <div className="flex justify-between text-slate-600">
                    <span>Droit de Timbre :</span>
                    <span className="font-semibold">{timbreAmount.toLocaleString()} {currency}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-black text-slate-900 border-t-2 border-slate-900 pt-2">
                  <span>Total TTC :</span>
                  <span className="text-indigo-600">{totalTtc.toLocaleString()} {currency}</span>
                </div>
              </div>
            </div>

            {/* Footer Notice */}
            <div className="border-t border-slate-100 pt-6 text-[11px] text-slate-400 text-center">
              <p>Document généré via la plateforme NovaSaaS • Merci de votre confiance.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
