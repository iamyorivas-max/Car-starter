import { Content, Language } from './types';

export const translations: Record<Language, Content> = {
  fr: {
    nav: {
      features: "Fonctionnalités",
      specs: "Spécifications",
      reviews: "Avis",
      buy: "Acheter",
    },
    hero: {
      badge: "Nouvelle Technologie 2024",
      title: "Démarrez votre véhicule en quelques secondes — même avec zéro batterie.",
      subtitle: "La puissance ultime dans votre poche. Ne restez plus jamais bloqué sur la route.",
      ctaPrimary: "Acheter maintenant",
      ctaSecondary: "Voir les caractéristiques",
    },
    benefits: {
      title: "Pourquoi choisir VoltStart Pro ?",
      items: [
        { title: "Démarrage Instantané", desc: "Redémarre une batterie morte en 1 seconde." },
        { title: "Puce AI Intelligente", desc: "Protection contre la surchauffe et l'inversion de polarité." },
        { title: "Universel 12V", desc: "Compatible avec tous les véhicules essence et diesel 12V." },
        { title: "Pinces Ultra-Sûres", desc: "Conception anti-étincelles pour une sécurité maximale." },
        { title: "Compact & Puissant", desc: "Tient dans la boîte à gants, puissant comme un garage." },
        { title: "Multi-usages", desc: "Chargez aussi vos téléphones, tablettes et accessoires." },
      ]
    },
    vehicles: {
      title: "Compatible avec tout véhicule 12V",
      types: ["Citadine", "Moto", "SUV / 4x4", "Van", "Hybride / Électrique", "Utilitaire", "Pick-up"],
    },
    specs: {
      title: "Spécifications Techniques",
      labels: {
        capacity: "Capacité de la Batterie",
        current: "Courant de Crête",
        temp: "Température de Fonctionnement",
        ports: "Ports de Sortie",
        protection: "Protections de Sécurité",
      },
      values: {
        capacity: "20,000 mAh",
        current: "2000A (Max)",
        temp: "-20°C à 60°C",
        ports: "2x USB-A (QC 3.0), 1x USB-C",
        protection: "8 Niveaux (AI Chip)",
      },
    },
    comparison: {
      title: "La Différence VoltStart",
      weak: "Batterie Faible",
      instant: "Démarrage Immédiat",
      traditional: "Câbles Encombrants",
      smart: "Booster Intelligent",
      vs: "VS",
    },
    testimonials: {
      title: "Ce que disent nos clients",
      reviews: [
        { name: "Marc D.", text: "M'a sauvé un matin d'hiver glacial. Démarrage instantané de mon diesel 3L.", stars: 5 },
        { name: "Sophie L.", text: "Super facile à utiliser, même sans rien connaître en mécanique.", stars: 5 },
        { name: "Karim B.", text: "Qualité de fabrication impressionnante. La charge rapide USB est un gros plus.", stars: 5 },
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      questions: [
        { q: "Combien de fois puis-je démarrer ma voiture avec une charge ?", a: "Jusqu'à 30 fois sur une seule charge complète." },
        { q: "Est-ce compatible avec les moteurs diesel ?", a: "Oui, jusqu'à 8.0L Essence et 6.0L Diesel." },
        { q: "Combien de temps tient la charge en veille ?", a: "La batterie tient sa charge pendant 6 à 12 mois, mais nous recommandons de vérifier tous les 3 mois." },
        { q: "Y a-t-il une garantie ?", a: "Oui, une garantie constructeur de 2 ans est incluse." },
        { q: "Puis-je l'emmener en avion ?", a: "Oui, la capacité est inférieure à la limite autorisée en cabine (généralement 100Wh)." },
        { q: "Comment fonctionne la lampe LED ?", a: "Appui long pour allumer, appui court pour changer de mode (SOS, Strobe, Fixe)." },
      ]
    },
    footer: {
      cta: "Commandez maintenant",
      subtext: "Livraison gratuite & Garantie 30 jours satisfait ou remboursé",
      copyright: "© 2024 VoltStart. Tous droits réservés.",
    },
    checkout: {
      title: "Finaliser la commande",
      product: "VoltStart Pro - Pack Complet",
      price: "89,99 €",
      labels: {
        name: "Nom complet",
        email: "Adresse email",
        phone: "Numéro de téléphone",
        address: "Adresse de livraison",
        city: "Ville & Code Postal",
        card: "Carte Bancaire (Simulé)",
      },
      action: "Payer et Commander",
      success: {
        title: "Commande Confirmée !",
        message: "Merci pour votre achat. Vous recevrez un email de confirmation avec le numéro de suivi sous peu.",
        close: "Fermer",
      }
    }
  },
  ar: {
    nav: {
      features: "المميزات",
      specs: "المواصفات",
      reviews: "التقييمات",
      buy: "شراء",
    },
    hero: {
      badge: "تكنولوجيا حديثة 2024",
      title: "شغّل سيارتك في ثوانٍ حتى مع بطارية منعدمة.",
      subtitle: "القوة القصوى في جيبك. لن تعلق على الطريق بعد اليوم.",
      ctaPrimary: "اطلب الآن",
      ctaSecondary: "شاهد المميزات",
    },
    benefits: {
      title: "لماذا تختار VoltStart Pro؟",
      items: [
        { title: "تشغيل فوري", desc: "يُعيد تشغيل البطارية الميتة في ثانية واحدة." },
        { title: "شريحة AI ذكية", desc: "حماية ذكية من الحرارة الزائدة وعكس الأقطاب." },
        { title: "لكل المركبات 12V", desc: "متوافق مع جميع سيارات البنزين والديزل 12 فولت." },
        { title: "مشابك آمنة جداً", desc: "تصميم ضد الشرر لضمان أقصى درجات الأمان." },
        { title: "مدمج وقوي", desc: "بحجم صغير يناسب درج السيارة، وبقوة مركز صيانة." },
        { title: "متعدد الاستخدامات", desc: "اشحن هواتفك وأجهزتك اللوحية أيضاً." },
      ]
    },
    vehicles: {
      title: "متوافق مع جميع مركبات 12V",
      types: ["سيارة صغيرة", "دراجة نارية", "دفع رباعي SUV", "فان", "طاقة جديدة / كهربائية", "مركبة تجارية", "شاحنة بيك أب"],
    },
    specs: {
      title: "المواصفات التقنية",
      labels: {
        capacity: "سعة البطارية",
        current: "تيار الذروة",
        temp: "درجة حرارة التشغيل",
        ports: "منافذ الإخراج",
        protection: "أنظمة الحماية",
      },
      values: {
        capacity: "20,000 ملي أمبير",
        current: "2000A (حد أقصى)",
        temp: "-20°C إلى 60°C",
        ports: "2x USB-A (QC 3.0), 1x USB-C",
        protection: "8 مستويات (شريحة AI)",
      },
    },
    comparison: {
      title: "الفرق مع VoltStart",
      weak: "بطارية ضعيفة",
      instant: "تشغيل فوري",
      traditional: "كابلات مزعجة",
      smart: "مشغل ذكي",
      vs: "ضد",
    },
    testimonials: {
      title: "ماذا يقول عملاؤنا",
      reviews: [
        { name: "أحمد س.", text: "أنقذني في صباح شتوي بارد. شغّل سيارتي الديزل فوراً.", stars: 5 },
        { name: "سارة م.", text: "سهل الاستخدام جداً، حتى لمن لا يعرف شيئاً عن ميكانيكا السيارات.", stars: 5 },
        { name: "كريم ب.", text: "جودة تصنيع ممتازة. الشحن السريع للهاتف ميزة رائعة.", stars: 5 },
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      questions: [
        { q: "كم مرة يمكنني تشغيل سيارتي بشحنة واحدة؟", a: "ما يصل إلى 30 مرة بشحنة كاملة واحدة." },
        { q: "هل هو متوافق مع محركات الديزل؟", a: "نعم، حتى 8.0L بنزين و 6.0L ديزل." },
        { q: "كم تدوم الشحنة في وضع الانتظار؟", a: "تحتفظ البطارية بشحنتها لمدة 6-12 شهراً، لكن نوصي بالفحص كل 3 أشهر." },
        { q: "هل يوجد ضمان؟", a: "نعم، يشمل ضمان المصنع لمدة سنتين." },
        { q: "هل يمكنني أخذه في الطائرة؟", a: "نعم، السعة أقل من الحد المسموح به في المقصورة (عادة 100 واط/ساعة)." },
        { q: "كيف يعمل مصباح LED؟", a: "ضغط طويل للتشغيل، ضغط قصير لتغيير الوضع (SOS، وميض، ثابت)." },
      ]
    },
    footer: {
      cta: "اطلب الآن",
      subtext: "شحن مجاني وضمان استرجاع الأموال لمدة 30 يوماً",
      copyright: "© 2024 VoltStart. جميع الحقوق محفوظة.",
    },
    checkout: {
      title: "إتمام الطلب",
      product: "VoltStart Pro - الباقة الكاملة",
      price: "$95.00",
      labels: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        address: "عنوان التوصيل",
        city: "المدينة والرمز البريدي",
        card: "بطاقة الائتمان (محاكاة)",
      },
      action: "ادفع واطلب الآن",
      success: {
        title: "تم تأكيد الطلب!",
        message: "شكراً لشرائك. ستصلك رسالة تأكيد عبر البريد الإلكتروني تحتوي على رقم التتبع قريباً.",
        close: "إغلاق",
      }
    }
  }
};