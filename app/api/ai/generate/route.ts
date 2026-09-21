import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { type, topic, description, audience, tone, language } = await req.json();

    if (!topic) {
      return NextResponse.json(
        { error: "Le sujet ou titre est obligatoire." },
        { status: 400 }
      );
    }

    // Intelligence de génération contextuelle multilingue
    let generatedContent = "";

    if (language === "ar") {
      // Arabe
      if (type === "social") {
        generatedContent = `🚀 **${topic}**\n\nهل تبحث عن أفضل طريقة لتطوير نشاطك وزيادة مبيعاتك؟\n\n${description || "نقدم لكم الحل الأمثل والمصمم خصيصاً لتلبية احتياجاتكم بكفاءة عالية واحترافية لا مثيل لها."}\n\n✨ **أهم المميزات:**\n• توفير أكثر من 40% من الوقت والجهد يومياً\n• دعم فني مستمر وسرعة فائقة في التنفيذ\n• حلول مبتكرة تناسب تطلعاتكم وتواكب السوق\n\n🎯 **الفئة المستهدفة:** ${audience || "رواد الأعمال وأصحاب المشاريع الطموحة"}\n\n👇 شاركونا استفساراتكم في التعليقات أو تواصلوا معنا مباشرة عبر الرسائل الخاصة للاستفادة من العرض الحصري!\n\n#ريادة_الأعمال #تسويق_إلكتروني #تطوير_الأعمال #ابتكار`;
      } else if (type === "email") {
        generatedContent = `الموضوع: فرصة حصرية لتطوير ${topic} 🎯\n\nمرحباً بك،\n\nأتمنى أن تصلك هذه الرسالة وأنت في أتم الصحة والعافية.\n\nلاحظنا اهتمامكم بتطوير أعمالكم، ويسرنا أن نعرض عليكم حلولنا في: **${topic}**.\n\n${description || "لقد ساعدنا العديد من الشركاء في تحقيق نمو ملموس من خلال تبسيط العمليات ورفع الكفاءة التشغيلية."}\n\nهل يناسبكم تحديد موعد قصير لمدة 10 دقائق هذا الأسبوع لمناقشة كيف يمكننا مساعدتكم في تحقيق أهدافكم؟\n\nمع خالص التحيات والتقدير،\nفريق NovaSaaS`;
      } else {
        generatedContent = `📦 **الوصف التسويقي المميز: ${topic}**\n\nاستمتع بتجربة فريدة مع منتج يجمع بين الأداء المتقدم وسهولة الاستخدام.\n\n${description || "تم تصميمه بدقة فائقة ليوفر لك تجربة استثنائية تفوق التوقعات وتضمن لك أعلى مستويات الجودة والرضا."}\n\n🔹 **لماذا تختار هذا المنتج؟**\n1. جودة عالية ومضمونة 100%\n2. توفير الوقت والجهد\n3. أفضل قيمة مقابل السعر في السوق\n\n⚡ **اطلب الآن قبل نفاد الكمية واستفد من التوصيل السريع!**`;
      }
    } else if (language === "en") {
      // Anglais
      if (type === "social") {
        generatedContent = `🔥 **${topic}**\n\nStop wasting hours on manual tasks. It's time to scale your business the smart way.\n\n${description || "Discover the next-generation workflow built for high-performing teams and ambitious creators."}\n\n💡 **Key Highlights:**\n✅ 3.4x faster execution on daily operations\n✅ Instant automation & real-time analytics\n✅ Trusted by 10,000+ modern founders\n\n🎯 **Built for:** ${audience || "Founders, agencies, and high-growth businesses"}\n\n👉 Drop a comment below or send us a DM to unlock your free 14-day trial today!\n\n#Growth #SaaS #Productivity #Automation #BusinessScale`;
      } else if (type === "email") {
        generatedContent = `Subject: Quick question regarding ${topic} 🚀\n\nHi there,\n\nI came across your profile and noticed how actively you are scaling your business.\n\nWe recently launched a breakthrough solution for **${topic}** designed specifically to help ${audience || "ambitious companies"} eliminate bottlenecks.\n\n${description || "Our clients typically see a 35% increase in operational efficiency within their first 30 days."}\n\nWould you be open to a quick 5-minute chat this Thursday to see if this could be a fit for your workflow?\n\nBest regards,\nThe NovaSaaS Team`;
      } else {
        generatedContent = `✨ **Product Spotlight: ${topic}**\n\nEngineered for peak performance, reliability, and seamless scalability.\n\n${description || "Everything you need to deliver high-impact results without the complexity of traditional tools."}\n\n🌟 **Why you'll love it:**\n• Effortless setup in under 5 minutes\n• Bank-grade security & lightning-fast speed\n• Designed to deliver maximum ROI from day one\n\n🚀 **Get started today and experience the difference!**`;
      }
    } else {
      // Français (par défaut)
      if (type === "social") {
        generatedContent = `💡 **${topic}**\n\nEt si vous pouviez démultiplier vos résultats sans y passer vos soirées ?\n\n${description || "Découvrez l'approche moderne qui permet aux entrepreneurs et équipes ambitieuses d'automatiser leur croissance avec une efficacité chirurgicale."}\n\n⚡ **Ce qui change tout :**\n• Gain de temps estimé : +15 heures par semaine\n• Visibilité totale sur vos performances clés\n• Mise en place en moins de 10 minutes sans compétences techniques\n\n🎯 **Idéal pour :** ${audience || "Entrepreneurs, créateurs, agences et PME"}\n\n👇 Dites-moi en commentaire quel est votre plus grand défi sur ce sujet, ou contactez-nous en message privé pour tester l'outil gratuitement !\n\n#Entrepreneuriat #Productivite #Croissance #MarketingDigital #Innovation`;
      } else if (type === "email") {
        generatedContent = `Objet : Une opportunité concrète pour booster votre ${topic} 📈\n\nBonjour,\n\nJe me permets de vous contacter car j'ai remarqué l'énergie avec laquelle vous développez vos projets.\n\nNous avons récemment conçu une solution clé en main dédiée à : **${topic}**.\n\n${description || "Notre objectif est simple : faire gagner du temps précieux aux entreprises comme la vôtre en automatisant les tâches à faible valeur ajoutée."}\n\nSeriez-vous disponible pour un échange rapide de 10 minutes cette semaine afin de voir si cela peut vous être utile ?\n\nBien cordialement,\nL'équipe NovaSaaS`;
      } else if (type === "ads") {
        generatedContent = `🎯 **HOOK D'ACCROCHE :**\nVous perdez du temps avec votre méthode actuelle pour ${topic} ?\n\n🔥 **CORPS DU MESSAGE :**\n${description || "Arrêtez de bricoler avec des outils dispersés. Centralisez tout sur une seule plateforme intuitive et voyez la différence dès aujourd'hui."}\n\n✅ 100% en ligne et accessible partout\n✅ Support réactif disponible 7j/7\n✅ Essai gratuit de 14 jours sans engagement\n\n👉 **APPEL À L'ACTION :**\nCliquez sur le lien ci-dessous pour réserver votre accès exclusif avant la fin de l'offre !`;
      } else {
        generatedContent = `✨ **Fiche Produit / Argumentaire : ${topic}**\n\nAlliez puissance, simplicité et élégance pour répondre aux exigences les plus élevées.\n\n${description || "Un produit conçu avec rigueur pour vous offrir une fiabilité irréprochable et un retour sur investissement immédiat."}\n\n📌 **Points Forts :**\n1. Qualité supérieure garantie et éprouvée\n2. Ergonomie pensée pour l'utilisateur final\n3. Excellent rapport performance / coût\n\n🛒 **Commandez dès maintenant et bénéficiez de nos conditions privilégiées !**`;
      }
    }

    return NextResponse.json({
      content: generatedContent,
      wordsCount: generatedContent.split(/\s+/).filter(Boolean).length,
      readingTime: "1 min",
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("AI Generate Error:", error);
    return NextResponse.json(
      { error: error.message || "Erreur interne de génération IA" },
      { status: 500 }
    );
  }
}
