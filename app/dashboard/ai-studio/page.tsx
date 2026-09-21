"use client";

import { useState } from "react";
import {
  Sparkles,
  Copy,
  Check,
  RefreshCw,
  Download,
  Share2,
  Globe,
  MessageSquare,
  Mail,
  ShoppingBag,
  Megaphone,
  Clock,
  FileText,
  Sliders,
} from "lucide-react";

export default function AiStudioPage() {
  const [type, setType] = useState<"social" | "email" | "product" | "ads">("social");
  const [language, setLanguage] = useState<"fr" | "ar" | "en">("fr");
  const [tone, setTone] = useState<string>("persuasive");
  const [topic, setTopic] = useState<string>("");
  const [audience, setAudience] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const [output, setOutput] = useState<string>(
    "Sélectionnez vos paramètres à gauche et cliquez sur « Générer le contenu » pour voir la magie de l'IA opérer en direct."
  );
  const [wordCount, setWordCount] = useState<number>(20);

  const [history, setHistory] = useState<Array<{ id: string; title: string; type: string; date: string; content: string }>>([
    {
      id: "1",
      title: "Lancement de la formation e-commerce",
      type: "social",
      date: "Il y a 2 heures",
      content: "🚀 Vous souhaitez lancer votre boutique en ligne sans vous ruiner ? Découvrez nos conseils...",
    },
    {
      id: "2",
      title: "Email de prospection B2B Agences",
      type: "email",
      date: "Hier",
      content: "Objet : Un partenariat pour booster vos performances digitales...",
    },
  ]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      alert("Veuillez saisir au moins le sujet ou le titre.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          language,
          tone,
          topic,
          audience,
          description,
        }),
      });

      const data = await res.json();
      if (data.content) {
        setOutput(data.content);
        setWordCount(data.wordsCount || data.content.split(/\s+/).length);

        // Add to history
        setHistory((prev) => [
          {
            id: Date.now().toString(),
            title: topic,
            type,
            date: "À l'instant",
            content: data.content,
          },
          ...prev.slice(0, 4),
        ]);
      } else {
        alert(data.error || "Erreur lors de la génération.");
      }
    } catch (err: any) {
      alert("Erreur réseau : " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-white tracking-tight">Studio IA Marketing & Vente</h1>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-sm">
            v2.4 Multilingue
          </span>
        </div>
        <p className="text-sm text-slate-400 mt-1">
          Générez des argumentaires à fort taux de conversion en <strong>Français</strong>, <strong>Arabe</strong> ou <strong>Anglais</strong> en quelques secondes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Controls Form */}
        <div className="lg:col-span-5 rounded-2xl glass-panel p-6 space-y-6">
          <form onSubmit={handleGenerate} className="space-y-5">
            {/* Format Picker */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Format de contenu
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "social", label: "Post Réseaux", icon: MessageSquare },
                  { id: "email", label: "Email Vente", icon: Mail },
                  { id: "product", label: "Fiche Produit", icon: ShoppingBag },
                  { id: "ads", label: "Annonce Pub", icon: Megaphone },
                ].map((item) => {
                  const Icon = item.icon;
                  const isSelected = type === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setType(item.id as any)}
                      className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all ${
                        isSelected
                          ? "border-indigo-500 bg-indigo-500/15 text-white shadow-sm"
                          : "border-white/10 hover:border-white/20 bg-white/5 text-slate-300"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isSelected ? "text-indigo-400" : "text-slate-400"}`} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Language & Tone in two columns */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1">
                  <Globe className="h-3.5 w-3.5 text-slate-400" /> Langue
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="fr" className="bg-slate-900">Français 🇫🇷</option>
                  <option value="ar" className="bg-slate-900">العربية 🇩🇿</option>
                  <option value="en" className="bg-slate-900">Anglais 🇬🇧</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300 flex items-center gap-1">
                  <Sliders className="h-3.5 w-3.5 text-slate-400" /> Tonalité
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="persuasive" className="bg-slate-900">Persuasif & Vendeur</option>
                  <option value="professional" className="bg-slate-900">Professionnel B2B</option>
                  <option value="storytelling" className="bg-slate-900">Storytelling & Émotion</option>
                  <option value="urgent" className="bg-slate-900">Urgent & Promotionnel</option>
                </select>
              </div>
            </div>

            {/* Subject / Offer */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">
                Sujet ou Nom du Produit / Service <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Logiciel de gestion pour commerçants e-commerce"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            {/* Target Audience */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">
                Audience Cible (Optionnel)
              </label>
              <input
                type="text"
                placeholder="Ex: Vendeurs Instagram, freelances, propriétaires de boutiques"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            {/* Value Proposition / Benefits */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-300">
                Bénéfices clés ou détails de l&apos;offre
              </label>
              <textarea
                rows={3}
                placeholder="Ex: Fait gagner 15h par semaine, évite les retours de colis, livraison gratuite cette semaine..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <span>Génération par l&apos;IA en cours...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  <span>Générer le contenu</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: Output Result */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-2xl glass-panel p-6 border border-white/10 space-y-4">
            {/* Top Bar of Result */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-indigo-400" />
                  Résultat Généré
                </span>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300">
                  {wordCount} mots • ~1 min de lecture
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Generated Text Area */}
            <div
              dir={language === "ar" ? "rtl" : "ltr"}
              className={`p-5 rounded-xl bg-[#090d16]/90 border border-white/5 min-h-[320px] text-slate-200 text-sm leading-relaxed whitespace-pre-wrap ${
                language === "ar" ? "font-serif text-base" : "font-sans"
              }`}
            >
              {output}
            </div>
          </div>

          {/* History Snippet */}
          <div className="rounded-2xl glass-panel p-6 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-slate-400" /> Dernières créations sauvegardées
            </h3>
            <div className="divide-y divide-white/5">
              {history.map((item) => (
                <div key={item.id} className="py-3 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white truncate">{item.title}</p>
                    <p className="text-[11px] text-slate-400 truncate">{item.content.substring(0, 60)}...</p>
                  </div>
                  <button
                    onClick={() => {
                      setOutput(item.content);
                      setWordCount(item.content.split(/\s+/).length);
                    }}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-medium shrink-0"
                  >
                    Recharger
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
