import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  CreditCard,
  Users,
  CheckCircle2,
  BarChart3,
  Lock,
  Cpu,
  Star,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 selection:bg-indigo-500 selection:text-white relative">
      <Navbar />

      <main className="flex-1">
        {/* ===================== HERO SECTION ===================== */}
        <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Subtle Ambient Background Glows */}
          <div className="gradient-glow w-[500px] h-[500px] bg-indigo-600/20 top-0 left-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="gradient-glow w-[350px] h-[350px] bg-purple-600/15 top-1/3 left-1/4 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Top Announcement Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm">
                <Sparkles className="h-4 w-4 text-indigo-400 animate-pulse" />
                <span>NovaSaaS v2.4 est disponible : Moteur d&apos;analyse prédictif activé</span>
                <span className="text-white/40">|</span>
                <Link href="#features" className="underline hover:text-white flex items-center gap-0.5">
                  Découvrir <ArrowRight className="h-3 w-3 inline" />
                </Link>
              </div>
            </div>

            {/* Main Headline */}
            <div className="mt-8 text-center max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Pilotez votre croissance avec la plateforme{" "}
                <span className="gradient-accent">SaaS nouvelle génération</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Centralisez vos métriques clés, automatisez vos abonnements Stripe et optimisez votre rétention client grâce à des outils d&apos;analyse en temps réel.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/register"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-base shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  Démarrer l&apos;essai gratuit (14j)
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/dashboard"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel glass-panel-hover text-slate-200 hover:text-white font-semibold text-base flex items-center justify-center gap-2"
                >
                  <BarChart3 className="h-5 w-5 text-indigo-400" />
                  Explorer le Dashboard live
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="pt-6 flex items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 border-2 border-[#090d16] flex items-center justify-center text-[10px] font-bold text-white">JD</div>
                  <div className="w-7 h-7 rounded-full bg-purple-600 border-2 border-[#090d16] flex items-center justify-center text-[10px] font-bold text-white">SM</div>
                  <div className="w-7 h-7 rounded-full bg-emerald-600 border-2 border-[#090d16] flex items-center justify-center text-[10px] font-bold text-white">EL</div>
                  <div className="w-7 h-7 rounded-full bg-amber-600 border-2 border-[#090d16] flex items-center justify-center text-[10px] font-bold text-white">AL</div>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                  <Star className="h-4 w-4 fill-amber-400" />
                </div>
                <span>Noté <strong>4.9/5</strong> par plus de 12 000 équipes</span>
              </div>
            </div>

            {/* Interactive SaaS Mockup Card */}
            <div className="mt-14 relative max-w-5xl mx-auto">
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-25 blur-xl pointer-events-none" />
              <div className="relative rounded-2xl glass-panel border border-white/15 overflow-hidden shadow-2xl">
                {/* Browser topbar */}
                <div className="bg-[#0b101d] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline-block">
                      https://app.novasaas.com/overview
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    Systèmes 100% Opérationnels
                  </div>
                </div>

                {/* Dashboard Preview Inner */}
                <div className="p-6 sm:p-8 bg-[#090d16]/90 space-y-6">
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                      <p className="text-xs text-slate-400 font-medium">Revenu Mensuel (MRR)</p>
                      <p className="text-2xl font-bold text-white">48 950 €</p>
                      <p className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                        <TrendingUp className="h-3 w-3" /> +18.4% ce mois
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                      <p className="text-xs text-slate-400 font-medium">Clients Actifs</p>
                      <p className="text-2xl font-bold text-white">1 842</p>
                      <p className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                        <TrendingUp className="h-3 w-3" /> +128 nouveaux
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                      <p className="text-xs text-slate-400 font-medium">Taux de Rétention</p>
                      <p className="text-2xl font-bold text-white">96.8%</p>
                      <p className="text-xs text-indigo-400 font-semibold">Stabilité optimale</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                      <p className="text-xs text-slate-400 font-medium">Taux de Conversion</p>
                      <p className="text-2xl font-bold text-white">4.82%</p>
                      <p className="text-xs text-emerald-400 flex items-center gap-1 font-semibold">
                        <TrendingUp className="h-3 w-3" /> +1.2% vs N-1
                      </p>
                    </div>
                  </div>

                  {/* Chart Representation */}
                  <div className="p-6 rounded-xl bg-slate-900/60 border border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-white">Trajectoire de Chiffre d&apos;Affaires</h4>
                        <p className="text-xs text-slate-400">Croissance exponentielle des 6 derniers mois</p>
                      </div>
                      <span className="text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-2 py-1 rounded-md">
                        Temps Réel
                      </span>
                    </div>

                    {/* Visual simulated Bar Chart */}
                    <div className="h-36 flex items-end justify-between gap-2 sm:gap-4 pt-4">
                      {[
                        { month: "Jan", height: "35%", val: "18k€" },
                        { month: "Fév", height: "45%", val: "24k€" },
                        { month: "Mar", height: "55%", val: "31k€" },
                        { month: "Avr", height: "68%", val: "38k€" },
                        { month: "Mai", height: "82%", val: "44k€" },
                        { month: "Juin", height: "100%", val: "49k€" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                          <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.val}
                          </span>
                          <div
                            style={{ height: item.height }}
                            className="w-full rounded-t-lg bg-gradient-to-t from-indigo-600 to-purple-500 group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300"
                          />
                          <span className="text-xs text-slate-400">{item.month}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== LOGOS & PARTNERS ===================== */}
        <section className="py-12 border-y border-white/5 bg-[#070b14]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
              Technologies & Partenaires intégrés nativement
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="flex items-center gap-2 font-bold text-lg text-slate-300">
                <Zap className="h-5 w-5 text-amber-400" /> Next.js 16
              </div>
              <div className="flex items-center gap-2 font-bold text-lg text-slate-300">
                <CreditCard className="h-5 w-5 text-indigo-400" /> Stripe Billing
              </div>
              <div className="flex items-center gap-2 font-bold text-lg text-slate-300">
                <ShieldCheck className="h-5 w-5 text-emerald-400" /> Supabase Auth
              </div>
              <div className="flex items-center gap-2 font-bold text-lg text-slate-300">
                <Layers className="h-5 w-5 text-cyan-400" /> Vercel Edge
              </div>
            </div>
          </div>
        </section>

        {/* ===================== BENTO GRID FEATURES ===================== */}
        <section id="features" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-wide">
                <Zap className="h-3.5 w-3.5" />
                Puissance & Efficacité
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Tout ce dont votre SaaS a besoin pour triompher
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                Épargnez-vous des mois d&apos;ingénierie complexe. Notre architecture est optimisée pour la conversion et l&apos;évolutivité sans friction.
              </p>
            </div>

            {/* Bento Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 - Large card */}
              <div className="md:col-span-2 rounded-2xl glass-panel glass-panel-hover p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Tableau de bord de performance en temps réel
                  </h3>
                  <p className="text-slate-400 leading-relaxed max-w-xl">
                    Visualisez instantanément vos abonnements actifs, votre churn et vos revenus récurrents. Ne naviguez plus à vue : prenez des décisions stratégiques fondées sur la data.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400" /> MRR & ARR automatiques
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400" /> Suivi du Churn Rate
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-indigo-400" /> Export CSV & PDF
                  </span>
                </div>
              </div>

              {/* Feature 2 - Small card */}
              <div className="rounded-2xl glass-panel glass-panel-hover p-8 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Facturation & Stripe
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Gérez les abonnements, les factures conformes et le portail client sans écrire une seule ligne de code bancaire complexe.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <Link href="/dashboard/billing" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                    Voir la démo de facturation <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Feature 3 - Small card */}
              <div className="rounded-2xl glass-panel glass-panel-hover p-8 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Sécurité & Multi-Tenant
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Cloisonnement strict des données entre clients. Chiffrement AES-256 et conformité RGPD intégrée dès le premier jour.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-400">
                  Certifié SOC-2 Type II Ready
                </div>
              </div>

              {/* Feature 4 - Large card */}
              <div className="md:col-span-2 rounded-2xl glass-panel glass-panel-hover p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Automatisation par Intelligence Artificielle
                  </h3>
                  <p className="text-slate-400 leading-relaxed max-w-xl">
                    Détectez les clients à risque d&apos;attrition avant qu&apos;ils ne partent et recevez des alertes automatiques d&apos;opportunités d&apos;upsell basées sur l&apos;usage de vos utilisateurs.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" /> Alertes Slack & Discord
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" /> Prévisions des flux de trésorerie
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg">
                    <CheckCircle2 className="h-4 w-4 text-cyan-400" /> Déclencheurs de webhooks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== DASHBOARD CTA TEASER ===================== */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-indigo-950/60 via-purple-950/50 to-slate-900 border border-indigo-500/30 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Envie de voir à quoi ressemble l&apos;espace client ?
                </h3>
                <p className="text-slate-300 text-sm sm:text-base">
                  Accédez directement au tableau de bord interactif avec des données de démonstration prêtes à l&apos;emploi.
                </p>
              </div>
              <Link
                href="/dashboard"
                className="shrink-0 px-6 py-3.5 rounded-xl bg-white text-slate-950 hover:bg-slate-100 font-bold text-sm shadow-xl flex items-center gap-2 transition-transform hover:scale-105"
              >
                Ouvrir le Dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===================== PRICING SECTION ===================== */}
        <PricingSection />

        {/* ===================== TESTIMONIALS ===================== */}
        <section id="testimonials" className="py-24 border-t border-white/5 bg-[#060911]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-wide">
                <Star className="h-3.5 w-3.5 fill-emerald-400" />
                Retour d&apos;expérience
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Recommandé par les créateurs qui bâtissent l&apos;avenir
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "En moins de 48 heures, nous avions connecté nos abonnements Stripe et déployé le dashboard. Cela nous a fait économiser au moins deux mois de travail d'ingénierie.",
                  author: "Alexandre Martin",
                  role: "Fondateur de ScaleFlow",
                  stars: 5,
                },
                {
                  quote:
                    "L'interface est d'une fluidité et d'une élégance rares. Nos clients nous complimentent constamment sur la clarté de leur espace de facturation.",
                  author: "Sophie Laurent",
                  role: "Directrice Produit chez DataPulse",
                  stars: 5,
                },
                {
                  quote:
                    "Le meilleur investissement pour lancer un SaaS en 2026. L'automatisation des métriques nous permet d'identifier immédiatement les sources de croissance.",
                  author: "Karim Benali",
                  role: "CEO chez NexusLab",
                  stars: 5,
                },
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl glass-panel p-8 flex flex-col justify-between space-y-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white text-sm">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.author}</p>
                      <p className="text-xs text-slate-400">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FAQ SECTION ===================== */}
        <FaqSection />

        {/* ===================== FINAL CALL TO ACTION ===================== */}
        <section className="py-24 relative overflow-hidden">
          <div className="gradient-glow w-96 h-96 bg-purple-600/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="rounded-3xl glass-panel border border-indigo-500/30 p-10 sm:p-16 text-center space-y-6 shadow-2xl">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Prêt à faire décoller votre activité ?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
                Lancez votre essai gratuit de 14 jours sans carte bancaire et accédez instantanément à toutes les fonctionnalités.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/register"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-base shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2"
                >
                  Créer mon compte maintenant
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/login"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white font-semibold text-base transition-colors"
                >
                  J&apos;ai déjà un compte
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
