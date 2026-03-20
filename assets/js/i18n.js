/* ================================================================
   SBKJ i18n – Multi-language Support
   Supported: en, zh, es, ru, ar, tr, fr, pt, hi, id
   ================================================================ */
(function () {
  "use strict";

  const LANGS = {
    en: { label: "English",    flag: "🇬🇧" },
    zh: { label: "中文",        flag: "🇨🇳" },
    es: { label: "Español",    flag: "🇪🇸" },
    ru: { label: "Русский",    flag: "🇷🇺" },
    ar: { label: "العربية",    flag: "🇸🇦" },
    tr: { label: "Türkçe",     flag: "🇹🇷" },
    fr: { label: "Français",   flag: "🇫🇷" },
    pt: { label: "Português",  flag: "🇧🇷" },
    hi: { label: "हिन्दी",      flag: "🇮🇳" },
    id: { label: "Bahasa",     flag: "🇮🇩" },
  };

  const T = {
    /* ---- Navigation ---- */
    "nav.home":         { en:"Home", zh:"首页", es:"Inicio", ru:"Главная", ar:"الرئيسية", tr:"Ana Sayfa", fr:"Accueil", pt:"Início", hi:"होम", id:"Beranda" },
    "nav.machines":     { en:"Machines", zh:"产品中心", es:"Máquinas", ru:"Оборудование", ar:"الآلات", tr:"Makineler", fr:"Machines", pt:"Máquinas", hi:"मशीनें", id:"Mesin" },
    "nav.guides":       { en:"Buying Guides", zh:"采购指南", es:"Guías de compra", ru:"Гайды покупателя", ar:"أدلة الشراء", tr:"Satın Alma Rehberleri", fr:"Guides d'achat", pt:"Guias de compra", hi:"खरीद गाइड", id:"Panduan Pembelian" },
    "nav.cases":        { en:"Case Studies", zh:"案例研究", es:"Casos de estudio", ru:"Кейс-стади", ar:"دراسات الحالة", tr:"Vaka Çalışmaları", fr:"Études de cas", pt:"Estudos de caso", hi:"केस स्टडी", id:"Studi Kasus" },
    "nav.talk":         { en:"Talk to Ryan", zh:"联系Ryan", es:"Hablar con Ryan", ru:"Связаться с Райаном", ar:"تحدث مع رايان", tr:"Ryan ile Görüş", fr:"Parler à Ryan", pt:"Falar com Ryan", hi:"Ryan से बात करें", id:"Bicara dengan Ryan" },
    "nav.quote":        { en:"Request Quote", zh:"获取报价", es:"Solicitar Cotización", ru:"Запросить цену", ar:"طلب عرض سعر", tr:"Teklif İste", fr:"Demander un devis", pt:"Solicitar cotação", hi:"कोटेशन मांगें", id:"Minta Penawaran" },
    "nav.about":        { en:"About", zh:"关于我们", es:"Nosotros", ru:"О нас", ar:"من نحن", tr:"Hakkımızda", fr:"À propos", pt:"Sobre", hi:"हमारे बारे में", id:"Tentang" },
    "nav.contact":      { en:"Contact", zh:"联系我们", es:"Contacto", ru:"Контакты", ar:"اتصل بنا", tr:"İletişim", fr:"Contact", pt:"Contato", hi:"संपर्क", id:"Kontak" },

    /* ---- Homepage Hero ---- */
    "hero.eyebrow":          { en:"HVAC & Industrial Duct Production", zh:"暖通空调与工业风管生产", es:"Producción de Conductos HVAC e Industriales", ru:"Производство воздуховодов HVAC", ar:"إنتاج مجاري الهواء HVAC والصناعية", tr:"HVAC & Endüstriyel Kanal Üretimi", fr:"Production de conduits HVAC & industriels", pt:"Produção de Dutos HVAC e Industriais", hi:"HVAC और औद्योगिक डक्ट उत्पादन", id:"Produksi Saluran HVAC & Industri" },
    "hero.eyebrow.credentials": { en:"Since 1995 · ISO 9001 · CE Certified · 80+ Countries", zh:"1995年创立 · ISO 9001 · CE认证 · 80+国家", es:"Desde 1995 · ISO 9001 · Certificado CE · 80+ países", ru:"С 1995 г. · ISO 9001 · CE · 80+ стран", ar:"منذ 1995 · ISO 9001 · شهادة CE · 80+ دولة", tr:"1995'ten beri · ISO 9001 · CE Sertifikalı · 80+ Ülke", fr:"Depuis 1995 · ISO 9001 · Certifié CE · 80+ pays", pt:"Desde 1995 · ISO 9001 · Certificado CE · 80+ países", hi:"1995 से · ISO 9001 · CE प्रमाणित · 80+ देश", id:"Sejak 1995 · ISO 9001 · Tersertifikasi CE · 80+ Negara" },
    "hero.title":       { en:"HVAC Duct Machinery.<br/>Built to Run Production.", zh:"暖通风管机械。<br/>为持续生产而生。", es:"Maquinaria para conductos HVAC.<br/>Fabricada para producción continua.", ru:"Оборудование для воздуховодов HVAC.<br/>Создано для производства.", ar:"آلات مجاري هواء HVAC.<br/>مصممة لتشغيل الإنتاج.", tr:"HVAC Kanal Makineleri.<br/>Sürekli Üretime Hazır.", fr:"Machines de conduits HVAC.<br/>Conçues pour la production.", pt:"Máquinas de dutos HVAC.<br/>Feitas para produção contínua.", hi:"HVAC डक्ट मशीनरी।<br/>उत्पादन के लिए बनाई गई।", id:"Mesin Saluran HVAC.<br/>Dirancang untuk Produksi." },
    "hero.lead":        { en:"Auto duct lines, spiral tubeformers, complete factory design — for operations that run on output.", zh:"全自动风管线、螺旋成型机、完整工厂设计——为持续稳定产能而生。", es:"Líneas automáticas, tubeformers espirales, diseño de fábrica completo — para operaciones que viven de la producción.", ru:"Автоматические линии, спиральные трубоформеры, полное проектирование завода — для производств, живущих на выпуске.", ar:"خطوط تلقائية وآلات تشكيل حلزونية وتصميم مصنع متكامل — لعمليات تعتمد على الإنتاج المستمر.", tr:"Otomatik kanal hatları, spiral şekillendiriciler, tam fabrika tasarımı — sürekli çıktıya dayanan operasyonlar için.", fr:"Lignes automatiques, tubeformers spiralés, conception d'usine complète — pour les opérations qui vivent de leur production.", pt:"Linhas automáticas, tubeformers espirais, projeto completo de fábrica — para operações que dependem da produção.", hi:"ऑटो डक्ट लाइनें, स्पाइरल ट्यूबफॉर्मर, पूर्ण फैक्टरी डिज़ाइन — निरंतर उत्पादन पर चलने वाले कारखानों के लिए।", id:"Jalur duct otomatis, tubeformer spiral, desain pabrik lengkap — untuk operasi yang bergantung pada output." },
    "hero.cta.quote":   { en:"Request a Quote", zh:"获取报价", es:"Solicitar cotización", ru:"Запросить цену", ar:"طلب عرض سعر", tr:"Teklif İste", fr:"Demander un devis", pt:"Solicitar cotação", hi:"कोटेशन मांगें", id:"Minta Penawaran" },
    "hero.cta.watch":   { en:"Watch Machines Running", zh:"观看设备运行", es:"Ver máquinas en acción", ru:"Смотреть оборудование", ar:"شاهد الآلات تعمل", tr:"Makineleri Çalışırken İzle", fr:"Voir les machines en marche", pt:"Ver máquinas funcionando", hi:"मशीनें चलते देखें", id:"Lihat Mesin Berjalan" },
    "hero.cta1":        { en:"Request a quotation", zh:"获取报价", es:"Solicitar cotización", ru:"Запросить цену", ar:"طلب عرض أسعار", tr:"Teklif İste", fr:"Demander un devis", pt:"Solicitar cotação", hi:"कोटेशन का अनुरोध करें", id:"Minta Penawaran" },
    "hero.cta2":        { en:"Watch machines in action", zh:"观看设备运行", es:"Ver máquinas en acción", ru:"Смотреть в действии", ar:"شاهد الآلات أثناء العمل", tr:"Makineleri İzle", fr:"Voir les machines en action", pt:"Ver máquinas em ação", hi:"मशीनें कार्य में देखें", id:"Lihat Mesin Beraksi" },
    "hero.proof.1":     { en:"5,000+ machines installed in 80+ countries", zh:"5000+台设备安装于80+个国家", es:"5,000+ máquinas instaladas en 80+ países", ru:"5 000+ машин в 80+ странах", ar:"5,000+ آلة مثبتة في 80+ دولة", tr:"80+ ülkede 5.000+ makine kurulumu", fr:"5 000+ machines installées dans 80+ pays", pt:"5.000+ máquinas instaladas em 80+ países", hi:"80+ देशों में 5,000+ मशीनें स्थापित", id:"5.000+ mesin terpasang di 80+ negara" },
    "hero.proof.2":     { en:"Turn-key factory design: layout, flow, commissioning", zh:"交钥匙工厂设计：布局、流程、调试", es:"Diseño de fábrica llave en mano: distribución, flujo, puesta en marcha", ru:"Проектирование завода под ключ: планировка, поток, пуск", ar:"تصميم مصنع متكامل: تخطيط، تدفق، تشغيل", tr:"Anahtar teslim fabrika tasarımı: yerleşim, akış, devreye alma", fr:"Conception d'usine clé en main: agencement, flux, mise en service", pt:"Projeto de fábrica chave na mão: layout, fluxo, comissionamento", hi:"टर्न-की फैक्टरी डिज़ाइन: लेआउट, फ्लो, कमीशनिंग", id:"Desain pabrik turn-key: tata letak, aliran, komisioning" },
    "hero.proof.3":     { en:"60+ active patents across forming and CNC control", zh:"60+项有效专利涵盖成型及CNC控制", es:"60+ patentes activas en conformado y control CNC", ru:"60+ активных патентов в области формовки и ЧПУ", ar:"60+ براءة اختراع نشطة في التشكيل والتحكم CNC", tr:"Şekillendirme ve CNC kontrolünde 60+ aktif patent", fr:"60+ brevets actifs dans le formage et la commande CNC", pt:"60+ patentes ativas em conformação e controle CNC", hi:"फॉर्मिंग और CNC कंट्रोल में 60+ सक्रिय पेटेंट", id:"60+ paten aktif dalam pembentukan dan kontrol CNC" },
    "hero.ryan.name":   { en:"Ryan Tao — Melbourne, AU", zh:"Ryan Tao — 澳大利亚墨尔本", es:"Ryan Tao — Melbourne, AU", ru:"Райан Тао — Мельбурн, AU", ar:"رايان تاو — ملبورن، AU", tr:"Ryan Tao — Melbourne, AU", fr:"Ryan Tao — Melbourne, AU", pt:"Ryan Tao — Melbourne, AU", hi:"Ryan Tao — Melbourne, AU", id:"Ryan Tao — Melbourne, AU" },
    "hero.ryan.note":   { en:" · Direct inquiries, your timezone", zh:" · 直接对接，匹配您的时区", es:" · Consultas directas, su zona horaria", ru:" · Прямые запросы, ваш часовой пояс", ar:" · استفسارات مباشرة في منطقتك الزمنية", tr:" · Doğrudan sorgular, saat diliminiz", fr:" · Demandes directes, votre fuseau horaire", pt:" · Consultas diretas, seu fuso horário", hi:" · सीधी पूछताछ, आपका टाइमज़ोन", id:" · Pertanyaan langsung, zona waktu Anda" },

    /* ---- Who strip ---- */
    "who.label":        { en:"Built for", zh:"适用于", es:"Diseñado para", ru:"Создано для", ar:"مصمم لـ", tr:"Şunlar için", fr:"Conçu pour", pt:"Desenvolvido para", hi:"के लिए बनाया गया", id:"Dibuat untuk" },
    "who.1":            { en:"HVAC duct fabrication factories", zh:"暖通风管加工厂", es:"Fábricas de fabricación de conductos HVAC", ru:"Заводы по изготовлению воздуховодов", ar:"مصانع تصنيع مجاري الهواء", tr:"HVAC kanal imalat fabrikaları", fr:"Usines de fabrication de conduits HVAC", pt:"Fábricas de fabricação de dutos HVAC", hi:"HVAC डक्ट निर्माण कारखाने", id:"Pabrik fabrikasi saluran HVAC" },
    "who.2":            { en:"Contractors scaling in-house production", zh:"提升自有产能的承包商", es:"Contratistas que amplían producción propia", ru:"Подрядчики, расширяющие производство", ar:"المقاولون الذين يوسعون الإنتاج الداخلي", tr:"Dahili üretimi artıran müteahhitler", fr:"Entrepreneurs développant la production interne", pt:"Empreiteiros expandindo produção interna", hi:"इन-हाउस उत्पादन बढ़ाते ठेकेदार", id:"Kontraktor yang meningkatkan produksi internal" },
    "who.3":            { en:"OEM duct equipment manufacturers", zh:"OEM风管设备制造商", es:"Fabricantes OEM de equipos para conductos", ru:"OEM-производители оборудования для воздуховодов", ar:"مصنعو معدات مجاري الهواء OEM", tr:"OEM kanal ekipmanı üreticileri", fr:"Fabricants OEM d'équipements de conduits", pt:"Fabricantes OEM de equipamentos para dutos", hi:"OEM डक्ट उपकरण निर्माता", id:"Produsen peralatan saluran OEM" },
    "who.4":            { en:"Industrial ventilation workshops", zh:"工业通风车间", es:"Talleres de ventilación industrial", ru:"Мастерские промышленной вентиляции", ar:"ورش تهوية صناعية", tr:"Endüstriyel havalandırma atölyeleri", fr:"Ateliers de ventilation industrielle", pt:"Oficinas de ventilação industrial", hi:"औद्योगिक वेंटिलेशन वर्कशॉप", id:"Bengkel ventilasi industri" },
    "who.5":            { en:"Sheet metal workshop upgraders", zh:"钣金车间升级方", es:"Modernizadores de talleres de chapa metálica", ru:"Обновляющие листообрабатывающие цеха", ar:"مطوّرو ورش الصفائح المعدنية", tr:"Sac metal atölyesi güncelleyiciler", fr:"Modernisateurs d'ateliers de tôlerie", pt:"Modernizadores de oficinas de chapa metálica", hi:"शीट मेटल वर्कशॉप अपग्रेडर्स", id:"Peningkat bengkel lembaran logam" },

    /* ---- Stats ---- */
    "stats.years":      { en:"Years Manufacturing", zh:"年制造经验", es:"Años de fabricación", ru:"Лет производства", ar:"سنوات التصنيع", tr:"Yıllık Üretim", fr:"Années de fabrication", pt:"Anos de fabricação", hi:"वर्षों का निर्माण", id:"Tahun Manufaktur" },
    "stats.countries":  { en:"Countries Served", zh:"服务国家", es:"Países atendidos", ru:"Стран обслужено", ar:"دولة تم خدمتها", tr:"Ülkeye Hizmet", fr:"Pays desservis", pt:"Países atendidos", hi:"देशों में सेवा", id:"Negara Dilayani" },
    "stats.machines":   { en:"Machines Installed", zh:"设备安装量", es:"Máquinas instaladas", ru:"Установлено машин", ar:"آلة مثبتة", tr:"Makine Kurulumu", fr:"Machines installées", pt:"Máquinas instaladas", hi:"मशीनें स्थापित", id:"Mesin Terpasang" },
    "stats.patents":    { en:"Active Patents", zh:"有效专利", es:"Patentes activas", ru:"Активных патентов", ar:"براءات اختراع نشطة", tr:"Aktif Patent", fr:"Brevets actifs", pt:"Patentes ativas", hi:"सक्रिय पेटेंट", id:"Paten Aktif" },
    "stats.support":    { en:"Technical Support", zh:"技术支持", es:"Soporte técnico", ru:"Техническая поддержка", ar:"الدعم الفني", tr:"Teknik Destek", fr:"Support technique", pt:"Suporte técnico", hi:"तकनीकी सहायता", id:"Dukungan Teknis" },
    "stats.warranty":   { en:"Standard Warranty", zh:"标准质保期", es:"Garantía estándar", ru:"Стандартная гарантия", ar:"الضمان القياسي", tr:"Standart Garanti", fr:"Garantie standard", pt:"Garantia padrão", hi:"मानक वारंटी", id:"Garansi Standar" },

    /* ---- Why Section ---- */
    "why.eyebrow":      { en:"Why SBKJ", zh:"为什么选择SBKJ", es:"Por qué SBKJ", ru:"Почему SBKJ", ar:"لماذا SBKJ", tr:"Neden SBKJ", fr:"Pourquoi SBKJ", pt:"Por que SBKJ", hi:"SBKJ क्यों", id:"Mengapa SBKJ" },
    "why.title":        { en:"What Sets Us Apart", zh:"我们的核心优势", es:"Lo que nos diferencia", ru:"Наши преимущества", ar:"ما يميزنا", tr:"Bizi Farklı Kılan", fr:"Ce qui nous distingue", pt:"O que nos diferencia", hi:"हमें अलग बनाता है", id:"Yang Membedakan Kami" },

    /* ---- Featured Machines ---- */
    "feat.desc":        { en:"Eight core machines below. 50+ models across 9 categories for complete spiral and rectangular duct production lines.", zh:"以下展示8台核心设备。9大类别50+型号，覆盖螺旋与矩形风管完整生产线。", es:"Ocho máquinas principales a continuación. 50+ modelos en 9 categorías para líneas de producción completas.", ru:"Восемь ключевых машин ниже. 50+ моделей в 9 категориях для полных производственных линий.", ar:"ثماني آلات أساسية أدناه. أكثر من 50 طرازًا في 9 فئات لخطوط إنتاج كاملة.", tr:"Aşağıda sekiz temel makine. 9 kategoride 50+ model, eksiksiz üretim hatları için.", fr:"Huit machines principales ci-dessous. 50+ modèles dans 9 catégories pour des lignes de production complètes.", pt:"Oito máquinas principais abaixo. 50+ modelos em 9 categorias para linhas de produção completas.", hi:"नीचे आठ मुख्य मशीनें। 9 श्रेणियों में 50+ मॉडल, पूर्ण उत्पादन लाइनों के लिए।", id:"Delapan mesin utama di bawah. 50+ model di 9 kategori untuk jalur produksi lengkap." },
    "feat.eyebrow":     { en:"Priority Machine Range",zh:"主打产品系列", es:"Gama de Máquinas Prioritarias", ru:"Приоритетный ряд оборудования", ar:"نطاق الآلات الرئيسية", tr:"Öncelikli Makine Yelpazesi", fr:"Gamme de machines prioritaires", pt:"Linha prioritária de máquinas", hi:"प्राथमिक मशीन रेंज", id:"Rangkaian Mesin Prioritas" },
    "feat.title":       { en:"Every Machine Your Duct Factory Needs", zh:"风管工厂所需的全套设备", es:"Todas las Máquinas que Necesita su Fábrica", ru:"Всё оборудование для вашего завода воздуховодов", ar:"كل الآلات التي تحتاجها مصنعك للقنوات", tr:"Kanal Fabrikanızın İhtiyacı Olan Her Makine", fr:"Toutes les machines dont votre usine de conduits a besoin", pt:"Toda máquina que sua fábrica de dutos precisa", hi:"आपकी डक्ट फैक्टरी की हर जरूरत की मशीन", id:"Setiap Mesin yang Dibutuhkan Pabrik Saluran Anda" },
    "feat.viewall":     { en:"Browse complete catalogue →", zh:"查看完整产品目录 →", es:"Ver catálogo completo →", ru:"Смотреть полный каталог →", ar:"تصفح الكتالوج الكامل ←", tr:"Tüm Kataloğu İncele →", fr:"Parcourir le catalogue →", pt:"Ver catálogo completo →", hi:"पूरा कैटलॉग देखें →", id:"Jelajahi Katalog Lengkap →" },
    "feat.group.auto":    { en:"Line Automation", zh:"自动生产线", es:"Automatización de línea", ru:"Линейная автоматизация", ar:"أتمتة خط الإنتاج", tr:"Hat Otomasyonu", fr:"Automatisation de ligne", pt:"Automatização de linha", hi:"लाइन ऑटोमेशन", id:"Otomasi Lini" },
    "feat.group.forming": { en:"Forming & Finishing", zh:"成型与精加工", es:"Formado y acabado", ru:"Формовка и финишная обработка", ar:"التشكيل والتشطيب", tr:"Şekillendirme ve Bitirme", fr:"Formage et finition", pt:"Formação e acabamento", hi:"फॉर्मिंग और फिनिशिंग", id:"Pembentukan & Penyelesaian" },

    /* ---- Factory Media ---- */
    "media.eyebrow":    { en:"Factory in Operation", zh:"工厂实况", es:"Fábrica en Funcionamiento", ru:"Завод в работе", ar:"المصنع في التشغيل", tr:"Fabrika Faaliyette", fr:"Usine en fonctionnement", pt:"Fábrica em operação", hi:"कारखाना संचालन में", id:"Pabrik Beroperasi" },
    "media.title":      { en:"Real Equipment. Real Production Environments.", zh:"真实设备，真实生产环境。", es:"Equipos reales. Entornos de producción reales.", ru:"Реальное оборудование. Реальные производственные условия.", ar:"معدات حقيقية. بيئات إنتاج حقيقية.", tr:"Gerçek Ekipman. Gerçek Üretim Ortamları.", fr:"Équipements réels. Environnements de production réels.", pt:"Equipamentos reais. Ambientes de produção reais.", hi:"वास्तविक उपकरण। वास्तविक उत्पादन वातावरण।", id:"Peralatan Nyata. Lingkungan Produksi Nyata." },
    "media.lead":       { en:"All images are actual SBKJ equipment, workshops, and installed lines — not renders or stock photography.", zh:"所有图片均为SBKJ实际设备、车间及安装线——非渲染图或库存照片。", es:"Todas las imágenes son equipos, talleres y líneas instaladas reales de SBKJ, no renders ni fotografías de stock.", ru:"Все изображения — реальное оборудование SBKJ, цеха и установленные линии, не рендеры.", ar:"جميع الصور معدات وورش وخطوط مركبة حقيقية من SBKJ — وليست صور مُقدَّرة أو مخزنة.", tr:"Tüm görseller gerçek SBKJ ekipmanları, atölyeleri ve kurulu hatları — render veya stok fotoğraf değil.", fr:"Toutes les images sont de vrais équipements, ateliers et lignes installées SBKJ — pas des rendus ni des photos stock.", pt:"Todas as imagens são equipamentos, oficinas e linhas instaladas reais da SBKJ — não renders ou fotos de banco.", hi:"सभी छवियां वास्तविक SBKJ उपकरण, कार्यशालाएं और स्थापित लाइनें हैं — रेंडर या स्टॉक फोटोग्राफी नहीं।", id:"Semua gambar adalah peralatan, bengkel, dan jalur terpasang SBKJ yang sebenarnya — bukan render atau foto stok." },

    /* ---- Machine Selector ---- */
    "selector.eyebrow":       { en:"Find the Right Machine", zh:"找到合适的设备", es:"Encuentra la máquina correcta", ru:"Найдите нужное оборудование", ar:"ابحث عن الآلة المناسبة", tr:"Doğru Makineyi Bulun", fr:"Trouvez la bonne machine", pt:"Encontre a máquina certa", hi:"सही मशीन खोजें", id:"Temukan Mesin yang Tepat" },
    "selector.title":         { en:"What Are You Trying to Produce?", zh:"您想生产什么？", es:"¿Qué quiere producir?", ru:"Что вы хотите производить?", ar:"ماذا تريد أن تنتج؟", tr:"Ne Üretmek İstiyorsunuz?", fr:"Qu'est-ce que vous cherchez à produire ?", pt:"O que você quer produzir?", hi:"आप क्या उत्पादन करना चाहते हैं?", id:"Apa yang Ingin Anda Produksi?" },
    "selector.lead":          { en:"Start with your production goal. We'll direct you to the right machine category, model options, and configuration advice.", zh:"从您的生产目标开始，我们将为您推荐合适的设备类别、型号和配置建议。", es:"Comience con su objetivo de producción. Le dirigiremos a la categoría correcta, opciones de modelo y asesoramiento.", ru:"Начните с цели производства. Мы направим вас к нужной категории, моделям и конфигурации.", ar:"ابدأ بهدف الإنتاج. سنوجهك إلى فئة الآلة المناسبة والخيارات والمشورة.", tr:"Üretim hedefinizle başlayın. Doğru kategori, model seçenekleri ve yapılandırma tavsiyesine yönlendireceğiz.", fr:"Commencez par votre objectif de production. Nous vous orienterons vers la bonne catégorie, les options de modèle et les conseils.", pt:"Comece com seu objetivo de produção. Direcionaremos você para a categoria certa, opções de modelo e conselhos.", hi:"अपने उत्पादन लक्ष्य से शुरू करें। हम आपको सही मशीन श्रेणी, मॉडल और कॉन्फ़िगरेशन सलाह तक पहुंचाएंगे।", id:"Mulai dengan tujuan produksi Anda. Kami akan mengarahkan Anda ke kategori mesin, pilihan model, dan saran konfigurasi yang tepat." },
    "selector.rect.intent":   { en:"Making rectangular duct?", zh:"需要生产矩形风管？", es:"¿Fabricar conductos rectangulares?", ru:"Производите прямоугольные воздуховоды?", ar:"تصنع قنوات مستطيلة؟", tr:"Dikdörtgen kanal mı üretiyorsunuz?", fr:"Vous fabriquez des conduits rectangulaires ?", pt:"Produzindo dutos retangulares?", hi:"रेक्टैंगुलर डक्ट बना रहे हैं?", id:"Membuat saluran persegi panjang?" },
    "selector.rect.title":    { en:"Rectangular Duct Lines", zh:"矩形风管生产线", es:"Líneas de conducto rectangular", ru:"Линии прямоугольных воздуховодов", ar:"خطوط قنوات مستطيلة", tr:"Dikdörtgen Kanal Hatları", fr:"Lignes de conduit rectangulaire", pt:"Linhas de duto retangular", hi:"रेक्टैंगुलर डक्ट लाइनें", id:"Lini Saluran Persegi Panjang" },
    "selector.rect.desc":     { en:"Coil-fed auto lines producing up to 2,500 m²/day. GI, stainless, or aluminum. 0.5–1.5 mm.", zh:"卷料自动送料，日产量高达2,500 m²。镀锌、不锈钢或铝板，厚度0.5–1.5 mm。", es:"Líneas automáticas de bobina. Hasta 2,500 m²/día. GI, inox o aluminio. 0,5–1,5 mm.", ru:"Автоматические линии с рулонной подачей. До 2 500 м²/день. GI, нержавейка, алюминий.", ar:"خطوط أوتوماتيكية بتغذية لفائفية. تنتج 2,500 م²/يوم. GI أو استانلس أو ألومنيوم.", tr:"Rulo beslemeli otomatik hatlar. Günde 2.500 m² üretim. GI, paslanmaz veya alüminyum.", fr:"Lignes auto à bobine. Jusqu'à 2 500 m²/jour. GI, inox ou aluminium. 0,5–1,5 mm.", pt:"Linhas automáticas com bobina. Até 2.500 m²/dia. GI, inox ou alumínio. 0,5–1,5 mm.", hi:"कॉइल-फेड ऑटो लाइनें। 2,500 m²/दिन तक। GI, स्टेनलेस, या एल्युमिनियम।", id:"Lini otomatis pengumpan gulungan. Hingga 2.500 m²/hari. GI, stainless, atau aluminium." },
    "selector.rect.cta":      { en:"Browse auto duct lines →", zh:"查看全自动风管线 →", es:"Ver líneas automáticas →", ru:"Смотреть автоматические линии →", ar:"تصفح خطوط القناة التلقائية ←", tr:"Otomatik kanal hatlarını incele →", fr:"Voir les lignes automatiques →", pt:"Ver linhas automáticas →", hi:"ऑटो डक्ट लाइनें देखें →", id:"Lihat jalur saluran otomatis →" },
    "selector.spiral.intent": { en:"Making spiral round duct?", zh:"需要生产螺旋圆管？", es:"¿Fabricar conductos redondos espirales?", ru:"Производите спиральные воздуховоды?", ar:"تصنع قنوات حلزونية مستديرة؟", tr:"Spiral yuvarlak kanal mı üretiyorsunuz?", fr:"Vous fabriquez des conduits ronds spiralés ?", pt:"Produzindo dutos redondos espirais?", hi:"स्पाइरल राउंड डक्ट बना रहे हैं?", id:"Membuat saluran bulat spiral?" },
    "selector.spiral.title":  { en:"Spiral Round Duct Machines", zh:"螺旋圆管成型机", es:"Máquinas de conducto redondo espiral", ru:"Машины для спиральных воздуховодов", ar:"آلات القنوات الحلزونية المستديرة", tr:"Spiral Yuvarlak Kanal Makineleri", fr:"Machines pour conduit rond spiral", pt:"Máquinas de duto redondo espiral", hi:"स्पाइरल राउंड डक्ट मशीनें", id:"Mesin Saluran Bulat Spiral" },
    "selector.spiral.desc":   { en:"Ø80–Ø1600 mm continuous spiral duct. Patented flying shear — no line stop at cut.", zh:"Ø80–Ø1600mm连续螺旋圆管。专利飞剪切割——切割时无需停机。", es:"Conducto Ø80–Ø1600 mm continuo. Cizalla volante patentada — sin parada en el corte.", ru:"Ø80–Ø1600 мм непрерывный спиральный воздуховод. Патентованный летучий нож — без остановки при резке.", ar:"قناة حلزونية مستمرة Ø80–Ø1600 ملم. مقص طائر براءة اختراع — بدون توقف عند القطع.", tr:"Ø80–Ø1600 mm sürekli spiral kanal. Patentli uçan makas — kesimde hat durmuyor.", fr:"Conduit spiral Ø80–Ø1600 mm continu. Cisaille volante brevetée — pas d'arrêt à la coupe.", pt:"Duto espiral Ø80–Ø1600 mm contínuo. Tesoura voadora patenteada — sem parada no corte.", hi:"Ø80–Ø1600 mm निरंतर स्पाइरल डक्ट। पेटेंटेड फ्लाइंग शियर — कट पर कोई स्टॉप नहीं।", id:"Saluran spiral Ø80–Ø1600 mm terus-menerus. Gunting terbang berpatent — tanpa berhenti saat potong." },
    "selector.spiral.cta":    { en:"Browse spiral machines →", zh:"查看螺旋风管机 →", es:"Ver máquinas espirales →", ru:"Смотреть спиральные машины →", ar:"تصفح آلات الحلزون ←", tr:"Spiral makineleri incele →", fr:"Voir les machines spiralées →", pt:"Ver máquinas espirais →", hi:"स्पाइरल मशीनें देखें →", id:"Lihat mesin spiral →" },
    "selector.elbow.intent":  { en:"Need fittings and elbows?", zh:"需要弯头及管件？", es:"¿Necesita accesorios y codos?", ru:"Нужны фитинги и отводы?", ar:"تحتاج إلى تجهيزات وأكواع؟", tr:"Bağlantı parçası ve dirsek mi arıyorsunuz?", fr:"Besoin de raccords et coudes ?", pt:"Precisa de conexões e cotovelos?", hi:"फिटिंग और एल्बो चाहिए?", id:"Butuh fitting dan siku?" },
    "selector.elbow.title":   { en:"Fittings & Elbow Machines", zh:"弯头及管件机械", es:"Máquinas para accesorios y codos", ru:"Машины для фитингов и отводов", ar:"آلات التجهيزات والأكواع", tr:"Bağlantı Parçası ve Dirsek Makineleri", fr:"Machines pour raccords et coudes", pt:"Máquinas para conexões e cotovelos", hi:"फिटिंग और एल्बो मशीनें", id:"Mesin Fitting & Siku" },
    "selector.elbow.desc":    { en:"Gore-lock elbow machines, plasma cutters, and fitting shapers for elbows and transitions.", zh:"戈尔锁定弯头机、等离子切割机和管件成型机，用于弯头和变径生产。", es:"Máquinas gore-lock, cortadoras plasma y formadoras para codos y transiciones.", ru:"Машины gore-lock, плазменные резаки и формователи для отводов и переходов.", ar:"آلات gore-lock وقواطع بلازما ومشكّلات تجهيزات للأكواع والتحولات.", tr:"Gore-lock dirsek makineleri, plazma kesiciler ve dirsek ile geçişler için şekillendiriciler.", fr:"Machines gore-lock, découpeuses plasma et formeurs pour coudes et transitions.", pt:"Máquinas gore-lock, cortadoras plasma e formadores para cotovelos e transições.", hi:"गोर-लॉक एल्बो मशीनें, प्लाज्मा कटर और एल्बो व ट्रांज़िशन के लिए फिटिंग शेपर्स।", id:"Mesin siku gore-lock, pemotong plasma, dan pembentuk untuk siku dan transisi." },
    "selector.elbow.cta":     { en:"Browse fittings machines →", zh:"查看管件机 →", es:"Ver máquinas de accesorios →", ru:"Смотреть машины для фитингов →", ar:"تصفح آلات التجهيزات ←", tr:"Bağlantı makinelerini incele →", fr:"Voir les machines de raccords →", pt:"Ver máquinas de conexões →", hi:"फिटिंग मशीनें देखें →", id:"Lihat mesin fitting →" },
    "selector.factory.intent":{ en:"Planning a complete duct factory?", zh:"规划完整的风管工厂？", es:"¿Planificando una fábrica de conductos completa?", ru:"Планируете завод воздуховодов целиком?", ar:"تخطط لإنشاء مصنع قنوات متكامل؟", tr:"Tam kanal fabrikası mı kuruyorsunuz?", fr:"Vous planifiez une usine de conduits complète ?", pt:"Planejando uma fábrica de dutos completa?", hi:"पूरी डक्ट फैक्टरी की योजना बना रहे हैं?", id:"Merencanakan pabrik saluran lengkap?" },
    "selector.factory.title": { en:"Factory Layout Planning", zh:"工厂整体规划", es:"Planificación de distribución de fábrica", ru:"Планирование планировки завода", ar:"تخطيط تصميم المصنع", tr:"Fabrika Yerleşim Planlaması", fr:"Planification de l'agencement d'usine", pt:"Planejamento de layout de fábrica", hi:"फैक्टरी लेआउट प्लानिंग", id:"Perencanaan Tata Letak Pabrik" },
    "selector.factory.desc":  { en:"Machine selection, floor layout, utilities, and commissioning — designed from coil to finished duct.", zh:"设备选型、车间布局、公用工程及调试——从料带到成品风管一站式设计。", es:"Selección de máquinas, distribución, servicios y puesta en marcha — de bobina a conducto terminado.", ru:"Выбор оборудования, планировка, инженерные сети и пуск — от рулона до готового воздуховода.", ar:"اختيار الآلات والتخطيط والمرافق والتشغيل — مصمم من اللفائف إلى القناة المكتملة.", tr:"Makine seçimi, yerleşim planı, altyapı ve devreye alma — rulo girdiden bitmiş kanala.", fr:"Sélection machines, agencement, utilités et mise en service — de la bobine au conduit fini.", pt:"Seleção de máquinas, layout, utilidades e comissionamento — da bobina ao duto acabado.", hi:"मशीन चयन, फ्लोर लेआउट, उपयोगिताएं और कमीशनिंग — कॉइल से तैयार डक्ट तक।", id:"Pemilihan mesin, tata letak, utilitas, dan komisioning — dari gulungan hingga saluran jadi." },
    "selector.factory.cta":   { en:"Plan your factory →", zh:"规划您的工厂 →", es:"Planifique su fábrica →", ru:"Запланировать завод →", ar:"خطط مصنعك ←", tr:"Fabrikanızı planlayın →", fr:"Planifier votre usine →", pt:"Planeje sua fábrica →", hi:"अपनी फैक्टरी प्लान करें →", id:"Rencanakan pabrik Anda →" },

    /* ---- Case Study Previews ---- */
    "cases.eyebrow":    { en:"Project Examples", zh:"项目案例", es:"Ejemplos de proyectos", ru:"Примеры проектов", ar:"أمثلة على المشاريع", tr:"Proje Örnekleri", fr:"Exemples de projets", pt:"Exemplos de projetos", hi:"परियोजना उदाहरण", id:"Contoh Proyek" },
    "cases.title":      { en:"How Buyers Are Running These Lines", zh:"客户如何运营这些产线", es:"Cómo los compradores operan estas líneas", ru:"Как покупатели используют эти линии", ar:"كيف يُشغّل المشترون هذه الخطوط", tr:"Alıcılar Bu Hatları Nasıl Çalıştırıyor", fr:"Comment les acheteurs exploitent ces lignes", pt:"Como os compradores operam essas linhas", hi:"खरीदार इन लाइनों को कैसे चला रहे हैं", id:"Bagaimana Pembeli Menjalankan Jalur Ini" },
    "cases.viewall":    { en:"View all case studies", zh:"查看全部案例", es:"Ver todos los estudios de caso", ru:"Смотреть все кейсы", ar:"عرض جميع دراسات الحالة", tr:"Tüm vaka çalışmalarını görüntüle", fr:"Voir toutes les études de cas", pt:"Ver todos os estudos de caso", hi:"सभी केस स्टडी देखें", id:"Lihat semua studi kasus" },

    /* ---- Homepage Video Section ---- */
    "vid.home.eyebrow": { en:"Machine in Operation", zh:"设备运行实况", es:"Máquina en Operación", ru:"Машина в работе", ar:"الآلة في التشغيل", tr:"Makine Çalışırken", fr:"Machine en opération", pt:"Máquina em operação", hi:"मशीन संचालन में", id:"Mesin Beroperasi" },
    "vid.home.title":   { en:"See the SBAL‑V Running at Production Speed", zh:"观看SBAL-V全速生产实况", es:"Vea el SBAL‑V funcionando a velocidad de producción", ru:"SBAL‑V на производственной скорости", ar:"شاهد SBAL‑V يعمل بسرعة الإنتاج", tr:"SBAL‑V'yi üretim hızında çalışırken görün", fr:"Voyez le SBAL‑V tourner à vitesse de production", pt:"Veja o SBAL‑V funcionando em velocidade de produção", hi:"SBAL‑V को उत्पादन गति पर चलते देखें", id:"Lihat SBAL‑V Berjalan dengan Kecepatan Produksi" },
    "vid.home.lead":    { en:"Official SBKJ factory footage — actual machine running at full production rate, not a staged demo.", zh:"SBKJ官方工厂实录——全速生产状态下的真实设备，非摆拍演示。", es:"Metraje oficial de fábrica SBKJ — máquina real a plena velocidad, no una demostración preparada.", ru:"Официальные съёмки с завода SBKJ — настоящая машина на полной производственной скорости.", ar:"لقطات مصنع SBKJ الرسمية — آلة حقيقية تعمل بكامل طاقتها الإنتاجية.", tr:"Resmi SBKJ fabrika görüntüleri — tam üretim hızında çalışan gerçek makine.", fr:"Images officielles de l'usine SBKJ — vraie machine à pleine vitesse de production.", pt:"Filmagem oficial da fábrica SBKJ — máquina real em plena velocidade de produção.", hi:"आधिकारिक SBKJ फैक्ट्री फुटेज — पूर्ण उत्पादन दर पर चलती वास्तविक मशीन।", id:"Rekaman pabrik SBKJ resmi — mesin nyata berjalan pada kecepatan produksi penuh." },
    "vid.home.cta":     { en:"Watch all machine videos →", zh:"观看所有设备视频 →", es:"Ver todos los videos de máquinas →", ru:"Смотреть все видео оборудования →", ar:"شاهد جميع مقاطع الآلات ←", tr:"Tüm makine videolarını izle →", fr:"Voir toutes les vidéos des machines →", pt:"Assistir todos os vídeos de máquinas →", hi:"सभी मशीन वीडियो देखें →", id:"Tonton semua video mesin →" },

    /* ---- Homepage Differentiation Block ---- */
    "diff.home.eyebrow": { en:"What's Different", zh:"核心差异", es:"¿Qué es diferente?", ru:"В чём отличие", ar:"ما الذي يختلف", tr:"Ne Farklı", fr:"Ce qui est différent", pt:"O que é diferente", hi:"क्या अलग है", id:"Apa yang Berbeda" },
    "diff.home.title":   { en:"Not Just Machines. A Complete Production Line.", zh:"不只是设备，而是完整生产线解决方案。", es:"No solo máquinas. Una línea de producción completa.", ru:"Не просто машины. Полная производственная линия.", ar:"ليست مجرد آلات. خط إنتاج متكامل.", tr:"Sadece makine değil. Eksiksiz bir üretim hattı.", fr:"Pas seulement des machines. Une ligne de production complète.", pt:"Não apenas máquinas. Uma linha de produção completa.", hi:"सिर्फ मशीनें नहीं। एक पूर्ण उत्पादन लाइन।", id:"Bukan Hanya Mesin. Jalur Produksi Lengkap." },
    "diff.item1.title":  { en:"Factory Design Included", zh:"含工厂设计服务", es:"Diseño de fábrica incluido", ru:"Проектирование завода включено", ar:"تصميم المصنع متضمن", tr:"Fabrika Tasarımı Dahil", fr:"Conception d'usine incluse", pt:"Design de fábrica incluído", hi:"फैक्टरी डिज़ाइन शामिल", id:"Desain Pabrik Termasuk" },
    "diff.item1.desc":   { en:"3D floor layout, material flow, and utility requirements planned before order confirmation — not an optional extra.", zh:"3D厂房布局、物料流程及公用工程需求在确认订单前完成规划——非可选服务。", es:"Distribución 3D, flujo de materiales y requisitos de servicios planificados antes de confirmar el pedido.", ru:"3D-планировка, поток материалов и требования к коммуникациям — до подтверждения заказа.", ar:"تخطيط ثلاثي الأبعاد للأرضية وتدفق المواد ومتطلبات المرافق قبل تأكيد الطلب.", tr:"Sipariş onayından önce 3D yerleşim, malzeme akışı ve hizmet gereksinimleri planlanır.", fr:"Plan 3D, flux matière et besoins en utilities planifiés avant confirmation de commande.", pt:"Layout 3D, fluxo de material e requisitos de utilidades planejados antes da confirmação do pedido.", hi:"ऑर्डर पुष्टि से पहले 3D फ्लोर लेआउट, सामग्री प्रवाह और उपयोगिता आवश्यकताएं नियोजित।", id:"Tata letak lantai 3D, aliran material, dan kebutuhan utilitas direncanakan sebelum konfirmasi pesanan." },
    "diff.item2.title":  { en:"Patent-Protected Engineering", zh:"专利保护的工程技术", es:"Ingeniería protegida por patentes", ru:"Запатентованные инженерные решения", ar:"هندسة محمية ببراءات الاختراع", tr:"Patent Korumalı Mühendislik", fr:"Ingénierie protégée par brevets", pt:"Engenharia protegida por patentes", hi:"पेटेंट-संरक्षित इंजीनियरिंग", id:"Rekayasa Dilindungi Paten" },
    "diff.item2.desc":   { en:"60+ active patents: patented flying slitter for continuous cut workflow, closed-loop CNC at ±0.5 mm, hydraulic notching on rectangular lines.", zh:"60+项有效专利：专利飞剪装置实现连续切割，闭环CNC精度±0.5mm，矩形风管线液压剪角。", es:"60+ patentes activas: cortador volante patentado, CNC de bucle cerrado a ±0.5 mm, muescado hidráulico.", ru:"60+ патентов: запатентованный летучий слиттер, замкнутый контур ЧПУ ±0,5 мм, гидравлическая просечка.", ar:"60+ براءة نشطة: آلة قطع طائرة مُبرءة، CNC حلقة مغلقة بـ ±0.5 ملم، تخريم هيدروليكي.", tr:"60+ aktif patent: patentli uçan dilme, ±0.5 mm kapalı döngü CNC, hidrolik çentikleme.", fr:"60+ brevets actifs : coupeuse volante brevetée, CNC boucle fermée à ±0,5 mm, encochage hydraulique.", pt:"60+ patentes ativas: fatiador voador patenteado, CNC de malha fechada em ±0,5 mm, entalhe hidráulico.", hi:"60+ सक्रिय पेटेंट: पेटेंटेड फ्लाइंग स्लिटर, ±0.5 mm पर क्लोज्ड-लूप CNC, हाइड्रोलिक नॉचिंग।", id:"60+ paten aktif: slitter terbang berpatent, CNC loop tertutup di ±0,5 mm, penakikan hidraulis." },
    "diff.item3.title":  { en:"Long-Term Spare Parts", zh:"长期备件支持", es:"Repuestos a largo plazo", ru:"Долгосрочное обеспечение запчастями", ar:"قطع غيار على المدى الطويل", tr:"Uzun Vadeli Yedek Parça", fr:"Pièces détachées long terme", pt:"Peças de reposição a longo prazo", hi:"दीर्घकालिक स्पेयर पार्ट्स", id:"Suku Cadang Jangka Panjang" },
    "diff.item3.desc":   { en:"Original tooling specs retained after delivery. Genuine spare parts shipped globally years after installation — no third-party substitutes.", zh:"交货后保留原始工装规格。安装多年后仍可全球发货提供原厂备件——无第三方替代品。", es:"Especificaciones de utillaje originales retenidas. Repuestos genuinos enviados globalmente años después de la instalación.", ru:"Оригинальные спецификации инструментов сохраняются. Подлинные запчасти поставляются глобально спустя годы.", ar:"الحفاظ على مواصفات الأدوات الأصلية. قطع غيار أصلية يتم شحنها عالمياً بعد سنوات من التركيب.", tr:"Orijinal takım özellikleri korunur. Kurulumdan yıllar sonra küresel nakliye ile orijinal yedek parçalar.", fr:"Spécifications des outils originaux conservées. Pièces d'origine expédiées mondialement des années après.", pt:"Especificações de ferramentas originais mantidas. Peças genuínas enviadas globalmente anos após a instalação.", hi:"डिलीवरी के बाद मूल टूलिंग स्पेक्स बनाए रखे। इंस्टॉलेशन के वर्षों बाद भी वैश्विक स्तर पर मूल स्पेयर पार्ट्स भेजे जाते हैं।", id:"Spesifikasi perkakas asli dipertahankan. Suku cadang asli dikirim secara global bertahun-tahun setelah instalasi." },

    /* ---- Homepage Knowledge Center ---- */
    "kc.home.eyebrow":  { en:"Buying Guides & Technical Resources", zh:"采购指南与技术资料", es:"Guías de Compra y Recursos Técnicos", ru:"Руководства покупателя и технические ресурсы", ar:"أدلة الشراء والموارد التقنية", tr:"Satın Alma Rehberleri ve Teknik Kaynaklar", fr:"Guides d'achat et ressources techniques", pt:"Guias de Compra e Recursos Técnicos", hi:"खरीद गाइड और तकनीकी संसाधन", id:"Panduan Pembelian & Sumber Daya Teknis" },
    "kc.home.title":    { en:"Research Before You Buy", zh:"购买前先做功课", es:"Investigue antes de comprar", ru:"Изучите перед покупкой", ar:"ابحث قبل الشراء", tr:"Satın Almadan Önce Araştırın", fr:"Recherchez avant d'acheter", pt:"Pesquise antes de comprar", hi:"खरीदने से पहले शोध करें", id:"Riset Sebelum Membeli" },
    "kc.home.lead":     { en:"Practical content for HVAC factory owners and production planners — written for serious buyers.", zh:"专为暖通厂主和生产规划者提供的实用内容——为认真的采购方而写。", es:"Contenido práctico para propietarios de fábricas HVAC y planificadores de producción.", ru:"Практический контент для владельцев HVAC-заводов и специалистов по планированию производства.", ar:"محتوى عملي لأصحاب مصانع HVAC ومخططي الإنتاج — مكتوب للمشترين الجادين.", tr:"HVAC fabrika sahipleri ve üretim planlayıcıları için pratik içerik.", fr:"Contenu pratique pour les propriétaires d'usines HVAC et les planificateurs de production.", pt:"Conteúdo prático para proprietários de fábricas HVAC e planejadores de produção.", hi:"HVAC फैक्ट्री मालिकों और उत्पादन योजनाकारों के लिए व्यावहारिक सामग्री।", id:"Konten praktis untuk pemilik pabrik HVAC dan perencana produksi." },
    "kc.card1.label":   { en:"Buying Guide", zh:"采购指南", es:"Guía de compra", ru:"Руководство покупателя", ar:"دليل الشراء", tr:"Satın Alma Rehberi", fr:"Guide d'achat", pt:"Guia de compra", hi:"खरीद गाइड", id:"Panduan Pembelian" },
    "kc.card1.title":   { en:"How to Choose an Auto Duct Line", zh:"如何选择全自动风管生产线", es:"Cómo elegir una línea automática de conductos", ru:"Как выбрать автоматическую линию для воздуховодов", ar:"كيف تختار خط إنتاج قنوات أوتوماتيكي", tr:"Otomatik Kanal Hattı Nasıl Seçilir", fr:"Comment choisir une ligne automatique de conduits", pt:"Como escolher uma linha automática de dutos", hi:"ऑटो डक्ट लाइन कैसे चुनें", id:"Cara Memilih Jalur Saluran Otomatis" },
    "kc.card1.desc":    { en:"Sheet width, thickness band, output target, flange standard, and floor space — five decisions that determine the right SBAL model for your factory.", zh:"板材宽度、厚度范围、目标产量、法兰标准和厂房面积——决定合适SBAL型号的五个关键因素。", es:"Ancho de hoja, banda de espesor, objetivo de producción, estándar de brida y espacio — cinco decisiones clave.", ru:"Ширина листа, диапазон толщины, целевой объём, стандарт фланца и площадь — пять решений для выбора модели.", ar:"عرض الصفيحة، نطاق السماكة، هدف الإنتاج، معيار الفلانج والمساحة — خمسة قرارات تحدد النموذج المناسب.", tr:"Levha genişliği, kalınlık aralığı, çıktı hedefi, flanş standardı ve alan — doğru SBAL modelini belirleyen beş karar.", fr:"Largeur de feuille, plage d'épaisseur, objectif de production, standard de bride et espace — cinq décisions clés.", pt:"Largura da chapa, faixa de espessura, meta de produção, padrão de flange e espaço — cinco decisões para o modelo certo.", hi:"शीट चौड़ाई, मोटाई बैंड, आउटपुट लक्ष्य, फ्लैंज मानक और फ्लोर स्पेस — सही SBAL मॉडल निर्धारित करने वाले पांच निर्णय।", id:"Lebar lembaran, rentang ketebalan, target output, standar flensa, dan luas lantai — lima keputusan yang menentukan model SBAL yang tepat." },
    "kc.card2.label":   { en:"Factory Planning", zh:"工厂规划", es:"Planificación de fábrica", ru:"Планирование завода", ar:"تخطيط المصنع", tr:"Fabrika Planlaması", fr:"Planification d'usine", pt:"Planejamento de fábrica", hi:"फैक्टरी योजना", id:"Perencanaan Pabrik" },
    "kc.card2.title":   { en:"What Machine Set Does a Complete Rectangular Duct Factory Need?", zh:"完整矩形风管工厂需要哪些设备？", es:"¿Qué conjunto de máquinas necesita una fábrica completa de conductos rectangulares?", ru:"Какое оборудование нужно полному заводу прямоугольных воздуховодов?", ar:"ما الآلات التي يحتاجها مصنع قنوات مستطيلة كامل؟", tr:"Tam Bir Dikdörtgen Kanal Fabrikasının Makine Seti Nedir?", fr:"De quelle gamme de machines a besoin une usine de conduits rectangulaires complète ?", pt:"Que conjunto de máquinas precisa uma fábrica completa de dutos retangulares?", hi:"एक पूर्ण रेक्टैंगुलर डक्ट फैक्टरी को किस मशीन सेट की जरूरत है?", id:"Set Mesin Apa yang Dibutuhkan Pabrik Saluran Persegi Panjang Lengkap?" },
    "kc.card2.desc":    { en:"From coil decoiler to finished duct stack — the full machine sequence, staffing logic, and utility requirements for a rectangular duct operation.", zh:"从开卷机到成品风管堆叠——矩形风管生产所需的完整设备序列、人员配置逻辑及公用工程需求。", es:"Del devanador de bobina a la pila de conductos — secuencia completa de máquinas, lógica de personal y requisitos de servicios.", ru:"От разматывателя до готового воздуховода — полная последовательность машин, штатное расписание и инженерные требования.", ar:"من فك اللفافة إلى مكدس القناة الجاهزة — التسلسل الكامل للآلات ومنطق التوظيف ومتطلبات المرافق.", tr:"Bobinin sarımından bitmiş kanal yığınına — tam makine dizisi, personel mantığı ve hizmet gereksinimleri.", fr:"Du dévidoir à la pile de conduits finis — séquence complète de machines, logique de personnel et besoins en utilities.", pt:"Do desbobinador de bobina até a pilha de dutos acabados — sequência completa de máquinas e requisitos.", hi:"कॉइल डीकॉइलर से तैयार डक्ट स्टैक तक — पूर्ण मशीन अनुक्रम, स्टाफिंग लॉजिक और उपयोगिता आवश्यकताएं।", id:"Dari gulungan dekoiler hingga tumpukan saluran jadi — urutan mesin lengkap, logika staf, dan kebutuhan utilitas." },
    "kc.card.read":     { en:"Read guide →", zh:"阅读指南 →", es:"Leer guía →", ru:"Читать руководство →", ar:"اقرأ الدليل ←", tr:"Rehberi oku →", fr:"Lire le guide →", pt:"Ler guia →", hi:"गाइड पढ़ें →", id:"Baca panduan →" },
    "kc.home.viewall":  { en:"Browse all buying guides →", zh:"浏览所有采购指南 →", es:"Ver todas las guías →", ru:"Все руководства →", ar:"تصفح جميع الأدلة ←", tr:"Tüm rehberlere göz at →", fr:"Voir tous les guides →", pt:"Ver todos os guias →", hi:"सभी खरीद गाइड ब्राउज़ करें →", id:"Jelajahi semua panduan pembelian →" },

    /* ---- Ryan Trust Section ---- */
    "ryan.eyebrow":     { en:"Your Local Sales Contact", zh:"您的本地销售联系人", es:"Su contacto de ventas local", ru:"Ваш местный представитель", ar:"جهة اتصال المبيعات المحلية", tr:"Yerel Satış Temsilciniz", fr:"Votre contact commercial local", pt:"Seu contato de vendas local", hi:"आपका स्थानीय बिक्री संपर्क", id:"Kontak Penjualan Lokal Anda" },
    "ryan.title":       { en:"Talk to Ryan Before You Commit", zh:"承诺之前先和Ryan谈谈", es:"Hable con Ryan antes de comprometerse", ru:"Поговорите с Райаном перед решением", ar:"تحدث مع رايان قبل الالتزام", tr:"Karar vermeden önce Ryan ile konuşun", fr:"Parlez à Ryan avant de vous engager", pt:"Fale com Ryan antes de se comprometer", hi:"प्रतिबद्ध होने से पहले Ryan से बात करें", id:"Bicara dengan Ryan Sebelum Anda Berkomitmen" },
    "ryan.bio.1":       { en:"Ryan Tao is SBKJ's Australia-based sales manager. He helps you evaluate the right machine configuration, answer technical questions honestly, and coordinate everything from first inquiry through to commissioning.", zh:"Ryan Tao是SBKJ驻澳大利亚销售经理。他帮助您评估合适的设备配置、诚实解答技术问题，并协调从首次询价到安装调试的全过程。", es:"Ryan Tao es el gerente de ventas de SBKJ en Australia. Le ayuda a evaluar la configuración correcta, responder preguntas técnicas honestamente y coordinar todo desde la primera consulta hasta la puesta en marcha.", ru:"Райан Тао — менеджер по продажам SBKJ в Австралии. Он поможет оценить конфигурацию оборудования, честно ответит на технические вопросы и координирует всё от первого запроса до пуска.", ar:"رايان تاو مدير المبيعات في SBKJ مقيم في أستراليا. يساعدك على تقييم التكوين الصحيح والإجابة على الأسئلة التقنية بصدق والتنسيق من الاستفسار الأول حتى التشغيل.", tr:"Ryan Tao, Avustralya merkezli SBKJ satış müdürüdür. Doğru makine yapılandırmasını değerlendirmenize, teknik soruları dürüstçe yanıtlamanıza ve ilk sorudan devreye almaya kadar her şeyi koordine etmenize yardımcı olur.", fr:"Ryan Tao est le directeur commercial de SBKJ basé en Australie. Il vous aide à évaluer la bonne configuration machine, répond honnêtement aux questions techniques et coordonne tout de la première demande à la mise en service.", pt:"Ryan Tao é o gerente de vendas da SBKJ baseado na Austrália. Ele ajuda a avaliar a configuração certa, responder perguntas técnicas honestamente e coordenar tudo desde a primeira consulta até o comissionamento.", hi:"Ryan Tao SBKJ के ऑस्ट्रेलिया-आधारित बिक्री प्रबंधक हैं। वे सही मशीन कॉन्फ़िगरेशन मूल्यांकन, तकनीकी प्रश्नों के ईमानदार उत्तर और पहली पूछताछ से कमीशनिंग तक सब कुछ समन्वय में मदद करते हैं।", id:"Ryan Tao adalah manajer penjualan SBKJ berbasis di Australia. Ia membantu Anda mengevaluasi konfigurasi mesin yang tepat, menjawab pertanyaan teknis dengan jujur, dan mengkoordinasikan segalanya dari pertanyaan pertama hingga komisioning." },
    "ryan.fact1":       { en:"Melbourne, VIC, Australia — AEDT timezone", zh:"澳大利亚维多利亚州墨尔本 — AEDT时区", es:"Melbourne, VIC, Australia — zona horaria AEDT", ru:"Мельбурн, VIC, Австралия — часовой пояс AEDT", ar:"ملبورن، VIC، أستراليا — توقيت AEDT", tr:"Melbourne, VIC, Avustralya — AEDT saat dilimi", fr:"Melbourne, VIC, Australie — fuseau horaire AEDT", pt:"Melbourne, VIC, Austrália — fuso horário AEDT", hi:"Melbourne, VIC, Australia — AEDT टाइमज़ोन", id:"Melbourne, VIC, Australia — zona waktu AEDT" },
    "ryan.fact2":       { en:"Typically responds within one business day by WhatsApp or email", zh:"通常在一个工作日内通过WhatsApp或电子邮件回复", es:"Generalmente responde en un día hábil por WhatsApp o correo electrónico", ru:"Как правило, отвечает в течение одного рабочего дня по WhatsApp или email", ar:"يرد عادةً خلال يوم عمل واحد عبر واتساب أو البريد الإلكتروني", tr:"Genellikle bir iş günü içinde WhatsApp veya e-posta ile yanıt verir", fr:"Répond généralement dans un jour ouvrable par WhatsApp ou e-mail", pt:"Geralmente responde em um dia útil por WhatsApp ou e-mail", hi:"आमतौर पर WhatsApp या ईमेल द्वारा एक कार्य दिवस के भीतर जवाब देते हैं", id:"Biasanya merespons dalam satu hari kerja melalui WhatsApp atau email" },
    "ryan.bio.2":       { en:"Melbourne, Victoria — AEDT timezone. Direct conversation, no automated responses.",zh:"澳大利亚维多利亚州墨尔本 — AEDT时区。直接对话，无自动回复。", es:"Melbourne, Victoria — zona horaria AEDT. Conversación directa, sin respuestas automatizadas.", ru:"Мельбурн, Виктория — часовой пояс AEDT. Живое общение, без автоответов.", ar:"ملبورن، فيكتوريا — توقيت AEDT. محادثة مباشرة، بدون ردود آلية.", tr:"Melbourne, Victoria — AEDT saat dilimi. Doğrudan konuşma, otomatik yanıt yok.", fr:"Melbourne, Victoria — fuseau horaire AEDT. Conversation directe, pas de réponses automatisées.", pt:"Melbourne, Victoria — fuso horário AEDT. Conversa direta, sem respostas automatizadas.", hi:"Melbourne, Victoria — AEDT टाइमज़ोन। सीधी बातचीत, कोई स्वचालित प्रतिक्रिया नहीं।", id:"Melbourne, Victoria — zona waktu AEDT. Percakapan langsung, tidak ada respons otomatis." },
    "ryan.response.strip": { en:"Typically responds within 1 business day · AEDT timezone", zh:"通常在1个工作日内回复 · AEDT时区", es:"Responde en 1 día hábil · zona AEDT", ru:"Отвечает в течение 1 рабочего дня · часовой пояс AEDT", ar:"يرد عادةً خلال يوم عمل · توقيت AEDT", tr:"Genellikle 1 iş günü içinde yanıtlar · AEDT", fr:"Répond en 1 jour ouvrable · fuseau AEDT", pt:"Responde em 1 dia útil · fuso AEDT", hi:"1 कार्य दिवस में जवाब · AEDT टाइमज़ोन", id:"Biasanya merespons dalam 1 hari kerja · zona waktu AEDT" },
    "ryan.contact.about": { en:"About Ryan & how to work with us", zh:"了解Ryan及合作方式", es:"Sobre Ryan y cómo trabajar con nosotros", ru:"О Райане и как с нами работать", ar:"عن رايان وكيفية العمل معنا", tr:"Ryan hakkında ve nasıl çalışırız", fr:"À propos de Ryan et comment travailler avec nous", pt:"Sobre Ryan e como trabalhar conosco", hi:"Ryan के बारे में और हमारे साथ कैसे काम करें", id:"Tentang Ryan & cara bekerja dengan kami" },

    /* ---- Machines Running Section ---- */
    "machrun.eyebrow":  { en:"Machines Running", zh:"设备运行", es:"Máquinas en marcha", ru:"Оборудование в работе", ar:"الآلات تعمل", tr:"Makineler Çalışıyor", fr:"Machines en marche", pt:"Máquinas funcionando", hi:"मशीनें चल रही हैं", id:"Mesin Berjalan" },
    "machrun.title":    { en:"See the Line in Operation", zh:"查看生产线运行状态", es:"Vea la línea en operación", ru:"Посмотрите линию в работе", ar:"شاهد الخط أثناء التشغيل", tr:"Hattı Çalışırken Görün", fr:"Voir la ligne en opération", pt:"Veja a linha em operação", hi:"उत्पादन लाइन को चालू देखें", id:"Lihat Lini dalam Operasi" },
    "machrun.cta":      { en:"Watch all machine videos →", zh:"查看全部设备视频 →", es:"Ver todos los videos →", ru:"Смотреть все видео →", ar:"مشاهدة جميع الفيديوهات ←", tr:"Tüm makine videolarını izle →", fr:"Voir toutes les vidéos →", pt:"Ver todos os vídeos →", hi:"सभी मशीन वीडियो देखें →", id:"Tonton semua video mesin →" },

    /* ---- Homepage CTA section ---- */
    "cta.lead":         { en:"Share your material type, target output, duct size range, and floor space. Ryan will prepare a practical machine configuration and layout direction — typically within one business day.", zh:"告知材料类型、目标产量、风管尺寸范围及厂房面积，Ryan将在一个工作日内为您提供实用的设备配置和布局建议。", es:"Comparta su tipo de material, producción objetivo, rango de tamaño de conducto y espacio. Ryan preparará una configuración práctica en un día hábil.", ru:"Укажите материал, целевой объём, диапазон размеров и площадь. Райан подготовит конфигурацию оборудования обычно в течение одного рабочего дня.", ar:"شارك نوع المادة والإنتاج المستهدف ونطاق الحجم والمساحة. سيعد رايان تكويناً عملياً عادةً في يوم عمل واحد.", tr:"Malzeme türünü, hedef çıktıyı, kanal boyut aralığını ve alanı paylaşın. Ryan genellikle bir iş günü içinde yapılandırma hazırlayacak.", fr:"Partagez le type de matériau, la production cible, la plage de taille et l'espace. Ryan préparera une configuration pratique en un jour ouvrable.", pt:"Compartilhe tipo de material, produção alvo, faixa de tamanho de duto e espaço. Ryan preparará uma configuração prática em um dia útil.", hi:"सामग्री प्रकार, लक्ष्य आउटपुट, डक्ट साइज़ रेंज और फ्लोर स्पेस साझा करें। Ryan आमतौर पर एक कार्य दिवस के भीतर व्यावहारिक कॉन्फ़िगरेशन तैयार करेंगे।", id:"Bagikan jenis material, target output, rentang ukuran saluran, dan luas lantai. Ryan akan menyiapkan konfigurasi mesin dalam satu hari kerja." },
    "cta.quote.btn":    { en:"Request a Formal Quote →", zh:"申请正式报价 →", es:"Solicitar cotización formal →", ru:"Запросить официальное КП →", ar:"طلب عرض سعر رسمي ←", tr:"Resmi Teklif İste →", fr:"Demander un devis formel →", pt:"Solicitar orçamento formal →", hi:"औपचारिक कोटेशन मांगें →", id:"Minta Penawaran Resmi →" },
    "cta.quote.note":   { en:"Include machine interest, material, thickness, target output, country & timeline for a detailed proposal from sales@sbkjduct.com.", zh:"包含设备兴趣、材料、厚度、目标产量、国家和时间节点，可获来自sales@sbkjduct.com的详细方案。", es:"Incluya interés en máquinas, material, espesor, producción objetivo, país y cronograma para una propuesta detallada.", ru:"Укажите интерес к оборудованию, материал, толщину, объём, страну и сроки для детального КП.", ar:"أدرج اهتمامك بالآلات والمادة والسماكة والإنتاج والدولة والجدول الزمني للحصول على اقتراح مفصل.", tr:"Makine ilgisi, malzeme, kalınlık, hedef çıktı, ülke ve zaman çizelgesi ekleyin.", fr:"Incluez l'intérêt machine, matériau, épaisseur, production cible, pays et calendrier pour une proposition détaillée.", pt:"Inclua interesse em máquina, material, espessura, produção alvo, país e prazo para uma proposta detalhada.", hi:"विस्तृत प्रस्ताव के लिए मशीन रुचि, सामग्री, मोटाई, लक्ष्य आउटपुट, देश और समयरेखा शामिल करें।", id:"Sertakan minat mesin, material, ketebalan, target output, negara & timeline untuk proposal terperinci." },
    "cta.whatsapp.btn": { en:"WhatsApp Ryan Directly", zh:"直接WhatsApp联系Ryan", es:"WhatsApp a Ryan directamente", ru:"Написать Райану в WhatsApp", ar:"تواصل مع رايان عبر واتساب", tr:"Ryan'a Doğrudan WhatsApp", fr:"WhatsApp Ryan directement", pt:"WhatsApp Ryan diretamente", hi:"Ryan को सीधे WhatsApp करें", id:"WhatsApp Ryan Langsung" },
    "cta.whatsapp.note":{ en:"For technical questions, feasibility review, capacity planning, or factory layout advice before committing to a formal quote.", zh:"适用于提交正式报价前的技术问题、可行性分析、产能规划或工厂布局咨询。", es:"Para preguntas técnicas, revisión de factibilidad, planificación de capacidad o asesoramiento de diseño antes de una cotización.", ru:"Для технических вопросов, оценки, планирования мощностей или планировки цеха до официального запроса.", ar:"للأسئلة التقنية ومراجعة الجدوى وتخطيط الطاقة أو تخطيط المصنع قبل تقديم عرض رسمي.", tr:"Resmi teklife bağlanmadan önce teknik sorular, fizibilite, kapasite planlaması veya fabrika yerleşimi tavsiyesi için.", fr:"Pour questions techniques, faisabilité, planification de capacité ou conseils d'agencement avant un devis formel.", pt:"Para perguntas técnicas, revisão de viabilidade, planejamento de capacidade ou conselho de layout antes de um orçamento formal.", hi:"औपचारिक कोटेशन से पहले तकनीकी प्रश्नों, फीज़िबिलिटी रिव्यू, क्षमता योजना या फैक्टरी लेआउट सलाह के लिए।", id:"Untuk pertanyaan teknis, tinjauan kelayakan, perencanaan kapasitas, atau saran tata letak pabrik sebelum penawaran resmi." },
    "cta.or":           { en:"or", zh:"或者", es:"o", ru:"или", ar:"أو", tr:"veya", fr:"ou", pt:"ou", hi:"या", id:"atau" },

    /* ---- Footer ---- */
    "footer.desc":      { en:"HVAC ductwork machinery manufacturer since 1995. Spiral, rectangular, round and flexible duct production lines for 80+ countries.", zh:"1995年以来的暖通风管设备制造商。80+国家螺旋、矩形、圆形和柔性风管生产线。", es:"Fabricante de maquinaria HVAC desde 1995. Líneas de producción para 80+ países.", ru:"Производитель оборудования для воздуховодов с 1995 г. Линии для 80+ стран.", ar:"مصنع آلات مجاري الهواء HVAC منذ 1995. خطوط إنتاج لأكثر من 80 دولة.", tr:"1995'ten beri HVAC kanal makinesi üreticisi. 80+ ülke için üretim hatları.", fr:"Fabricant de machines HVAC depuis 1995. Lignes de production pour 80+ pays.", pt:"Fabricante de máquinas HVAC desde 1995. Linhas de produção para 80+ países.", hi:"1995 से HVAC मशीनरी निर्माता। 80+ देशों के लिए उत्पादन लाइनें।", id:"Produsen mesin saluran HVAC sejak 1995. Lini produksi untuk 80+ negara." },
    "footer.meta":      { en:"Since 1995 · 80+ countries served · 5,000+ machines installed", zh:"1995年创立 · 服务80+国家 · 安装5000+台设备", es:"Desde 1995 · 80+ países · 5.000+ máquinas", ru:"С 1995 г. · 80+ стран · 5000+ машин", ar:"منذ 1995 · 80+ دولة · 5000+ آلة", tr:"1995'ten beri · 80+ ülke · 5.000+ makine", fr:"Depuis 1995 · 80+ pays · 5 000+ machines", pt:"Desde 1995 · 80+ países · 5.000+ máquinas", hi:"1995 से · 80+ देश · 5,000+ मशीनें", id:"Sejak 1995 · 80+ negara · 5.000+ mesin" },
    "footer.copy":      { en:"SBKJ Group. All rights reserved.", zh:"SBKJ集团 版权所有。", es:"SBKJ Group. Todos los derechos reservados.", ru:"SBKJ Group. Все права защищены.", ar:"مجموعة SBKJ. جميع الحقوق محفوظة.", tr:"SBKJ Group. Tüm hakları saklıdır.", fr:"SBKJ Group. Tous droits réservés.", pt:"SBKJ Group. Todos os direitos reservados.", hi:"SBKJ Group. सर्वाधिकार सुरक्षित।", id:"SBKJ Group. Hak cipta dilindungi." },
    "footer.navigate":  { en:"Navigate", zh:"导航", es:"Navegación", ru:"Навигация", ar:"التنقل", tr:"Gezinti", fr:"Navigation", pt:"Navegação", hi:"नेविगेट", id:"Navigasi" },
    "footer.touch":     { en:"Get in touch", zh:"联系方式", es:"Contáctenos", ru:"Свяжитесь с нами", ar:"تواصل معنا", tr:"İletişime Geçin", fr:"Contactez-nous", pt:"Entre em contato", hi:"संपर्क करें", id:"Hubungi Kami" },
    "footer.rights":    { en:"SBKJ Group. All rights reserved.", zh:"SBKJ集团 版权所有。", es:"SBKJ Group. Todos los derechos reservados.", ru:"SBKJ Group. Все права защищены.", ar:"مجموعة SBKJ. جميع الحقوق محفوظة.", tr:"SBKJ Group. Tüm hakları saklıdır.", fr:"SBKJ Group. Tous droits réservés.", pt:"SBKJ Group. Todos os direitos reservados.", hi:"SBKJ Group. सर्वाधिकार सुरक्षित।", id:"SBKJ Group. Hak cipta dilindungi." },
    "footer.col.company":  { en:"Company", zh:"公司", es:"Empresa", ru:"Компания", ar:"الشركة", tr:"Şirket", fr:"Entreprise", pt:"Empresa", hi:"कंपनी", id:"Perusahaan" },
    "footer.col.machinery":{ en:"Machinery Categories", zh:"设备分类", es:"Categorías de maquinaria", ru:"Категории оборудования", ar:"فئات الآلات", tr:"Makine Kategorileri", fr:"Catégories de machines", pt:"Categorias de máquinas", hi:"मशीनरी श्रेणियां", id:"Kategori Mesin" },
    "footer.col.resources":{ en:"Resources", zh:"资源", es:"Recursos", ru:"Ресурсы", ar:"الموارد", tr:"Kaynaklar", fr:"Ressources", pt:"Recursos", hi:"संसाधन", id:"Sumber Daya" },
    "footer.col.contact":  { en:"Contact", zh:"联系我们", es:"Contacto", ru:"Контакты", ar:"اتصل بنا", tr:"İletişim", fr:"Contact", pt:"Contato", hi:"संपर्क", id:"Kontak" },
    "footer.link.about":   { en:"About SBKJ", zh:"关于SBKJ", es:"Sobre SBKJ", ru:"О компании SBKJ", ar:"عن SBKJ", tr:"SBKJ Hakkında", fr:"À propos de SBKJ", pt:"Sobre a SBKJ", hi:"SBKJ के बारे में", id:"Tentang SBKJ" },
    "footer.link.why":     { en:"Why Choose SBKJ", zh:"为什么选择SBKJ", es:"Por qué elegir SBKJ", ru:"Почему SBKJ", ar:"لماذا تختار SBKJ", tr:"Neden SBKJ", fr:"Pourquoi choisir SBKJ", pt:"Por que escolher SBKJ", hi:"SBKJ क्यों चुनें", id:"Mengapa Memilih SBKJ" },
    "footer.link.factory": { en:"Factory & Manufacturing", zh:"工厂与制造", es:"Fábrica y manufactura", ru:"Завод и производство", ar:"المصنع والتصنيع", tr:"Fabrika ve Üretim", fr:"Usine et fabrication", pt:"Fábrica e manufatura", hi:"फैक्टरी और निर्माण", id:"Pabrik & Manufaktur" },
    "footer.link.quality": { en:"Quality & Certifications", zh:"质量与认证", es:"Calidad y certificaciones", ru:"Качество и сертификаты", ar:"الجودة والشهادات", tr:"Kalite ve Sertifikalar", fr:"Qualité et certifications", pt:"Qualidade e certificações", hi:"गुणवत्ता और प्रमाणन", id:"Kualitas & Sertifikasi" },
    "footer.link.ryan":    { en:"Talk to Ryan", zh:"联系Ryan", es:"Hablar con Ryan", ru:"Поговорить с Райаном", ar:"تحدث مع رايان", tr:"Ryan ile Görüş", fr:"Parler à Ryan", pt:"Falar com Ryan", hi:"Ryan से बात करें", id:"Bicara dengan Ryan" },
    "footer.link.hvac":    { en:"HVAC Duct Machinery", zh:"暖通风管设备", es:"Maquinaria HVAC", ru:"HVAC оборудование", ar:"آلات مجاري الهواء", tr:"HVAC Kanal Makineleri", fr:"Machines HVAC", pt:"Máquinas HVAC", hi:"HVAC डक्ट मशीनरी", id:"Mesin Saluran HVAC" },
    "footer.link.spiral":  { en:"Spiral Duct Machines", zh:"螺旋风管机", es:"Máquinas espirales", ru:"Спиральные машины", ar:"آلات القناة الحلزونية", tr:"Spiral Kanal Makineleri", fr:"Machines à conduits spiralés", pt:"Máquinas espirais", hi:"स्पाइरल डक्ट मशीनें", id:"Mesin Saluran Spiral" },
    "footer.link.auto":    { en:"Auto Duct Lines", zh:"全自动风管线", es:"Líneas automáticas", ru:"Авто-линии", ar:"خطوط القناة التلقائية", tr:"Otomatik Kanal Hatları", fr:"Lignes automatiques", pt:"Linhas automáticas", hi:"ऑटो डक्ट लाइनें", id:"Jalur Saluran Otomatis" },
    "footer.link.forming": { en:"Duct Forming Machines", zh:"风管成型机", es:"Máquinas de conformado", ru:"Машины для формовки", ar:"آلات تشكيل القنوات", tr:"Kanal Şekillendirme Makineleri", fr:"Machines de formage", pt:"Máquinas de conformação", hi:"डक्ट फॉर्मिंग मशीनें", id:"Mesin Pembentuk Saluran" },
    "footer.link.elbow":   { en:"Elbow & Fittings Machines", zh:"弯头及管件机", es:"Máquinas de codos y accesorios", ru:"Машины для отводов и фитингов", ar:"آلات المرفقين والتوصيلات", tr:"Dirsek ve Bağlantı Makineleri", fr:"Machines coudes et raccords", pt:"Máquinas de cotovelos e conexões", hi:"एल्बो और फिटिंग मशीनें", id:"Mesin Siku & Fitting" },
    "footer.link.machines":{ en:"Machine Center", zh:"产品中心", es:"Centro de máquinas", ru:"Центр оборудования", ar:"مركز الآلات", tr:"Makine Merkezi", fr:"Centre machines", pt:"Centro de máquinas", hi:"मशीन सेंटर", id:"Pusat Mesin" },
    "footer.link.guides":  { en:"Buying Guides", zh:"采购指南", es:"Guías de compra", ru:"Гайды покупателя", ar:"أدلة الشراء", tr:"Satın Alma Rehberleri", fr:"Guides d'achat", pt:"Guias de compra", hi:"खरीद गाइड", id:"Panduan Pembelian" },
    "footer.link.cases":   { en:"Case Studies", zh:"案例研究", es:"Casos de estudio", ru:"Кейс-стади", ar:"دراسات الحالة", tr:"Vaka Çalışmaları", fr:"Études de cas", pt:"Estudos de caso", hi:"केस स्टडी", id:"Studi Kasus" },
    "footer.link.videos":  { en:"Machine Videos", zh:"设备视频", es:"Videos de máquinas", ru:"Видео оборудования", ar:"فيديوهات الآلات", tr:"Makine Videoları", fr:"Vidéos machines", pt:"Vídeos de máquinas", hi:"मशीन वीडियो", id:"Video Mesin" },
    "footer.link.quote":   { en:"Request Quote", zh:"获取报价", es:"Solicitar cotización", ru:"Запросить цену", ar:"طلب عرض سعر", tr:"Teklif İste", fr:"Demander un devis", pt:"Solicitar cotação", hi:"कोटेशन मांगें", id:"Minta Penawaran" },
    "footer.whatsapp":     { en:"WhatsApp: +61 435 074 994", zh:"WhatsApp: +61 435 074 994", es:"WhatsApp: +61 435 074 994", ru:"WhatsApp: +61 435 074 994", ar:"واتساب: +61 435 074 994", tr:"WhatsApp: +61 435 074 994", fr:"WhatsApp: +61 435 074 994", pt:"WhatsApp: +61 435 074 994", hi:"WhatsApp: +61 435 074 994", id:"WhatsApp: +61 435 074 994" },
    "footer.ryan.location":{ en:"Ryan Tao — Melbourne, VIC, AU", zh:"Ryan Tao — 澳大利亚维多利亚州墨尔本", es:"Ryan Tao — Melbourne, VIC, AU", ru:"Райан Тао — Мельбурн, VIC, AU", ar:"رايان تاو — ملبورن، VIC، AU", tr:"Ryan Tao — Melbourne, VIC, AU", fr:"Ryan Tao — Melbourne, VIC, AU", pt:"Ryan Tao — Melbourne, VIC, AU", hi:"Ryan Tao — Melbourne, VIC, AU", id:"Ryan Tao — Melbourne, VIC, AU" },
    "footer.factory.location": { en:"Factory: Jiangyin, Jiangsu, China", zh:"工厂：中国江苏省江阴市", es:"Fábrica: Jiangyin, Jiangsu, China", ru:"Завод: Цзянъинь, Цзянсу, Китай", ar:"المصنع: جيانغيين، جيانغسو، الصين", tr:"Fabrika: Jiangyin, Jiangsu, Çin", fr:"Usine: Jiangyin, Jiangsu, Chine", pt:"Fábrica: Jiangyin, Jiangsu, China", hi:"फैक्टरी: जियांगयिन, जियांगसू, चीन", id:"Pabrik: Jiangyin, Jiangsu, Tiongkok" },

    /* ---- Machines Page ---- */
    "machines.eyebrow": { en:"Product Catalogue", zh:"产品目录", es:"Catálogo de Productos", ru:"Каталог продукции", ar:"كتالوج المنتجات", tr:"Ürün Kataloğu", fr:"Catalogue produits", pt:"Catálogo de Produtos", hi:"उत्पाद सूची", id:"Katalog Produk" },
    "machines.title":   { en:"Complete Machine Range", zh:"全系列设备", es:"Gama Completa de Máquinas", ru:"Полный ассортимент", ar:"مجموعة الآلات الكاملة", tr:"Tam Makine Yelpazesi", fr:"Gamme complète de machines", pt:"Linha Completa de Máquinas", hi:"पूर्ण मशीन श्रेणी", id:"Rangkaian Mesin Lengkap" },
    "machines.lead":    { en:"From spiral tubeformers to fully automatic duct production lines — everything you need to build or upgrade your HVAC duct workshop.", zh:"从螺旋风管机到全自动风管生产线——打造或升级暖通风管车间所需的一切设备。", es:"Desde formadoras espirales hasta líneas de producción automáticas — todo lo que necesita para su taller de conductos HVAC.", ru:"От спиральных трубоформеров до полностью автоматических линий — всё для вашего цеха воздуховодов.", ar:"من آلات التشكيل الحلزوني إلى خطوط الإنتاج الأوتوماتيكية بالكامل — كل ما تحتاجه لورشة مجاري الهواء.", tr:"Spiral şekillendirmelerden tam otomatik üretim hatlarına — HVAC kanal atölyeniz için ihtiyacınız olan her şey.", fr:"Des tubeformers spiralés aux lignes de production automatiques — tout pour votre atelier de conduits HVAC.", pt:"De formadoras espirais a linhas de produção automáticas — tudo para sua oficina de dutos HVAC.", hi:"स्पाइरल ट्यूबफॉर्मर से पूर्ण स्वचालित डक्ट उत्पादन लाइनों तक — आपकी HVAC डक्ट वर्कशॉप के लिए सब कुछ।", id:"Dari tubeformer spiral hingga jalur produksi saluran otomatis penuh — semua yang Anda butuhkan untuk bengkel saluran HVAC Anda." },

    /* ---- About Page ---- */
    "about.eyebrow":    { en:"About SBKJ", zh:"关于SBKJ", es:"Sobre SBKJ", ru:"О компании", ar:"عن SBKJ", tr:"SBKJ Hakkında", fr:"À propos de SBKJ", pt:"Sobre a SBKJ", hi:"SBKJ के बारे में", id:"Tentang SBKJ" },
    "about.title":      { en:"HVAC Duct Machinery Specialist", zh:"暖通风管设备专家", es:"Especialista en Maquinaria de Conductos HVAC", ru:"Специалист по оборудованию воздуховодов", ar:"متخصصون في آلات مجاري الهواء", tr:"HVAC Kanal Makineleri Uzmanı", fr:"Spécialiste des machines de canalisation HVAC", pt:"Especialista em Máquinas de Dutos HVAC", hi:"HVAC डक्ट मशीनरी विशेषज्ञ", id:"Spesialis Mesin Saluran HVAC" },

    /* ---- Contact Page ---- */
    "contact.eyebrow":  { en:"Get in touch", zh:"联系我们", es:"Contáctenos", ru:"Свяжитесь с нами", ar:"تواصل معنا", tr:"İletişime Geçin", fr:"Contactez-nous", pt:"Entre em contato", hi:"संपर्क करें", id:"Hubungi Kami" },
    "contact.title":    { en:"Request a Quote or Consultation", zh:"获取报价或咨询", es:"Solicite una Cotización o Consulta", ru:"Запросите цену или консультацию", ar:"اطلب عرض أسعار أو استشارة", tr:"Teklif veya Danışma Talebi", fr:"Demandez un devis ou une consultation", pt:"Solicite uma Cotação ou Consulta", hi:"कोटेशन या परामर्श का अनुरोध करें", id:"Minta Penawaran atau Konsultasi" },
    "contact.lead":     { en:"Share your production requirements and we will propose a suitable machine configuration, line layout and investment budget.", zh:"分享您的生产需求，我们将为您推荐合适的设备配置、产线布局和投资预算。", es:"Comparta sus requisitos de producción y le propondremos una configuración adecuada.", ru:"Опишите ваши требования, и мы предложим подходящую конфигурацию.", ar:"شاركنا متطلبات الإنتاج الخاصة بك وسنقترح تكوين الآلة المناسب.", tr:"Üretim gereksinimlerinizi paylaşın, size uygun makine yapılandırmasını önereceğiz.", fr:"Partagez vos besoins de production et nous proposerons une configuration adaptée.", pt:"Compartilhe seus requisitos de produção e proporemos uma configuração adequada.", hi:"अपनी उत्पादन आवश्यकताएं साझा करें और हम उपयुक्त मशीन कॉन्फ़िगरेशन प्रस्तावित करेंगे।", id:"Bagikan kebutuhan produksi Anda dan kami akan mengusulkan konfigurasi mesin yang sesuai." },
    "contact.info":     { en:"Contact Information", zh:"联系信息", es:"Información de Contacto", ru:"Контактная информация", ar:"معلومات الاتصال", tr:"İletişim Bilgileri", fr:"Informations de contact", pt:"Informações de Contato", hi:"संपर्क जानकारी", id:"Informasi Kontak" },
    "contact.company":  { en:"Company:", zh:"公司：", es:"Empresa:", ru:"Компания:", ar:"الشركة:", tr:"Şirket:", fr:"Entreprise :", pt:"Empresa:", hi:"कंपनी:", id:"Perusahaan:" },
    "contact.email":    { en:"Email:", zh:"邮箱：", es:"Email:", ru:"Эл. почта:", ar:"البريد:", tr:"E-posta:", fr:"Email :", pt:"Email:", hi:"ईमेल:", id:"Email:" },
    "contact.phone":    { en:"Phone / WhatsApp:", zh:"电话 / WhatsApp：", es:"Teléfono / WhatsApp:", ru:"Телефон / WhatsApp:", ar:"هاتف / واتساب:", tr:"Telefon / WhatsApp:", fr:"Téléphone / WhatsApp :", pt:"Telefone / WhatsApp:", hi:"फ़ोन / WhatsApp:", id:"Telepon / WhatsApp:" },
    "contact.factory":  { en:"Factory Address:", zh:"工厂地址：", es:"Dirección de fábrica:", ru:"Адрес завода:", ar:"عنوان المصنع:", tr:"Fabrika Adresi:", fr:"Adresse usine :", pt:"Endereço da fábrica:", hi:"फैक्ट्री पता:", id:"Alamat Pabrik:" },
    "contact.office":   { en:"Office Address:", zh:"办公室地址：", es:"Dirección de oficina:", ru:"Адрес офиса:", ar:"عنوان المكتب:", tr:"Ofis Adresi:", fr:"Adresse bureau :", pt:"Endereço do escritório:", hi:"कार्यालय पता:", id:"Alamat Kantor:" },
    "form.name":        { en:"Full Name", zh:"姓名", es:"Nombre completo", ru:"Полное имя", ar:"الاسم الكامل", tr:"Ad Soyad", fr:"Nom complet", pt:"Nome completo", hi:"पूरा नाम", id:"Nama Lengkap" },
    "form.company":     { en:"Company", zh:"公司", es:"Empresa", ru:"Компания", ar:"الشركة", tr:"Şirket", fr:"Entreprise", pt:"Empresa", hi:"कंपनी", id:"Perusahaan" },
    "form.email":       { en:"Email", zh:"邮箱", es:"Email", ru:"Эл. почта", ar:"البريد الإلكتروني", tr:"E-posta", fr:"Email", pt:"Email", hi:"ईमेल", id:"Email" },
    "form.phone":       { en:"Phone / WhatsApp", zh:"电话 / WhatsApp", es:"Teléfono / WhatsApp", ru:"Телефон / WhatsApp", ar:"هاتف / واتساب", tr:"Telefon / WhatsApp", fr:"Téléphone / WhatsApp", pt:"Telefone / WhatsApp", hi:"फ़ोन / WhatsApp", id:"Telepon / WhatsApp" },
    "form.interest":    { en:"Interested in", zh:"感兴趣的产品", es:"Interesado en", ru:"Интересует", ar:"مهتم بـ", tr:"İlgilendiğiniz", fr:"Intéressé par", pt:"Interessado em", hi:"रुचि है", id:"Tertarik pada" },
    "form.select":      { en:"Select...", zh:"请选择...", es:"Seleccionar...", ru:"Выберите...", ar:"اختر...", tr:"Seçin...", fr:"Sélectionner...", pt:"Selecionar...", hi:"चुनें...", id:"Pilih..." },
    "form.spiral":      { en:"Spiral tubeformer", zh:"螺旋风管机", es:"Formadora espiral", ru:"Спиральный трубоформер", ar:"آلة تشكيل حلزوني", tr:"Spiral şekillendirici", fr:"Tubeformer spiralé", pt:"Formadora espiral", hi:"स्पाइरल ट्यूबफॉर्मर", id:"Tubeformer Spiral" },
    "form.rectline":    { en:"Rectangular duct line", zh:"矩形风管生产线", es:"Línea de conductos rectangulares", ru:"Линия прямоугольных воздуховодов", ar:"خط إنتاج قنوات مستطيلة", tr:"Dikdörtgen kanal hattı", fr:"Ligne de conduits rectangulaires", pt:"Linha de dutos retangulares", hi:"रेक्टैंगुलर डक्ट लाइन", id:"Jalur Saluran Persegi Panjang" },
    "form.elbow":       { en:"Elbow / flange forming", zh:"弯头/法兰成型", es:"Codo / formado de brida", ru:"Отводы / фланцы", ar:"تشكيل الكوع / الحافة", tr:"Dirsek / flanş şekillendirme", fr:"Coude / formage de bride", pt:"Cotovelo / formação de flange", hi:"एल्बो / फ्लैंज फॉर्मिंग", id:"Pembentukan Siku / Flensa" },
    "form.factory":     { en:"Complete duct factory", zh:"整套风管工厂", es:"Fábrica completa", ru:"Полный цех", ar:"مصنع قنوات كامل", tr:"Komple kanal fabrikası", fr:"Usine complète", pt:"Fábrica completa de dutos", hi:"पूर्ण डक्ट फैक्ट्री", id:"Pabrik Saluran Lengkap" },
    "form.other":       { en:"Other", zh:"其他", es:"Otro", ru:"Другое", ar:"أخرى", tr:"Diğer", fr:"Autre", pt:"Outro", hi:"अन्य", id:"Lainnya" },
    "form.details":     { en:"Project details", zh:"项目详情", es:"Detalles del proyecto", ru:"Описание проекта", ar:"تفاصيل المشروع", tr:"Proje detayları", fr:"Détails du projet", pt:"Detalhes do projeto", hi:"परियोजना विवरण", id:"Detail Proyek" },
    "form.placeholder": { en:"Material type, thickness, required capacity, available workshop size...", zh:"材料类型、厚度、所需产能、车间面积...", es:"Tipo de material, espesor, capacidad requerida, tamaño del taller...", ru:"Тип материала, толщина, требуемая мощность, размер цеха...", ar:"نوع المادة، السماكة، السعة المطلوبة، حجم الورشة...", tr:"Malzeme tipi, kalınlık, gerekli kapasite, atölye boyutu...", fr:"Type de matériau, épaisseur, capacité requise, taille de l'atelier...", pt:"Tipo de material, espessura, capacidade necessária, tamanho da oficina...", hi:"सामग्री का प्रकार, मोटाई, आवश्यक क्षमता, वर्कशॉप का आकार...", id:"Jenis material, ketebalan, kapasitas yang dibutuhkan, ukuran bengkel..." },
    "form.submit":      { en:"Send inquiry", zh:"发送询价", es:"Enviar consulta", ru:"Отправить запрос", ar:"إرسال الاستفسار", tr:"Sorgulama Gönder", fr:"Envoyer la demande", pt:"Enviar consulta", hi:"पूछताछ भेजें", id:"Kirim Pertanyaan" },

    /* ---- Product Pages ---- */
    "product.back":     { en:"← All machines", zh:"← 所有产品", es:"← Todas las máquinas", ru:"← Все оборудование", ar:"← جميع الآلات", tr:"← Tüm Makineler", fr:"← Toutes les machines", pt:"← Todas as máquinas", hi:"← सभी मशीनें", id:"← Semua Mesin" },
    "product.overview": { en:"Overview", zh:"产品概述", es:"Descripción general", ru:"Обзор", ar:"نظرة عامة", tr:"Genel Bakış", fr:"Aperçu", pt:"Visão geral", hi:"अवलोकन", id:"Ikhtisar" },
    "product.video":    { en:"Video", zh:"视频", es:"Video", ru:"Видео", ar:"فيديو", tr:"Video", fr:"Vidéo", pt:"Vídeo", hi:"वीडियो", id:"Video" },
    "product.specs":    { en:"Technical data", zh:"技术参数", es:"Datos técnicos", ru:"Характеристики", ar:"البيانات الفنية", tr:"Teknik Veriler", fr:"Données techniques", pt:"Dados técnicos", hi:"तकनीकी डेटा", id:"Data Teknis" },
    "product.cta":      { en:"Request Quote for This Machine", zh:"获取此设备报价", es:"Solicitar cotización", ru:"Запросить цену", ar:"طلب عرض سعر", tr:"Bu Makine İçin Teklif İste", fr:"Demander un devis", pt:"Solicitar cotação", hi:"इस मशीन के लिए कोटेशन", id:"Minta Penawaran Mesin Ini" },
    "product.vidreq":   { en:"Demo video available on request", zh:"演示视频可按需提供", es:"Video de demostración disponible a solicitud", ru:"Демо-видео по запросу", ar:"فيديو توضيحي متاح عند الطلب", tr:"Demo videosu talep üzerine mevcuttur", fr:"Vidéo démo disponible sur demande", pt:"Vídeo demonstrativo disponível sob solicitação", hi:"अनुरोध पर डेमो वीडियो उपलब्ध", id:"Video demo tersedia atas permintaan" },
    "product.vidcta":   { en:"Contact for factory footage", zh:"联系获取工厂实拍", es:"Contactar para video de fábrica", ru:"Запросить видео с завода", ar:"اتصل للحصول على فيديو المصنع", tr:"Fabrika görüntüleri için iletişime geçin", fr:"Contactez-nous pour des vidéos d'usine", pt:"Entre em contato para vídeo da fábrica", hi:"फैक्ट्री फुटेज के लिए संपर्क करें", id:"Hubungi untuk rekaman pabrik" },

    /* ---- Chat Widget ---- */
    "chat.placeholder": { en:"Ask about machines, ducts, welding...", zh:"询问关于设备、风管、焊接...", es:"Pregunte sobre máquinas, conductos...", ru:"Спросите об оборудовании...", ar:"...اسأل عن الآلات، القنوات", tr:"Makineler, kanallar hakkında sorun...", fr:"Posez vos questions sur les machines...", pt:"Pergunte sobre máquinas, dutos...", hi:"मशीनों, डक्ट, वेल्डिंग के बारे में पूछें...", id:"Tanya tentang mesin, saluran, pengelasan..." },

    /* ---- Why Section Items (index) ---- */
    "why.item1.title": {en:"End‑to‑End Solutions",zh:"端到端解决方案",es:"Soluciones Integrales",ru:"Комплексные решения",ar:"حلول متكاملة",tr:"Uçtan Uca Çözümler",fr:"Solutions complètes",pt:"Soluções Completas",hi:"संपूर्ण समाधान",id:"Solusi Menyeluruh"},
    "why.item1.desc": {en:"Complete duct production lines from coil to finished duct. Single source for spiral, rectangular and round machines.",zh:"从卷材到成品风管的完整生产线。螺旋、矩形和圆形设备一站式供应。",es:"Líneas completas de producción de conductos desde la bobina hasta el conducto terminado.",ru:"Полные линии производства воздуховодов от рулона до готового изделия.",ar:"خطوط إنتاج كاملة من اللفائف إلى القنوات الجاهزة.",tr:"Bobinden bitmiş kanala kadar eksiksiz üretim hatları.",fr:"Lignes complètes de la bobine au conduit fini.",pt:"Linhas completas de produção de dutos da bobina ao duto acabado.",hi:"कॉइल से तैयार डक्ट तक पूर्ण उत्पादन लाइनें।",id:"Jalur produksi saluran lengkap dari gulungan hingga saluran jadi."},
    "why.item2.title": {en:"30+ Years Engineering",zh:"30+年工程经验",es:"30+ Años de Ingeniería",ru:"30+ лет инженерии",ar:"30+ عامًا من الهندسة",tr:"30+ Yıllık Mühendislik",fr:"30+ ans d'ingénierie",pt:"30+ Anos de Engenharia",hi:"30+ वर्षों की इंजीनियरिंग",id:"30+ Tahun Rekayasa"},
    "why.item2.desc": {en:"Three decades of continuous R&D in HVAC ductwork machinery with proven reliability and precision.",zh:"三十年持续研发暖通风管设备，可靠性和精度经过验证。",es:"Tres décadas de I+D continuo en maquinaria de conductos HVAC con fiabilidad probada.",ru:"Три десятилетия непрерывных НИОКР в оборудовании для воздуховодов.",ar:"ثلاثة عقود من البحث والتطوير المستمر في آلات مجاري الهواء.",tr:"HVAC kanal makinelerinde otuz yıllık sürekli Ar-Ge.",fr:"Trois décennies de R&D continue en machines HVAC.",pt:"Três décadas de P&D contínuo em maquinaria de dutos HVAC.",hi:"HVAC डक्ट मशीनरी में तीन दशकों का निरंतर R&D।",id:"Tiga dekade R&D berkelanjutan dalam mesin saluran HVAC."},
    "why.item3.title": {en:"Global Certifications",zh:"全球认证",es:"Certificaciones Globales",ru:"Мировые сертификаты",ar:"شهادات عالمية",tr:"Küresel Sertifikalar",fr:"Certifications mondiales",pt:"Certificações Globais",hi:"वैश्विक प्रमाणपत्र",id:"Sertifikasi Global"},
    "why.item3.desc": {en:"CE, ISO 9001 certified with installations across 60+ countries. Built for international standards.",zh:"通过CE、ISO 9001认证，设备遍布60多个国家。按国际标准制造。",es:"Certificados CE, ISO 9001 con instalaciones en más de 60 países.",ru:"Сертификаты CE, ISO 9001, установки в 60+ странах.",ar:"حاصلة على شهادات CE وISO 9001 مع تركيبات في أكثر من 60 دولة.",tr:"CE, ISO 9001 sertifikalı, 60+ ülkede kurulum.",fr:"Certifiés CE, ISO 9001 avec des installations dans plus de 60 pays.",pt:"Certificados CE, ISO 9001 com instalações em mais de 60 países.",hi:"CE, ISO 9001 प्रमाणित, 60+ देशों में इंस्टॉलेशन।",id:"Bersertifikat CE, ISO 9001 dengan instalasi di 60+ negara."},
    "why.item4.title": {en:"Dedicated Support",zh:"专业支持",es:"Soporte Dedicado",ru:"Специализированная поддержка",ar:"دعم مخصص",tr:"Özel Destek",fr:"Support dédié",pt:"Suporte Dedicado",hi:"समर्पित सहायता",id:"Dukungan Khusus"},
    "why.item4.desc": {en:"24/7 multilingual technical support, remote diagnostics, and lifetime spare parts availability.",zh:"全天候多语种技术支持、远程诊断和终身备件供应。",es:"Soporte técnico multilingüe 24/7, diagnóstico remoto y repuestos de por vida.",ru:"Круглосуточная многоязычная поддержка, удалённая диагностика, запчасти.",ar:"دعم فني متعدد اللغات على مدار الساعة وتشخيص عن بُعد وقطع غيار.",tr:"7/24 çok dilli teknik destek, uzaktan tanılama ve ömür boyu yedek parça.",fr:"Support technique multilingue 24/7, diagnostic à distance et pièces détachées à vie.",pt:"Suporte técnico multilíngue 24/7, diagnóstico remoto e peças de reposição vitalícias.",hi:"24/7 बहुभाषी तकनीकी सहायता, रिमोट डायग्नोस्टिक्स और आजीवन स्पेयर पार्ट्स।",id:"Dukungan teknis multibahasa 24/7, diagnostik jarak jauh, dan suku cadang seumur hidup."},

    /* ---- Featured Section (index) ---- */
    "feat2.eyebrow": {en:"Featured Models",zh:"主打型号",es:"Modelos Destacados",ru:"Избранные модели",ar:"النماذج المميزة",tr:"Öne Çıkan Modeller",fr:"Modèles vedettes",pt:"Modelos em Destaque",hi:"प्रमुख मॉडल",id:"Model Unggulan"},
    "feat2.title": {en:"Key Machines for High‑Performance Duct Production",zh:"高性能风管生产的关键设备",es:"Máquinas Clave para Producción de Conductos de Alto Rendimiento",ru:"Ключевое оборудование для высокопроизводительного производства",ar:"آلات رئيسية لإنتاج مجاري هواء عالية الأداء",tr:"Yüksek Performanslı Kanal Üretimi İçin Anahtar Makineler",fr:"Machines clés pour la production de conduits haute performance",pt:"Máquinas-Chave para Produção de Dutos de Alto Desempenho",hi:"उच्च-प्रदर्शन डक्ट उत्पादन के लिए प्रमुख मशीनें",id:"Mesin Utama untuk Produksi Saluran Berkinerja Tinggi"},
    "feat2.lead": {en:"Our flagship equipment for automatic duct lines, spiral duct forming and fittings.",zh:"我们的旗舰设备，用于自动风管线、螺旋风管成型和管件加工。",es:"Nuestro equipo insignia para líneas automáticas, formado espiral y accesorios.",ru:"Наше флагманское оборудование для автоматических линий и спиральных воздуховодов.",ar:"معداتنا الرائدة لخطوط القنوات الأوتوماتيكية والتشكيل الحلزوني.",tr:"Otomatik kanal hatları, spiral şekillendirme ve bağlantı parçaları için amiral gemisi ekipmanımız.",fr:"Nos équipements phares pour lignes automatiques et formage spiral.",pt:"Nossos equipamentos emblemáticos para linhas automáticas e formação espiral.",hi:"स्वचालित डक्ट लाइनों और स्पाइरल फॉर्मिंग के लिए हमारे प्रमुख उपकरण।",id:"Peralatan unggulan kami untuk jalur saluran otomatis dan pembentukan spiral."},
    "feat2.viewall": {en:"View all machines & technical data",zh:"查看所有设备及技术参数",es:"Ver todas las máquinas y datos técnicos",ru:"Все машины и характеристики",ar:"عرض جميع الآلات والبيانات الفنية",tr:"Tüm makineleri ve teknik verileri görüntüle",fr:"Voir toutes les machines et données techniques",pt:"Ver todas as máquinas e dados técnicos",hi:"सभी मशीनें और तकनीकी डेटा देखें",id:"Lihat semua mesin & data teknis"},

    /* ---- Videos Section (index) ---- */
    "vid.eyebrow": {en:"Videos",zh:"视频",es:"Videos",ru:"Видео",ar:"فيديوهات",tr:"Videolar",fr:"Vidéos",pt:"Vídeos",hi:"वीडियो",id:"Video"},
    "vid.title": {en:"See the Machines in Operation",zh:"观看设备运行实况",es:"Vea las Máquinas en Operación",ru:"Смотрите машины в работе",ar:"شاهد الآلات أثناء التشغيل",tr:"Makineleri Çalışırken Görün",fr:"Voir les machines en fonctionnement",pt:"Veja as Máquinas em Operação",hi:"मशीनों को ऑपरेशन में देखें",id:"Lihat Mesin Beroperasi"},
    "vid.lead": {en:"Short clips of our core machines running in production environments.",zh:"我们核心设备在生产环境中运行的短片。",es:"Videos cortos de nuestras máquinas principales en entornos de producción.",ru:"Короткие видео работы наших машин в производственных условиях.",ar:"مقاطع قصيرة لآلاتنا الأساسية أثناء الإنتاج.",tr:"Üretim ortamlarında çalışan temel makinelerimizin kısa videoları.",fr:"Courts clips de nos machines en environnement de production.",pt:"Clipes curtos de nossas máquinas em ambientes de produção.",hi:"उत्पादन वातावरण में हमारी प्रमुख मशीनों के छोटे क्लिप।",id:"Klip singkat mesin utama kami yang beroperasi di lingkungan produksi."},

    /* ---- CTA Final (index) ---- */
    "cta.eyebrow": {en:"Let's build together",zh:"携手共建",es:"Construyamos juntos",ru:"Давайте строить вместе",ar:"لنبني معًا",tr:"Birlikte inşa edelim",fr:"Construisons ensemble",pt:"Vamos construir juntos",hi:"आइए मिलकर बनाएं",id:"Mari membangun bersama"},
    "cta.title": {en:"Ready to discuss your project?",zh:"准备好讨论您的项目了吗？",es:"¿Listo para discutir su proyecto?",ru:"Готовы обсудить ваш проект?",ar:"هل أنت مستعد لمناقشة مشروعك؟",tr:"Projenizi tartışmaya hazır mısınız?",fr:"Prêt à discuter de votre projet ?",pt:"Pronto para discutir seu projeto?",hi:"अपने प्रोजेक्ट पर चर्चा के लिए तैयार हैं?",id:"Siap mendiskusikan proyek Anda?"},
    "cta.lead": {en:"Share your production requirements and we will propose a suitable machine configuration and investment budget.",zh:"分享您的生产需求，我们将为您推荐合适的设备配置和投资预算。",es:"Comparta sus requisitos y le propondremos una configuración y presupuesto adecuados.",ru:"Опишите ваши требования — мы предложим конфигурацию и бюджет.",ar:"شاركنا متطلباتك وسنقترح تكوين الآلات والميزانية المناسبة.",tr:"Üretim gereksinimlerinizi paylaşın, uygun makine yapılandırması önereceğiz.",fr:"Partagez vos besoins et nous proposerons une configuration et un budget adaptés.",pt:"Compartilhe seus requisitos e proporemos uma configuração e orçamento adequados.",hi:"अपनी उत्पादन आवश्यकताएं साझा करें, हम उपयुक्त कॉन्फ़िगरेशन और बजट प्रस्तावित करेंगे।",id:"Bagikan kebutuhan produksi Anda dan kami akan mengusulkan konfigurasi dan anggaran yang sesuai."},

    /* ---- About Page Content ---- */
    "about.lead": {en:"National high‑tech enterprise specializing in spiral duct forming machines, round duct machines and auto duct production lines.",zh:"国家高新技术企业，专业生产螺旋风管成型机、圆管机和全自动风管生产线。",es:"Empresa nacional de alta tecnología especializada en maquinaria de conductos HVAC.",ru:"Высокотехнологичное предприятие, специализирующееся на оборудовании для воздуховодов.",ar:"مؤسسة وطنية عالية التقنية متخصصة في آلات تشكيل القنوات.",tr:"Spiral kanal makineleri ve otomatik kanal üretim hatlarında uzmanlaşmış yüksek teknoloji kuruluşu.",fr:"Entreprise de haute technologie spécialisée dans les machines de formage de conduits.",pt:"Empresa de alta tecnologia especializada em máquinas formadoras de dutos.",hi:"स्पाइरल डक्ट फॉर्मिंग मशीन और ऑटो डक्ट लाइनों में विशेषज्ञ राष्ट्रीय हाई-टेक उद्यम।",id:"Perusahaan teknologi tinggi yang mengkhususkan diri dalam mesin saluran HVAC."},
    "about.story.title": {en:"SBKJ Group – Our Story",zh:"SBKJ集团 – 我们的故事",es:"SBKJ Group – Nuestra Historia",ru:"SBKJ Group – Наша история",ar:"مجموعة SBKJ – قصتنا",tr:"SBKJ Group – Hikayemiz",fr:"SBKJ Group – Notre histoire",pt:"SBKJ Group – Nossa História",hi:"SBKJ Group – हमारी कहानी",id:"SBKJ Group – Cerita Kami"},
    "about.story.p1": {en:"SBKJ Group is based in the Yangtze River Delta near Shanghai, China. Since 1995, we have been focusing on the development and manufacture of HVAC ductwork machinery, including spiral duct forming machines, round duct making machines and auto duct production lines.",zh:"SBKJ集团位于中国上海附近的长三角地区。自1995年以来，我们专注于暖通风管设备的研发和制造，包括螺旋风管成型机、圆管机和全自动风管生产线。",es:"SBKJ Group tiene su sede en el delta del Yangtsé, cerca de Shanghái, China. Desde 1995, nos dedicamos al desarrollo y fabricación de maquinaria HVAC.",ru:"SBKJ Group расположена в дельте реки Янцзы недалеко от Шанхая. С 1995 года мы разрабатываем и производим оборудование для воздуховодов.",ar:"تقع مجموعة SBKJ في دلتا نهر اليانغتسي بالقرب من شنغهاي. منذ عام 1995 نركز على تطوير وتصنيع آلات مجاري الهواء.",tr:"SBKJ Group, Çin Şangay yakınlarındaki Yangtze Nehri Deltası'nda bulunmaktadır. 1995'ten bu yana HVAC kanal makineleri geliştirme ve üretimine odaklanıyoruz.",fr:"SBKJ Group est basé dans le delta du Yangtsé près de Shanghai. Depuis 1995, nous développons et fabriquons des machines HVAC.",pt:"O SBKJ Group está sediado no delta do rio Yangtze, perto de Xangai. Desde 1995, desenvolvemos e fabricamos máquinas de dutos HVAC.",hi:"SBKJ Group शंघाई के पास यांग्त्सी नदी डेल्टा में स्थित है। 1995 से हम HVAC डक्ट मशीनरी के विकास और निर्माण पर केंद्रित हैं।",id:"SBKJ Group berbasis di Delta Sungai Yangtze dekat Shanghai, Cina. Sejak 1995, kami fokus pada pengembangan dan pembuatan mesin saluran HVAC."},
    "about.story.p2": {en:"As a national new high‑tech enterprise, we have obtained ISO9001 and CE certifications and hold dozens of patents. Our products are used in climate and ventilation projects in more than 60 countries and regions worldwide.",zh:"作为国家高新技术企业，我们已获得ISO9001和CE认证，拥有数十项专利。我们的产品被全球60多个国家和地区的暖通空调项目使用。",es:"Como empresa nacional de alta tecnología, contamos con certificaciones ISO9001 y CE y decenas de patentes. Nuestros productos se utilizan en más de 60 países.",ru:"Как национальное высокотехнологичное предприятие, мы имеем сертификаты ISO9001 и CE и десятки патентов. Наша продукция используется в 60+ странах.",ar:"كمؤسسة وطنية عالية التقنية، حصلنا على شهادات ISO9001 وCE ونمتلك عشرات براءات الاختراع. تُستخدم منتجاتنا في أكثر من 60 دولة.",tr:"Ulusal yüksek teknoloji kuruluşu olarak ISO9001 ve CE sertifikalarımız ve onlarca patentimiz bulunmaktadır. Ürünlerimiz 60+ ülkede kullanılmaktadır.",fr:"En tant qu'entreprise de haute technologie, nous possédons les certifications ISO9001 et CE et des dizaines de brevets. Nos produits sont utilisés dans plus de 60 pays.",pt:"Como empresa de alta tecnologia, possuímos certificações ISO9001 e CE e dezenas de patentes. Nossos produtos são usados em mais de 60 países.",hi:"राष्ट्रीय हाई-टेक उद्यम के रूप में, हमारे पास ISO9001 और CE प्रमाणपत्र और दर्जनों पेटेंट हैं। हमारे उत्पाद 60+ देशों में उपयोग किए जाते हैं।",id:"Sebagai perusahaan teknologi tinggi nasional, kami memiliki sertifikasi ISO9001 dan CE serta puluhan paten. Produk kami digunakan di 60+ negara."},
    "about.story.note": {en:"30+ years experience · 10+ production lines · 80+ exported countries · 24h customer service.",zh:"30+年经验 · 10+条生产线 · 80+出口国家 · 24小时客户服务。",es:"30+ años de experiencia · 10+ líneas de producción · 80+ países de exportación · Servicio 24h.",ru:"30+ лет опыта · 10+ производственных линий · 80+ стран экспорта · Сервис 24ч.",ar:"30+ عامًا من الخبرة · 10+ خطوط إنتاج · 80+ دولة تصدير · خدمة 24 ساعة.",tr:"30+ yıl deneyim · 10+ üretim hattı · 80+ ihracat ülkesi · 24 saat hizmet.",fr:"30+ ans d'expérience · 10+ lignes de production · 80+ pays d'exportation · Service 24h.",pt:"30+ anos de experiência · 10+ linhas de produção · 80+ países de exportação · Atendimento 24h.",hi:"30+ वर्षों का अनुभव · 10+ उत्पादन लाइनें · 80+ निर्यात देश · 24 घंटे सेवा।",id:"30+ tahun pengalaman · 10+ jalur produksi · 80+ negara ekspor · Layanan 24 jam."},
    "about.video.title": {en:"Company Overview",zh:"公司概览",es:"Resumen de la Empresa",ru:"Обзор компании",ar:"نبذة عن الشركة",tr:"Şirket Tanıtımı",fr:"Présentation de l'entreprise",pt:"Visão Geral da Empresa",hi:"कंपनी का अवलोकन",id:"Profil Perusahaan"},
    "about.choose.title": {en:"Why customers choose SBKJ",zh:"客户为什么选择SBKJ",es:"Por qué los clientes eligen SBKJ",ru:"Почему клиенты выбирают SBKJ",ar:"لماذا يختار العملاء SBKJ",tr:"Müşteriler neden SBKJ'yi seçiyor",fr:"Pourquoi les clients choisissent SBKJ",pt:"Por que os clientes escolhem a SBKJ",hi:"ग्राहक SBKJ क्यों चुनते हैं",id:"Mengapa pelanggan memilih SBKJ"},
    "about.choose.1": {en:"Dedicated HVAC duct machinery manufacturer with 30+ years of know‑how",zh:"专注暖通风管设备制造30+年",es:"Fabricante dedicado de maquinaria HVAC con más de 30 años de experiencia",ru:"Специализированный производитель оборудования для воздуховодов с 30+ летним опытом",ar:"شركة متخصصة في تصنيع آلات مجاري الهواء بخبرة 30+ عامًا",tr:"30+ yıllık bilgi birikimine sahip HVAC kanal makineleri üreticisi",fr:"Fabricant dédié de machines HVAC avec 30+ ans de savoir-faire",pt:"Fabricante dedicado de maquinaria HVAC com mais de 30 anos de know-how",hi:"30+ वर्षों के अनुभव के साथ समर्पित HVAC डक्ट मशीनरी निर्माता",id:"Produsen mesin saluran HVAC khusus dengan pengalaman 30+ tahun"},
    "about.choose.2": {en:"Full range: spiral duct forming, round duct machines and auto duct production lines",zh:"全系列产品：螺旋风管成型、圆管机和全自动风管生产线",es:"Gama completa: formado espiral, máquinas de conductos redondos y líneas automáticas",ru:"Полный ассортимент: спиральные, круглые воздуховоды и автоматические линии",ar:"مجموعة كاملة: تشكيل حلزوني وآلات قنوات مستديرة وخطوط إنتاج أوتوماتيكية",tr:"Tam ürün yelpazesi: spiral şekillendirme, yuvarlak kanal makineleri ve otomatik üretim hatları",fr:"Gamme complète : formage spiral, machines rondes et lignes automatiques",pt:"Linha completa: formação espiral, máquinas de dutos redondos e linhas automáticas",hi:"पूर्ण श्रेणी: स्पाइरल डक्ट फॉर्मिंग, राउंड डक्ट मशीन और ऑटो प्रोडक्शन लाइन",id:"Rangkaian lengkap: pembentukan spiral, mesin saluran bulat, dan jalur produksi otomatis"},
    "about.choose.3": {en:"ISO9001 & CE certified quality with over 60 patents",zh:"通过ISO9001和CE认证，拥有60+项专利",es:"Calidad certificada ISO9001 y CE con más de 60 patentes",ru:"Качество ISO9001 и CE, более 60 патентов",ar:"جودة معتمدة ISO9001 وCE مع أكثر من 60 براءة اختراع",tr:"60'tan fazla patentle ISO9001 ve CE sertifikalı kalite",fr:"Qualité certifiée ISO9001 et CE avec plus de 60 brevets",pt:"Qualidade certificada ISO9001 e CE com mais de 60 patentes",hi:"60+ पेटेंट के साथ ISO9001 और CE प्रमाणित गुणवत्ता",id:"Kualitas bersertifikat ISO9001 & CE dengan lebih dari 60 paten"},
    "about.choose.4": {en:"Experienced export team serving projects in more than 60 countries",zh:"经验丰富的出口团队，服务60+个国家的项目",es:"Equipo de exportación experimentado sirviendo proyectos en más de 60 países",ru:"Опытная команда экспорта, работающая в 60+ странах",ar:"فريق تصدير متمرس يخدم مشاريع في أكثر من 60 دولة",tr:"60'tan fazla ülkede projelere hizmet veren deneyimli ihracat ekibi",fr:"Équipe export expérimentée desservant plus de 60 pays",pt:"Equipe de exportação experiente atendendo projetos em mais de 60 países",hi:"60+ देशों में परियोजनाओं की सेवा करने वाली अनुभवी निर्यात टीम",id:"Tim ekspor berpengalaman yang melayani proyek di lebih dari 60 negara"},

    /* ---- About Solutions ---- */
    "about.sol.eyebrow": {en:"Solutions",zh:"解决方案",es:"Soluciones",ru:"Решения",ar:"الحلول",tr:"Çözümler",fr:"Solutions",pt:"Soluções",hi:"समाधान",id:"Solusi"},
    "about.sol.title": {en:"Built Around Your Production Plan",zh:"围绕您的生产计划量身定制",es:"Diseñado en Torno a Su Plan de Producción",ru:"Разработано под ваш производственный план",ar:"مصممة حول خطة الإنتاج الخاصة بك",tr:"Üretim Planınıza Göre Tasarlandı",fr:"Conçu autour de votre plan de production",pt:"Projetado em Torno ao Seu Plano de Produção",hi:"आपकी उत्पादन योजना के अनुसार निर्मित",id:"Dirancang Sesuai Rencana Produksi Anda"},
    "about.sol.lead": {en:"Whether you are upgrading a workshop or building a new duct factory, we design the complete layout, select machinery and provide training.",zh:"无论您是升级车间还是建设新的风管工厂，我们都为您设计完整布局、选择设备并提供培训。",es:"Ya sea que esté actualizando un taller o construyendo una nueva fábrica, diseñamos el layout completo y proporcionamos capacitación.",ru:"Модернизация цеха или строительство нового завода — мы проектируем layout, подбираем оборудование и обучаем.",ar:"سواء كنت تُحدّث ورشة أو تبني مصنعًا جديدًا، نصمم التخطيط الكامل ونوفر التدريب.",tr:"Atölyenizi yeniliyor veya yeni bir fabrika kuruyorsanız, tam yerleşim tasarımı yapıyor ve eğitim sağlıyoruz.",fr:"Que vous modernisiez un atelier ou construisiez une nouvelle usine, nous concevons l'aménagement et assurons la formation.",pt:"Seja atualizando uma oficina ou construindo uma nova fábrica, projetamos o layout completo e fornecemos treinamento.",hi:"चाहे वर्कशॉप अपग्रेड करें या नई फैक्ट्री बनाएं, हम पूर्ण लेआउट डिज़ाइन करते हैं और प्रशिक्षण देते हैं।",id:"Baik memperbarui bengkel atau membangun pabrik baru, kami merancang tata letak lengkap dan memberikan pelatihan."},
    "about.turnkey.title": {en:"Turn‑Key Duct Factory Design",zh:"交钥匙风管工厂设计",es:"Diseño Llave en Mano de Fábrica",ru:"Проект завода под ключ",ar:"تصميم مصنع جاهز للتشغيل",tr:"Anahtar Teslim Fabrika Tasarımı",fr:"Conception d'usine clé en main",pt:"Projeto de Fábrica Chave na Mão",hi:"टर्न-की डक्ट फैक्ट्री डिज़ाइन",id:"Desain Pabrik Saluran Turnkey"},
    "about.turnkey.desc": {en:"We help you plan coil storage, line layout, material flow and maintenance zones to optimize throughput and safety.",zh:"我们帮助您规划卷材存储、产线布局、物料流动和维护区域，优化产能和安全性。",es:"Le ayudamos a planificar almacenamiento, layout, flujo de materiales y zonas de mantenimiento.",ru:"Помогаем спланировать хранение рулонов, расположение линий, потоки материалов и зоны обслуживания.",ar:"نساعدك في تخطيط التخزين والتخطيط وتدفق المواد ومناطق الصيانة.",tr:"Bobin depolama, hat yerleşimi, malzeme akışı ve bakım alanlarını planlamanıza yardımcı oluyoruz.",fr:"Nous planifions le stockage, l'aménagement, le flux des matériaux et les zones de maintenance.",pt:"Ajudamos a planejar armazenamento, layout, fluxo de materiais e zonas de manutenção.",hi:"हम कॉइल स्टोरेज, लाइन लेआउट, मटीरियल फ्लो और मेंटेनेंस ज़ोन की योजना बनाने में मदद करते हैं।",id:"Kami membantu merencanakan penyimpanan gulungan, tata letak jalur, alur material, dan zona pemeliharaan."},
    "about.turnkey.1": {en:"3D layout and utility requirements",zh:"3D布局和设施需求",es:"Layout 3D y requisitos de servicios",ru:"3D-планировка и требования к коммуникациям",ar:"تخطيط ثلاثي الأبعاد ومتطلبات المرافق",tr:"3D yerleşim ve altyapı gereksinimleri",fr:"Plan 3D et exigences techniques",pt:"Layout 3D e requisitos de utilidades",hi:"3D लेआउट और यूटिलिटी आवश्यकताएं",id:"Tata letak 3D dan kebutuhan utilitas"},
    "about.turnkey.2": {en:"Machine selection by capacity and budget",zh:"按产能和预算选型",es:"Selección de máquinas por capacidad y presupuesto",ru:"Подбор машин по мощности и бюджету",ar:"اختيار الآلات حسب السعة والميزانية",tr:"Kapasite ve bütçeye göre makine seçimi",fr:"Sélection de machines selon capacité et budget",pt:"Seleção de máquinas por capacidade e orçamento",hi:"क्षमता और बजट के अनुसार मशीन चयन",id:"Pemilihan mesin berdasarkan kapasitas dan anggaran"},
    "about.turnkey.3": {en:"Installation and commissioning schedule",zh:"安装和调试计划",es:"Programa de instalación y puesta en marcha",ru:"График монтажа и пуско-наладки",ar:"جدول التركيب والتشغيل",tr:"Kurulum ve devreye alma programı",fr:"Calendrier d'installation et de mise en service",pt:"Cronograma de instalação e comissionamento",hi:"इंस्टॉलेशन और कमीशनिंग शेड्यूल",id:"Jadwal instalasi dan commissioning"},
    "about.auto.title": {en:"Customized Automation Levels",zh:"定制化自动化水平",es:"Niveles de Automatización Personalizados",ru:"Индивидуальные уровни автоматизации",ar:"مستويات أتمتة مخصصة",tr:"Özelleştirilmiş Otomasyon Seviyeleri",fr:"Niveaux d'automatisation personnalisés",pt:"Níveis de Automação Personalizados",hi:"कस्टमाइज़्ड ऑटोमेशन स्तर",id:"Tingkat Otomasi yang Disesuaikan"},
    "about.auto.desc": {en:"From semi‑automatic lines for flexible production to fully automatic systems for mass‑volume projects.",zh:"从半自动生产线到全自动系统，满足不同产量需求。",es:"Desde líneas semiautomáticas hasta sistemas completamente automáticos para proyectos de alto volumen.",ru:"От полуавтоматических линий до полностью автоматических систем для массового производства.",ar:"من خطوط شبه أوتوماتيكية إلى أنظمة أوتوماتيكية بالكامل للمشاريع الكبيرة.",tr:"Esnek üretim için yarı otomatik hatlardan büyük hacimli projeler için tam otomatik sistemlere.",fr:"Des lignes semi-automatiques aux systèmes entièrement automatiques pour la production en série.",pt:"De linhas semiautomáticas a sistemas totalmente automáticos para projetos de alto volume.",hi:"लचीले उत्पादन के लिए सेमी-ऑटोमैटिक से लेकर बड़े पैमाने की परियोजनाओं के लिए पूर्ण स्वचालित सिस्टम तक।",id:"Dari jalur semi-otomatis untuk produksi fleksibel hingga sistem otomatis penuh untuk proyek volume besar."},
    "about.auto.1": {en:"Manual, CNC and fully automatic options",zh:"手动、CNC和全自动可选",es:"Opciones manual, CNC y completamente automáticas",ru:"Ручные, ЧПУ и полностью автоматические опции",ar:"خيارات يدوية وCNC وأوتوماتيكية بالكامل",tr:"Manuel, CNC ve tam otomatik seçenekler",fr:"Options manuelles, CNC et entièrement automatiques",pt:"Opções manual, CNC e totalmente automáticas",hi:"मैनुअल, CNC और पूर्ण स्वचालित विकल्प",id:"Opsi manual, CNC, dan otomatis penuh"},
    "about.auto.2": {en:"Integration with plasma cutting and labeling",zh:"集成等离子切割和标签系统",es:"Integración con corte por plasma y etiquetado",ru:"Интеграция с плазменной резкой и маркировкой",ar:"التكامل مع القطع بالبلازما والتسمية",tr:"Plazma kesim ve etiketleme entegrasyonu",fr:"Intégration avec découpe plasma et marquage",pt:"Integração com corte a plasma e etiquetagem",hi:"प्लाज़्मा कटिंग और लेबलिंग के साथ एकीकरण",id:"Integrasi dengan pemotongan plasma dan pelabelan"},
    "about.auto.3": {en:"Production reporting and nesting software",zh:"生产报告和排料软件",es:"Software de informes de producción y anidamiento",ru:"Программное обеспечение для отчётов и раскроя",ar:"برامج تقارير الإنتاج والتعشيش",tr:"Üretim raporlama ve nesting yazılımı",fr:"Logiciel de rapports et d'imbrication",pt:"Software de relatórios de produção e nesting",hi:"उत्पादन रिपोर्टिंग और नेस्टिंग सॉफ़्टवेयर",id:"Perangkat lunak pelaporan produksi dan nesting"},
    "about.global.title": {en:"Global Projects",zh:"全球项目",es:"Proyectos Globales",ru:"Глобальные проекты",ar:"مشاريع عالمية",tr:"Küresel Projeler",fr:"Projets mondiaux",pt:"Projetos Globais",hi:"वैश्विक परियोजनाएं",id:"Proyek Global"},
    "about.global.desc": {en:"Successful installations in the Middle East, Europe, Asia and Latin America for commercial buildings, metro stations, airports and industrial plants.",zh:"在中东、欧洲、亚洲和拉丁美洲成功安装，用于商业建筑、地铁站、机场和工业厂房。",es:"Instalaciones exitosas en Medio Oriente, Europa, Asia y América Latina para edificios comerciales, estaciones de metro, aeropuertos y plantas industriales.",ru:"Успешные установки на Ближнем Востоке, в Европе, Азии и Латинской Америке для зданий, метро, аэропортов и заводов.",ar:"تركيبات ناجحة في الشرق الأوسط وأوروبا وآسيا وأمريكا اللاتينية للمباني التجارية ومحطات المترو والمطارات.",tr:"Orta Doğu, Avrupa, Asya ve Latin Amerika'da ticari binalar, metro istasyonları ve havalimanları için başarılı kurulumlar.",fr:"Installations réussies au Moyen-Orient, en Europe, en Asie et en Amérique latine.",pt:"Instalações bem-sucedidas no Oriente Médio, Europa, Ásia e América Latina.",hi:"मध्य पूर्व, यूरोप, एशिया और लैटिन अमेरिका में व्यावसायिक भवनों, मेट्रो और हवाई अड्डों के लिए सफल इंस्टॉलेशन।",id:"Instalasi sukses di Timur Tengah, Eropa, Asia, dan Amerika Latin untuk gedung komersial, stasiun metro, dan bandara."},
    "about.global.stat1": {en:"machines installed",zh:"设备已安装",es:"máquinas instaladas",ru:"машин установлено",ar:"آلة مثبتة",tr:"makine kuruldu",fr:"machines installées",pt:"máquinas instaladas",hi:"मशीनें स्थापित",id:"mesin terpasang"},
    "about.global.stat2": {en:"continents served",zh:"大洲覆盖",es:"continentes atendidos",ru:"континентов обслужено",ar:"قارة تم خدمتها",tr:"kıtaya hizmet",fr:"continents desservis",pt:"continentes atendidos",hi:"महाद्वीपों में सेवा",id:"benua dilayani"},
    "about.global.stat3": {en:"standard warranty",zh:"标准质保",es:"garantía estándar",ru:"стандартная гарантия",ar:"ضمان قياسي",tr:"standart garanti",fr:"garantie standard",pt:"garantia padrão",hi:"मानक वारंटी",id:"garansi standar"},

    /* ---- About Service ---- */
    "about.svc.eyebrow": {en:"Service",zh:"服务",es:"Servicio",ru:"Сервис",ar:"الخدمة",tr:"Hizmet",fr:"Service",pt:"Serviço",hi:"सेवा",id:"Layanan"},
    "about.svc.title": {en:"Full Lifecycle Support",zh:"全生命周期支持",es:"Soporte de Ciclo de Vida Completo",ru:"Поддержка полного жизненного цикла",ar:"دعم دورة الحياة الكاملة",tr:"Tam Yaşam Döngüsü Desteği",fr:"Support sur tout le cycle de vie",pt:"Suporte de Ciclo de Vida Completo",hi:"पूर्ण जीवनचक्र सहायता",id:"Dukungan Siklus Hidup Penuh"},
    "about.svc.lead": {en:"We stand behind every machine with fast remote diagnostics, original spare parts and clear training for your operators and maintenance team.",zh:"我们为每台设备提供快速远程诊断、原装备件和清晰的操作员培训。",es:"Respaldamos cada máquina con diagnóstico remoto rápido, repuestos originales y capacitación clara.",ru:"Мы обеспечиваем быструю удалённую диагностику, оригинальные запчасти и обучение вашей команды.",ar:"نقف خلف كل آلة مع تشخيص عن بُعد سريع وقطع غيار أصلية وتدريب واضح.",tr:"Her makinenin arkasında hızlı uzaktan tanılama, orijinal yedek parçalar ve net eğitimle duruyoruz.",fr:"Nous soutenons chaque machine avec un diagnostic rapide, des pièces d'origine et une formation claire.",pt:"Apoiamos cada máquina com diagnóstico remoto rápido, peças originais e treinamento claro.",hi:"हम हर मशीन के पीछे तेज़ रिमोट डायग्नोस्टिक्स, ओरिजिनल स्पेयर पार्ट्स और स्पष्ट प्रशिक्षण के साथ खड़े हैं।",id:"Kami mendukung setiap mesin dengan diagnostik jarak jauh cepat, suku cadang asli, dan pelatihan yang jelas."},
    "about.install.title": {en:"Installation & Training",zh:"安装与培训",es:"Instalación y Capacitación",ru:"Монтаж и обучение",ar:"التركيب والتدريب",tr:"Kurulum ve Eğitim",fr:"Installation et formation",pt:"Instalação e Treinamento",hi:"इंस्टॉलेशन और प्रशिक्षण",id:"Instalasi & Pelatihan"},
    "about.install.1": {en:"On‑site installation supervision",zh:"现场安装监督",es:"Supervisión de instalación en sitio",ru:"Наблюдение за монтажом на месте",ar:"إشراف على التركيب في الموقع",tr:"Yerinde kurulum denetimi",fr:"Supervision d'installation sur site",pt:"Supervisão de instalação no local",hi:"ऑन-साइट इंस्टॉलेशन पर्यवेक्षण",id:"Pengawasan instalasi di lokasi"},
    "about.install.2": {en:"Operator and maintenance training",zh:"操作员和维护培训",es:"Capacitación de operadores y mantenimiento",ru:"Обучение операторов и техобслуживание",ar:"تدريب المشغلين والصيانة",tr:"Operatör ve bakım eğitimi",fr:"Formation opérateurs et maintenance",pt:"Treinamento de operadores e manutenção",hi:"ऑपरेटर और मेंटेनेंस प्रशिक्षण",id:"Pelatihan operator dan pemeliharaan"},
    "about.install.3": {en:"Production startup assistance",zh:"生产启动协助",es:"Asistencia en puesta en marcha",ru:"Помощь при запуске производства",ar:"مساعدة في بدء الإنتاج",tr:"Üretim başlatma yardımı",fr:"Assistance au démarrage de la production",pt:"Assistência na partida da produção",hi:"उत्पादन स्टार्टअप सहायता",id:"Bantuan startup produksi"},
    "about.after.title": {en:"After‑Sales & Spare Parts",zh:"售后服务与备件",es:"Posventa y Repuestos",ru:"Послепродажное обслуживание и запчасти",ar:"خدمة ما بعد البيع وقطع الغيار",tr:"Satış Sonrası ve Yedek Parça",fr:"Service après-vente et pièces détachées",pt:"Pós-Venda e Peças de Reposição",hi:"बिक्री के बाद सेवा और स्पेयर पार्ट्स",id:"Purna Jual & Suku Cadang"},
    "about.after.1": {en:"Remote troubleshooting within 72 hours",zh:"72小时内远程故障排除",es:"Resolución remota de problemas en 72 horas",ru:"Удалённое устранение неполадок в течение 72 часов",ar:"استكشاف الأخطاء عن بُعد خلال 72 ساعة",tr:"72 saat içinde uzaktan sorun giderme",fr:"Dépannage à distance sous 72 heures",pt:"Solução remota de problemas em 72 horas",hi:"72 घंटे के भीतर रिमोट ट्रबलशूटिंग",id:"Pemecahan masalah jarak jauh dalam 72 jam"},
    "about.after.2": {en:"Original tooling and consumables",zh:"原装工装和耗材",es:"Herramientas y consumibles originales",ru:"Оригинальная оснастка и расходники",ar:"أدوات ومستهلكات أصلية",tr:"Orijinal takımlar ve sarf malzemeleri",fr:"Outillage et consommables d'origine",pt:"Ferramentas e consumíveis originais",hi:"ओरिजिनल टूलिंग और उपभोग्य सामग्री",id:"Perkakas dan consumable asli"},
    "about.after.3": {en:"Preventive maintenance recommendations",zh:"预防性维护建议",es:"Recomendaciones de mantenimiento preventivo",ru:"Рекомендации по профилактическому обслуживанию",ar:"توصيات الصيانة الوقائية",tr:"Önleyici bakım önerileri",fr:"Recommandations de maintenance préventive",pt:"Recomendações de manutenção preventiva",hi:"निवारक रखरखाव सिफारिशें",id:"Rekomendasi pemeliharaan preventif"},
    "about.svc.note": {en:"For urgent technical questions, contact us via WhatsApp so we can assist you quickly.",zh:"如有紧急技术问题，请通过WhatsApp联系我们，以便快速协助。",es:"Para preguntas técnicas urgentes, contáctenos por WhatsApp para asistencia rápida.",ru:"По срочным техническим вопросам свяжитесь с нами через WhatsApp для быстрой помощи.",ar:"للأسئلة الفنية العاجلة، تواصل معنا عبر واتساب للمساعدة السريعة.",tr:"Acil teknik sorularınız için WhatsApp üzerinden bize ulaşarak hızlı yardım alabilirsiniz.",fr:"Pour les questions techniques urgentes, contactez-nous via WhatsApp pour une assistance rapide.",pt:"Para questões técnicas urgentes, entre em contato via WhatsApp para assistência rápida.",hi:"तत्काल तकनीकी प्रश्नों के लिए, WhatsApp के माध्यम से संपर्क करें।",id:"Untuk pertanyaan teknis mendesak, hubungi kami via WhatsApp untuk bantuan cepat."},

    /* ---- Machines Page ---- */
    "mach.eyebrow": {en:"Product catalog",zh:"产品目录",es:"Catálogo de productos",ru:"Каталог продукции",ar:"كتالوج المنتجات",tr:"Ürün kataloğu",fr:"Catalogue produits",pt:"Catálogo de produtos",hi:"उत्पाद सूची",id:"Katalog produk"},
    "mach.title": {en:"Duct Machinery",zh:"风管设备",es:"Maquinaria de Conductos",ru:"Оборудование для воздуховодов",ar:"آلات مجاري الهواء",tr:"Kanal Makineleri",fr:"Machines de canalisation",pt:"Maquinaria de Dutos",hi:"डक्ट मशीनरी",id:"Mesin Saluran"},
    "mach.lead": {en:"Auto lines, spiral systems, forming equipment, and elbow/fittings machines — each linked to a product page with full specs and media. From entry-level workshop to high-throughput production line.",zh:"全自动风管线、螺旋风管机、成型设备及弯头/配件机——每个产品均有独立页面，包含完整参数和媒体资料。从入门级车间到高产量生产线均有覆盖。",es:"Líneas automáticas, sistemas espirales, equipos de formado y máquinas de codos/accesorios — cada uno con página de producto completa. Desde talleres básicos hasta líneas de alta producción.",ru:"Автоматические линии, спиральные системы, формовочное оборудование и машины для фитингов — каждая с полной страницей характеристик. От простых цехов до высокопроизводительных линий.",ar:"خطوط أوتوماتيكية وأنظمة حلزونية ومعدات تشكيل وآلات الكوع — كل منها مرتبط بصفحة منتج كاملة. من الورش البسيطة إلى خطوط الإنتاج عالية الكفاءة.",tr:"Otomatik hatlar, spiral sistemler, şekillendirme ekipmanları ve dirsek/bağlantı makineleri — her biri tam özelliklere sahip. Atölyelerden yüksek verimli hatlara.",fr:"Lignes automatiques, systèmes spiralés, équipements de formage et machines de coudes — chacun avec une page produit complète. Des ateliers simples aux lignes haute cadence.",pt:"Linhas automáticas, sistemas espirais, equipamentos de formação e máquinas de cotovelos — cada um com página de produto completa. De oficinas simples a linhas de alta produção.",hi:"ऑटो लाइन, स्पाइरल सिस्टम, फॉर्मिंग उपकरण, और एल्बो/फिटिंग मशीनें — प्रत्येक का पूर्ण स्पेक्स के साथ उत्पाद पेज। एंट्री-लेवल वर्कशॉप से उच्च-थ्रूपुट लाइन तक।",id:"Jalur otomatis, sistem spiral, peralatan pembentuk, dan mesin siku/fitting — masing-masing terhubung ke halaman produk lengkap. Dari bengkel kecil hingga jalur produksi tinggi."},
    "mach.cta1": {en:"Request catalog",zh:"获取目录",es:"Solicitar catálogo",ru:"Запросить каталог",ar:"طلب الكتالوج",tr:"Katalog iste",fr:"Demander le catalogue",pt:"Solicitar catálogo",hi:"कैटलॉग का अनुरोध करें",id:"Minta katalog"},
    "mach.feat.title": {en:"Featured Machines",zh:"主打设备",es:"Máquinas Destacadas",ru:"Избранное оборудование",ar:"الآلات المميزة",tr:"Öne Çıkan Makineler",fr:"Machines vedettes",pt:"Máquinas em Destaque",hi:"प्रमुख मशीनें",id:"Mesin Unggulan"},
    "mach.feat.lead": {en:"Flagship equipment with full specs on each product page.",zh:"旗舰设备，详细参数见各产品页面。",es:"Equipos insignia con especificaciones completas en cada página de producto.",ru:"Флагманское оборудование с полными характеристиками на каждой странице.",ar:"المعدات الرائدة مع المواصفات الكاملة في كل صفحة منتج.",tr:"Her ürün sayfasında tam özelliklerle amiral gemisi ekipman.",fr:"Équipements phares avec specs complètes sur chaque page produit.",pt:"Equipamentos emblemáticos com especificações completas em cada página.",hi:"प्रत्येक उत्पाद पृष्ठ पर पूर्ण विनिर्देशों के साथ प्रमुख उपकरण।",id:"Peralatan unggulan dengan spesifikasi lengkap di setiap halaman produk."},
    "mach.all.title": {en:"All Products by Category",zh:"按类别查看所有产品",es:"Todos los Productos por Categoría",ru:"Все продукты по категориям",ar:"جميع المنتجات حسب الفئة",tr:"Kategoriye Göre Tüm Ürünler",fr:"Tous les produits par catégorie",pt:"Todos os Produtos por Categoria",hi:"श्रेणी के अनुसार सभी उत्पाद",id:"Semua Produk Berdasarkan Kategori"},
    "mach.all.lead": {en:"Click any machine to view its detail page with image, video, intro and parameters.",zh:"点击任何设备查看其详情页，包含图片、视频、介绍和参数。",es:"Haga clic en cualquier máquina para ver su página con imagen, video, introducción y parámetros.",ru:"Нажмите на любую машину для просмотра страницы с фото, видео, описанием и параметрами.",ar:"انقر على أي آلة لعرض صفحتها التفصيلية مع الصورة والفيديو والمعلومات.",tr:"Resim, video, tanıtım ve parametreler içeren detay sayfasını görüntülemek için herhangi bir makineye tıklayın.",fr:"Cliquez sur une machine pour voir sa page avec image, vidéo, intro et paramètres.",pt:"Clique em qualquer máquina para ver sua página com imagem, vídeo, introdução e parâmetros.",hi:"इमेज, वीडियो, परिचय और पैरामीटर के साथ डिटेल पेज देखने के लिए किसी भी मशीन पर क्लिक करें।",id:"Klik mesin apa pun untuk melihat halaman detailnya dengan gambar, video, intro, dan parameter."},
    "mach.cat.spiral": {en:"Spiral Tubeformers",zh:"螺旋风管机",es:"Formadoras Espirales",ru:"Спиральные трубоформеры",ar:"آلات تشكيل حلزوني",tr:"Spiral Şekillendiriciler",fr:"Tubeformers spiralés",pt:"Formadoras Espirais",hi:"स्पाइरल ट्यूबफॉर्मर",id:"Tubeformer Spiral"},
    "mach.cat.round": {en:"Round Duct Equipment",zh:"圆管设备",es:"Equipos de Conductos Redondos",ru:"Оборудование для круглых воздуховодов",ar:"معدات القنوات المستديرة",tr:"Yuvarlak Kanal Ekipmanları",fr:"Équipements de conduits ronds",pt:"Equipamentos de Dutos Redondos",hi:"राउंड डक्ट उपकरण",id:"Peralatan Saluran Bulat"},
    "mach.cat.flex": {en:"Flexible Duct Machines",zh:"柔性风管设备",es:"Máquinas de Conductos Flexibles",ru:"Оборудование для гибких воздуховодов",ar:"آلات القنوات المرنة",tr:"Esnek Kanal Makineleri",fr:"Machines de conduits flexibles",pt:"Máquinas de Dutos Flexíveis",hi:"फ्लेक्सिबल डक्ट मशीनें",id:"Mesin Saluran Fleksibel"},
    "mach.cat.auto": {en:"Auto Duct Lines",zh:"全自动风管线",es:"Líneas Automáticas de Conductos",ru:"Автоматические линии",ar:"خطوط إنتاج أوتوماتيكية",tr:"Otomatik Kanal Hatları",fr:"Lignes automatiques",pt:"Linhas Automáticas de Dutos",hi:"ऑटो डक्ट लाइनें",id:"Jalur Saluran Otomatis"},
    "mach.cat.flange": {en:"Flange & Forming",zh:"法兰与成型",es:"Bridas y Conformado",ru:"Фланцы и формовка",ar:"الحافات والتشكيل",tr:"Flanş ve Şekillendirme",fr:"Brides et formage",pt:"Flanges e Conformação",hi:"फ्लैंज और फॉर्मिंग",id:"Flensa & Pembentukan"},
    "mach.cat.cutting": {en:"Cutting Machines",zh:"切割设备",es:"Máquinas de Corte",ru:"Режущее оборудование",ar:"آلات القطع",tr:"Kesim Makineleri",fr:"Machines de découpe",pt:"Máquinas de Corte",hi:"कटिंग मशीनें",id:"Mesin Pemotong"},
    "mach.cat.welding": {en:"Welding Machines",zh:"焊接设备",es:"Máquinas de Soldadura",ru:"Сварочное оборудование",ar:"آلات اللحام",tr:"Kaynak Makineleri",fr:"Machines de soudage",pt:"Máquinas de Soldagem",hi:"वेल्डिंग मशीनें",id:"Mesin Las"},
    "mach.cat.bending": {en:"Bending, Rolling & Folding",zh:"弯曲、卷板和折边",es:"Doblado, Laminado y Plegado",ru:"Гибка, вальцовка и фальцовка",ar:"الثني واللف والطي",tr:"Bükme, Haddeleme ve Katlama",fr:"Cintrage, roulage et pliage",pt:"Dobra, Calandragem e Dobramento",hi:"बेंडिंग, रोलिंग और फोल्डिंग",id:"Pembengkokan, Penggulungan & Pelipatan"},
    "mach.cat.aux": {en:"Auxiliary Equipment",zh:"辅助设备",es:"Equipos Auxiliares",ru:"Вспомогательное оборудование",ar:"المعدات المساعدة",tr:"Yardımcı Ekipmanlar",fr:"Équipements auxiliaires",pt:"Equipamentos Auxiliares",hi:"सहायक उपकरण",id:"Peralatan Bantu"},
    "mach.cta.title": {en:"Need technical data or a quotation?",zh:"需要技术参数或报价？",es:"¿Necesita datos técnicos o una cotización?",ru:"Нужны характеристики или расчёт?",ar:"هل تحتاج بيانات فنية أو عرض أسعار؟",tr:"Teknik veriye veya teklife mi ihtiyacınız var?",fr:"Besoin de données techniques ou d'un devis ?",pt:"Precisa de dados técnicos ou cotação?",hi:"तकनीकी डेटा या कोटेशन चाहिए?",id:"Butuh data teknis atau penawaran?"},
    "mach.cta.lead": {en:"Each product page has full specifications. For custom configurations, contact us.",zh:"每个产品页面都有完整参数。如需定制配置，请联系我们。",es:"Cada página de producto tiene especificaciones completas. Para configuraciones personalizadas, contáctenos.",ru:"На каждой странице полные характеристики. Для нестандартных конфигураций свяжитесь с нами.",ar:"كل صفحة منتج تحتوي على المواصفات الكاملة. للتكوينات المخصصة، اتصل بنا.",tr:"Her ürün sayfasında tam özellikler mevcuttur. Özel yapılandırmalar için bizimle iletişime geçin.",fr:"Chaque page produit a les spécifications complètes. Pour des configurations sur mesure, contactez-nous.",pt:"Cada página tem especificações completas. Para configurações personalizadas, entre em contato.",hi:"प्रत्येक उत्पाद पृष्ठ पर पूर्ण विनिर्देश हैं। कस्टम कॉन्फ़िगरेशन के लिए संपर्क करें।",id:"Setiap halaman produk memiliki spesifikasi lengkap. Untuk konfigurasi khusus, hubungi kami."},
    "mach.cta.btn": {en:"Contact us",zh:"联系我们",es:"Contáctenos",ru:"Свяжитесь с нами",ar:"اتصل بنا",tr:"Bize ulaşın",fr:"Contactez-nous",pt:"Entre em contato",hi:"हमसे संपर्क करें",id:"Hubungi kami"},
    "mach.note": {en:"Contact us for photos and detailed specifications.",zh:"联系我们获取照片和详细参数。",es:"Contáctenos para fotos y especificaciones detalladas.",ru:"Свяжитесь с нами для фото и подробных характеристик.",ar:"اتصل بنا للصور والمواصفات التفصيلية.",tr:"Fotoğraflar ve ayrıntılı özellikler için bize ulaşın.",fr:"Contactez-nous pour photos et spécifications détaillées.",pt:"Entre em contato para fotos e especificações detalhadas.",hi:"फोटो और विस्तृत विनिर्देशों के लिए हमसे संपर्क करें।",id:"Hubungi kami untuk foto dan spesifikasi detail."},

    /* ---- Contact Note ---- */
    "contact.note": {en:"For inquiries about spiral duct forming machines, round duct machines and auto duct production lines, please describe your material, thickness, required capacity and available workshop size.",zh:"如需咨询螺旋风管成型机、圆管机和全自动风管生产线，请说明您的材料、厚度、所需产能和车间面积。",es:"Para consultas sobre máquinas de conductos, describa su material, espesor, capacidad requerida y tamaño del taller.",ru:"Для запросов об оборудовании укажите материал, толщину, требуемую мощность и размер цеха.",ar:"للاستفسارات حول الآلات، يرجى وصف المادة والسماكة والسعة المطلوبة وحجم الورشة.",tr:"Makine sorgulamalarınız için malzeme, kalınlık, gerekli kapasite ve atölye boyutunu belirtin.",fr:"Pour toute demande, décrivez votre matériau, épaisseur, capacité requise et taille d'atelier.",pt:"Para consultas, descreva seu material, espessura, capacidade necessária e tamanho da oficina.",hi:"मशीनों के बारे में पूछताछ के लिए, अपनी सामग्री, मोटाई, आवश्यक क्षमता और वर्कशॉप का आकार बताएं।",id:"Untuk pertanyaan tentang mesin, jelaskan material, ketebalan, kapasitas yang dibutuhkan, dan ukuran bengkel Anda."},

    /* ---- Footer extras ---- */
    "footer.loc.china": {en:"Jiangyin, Jiangsu, China",zh:"中国江苏省江阴市",es:"Jiangyin, Jiangsu, China",ru:"Цзянъинь, Цзянсу, Китай",ar:"جيانغيين، جيانغسو، الصين",tr:"Jiangyin, Jiangsu, Çin",fr:"Jiangyin, Jiangsu, Chine",pt:"Jiangyin, Jiangsu, China",hi:"जियांगयिन, जियांगसू, चीन",id:"Jiangyin, Jiangsu, Tiongkok"},
    "footer.loc.aus": {en:"Box Hill North, VIC, Australia",zh:"澳大利亚维多利亚州Box Hill North",es:"Box Hill North, VIC, Australia",ru:"Бокс Хилл Норт, Виктория, Австралия",ar:"بوكس هيل نورث، فيكتوريا، أستراليا",tr:"Box Hill North, VIC, Avustralya",fr:"Box Hill North, VIC, Australie",pt:"Box Hill North, VIC, Austrália",hi:"बॉक्स हिल नॉर्थ, VIC, ऑस्ट्रेलिया",id:"Box Hill North, VIC, Australia"},
    "product.quote": {en:"Request a quote",zh:"获取报价",es:"Solicitar cotización",ru:"Запросить цену",ar:"طلب عرض سعر",tr:"Teklif iste",fr:"Demander un devis",pt:"Solicitar cotação",hi:"कोटेशन का अनुरोध",id:"Minta penawaran"},
    "footer.machines": {en:"All machines",zh:"所有产品",es:"Todas las máquinas",ru:"Все машины",ar:"جميع الآلات",tr:"Tüm makineler",fr:"Toutes les machines",pt:"Todas as máquinas",hi:"सभी मशीनें",id:"Semua mesin"},
  };

  const SPEC = {
    "Diameter":{zh:"直径",es:"Diámetro",ru:"Диаметр",ar:"القطر",tr:"Çap",fr:"Diamètre",pt:"Diâmetro",hi:"व्यास",id:"Diameter"},
    "Diameter range":{zh:"直径范围",es:"Rango de diámetro",ru:"Диапазон диаметров",ar:"نطاق القطر",tr:"Çap aralığı",fr:"Plage de diamètre",pt:"Faixa de diâmetro",hi:"व्यास रेंज",id:"Rentang diameter"},
    "Galvanized steel":{zh:"镀锌钢板",es:"Acero galvanizado",ru:"Оцинкованная сталь",ar:"فولاذ مجلفن",tr:"Galvanizli çelik",fr:"Acier galvanisé",pt:"Aço galvanizado",hi:"गैल्वनाइज्ड स्टील",id:"Baja galvanis"},
    "Stainless steel":{zh:"不锈钢",es:"Acero inoxidable",ru:"Нержавеющая сталь",ar:"فولاذ مقاوم للصدأ",tr:"Paslanmaz çelik",fr:"Acier inoxydable",pt:"Aço inoxidável",hi:"स्टेनलेस स्टील",id:"Baja tahan karat"},
    "Stainless steel SS304":{zh:"不锈钢 SS304",es:"Acero inoxidable SS304",ru:"Нержавеющая сталь SS304",ar:"فولاذ SS304",tr:"Paslanmaz çelik SS304",fr:"Acier inoxydable SS304",pt:"Aço inoxidável SS304",hi:"स्टेनलेस स्टील SS304",id:"Baja tahan karat SS304"},
    "Aluminum":{zh:"铝",es:"Aluminio",ru:"Алюминий",ar:"ألومنيوم",tr:"Alüminyum",fr:"Aluminium",pt:"Alumínio",hi:"एल्युमिनियम",id:"Aluminium"},
    "Strip width":{zh:"带材宽度",es:"Ancho de banda",ru:"Ширина ленты",ar:"عرض الشريط",tr:"Şerit genişliği",fr:"Largeur de bande",pt:"Largura da fita",hi:"स्ट्रिप चौड़ाई",id:"Lebar strip"},
    "Cutting system":{zh:"切割系统",es:"Sistema de corte",ru:"Система резки",ar:"نظام القطع",tr:"Kesim sistemi",fr:"Système de coupe",pt:"Sistema de corte",hi:"कटिंग सिस्टम",id:"Sistem pemotongan"},
    "Options":{zh:"可选配置",es:"Opciones",ru:"Опции",ar:"خيارات",tr:"Seçenekler",fr:"Options",pt:"Opções",hi:"विकल्प",id:"Opsi"},
    "Power":{zh:"功率",es:"Potencia",ru:"Мощность",ar:"الطاقة",tr:"Güç",fr:"Puissance",pt:"Potência",hi:"पावर",id:"Daya"},
    "Weight":{zh:"重量",es:"Peso",ru:"Вес",ar:"الوزن",tr:"Ağırlık",fr:"Poids",pt:"Peso",hi:"वज़न",id:"Berat"},
    "Voltage":{zh:"电压",es:"Voltaje",ru:"Напряжение",ar:"الجهد الكهربائي",tr:"Voltaj",fr:"Tension",pt:"Voltagem",hi:"वोल्टेज",id:"Tegangan"},
    "Mainframe dimension":{zh:"主机尺寸",es:"Dimensiones del bastidor",ru:"Габариты станка",ar:"أبعاد الهيكل",tr:"Ana gövde boyutları",fr:"Dimensions du châssis",pt:"Dimensões do chassi",hi:"मेनफ्रेम आयाम",id:"Dimensi rangka utama"},
    "Decoiler dimension":{zh:"开卷机尺寸",es:"Dimensiones del desbobinador",ru:"Габариты разматывателя",ar:"أبعاد جهاز الفك",tr:"Decoiler boyutları",fr:"Dimensions du dérouleur",pt:"Dimensões do desbobinador",hi:"डिकोइलर आयाम",id:"Dimensi decoiler"},
    "Run-out table":{zh:"出料台",es:"Mesa de salida",ru:"Приёмный стол",ar:"طاولة الإخراج",tr:"Çıkış masası",fr:"Table de sortie",pt:"Mesa de saída",hi:"रन-आउट टेबल",id:"Meja keluaran"},
    "Dimension":{zh:"尺寸",es:"Dimensiones",ru:"Габариты",ar:"الأبعاد",tr:"Boyutlar",fr:"Dimensions",pt:"Dimensões",hi:"आयाम",id:"Dimensi"},
    "Main dimension":{zh:"主要尺寸",es:"Dimensiones principales",ru:"Основные габариты",ar:"الأبعاد الرئيسية",tr:"Ana boyutlar",fr:"Dimensions principales",pt:"Dimensões principais",hi:"मुख्य आयाम",id:"Dimensi utama"},
    "Material":{zh:"材料",es:"Material",ru:"Материал",ar:"المادة",tr:"Malzeme",fr:"Matériau",pt:"Material",hi:"सामग्री",id:"Material"},
    "Material thickness":{zh:"材料厚度",es:"Espesor del material",ru:"Толщина материала",ar:"سمك المادة",tr:"Malzeme kalınlığı",fr:"Épaisseur du matériau",pt:"Espessura do material",hi:"सामग्री की मोटाई",id:"Ketebalan material"},
    "Material width":{zh:"材料宽度",es:"Ancho del material",ru:"Ширина материала",ar:"عرض المادة",tr:"Malzeme genişliği",fr:"Largeur du matériau",pt:"Largura do material",hi:"सामग्री की चौड़ाई",id:"Lebar material"},
    "Material size":{zh:"材料尺寸",es:"Tamaño del material",ru:"Размер материала",ar:"حجم المادة",tr:"Malzeme boyutu",fr:"Taille du matériau",pt:"Tamanho do material",hi:"सामग्री का आकार",id:"Ukuran material"},
    "Thickness":{zh:"厚度",es:"Espesor",ru:"Толщина",ar:"السماكة",tr:"Kalınlık",fr:"Épaisseur",pt:"Espessura",hi:"मोटाई",id:"Ketebalan"},
    "Max thickness":{zh:"最大厚度",es:"Espesor máximo",ru:"Макс. толщина",ar:"السمك الأقصى",tr:"Maks. kalınlık",fr:"Épaisseur max.",pt:"Espessura máxima",hi:"अधिकतम मोटाई",id:"Ketebalan maks."},
    "Width":{zh:"宽度",es:"Ancho",ru:"Ширина",ar:"العرض",tr:"Genişlik",fr:"Largeur",pt:"Largura",hi:"चौड़ाई",id:"Lebar"},
    "Max width":{zh:"最大宽度",es:"Ancho máximo",ru:"Макс. ширина",ar:"العرض الأقصى",tr:"Maks. genişlik",fr:"Largeur max.",pt:"Largura máxima",hi:"अधिकतम चौड़ाई",id:"Lebar maks."},
    "Length":{zh:"长度",es:"Longitud",ru:"Длина",ar:"الطول",tr:"Uzunluk",fr:"Longueur",pt:"Comprimento",hi:"लंबाई",id:"Panjang"},
    "Total length":{zh:"总长度",es:"Longitud total",ru:"Общая длина",ar:"الطول الإجمالي",tr:"Toplam uzunluk",fr:"Longueur totale",pt:"Comprimento total",hi:"कुल लंबाई",id:"Panjang total"},
    "Max length":{zh:"最大长度",es:"Longitud máxima",ru:"Макс. длина",ar:"الطول الأقصى",tr:"Maks. uzunluk",fr:"Longueur max.",pt:"Comprimento máximo",hi:"अधिकतम लंबाई",id:"Panjang maks."},
    "Max duct length":{zh:"最大管长",es:"Longitud máxima del conducto",ru:"Макс. длина воздуховода",ar:"أقصى طول للقناة",tr:"Maks. kanal uzunluğu",fr:"Longueur max. du conduit",pt:"Comprimento máximo do duto",hi:"अधिकतम डक्ट लंबाई",id:"Panjang saluran maks."},
    "Speed":{zh:"速度",es:"Velocidad",ru:"Скорость",ar:"السرعة",tr:"Hız",fr:"Vitesse",pt:"Velocidade",hi:"गति",id:"Kecepatan"},
    "Feeding speed":{zh:"送料速度",es:"Velocidad de alimentación",ru:"Скорость подачи",ar:"سرعة التغذية",tr:"Besleme hızı",fr:"Vitesse d'alimentation",pt:"Velocidade de alimentação",hi:"फीडिंग स्पीड",id:"Kecepatan umpan"},
    "Max feeding speed":{zh:"最大送料速度",es:"Velocidad máxima de alimentación",ru:"Макс. скорость подачи",ar:"أقصى سرعة تغذية",tr:"Maks. besleme hızı",fr:"Vitesse max. d'alimentation",pt:"Velocidade máxima de alimentação",hi:"अधिकतम फीडिंग स्पीड",id:"Kecepatan umpan maks."},
    "Max forming speed":{zh:"最大成型速度",es:"Velocidad máxima de formado",ru:"Макс. скорость формовки",ar:"أقصى سرعة تشكيل",tr:"Maks. şekillendirme hızı",fr:"Vitesse max. de formage",pt:"Velocidade máxima de formação",hi:"अधिकतम फॉर्मिंग स्पीड",id:"Kecepatan pembentukan maks."},
    "Processing speed":{zh:"加工速度",es:"Velocidad de procesamiento",ru:"Скорость обработки",ar:"سرعة المعالجة",tr:"İşleme hızı",fr:"Vitesse de traitement",pt:"Velocidade de processamento",hi:"प्रोसेसिंग स्पीड",id:"Kecepatan pemrosesan"},
    "Welding speed":{zh:"焊接速度",es:"Velocidad de soldadura",ru:"Скорость сварки",ar:"سرعة اللحام",tr:"Kaynak hızı",fr:"Vitesse de soudage",pt:"Velocidade de soldagem",hi:"वेल्डिंग स्पीड",id:"Kecepatan pengelasan"},
    "Welding power":{zh:"焊接功率",es:"Potencia de soldadura",ru:"Мощность сварки",ar:"قدرة اللحام",tr:"Kaynak gücü",fr:"Puissance de soudage",pt:"Potência de soldagem",hi:"वेल्डिंग पावर",id:"Daya pengelasan"},
    "Welding thickness":{zh:"焊接厚度",es:"Espesor de soldadura",ru:"Толщина сварки",ar:"سمك اللحام",tr:"Kaynak kalınlığı",fr:"Épaisseur de soudage",pt:"Espessura de soldagem",hi:"वेल्डिंग मोटाई",id:"Ketebalan pengelasan"},
    "Welding voltage":{zh:"焊接电压",es:"Voltaje de soldadura",ru:"Напряжение сварки",ar:"جهد اللحام",tr:"Kaynak voltajı",fr:"Tension de soudage",pt:"Voltagem de soldagem",hi:"वेल्डिंग वोल्टेज",id:"Tegangan pengelasan"},
    "Power supply":{zh:"电源",es:"Fuente de alimentación",ru:"Источник питания",ar:"مصدر الطاقة",tr:"Güç kaynağı",fr:"Alimentation",pt:"Fonte de alimentação",hi:"पावर सप्लाई",id:"Catu daya"},
    "Motor":{zh:"电机",es:"Motor",ru:"Двигатель",ar:"المحرك",tr:"Motor",fr:"Moteur",pt:"Motor",hi:"मोटर",id:"Motor"},
    "Control":{zh:"控制",es:"Control",ru:"Управление",ar:"التحكم",tr:"Kontrol",fr:"Commande",pt:"Controle",hi:"कंट्रोल",id:"Kontrol"},
    "Model":{zh:"型号",es:"Modelo",ru:"Модель",ar:"الموديل",tr:"Model",fr:"Modèle",pt:"Modelo",hi:"मॉडल",id:"Model"},
    "Specifications":{zh:"规格",es:"Especificaciones",ru:"Спецификации",ar:"المواصفات",tr:"Özellikler",fr:"Spécifications",pt:"Especificações",hi:"विनिर्देश",id:"Spesifikasi"},
    "Function":{zh:"功能",es:"Función",ru:"Функция",ar:"الوظيفة",tr:"İşlev",fr:"Fonction",pt:"Função",hi:"कार्य",id:"Fungsi"},
    "Flange height":{zh:"法兰高度",es:"Altura de brida",ru:"Высота фланца",ar:"ارتفاع الحافة",tr:"Flanş yüksekliği",fr:"Hauteur de bride",pt:"Altura da flange",hi:"फ्लैंज ऊंचाई",id:"Tinggi flensa"},
    "Flange size":{zh:"法兰尺寸",es:"Tamaño de brida",ru:"Размер фланца",ar:"حجم الحافة",tr:"Flanş boyutu",fr:"Taille de bride",pt:"Tamanho da flange",hi:"फ्लैंज आकार",id:"Ukuran flensa"},
    "Flanging width":{zh:"翻边宽度",es:"Ancho de rebordeado",ru:"Ширина отбортовки",ar:"عرض الحواف",tr:"Flanşlama genişliği",fr:"Largeur de bordage",pt:"Largura de flangeamento",hi:"फ्लैंजिंग चौड़ाई",id:"Lebar flanging"},
    "Lock form":{zh:"咬口形式",es:"Tipo de cierre",ru:"Тип замка",ar:"نوع القفل",tr:"Kilit formu",fr:"Type de serrure",pt:"Tipo de trava",hi:"लॉक फॉर्म",id:"Bentuk kunci"},
    "Lock seam":{zh:"咬口接缝",es:"Costura de cierre",ru:"Замковый шов",ar:"خط القفل",tr:"Kilit dikişi",fr:"Joint de serrure",pt:"Costura de trava",hi:"लॉक सीम",id:"Jahitan kunci"},
    "Processing range":{zh:"加工范围",es:"Rango de procesamiento",ru:"Диапазон обработки",ar:"نطاق المعالجة",tr:"İşleme aralığı",fr:"Plage de traitement",pt:"Faixa de processamento",hi:"प्रोसेसिंग रेंज",id:"Rentang pemrosesan"},
    "Processing scope":{zh:"加工范围",es:"Alcance de procesamiento",ru:"Область обработки",ar:"نطاق المعالجة",tr:"İşleme kapsamı",fr:"Portée du traitement",pt:"Escopo de processamento",hi:"प्रोसेसिंग स्कोप",id:"Lingkup pemrosesan"},
    "Size range":{zh:"尺寸范围",es:"Rango de tamaño",ru:"Диапазон размеров",ar:"نطاق الحجم",tr:"Boyut aralığı",fr:"Plage de tailles",pt:"Faixa de tamanho",hi:"साइज़ रेंज",id:"Rentang ukuran"},
    "Cutting thickness":{zh:"切割厚度",es:"Espesor de corte",ru:"Толщина резки",ar:"سمك القطع",tr:"Kesim kalınlığı",fr:"Épaisseur de coupe",pt:"Espessura de corte",hi:"कटिंग मोटाई",id:"Ketebalan pemotongan"},
    "Cutting angle":{zh:"切割角度",es:"Ángulo de corte",ru:"Угол резки",ar:"زاوية القطع",tr:"Kesim açısı",fr:"Angle de coupe",pt:"Ângulo de corte",hi:"कटिंग एंगल",id:"Sudut pemotongan"},
    "Working area":{zh:"工作区域",es:"Área de trabajo",ru:"Рабочая зона",ar:"منطقة العمل",tr:"Çalışma alanı",fr:"Zone de travail",pt:"Área de trabalho",hi:"कार्य क्षेत्र",id:"Area kerja"},
    "Working height":{zh:"工作高度",es:"Altura de trabajo",ru:"Рабочая высота",ar:"ارتفاع العمل",tr:"Çalışma yüksekliği",fr:"Hauteur de travail",pt:"Altura de trabalho",hi:"कार्य ऊंचाई",id:"Tinggi kerja"},
    "Input voltage":{zh:"输入电压",es:"Voltaje de entrada",ru:"Входное напряжение",ar:"جهد الدخل",tr:"Giriş voltajı",fr:"Tension d'entrée",pt:"Voltagem de entrada",hi:"इनपुट वोल्टेज",id:"Tegangan input"},
    "Mainframe voltage":{zh:"主机电压",es:"Voltaje del bastidor",ru:"Напряжение станка",ar:"جهد الهيكل الرئيسي",tr:"Ana gövde voltajı",fr:"Tension du châssis",pt:"Voltagem do chassi",hi:"मेनफ्रेम वोल्टेज",id:"Tegangan rangka utama"},
    "Max power":{zh:"最大功率",es:"Potencia máxima",ru:"Макс. мощность",ar:"أقصى طاقة",tr:"Maks. güç",fr:"Puissance max.",pt:"Potência máxima",hi:"अधिकतम पावर",id:"Daya maks."},
    "Input capacity":{zh:"输入功率",es:"Capacidad de entrada",ru:"Входная мощность",ar:"سعة الدخل",tr:"Giriş kapasitesi",fr:"Capacité d'entrée",pt:"Capacidade de entrada",hi:"इनपुट क्षमता",id:"Kapasitas input"},
    "Max input capacity":{zh:"最大输入功率",es:"Capacidad máxima de entrada",ru:"Макс. входная мощность",ar:"أقصى سعة دخل",tr:"Maks. giriş kapasitesi",fr:"Capacité max. d'entrée",pt:"Capacidade máxima de entrada",hi:"अधिकतम इनपुट क्षमता",id:"Kapasitas input maks."},
    "Decoiler":{zh:"开卷机",es:"Desbobinador",ru:"Разматыватель",ar:"جهاز الفك",tr:"Decoiler",fr:"Dérouleur",pt:"Desbobinador",hi:"डिकोइलर",id:"Decoiler"},
    "Max coil weight":{zh:"最大卷重",es:"Peso máximo de bobina",ru:"Макс. вес рулона",ar:"أقصى وزن اللفافة",tr:"Maks. bobin ağırlığı",fr:"Poids max. de bobine",pt:"Peso máximo da bobina",hi:"अधिकतम कॉइल वज़न",id:"Berat gulungan maks."},
    "Inner coil diameter":{zh:"内卷径",es:"Diámetro interno de bobina",ru:"Внутренний диаметр рулона",ar:"قطر اللفافة الداخلي",tr:"İç bobin çapı",fr:"Diamètre intérieur de bobine",pt:"Diâmetro interno da bobina",hi:"इनर कॉइल व्यास",id:"Diameter gulungan dalam"},
    "Air pressure":{zh:"气压",es:"Presión de aire",ru:"Давление воздуха",ar:"ضغط الهواء",tr:"Hava basıncı",fr:"Pression d'air",pt:"Pressão de ar",hi:"वायु दाब",id:"Tekanan udara"},
    "Air compression":{zh:"空气压缩",es:"Compresión de aire",ru:"Сжатие воздуха",ar:"ضغط الهواء",tr:"Hava sıkıştırma",fr:"Compression d'air",pt:"Compressão de ar",hi:"वायु संपीड़न",id:"Kompresi udara"},
    "Hydraulic oil":{zh:"液压油",es:"Aceite hidráulico",ru:"Гидравлическое масло",ar:"زيت هيدروليكي",tr:"Hidrolik yağ",fr:"Huile hydraulique",pt:"Óleo hidráulico",hi:"हाइड्रोलिक ऑयल",id:"Minyak hidrolik"},
    "Blanking force":{zh:"冲裁力",es:"Fuerza de corte",ru:"Усилие вырубки",ar:"قوة القطع",tr:"Kesme kuvveti",fr:"Force de découpe",pt:"Força de corte",hi:"ब्लैंकिंग फोर्स",id:"Gaya blanking"},
    "Punching speed":{zh:"冲孔速度",es:"Velocidad de punzonado",ru:"Скорость пробивки",ar:"سرعة التثقيب",tr:"Delme hızı",fr:"Vitesse de poinçonnage",pt:"Velocidade de puncionamento",hi:"पंचिंग स्पीड",id:"Kecepatan pelubangan"},
    "Max punching dia":{zh:"最大冲孔直径",es:"Diámetro máximo de punzonado",ru:"Макс. диаметр пробивки",ar:"أقصى قطر تثقيب",tr:"Maks. delme çapı",fr:"Diamètre max. de poinçonnage",pt:"Diâmetro máximo de puncionamento",hi:"अधिकतम पंचिंग व्यास",id:"Diameter pelubangan maks."},
    "Angle":{zh:"角度",es:"Ángulo",ru:"Угол",ar:"الزاوية",tr:"Açı",fr:"Angle",pt:"Ângulo",hi:"कोण",id:"Sudut"},
    "Min angle":{zh:"最小角度",es:"Ángulo mínimo",ru:"Мин. угол",ar:"أدنى زاوية",tr:"Min. açı",fr:"Angle min.",pt:"Ângulo mínimo",hi:"न्यूनतम कोण",id:"Sudut min."},
    "Min diameter":{zh:"最小直径",es:"Diámetro mínimo",ru:"Мин. диаметр",ar:"أدنى قطر",tr:"Min. çap",fr:"Diamètre min.",pt:"Diâmetro mínimo",hi:"न्यूनतम व्यास",id:"Diameter min."},
    "Min. duct diameter":{zh:"最小管径",es:"Diámetro mínimo de conducto",ru:"Мин. диаметр воздуховода",ar:"أدنى قطر للقناة",tr:"Min. kanal çapı",fr:"Diamètre min. du conduit",pt:"Diâmetro mínimo do duto",hi:"न्यूनतम डक्ट व्यास",id:"Diameter saluran min."},
    "Angle iron size":{zh:"角钢尺寸",es:"Tamaño del ángulo",ru:"Размер уголка",ar:"حجم الحديد الزاوي",tr:"Köşebent boyutu",fr:"Taille de la cornière",pt:"Tamanho da cantoneira",hi:"एंगल आयरन साइज़",id:"Ukuran besi siku"},
    "Angle iron spec":{zh:"角钢规格",es:"Especificación del ángulo",ru:"Спецификация уголка",ar:"مواصفات الحديد الزاوي",tr:"Köşebent özellikleri",fr:"Spécification de la cornière",pt:"Especificação da cantoneira",hi:"एंगल आयरन स्पेक",id:"Spesifikasi besi siku"},
    "Rivet size":{zh:"铆钉尺寸",es:"Tamaño de remache",ru:"Размер заклёпки",ar:"حجم المسمار",tr:"Perçin boyutu",fr:"Taille de rivet",pt:"Tamanho do rebite",hi:"रिवेट साइज़",id:"Ukuran rivet"},
    "Foil thickness":{zh:"箔材厚度",es:"Espesor de lámina",ru:"Толщина фольги",ar:"سمك الرقائق",tr:"Folyo kalınlığı",fr:"Épaisseur de feuille",pt:"Espessura da folha",hi:"फॉइल मोटाई",id:"Ketebalan foil"},
    "Canvas thickness":{zh:"帆布厚度",es:"Espesor de lona",ru:"Толщина ткани",ar:"سمك القماش",tr:"Branda kalınlığı",fr:"Épaisseur de toile",pt:"Espessura da lona",hi:"कैनवास मोटाई",id:"Ketebalan kanvas"},
    "Insulation thickness":{zh:"保温厚度",es:"Espesor de aislamiento",ru:"Толщина утеплителя",ar:"سمك العزل",tr:"Yalıtım kalınlığı",fr:"Épaisseur d'isolation",pt:"Espessura do isolamento",hi:"इंसुलेशन मोटाई",id:"Ketebalan insulasi"},
    "Strip thickness":{zh:"带材厚度",es:"Espesor de banda",ru:"Толщина ленты",ar:"سمك الشريط",tr:"Şerit kalınlığı",fr:"Épaisseur de bande",pt:"Espessura da fita",hi:"स्ट्रिप मोटाई",id:"Ketebalan strip"},
    "GI sheet thickness":{zh:"镀锌板厚度",es:"Espesor de lámina GI",ru:"Толщина оцинкованного листа",ar:"سمك صفائح GI",tr:"GI sac kalınlığı",fr:"Épaisseur de tôle GI",pt:"Espessura da chapa GI",hi:"GI शीट मोटाई",id:"Ketebalan lembaran GI"},
    "GI sheet width":{zh:"镀锌板宽度",es:"Ancho de lámina GI",ru:"Ширина оцинкованного листа",ar:"عرض صفائح GI",tr:"GI sac genişliği",fr:"Largeur de tôle GI",pt:"Largura da chapa GI",hi:"GI शीट चौड़ाई",id:"Lebar lembaran GI"},
    "GI steel thickness":{zh:"镀锌钢厚度",es:"Espesor de acero GI",ru:"Толщина оцинкованной стали",ar:"سمك فولاذ GI",tr:"GI çelik kalınlığı",fr:"Épaisseur d'acier GI",pt:"Espessura do aço GI",hi:"GI स्टील मोटाई",id:"Ketebalan baja GI"},
    "SS thickness":{zh:"不锈钢厚度",es:"Espesor de acero inoxidable",ru:"Толщина нерж. стали",ar:"سمك الفولاذ المقاوم",tr:"Paslanmaz kalınlık",fr:"Épaisseur inox",pt:"Espessura inox",hi:"SS मोटाई",id:"Ketebalan SS"},
    "Carbon steel":{zh:"碳钢",es:"Acero al carbono",ru:"Углеродистая сталь",ar:"فولاذ كربوني",tr:"Karbon çelik",fr:"Acier au carbone",pt:"Aço carbono",hi:"कार्बन स्टील",id:"Baja karbon"},
    "Cold rolled steel":{zh:"冷轧钢",es:"Acero laminado en frío",ru:"Холоднокатаная сталь",ar:"فولاذ مدلفن على البارد",tr:"Soğuk haddelenmiş çelik",fr:"Acier laminé à froid",pt:"Aço laminado a frio",hi:"कोल्ड रोल्ड स्टील",id:"Baja canai dingin"},
    "Black steel":{zh:"黑钢",es:"Acero negro",ru:"Чёрная сталь",ar:"فولاذ أسود",tr:"Siyah çelik",fr:"Acier noir",pt:"Aço preto",hi:"ब्लैक स्टील",id:"Baja hitam"},
    "Laser power":{zh:"激光功率",es:"Potencia láser",ru:"Мощность лазера",ar:"قدرة الليزر",tr:"Lazer gücü",fr:"Puissance laser",pt:"Potência do laser",hi:"लेज़र पावर",id:"Daya laser"},
    "Collimation":{zh:"准直",es:"Colimación",ru:"Коллимация",ar:"التسديد",tr:"Kolimasyonu",fr:"Collimation",pt:"Colimação",hi:"कोलिमेशन",id:"Kolimasi"},
    "Cooling method":{zh:"冷却方式",es:"Método de enfriamiento",ru:"Способ охлаждения",ar:"طريقة التبريد",tr:"Soğutma yöntemi",fr:"Méthode de refroidissement",pt:"Método de resfriamento",hi:"कूलिंग विधि",id:"Metode pendinginan"},
    "Cooling water flow":{zh:"冷却水流量",es:"Flujo de agua de enfriamiento",ru:"Расход охлаждающей воды",ar:"تدفق مياه التبريد",tr:"Soğutma suyu akışı",fr:"Débit d'eau de refroidissement",pt:"Fluxo de água de resfriamento",hi:"कूलिंग वॉटर फ्लो",id:"Aliran air pendingin"},
    "Operating temperature":{zh:"工作温度",es:"Temperatura de operación",ru:"Рабочая температура",ar:"درجة حرارة التشغيل",tr:"Çalışma sıcaklığı",fr:"Température de fonctionnement",pt:"Temperatura de operação",hi:"ऑपरेटिंग तापमान",id:"Suhu operasi"},
    "Operating humidity":{zh:"工作湿度",es:"Humedad de operación",ru:"Рабочая влажность",ar:"رطوبة التشغيل",tr:"Çalışma nemi",fr:"Humidité de fonctionnement",pt:"Umidade de operação",hi:"ऑपरेटिंग ह्यूमिडिटी",id:"Kelembapan operasi"},
    "Support arms":{zh:"支撑臂",es:"Brazos de soporte",ru:"Опорные рычаги",ar:"أذرع الدعم",tr:"Destek kolları",fr:"Bras de support",pt:"Braços de suporte",hi:"सपोर्ट आर्म्स",id:"Lengan penyangga"},
    "Support height":{zh:"支撑高度",es:"Altura de soporte",ru:"Высота опоры",ar:"ارتفاع الدعم",tr:"Destek yüksekliği",fr:"Hauteur de support",pt:"Altura de suporte",hi:"सपोर्ट ऊंचाई",id:"Tinggi penyangga"},
    "Support length":{zh:"支撑长度",es:"Longitud de soporte",ru:"Длина опоры",ar:"طول الدعم",tr:"Destek uzunluğu",fr:"Longueur de support",pt:"Comprimento de suporte",hi:"सपोर्ट लंबाई",id:"Panjang penyangga"},
    "Arm length":{zh:"臂长",es:"Longitud del brazo",ru:"Длина рычага",ar:"طول الذراع",tr:"Kol uzunluğu",fr:"Longueur du bras",pt:"Comprimento do braço",hi:"आर्म लंबाई",id:"Panjang lengan"},
    "Overlap":{zh:"搭接",es:"Superposición",ru:"Нахлёст",ar:"التراكب",tr:"Bindirme",fr:"Recouvrement",pt:"Sobreposição",hi:"ओवरलैप",id:"Tumpang tindih"},
    "Corrugated standard":{zh:"波纹标准",es:"Estándar corrugado",ru:"Стандарт гофрирования",ar:"معيار التموج",tr:"Oluklu standart",fr:"Standard ondulé",pt:"Padrão corrugado",hi:"कॉरूगेटेड स्टैंडर्ड",id:"Standar bergelombang"},
    "Wave profile":{zh:"波形",es:"Perfil de onda",ru:"Профиль волны",ar:"ملف الموجة",tr:"Dalga profili",fr:"Profil d'onde",pt:"Perfil de onda",hi:"वेव प्रोफ़ाइल",id:"Profil gelombang"},
    "Wavelength":{zh:"波长",es:"Longitud de onda",ru:"Длина волны",ar:"الطول الموجي",tr:"Dalga boyu",fr:"Longueur d'onde",pt:"Comprimento de onda",hi:"तरंगदैर्ध्य",id:"Panjang gelombang"},
    "Wire diameter":{zh:"线径",es:"Diámetro del alambre",ru:"Диаметр проволоки",ar:"قطر السلك",tr:"Tel çapı",fr:"Diamètre du fil",pt:"Diâmetro do fio",hi:"वायर व्यास",id:"Diameter kawat"},
    "Copper diameter":{zh:"铜线径",es:"Diámetro de cobre",ru:"Диаметр медного провода",ar:"قطر النحاس",tr:"Bakır çapı",fr:"Diamètre du cuivre",pt:"Diâmetro do cobre",hi:"कॉपर व्यास",id:"Diameter tembaga"},
    "Thread specs":{zh:"螺纹规格",es:"Especificaciones de rosca",ru:"Спецификация резьбы",ar:"مواصفات اللولب",tr:"Vida özellikleri",fr:"Spécifications de filetage",pt:"Especificações de rosca",hi:"थ्रेड स्पेक्स",id:"Spesifikasi ulir"},
    "Electrode journey":{zh:"电极行程",es:"Recorrido del electrodo",ru:"Ход электрода",ar:"مسار القطب",tr:"Elektrot hareketi",fr:"Course de l'électrode",pt:"Curso do eletrodo",hi:"इलेक्ट्रोड जर्नी",id:"Perjalanan elektroda"},
    "Max electrode pressure":{zh:"最大电极压力",es:"Presión máxima del electrodo",ru:"Макс. давление электрода",ar:"أقصى ضغط للقطب",tr:"Maks. elektrot basıncı",fr:"Pression max. de l'électrode",pt:"Pressão máxima do eletrodo",hi:"अधिकतम इलेक्ट्रोड प्रेशर",id:"Tekanan elektroda maks."},
    "Max short circuit current":{zh:"最大短路电流",es:"Corriente máxima de cortocircuito",ru:"Макс. ток короткого замыкания",ar:"أقصى تيار قصر",tr:"Maks. kısa devre akımı",fr:"Courant max. de court-circuit",pt:"Corrente máxima de curto-circuito",hi:"अधिकतम शॉर्ट सर्किट करंट",id:"Arus hubung singkat maks."},
    "Rated load cycle":{zh:"额定负载周期",es:"Ciclo de carga nominal",ru:"Номинальный цикл нагрузки",ar:"دورة الحمل المقدر",tr:"Nominal yük döngüsü",fr:"Cycle de charge nominal",pt:"Ciclo de carga nominal",hi:"रेटेड लोड साइकल",id:"Siklus beban terukur"},
    "Stroke No.":{zh:"冲次",es:"Número de carreras",ru:"Число ходов",ar:"عدد الأشواط",tr:"Strok sayısı",fr:"Nombre de courses",pt:"Número de cursos",hi:"स्ट्रोक नंबर",id:"Jumlah langkah"},
    "Weight capacity":{zh:"承重",es:"Capacidad de peso",ru:"Грузоподъёмность",ar:"سعة الوزن",tr:"Ağırlık kapasitesi",fr:"Capacité de poids",pt:"Capacidade de peso",hi:"वज़न क्षमता",id:"Kapasitas berat"},
    "Max weight capacity":{zh:"最大承重",es:"Capacidad máxima de peso",ru:"Макс. грузоподъёмность",ar:"أقصى سعة وزن",tr:"Maks. ağırlık kapasitesi",fr:"Capacité max. de poids",pt:"Capacidade máxima de peso",hi:"अधिकतम वज़न क्षमता",id:"Kapasitas berat maks."},
    "Top roller diameter":{zh:"上辊直径",es:"Diámetro del rodillo superior",ru:"Диаметр верхнего вальца",ar:"قطر الأسطوانة العلوية",tr:"Üst merdane çapı",fr:"Diamètre du rouleau supérieur",pt:"Diâmetro do rolo superior",hi:"टॉप रोलर व्यास",id:"Diameter roller atas"},
    "Bottom roller diameter":{zh:"下辊直径",es:"Diámetro del rodillo inferior",ru:"Диаметр нижнего вальца",ar:"قطر الأسطوانة السفلية",tr:"Alt merdane çapı",fr:"Diamètre du rouleau inférieur",pt:"Diâmetro do rolo inferior",hi:"बॉटम रोलर व्यास",id:"Diameter roller bawah"},
    "Final product width":{zh:"成品宽度",es:"Ancho del producto final",ru:"Ширина готового изделия",ar:"عرض المنتج النهائي",tr:"Son ürün genişliği",fr:"Largeur du produit fini",pt:"Largura do produto final",hi:"अंतिम उत्पाद चौड़ाई",id:"Lebar produk akhir"},
    "Fireproof cloth width":{zh:"防火布宽度",es:"Ancho de tela ignífuga",ru:"Ширина огнестойкой ткани",ar:"عرض القماش المقاوم للحريق",tr:"Yangın geçirmez kumaş genişliği",fr:"Largeur du tissu ignifuge",pt:"Largura do tecido à prova de fogo",hi:"फायरप्रूफ क्लॉथ चौड़ाई",id:"Lebar kain tahan api"},
    "Sleeving length":{zh:"套管长度",es:"Longitud de encamisado",ru:"Длина обсадки",ar:"طول التغليف",tr:"Kılıf uzunluğu",fr:"Longueur de manchonnage",pt:"Comprimento de encamisamento",hi:"स्लीविंग लंबाई",id:"Panjang selongsong"},
    "Die specification":{zh:"模具规格",es:"Especificación del troquel",ru:"Спецификация штампа",ar:"مواصفات القالب",tr:"Kalıp özellikleri",fr:"Spécification de la matrice",pt:"Especificação da matriz",hi:"डाई स्पेसिफिकेशन",id:"Spesifikasi cetakan"},
    "Tray specification":{zh:"托盘规格",es:"Especificación de la bandeja",ru:"Спецификация лотка",ar:"مواصفات الصينية",tr:"Tepsi özellikleri",fr:"Spécification du plateau",pt:"Especificação da bandeja",hi:"ट्रे स्पेसिफिकेशन",id:"Spesifikasi baki"},
    "Yield limit":{zh:"屈服极限",es:"Límite de fluencia",ru:"Предел текучести",ar:"حد الخضوع",tr:"Akma sınırı",fr:"Limite d'élasticité",pt:"Limite de escoamento",hi:"यील्ड लिमिट",id:"Batas luluh"},
    "Max flange height":{zh:"最大法兰高度",es:"Altura máxima de brida",ru:"Макс. высота фланца",ar:"أقصى ارتفاع للحافة",tr:"Maks. flanş yüksekliği",fr:"Hauteur max. de bride",pt:"Altura máxima da flange",hi:"अधिकतम फ्लैंज ऊंचाई",id:"Tinggi flensa maks."},
    "Flange height (A)":{zh:"法兰高度 (A)",es:"Altura de brida (A)",ru:"Высота фланца (A)",ar:"ارتفاع الحافة (A)",tr:"Flanş yüksekliği (A)",fr:"Hauteur de bride (A)",pt:"Altura da flange (A)",hi:"फ्लैंज ऊंचाई (A)",id:"Tinggi flensa (A)"},
    "Flange height (B)":{zh:"法兰高度 (B)",es:"Altura de brida (B)",ru:"Высота фланца (B)",ar:"ارتفاع الحافة (B)",tr:"Flanş yüksekliği (B)",fr:"Hauteur de bride (B)",pt:"Altura da flange (B)",hi:"फ्लैंज ऊंचाई (B)",id:"Tinggi flensa (B)"},
    "Thickness (A)":{zh:"厚度 (A)",es:"Espesor (A)",ru:"Толщина (A)",ar:"السماكة (A)",tr:"Kalınlık (A)",fr:"Épaisseur (A)",pt:"Espessura (A)",hi:"मोटाई (A)",id:"Ketebalan (A)"},
    "Thickness (B)":{zh:"厚度 (B)",es:"Espesor (B)",ru:"Толщина (B)",ar:"السماكة (B)",tr:"Kalınlık (B)",fr:"Épaisseur (B)",pt:"Espessura (B)",hi:"मोटाई (B)",id:"Ketebalan (B)"},
    "Thickness (Pittsburgh)":{zh:"厚度（匹兹堡锁）",es:"Espesor (Pittsburgh)",ru:"Толщина (Pittsburgh)",ar:"السماكة (بيتسبرغ)",tr:"Kalınlık (Pittsburgh)",fr:"Épaisseur (Pittsburgh)",pt:"Espessura (Pittsburgh)",hi:"मोटाई (Pittsburgh)",id:"Ketebalan (Pittsburgh)"},
    "Thickness (Snap lock)":{zh:"厚度（扣锁）",es:"Espesor (Snap lock)",ru:"Толщина (Snap lock)",ar:"السماكة (قفل سريع)",tr:"Kalınlık (Snap lock)",fr:"Épaisseur (Snap lock)",pt:"Espessura (Snap lock)",hi:"मोटाई (Snap lock)",id:"Ketebalan (Snap lock)"},
    "Power (A)":{zh:"功率 (A)",es:"Potencia (A)",ru:"Мощность (A)",ar:"الطاقة (A)",tr:"Güç (A)",fr:"Puissance (A)",pt:"Potência (A)",hi:"पावर (A)",id:"Daya (A)"},
    "Weight (A)":{zh:"重量 (A)",es:"Peso (A)",ru:"Вес (A)",ar:"الوزن (A)",tr:"Ağırlık (A)",fr:"Poids (A)",pt:"Peso (A)",hi:"वज़न (A)",id:"Berat (A)"},
    "Model (A series)":{zh:"型号（A系列）",es:"Modelo (serie A)",ru:"Модель (серия A)",ar:"الموديل (سلسلة A)",tr:"Model (A serisi)",fr:"Modèle (série A)",pt:"Modelo (série A)",hi:"मॉडल (A सीरीज़)",id:"Model (seri A)"},
    "Model (B series)":{zh:"型号（B系列）",es:"Modelo (serie B)",ru:"Модель (серия B)",ar:"الموديل (سلسلة B)",tr:"Model (B serisi)",fr:"Modèle (série B)",pt:"Modelo (série B)",hi:"मॉडल (B सीरीज़)",id:"Model (seri B)"},
    "Punching &amp; cutting mould":{zh:"冲切模具",es:"Molde de punzonado y corte",ru:"Штамп для пробивки и резки",ar:"قالب التثقيب والقطع",tr:"Delme ve kesme kalıbı",fr:"Moule de poinçonnage et découpe",pt:"Molde de puncionamento e corte",hi:"पंचिंग और कटिंग मोल्ड",id:"Cetakan pelubangan & pemotongan"},
  };

  const PROD = {
    "sbtf-2020":{s:{zh:"大型螺旋风管机",es:"Máquina espiral de gran capacidad",ru:"Спиральный трубоформер большой мощности",ar:"آلة حلزونية عالية السعة",tr:"Yüksek kapasiteli spiral makine",fr:"Machine spiralée haute capacité",pt:"Máquina espiral de alta capacidade",hi:"उच्च-क्षमता स्पाइरल मशीन",id:"Mesin spiral kapasitas tinggi"},d:{zh:"大型螺旋风管成型机，直径可达Φ2500mm。适用于厚材加工（镀锌板≤2mm），配备等离子切割和飞剪。适合重型通风和工业HVAC项目。",es:"Tubeformer espiral de alta capacidad para ductos hasta Φ2500mm, materiales gruesos hasta 2mm, corte plasma y cizalla al vuelo.",ru:"Спиральный трубоформер для воздуховодов до Φ2500мм, толстых материалов до 2мм, плазменная резка.",ar:"آلة حلزونية عالية السعة لأقطار حتى Φ2500مم ومواد سميكة حتى 2مم مع قطع بالبلازما.",tr:"Φ2500mm'ye kadar çaplarda, 2mm'ye kadar kalınlıklarda spiral kanal makinesi, plazma kesim.",fr:"Tubeformer spiralé haute capacité jusqu'à Φ2500mm, matériaux épais jusqu'à 2mm, coupe plasma.",pt:"Tubeformer espiral de alta capacidade para dutos até Φ2500mm, materiais grossos até 2mm.",hi:"Φ2500mm तक के व्यास के लिए उच्च-क्षमता स्पाइरल ट्यूबफॉर्मर, 2mm तक की मोटी सामग्री।",id:"Tubeformer spiral kapasitas tinggi untuk saluran hingga Φ2500mm, material tebal hingga 2mm."}},
    "sbtf-1602":{s:{zh:"飞剪螺旋风管机",es:"Máquina espiral de corte al vuelo",ru:"Спиральный трубоформер с летучей резкой",ar:"آلة حلزونية بقطع طائر",tr:"Uçan kesimli spiral makine",fr:"Machine spiralée à coupe volante",pt:"Máquina espiral de corte voador",hi:"फ्लाइंग शीयर स्पाइरल मशीन",id:"Mesin spiral potong terbang"},d:{zh:"高性能螺旋风管成型机，直径Φ80-Φ1600mm。配备专利飞剪切割器、自动长度控制，可选一道或两道加强筋。支持外锁和内锁。",es:"Tubeformer espiral de alto rendimiento, Φ80-Φ1600mm, cortadora volante patentada, control automático de longitud.",ru:"Высокопроизводительный спиральный трубоформер Φ80-Φ1600мм с патентованной летучей резкой и автоматическим контролем длины.",ar:"آلة حلزونية عالية الأداء Φ80-Φ1600مم مع قطع طائر حاصل على براءة اختراع وتحكم تلقائي بالطول.",tr:"Yüksek performanslı spiral makine Φ80-Φ1600mm, patentli uçan kesici, otomatik boy kontrolü.",fr:"Tubeformer spiralé haute performance Φ80-Φ1600mm, coupe volante brevetée, contrôle automatique.",pt:"Tubeformer espiral de alto desempenho Φ80-Φ1600mm, cortador voador patenteado, controle automático.",hi:"उच्च-प्रदर्शन स्पाइरल ट्यूबफॉर्मर Φ80-Φ1600mm, पेटेंटेड फ्लाइंग स्लिटर, ऑटो लंबाई नियंत्रण।",id:"Tubeformer spiral performa tinggi Φ80-Φ1600mm, pemotong terbang berlisensi, kontrol panjang otomatis."}},
    "sbtf-1500c":{s:{zh:"紧凑型螺旋风管机",es:"Máquina espiral compacta",ru:"Компактный спиральный трубоформер",ar:"آلة حلزونية مدمجة",tr:"Kompakt spiral makine",fr:"Machine spiralée compacte",pt:"Máquina espiral compacta",hi:"कॉम्पैक्ट स्पाइरल मशीन",id:"Mesin spiral kompak"},d:{zh:"紧凑型螺旋风管机，直径可达Φ1500mm。适合中等产量的暖通和通风项目车间。支持镀锌和不锈钢带材。",es:"Variante compacta de tubeformer espiral para ductos hasta Φ1500mm, ideal para talleres de volumen medio.",ru:"Компактный спиральный трубоформер до Φ1500мм для средних объёмов производства.",ar:"آلة حلزونية مدمجة لأقطار حتى Φ1500مم، مثالية لورش الإنتاج المتوسط.",tr:"Φ1500mm'ye kadar kompakt spiral makine, orta hacimli üretim atölyeleri için ideal.",fr:"Variante compacte de tubeformer spiralé jusqu'à Φ1500mm pour ateliers de volume moyen.",pt:"Variante compacta de tubeformer espiral até Φ1500mm para oficinas de volume médio.",hi:"मध्यम-वॉल्यूम वर्कशॉप के लिए Φ1500mm तक कॉम्पैक्ट स्पाइरल ट्यूबफॉर्मर।",id:"Tubeformer spiral kompak hingga Φ1500mm untuk bengkel volume menengah."}},
    "sbtf-1500":{s:{zh:"锯片切割螺旋风管机",es:"Máquina espiral con corte de sierra",ru:"Спиральный трубоформер с дисковой резкой",ar:"آلة حلزونية بقطع المنشار",tr:"Testere kesimli spiral makine",fr:"Machine spiralée à coupe par scie",pt:"Máquina espiral com corte de serra",hi:"सॉ ब्लेड कटिंग स्पाइरल मशीन",id:"Mesin spiral potong gergaji"},d:{zh:"紧凑型螺旋风管成型机，适用于中小直径圆管。锯片切割精度高。支持镀锌钢0.4-1.2mm和不锈钢0.4-0.8mm。",es:"Tubeformer espiral compacto para ductos de diámetro pequeño a mediano, corte de sierra de precisión.",ru:"Компактный спиральный трубоформер для малых и средних диаметров с дисковой резкой.",ar:"آلة حلزونية مدمجة للأقطار الصغيرة والمتوسطة مع قطع دقيق بالمنشار.",tr:"Küçük-orta çaplı kanallar için kompakt spiral makine, hassas testere kesimi.",fr:"Tubeformer spiralé compact pour conduits de petit à moyen diamètre, coupe de précision.",pt:"Tubeformer espiral compacto para dutos de diâmetro pequeno a médio, corte de serra de precisão.",hi:"छोटे से मध्यम व्यास के लिए कॉम्पैक्ट स्पाइरल मशीन, सटीक सॉ ब्लेड कटिंग।",id:"Tubeformer spiral kompak untuk saluran diameter kecil-menengah, pemotongan gergaji presisi."}},
    "sbal-v":{s:{zh:"U型全自动风管生产线",es:"Línea automática en U",ru:"U-образная автоматическая линия",ar:"خط إنتاج أوتوماتيكي U",tr:"U-şekli otomatik hat",fr:"Ligne automatique en U",pt:"Linha automática em U",hi:"U-शेप ऑटोमैटिक डक्ट लाइन",id:"Jalur otomatis bentuk-U"},d:{zh:"全自动U型矩形风管生产线，集成开卷、校平、压筋、冲缺、剪切和TDF/角钢法兰成型。日产能800-2500㎡。",es:"Línea de producción automática en U para ductos rectangulares, 800-2500m²/día, integra desbobinado, nivelado, muescado y formado de bridas.",ru:"Полностью автоматическая U-образная линия для прямоугольных воздуховодов, 800-2500м²/день.",ar:"خط إنتاج أوتوماتيكي بالكامل لقنوات مستطيلة بسعة 800-2500م²/يوم.",tr:"Dikdörtgen kanallar için tam otomatik U-şekli üretim hattı, günlük 800-2500m².",fr:"Ligne automatique en U pour conduits rectangulaires, 800-2500m²/jour.",pt:"Linha automática em U para dutos retangulares, 800-2500m²/dia.",hi:"रेक्टैंगुलर डक्ट के लिए पूर्ण स्वचालित U-शेप लाइन, 800-2500m²/दिन।",id:"Jalur produksi otomatis bentuk-U untuk saluran persegi panjang, 800-2500m²/hari."}},
    "sbal-iii":{s:{zh:"液压冲切全自动风管线",es:"Línea automática con muescado hidráulico",ru:"Автоматическая линия с гидравлической вырубкой",ar:"خط أوتوماتيكي بتثقيب هيدروليكي",tr:"Hidrolik çentikli otomatik hat",fr:"Ligne automatique avec entaillage hydraulique",pt:"Linha automática com entalhe hidráulico",hi:"हाइड्रोलिक नॉचिंग ऑटोमैटिक लाइन",id:"Jalur otomatis dengan notching hidrolik"},d:{zh:"Line III集成双电动送料架、校平压筋辊、液压冲缺和方孔冲压、液压剪切和折弯。电脑控制，每班产能约1000㎡。",es:"Línea III integra alimentadores eléctricos, muescado hidráulico, cizallado y plegado. Capacidad ~1000m²/turno.",ru:"Линия III с электрическими подающими рамами, гидравлической вырубкой и фальцовкой, ~1000м²/смена.",ar:"الخط III يدمج إطارات تغذية كهربائية وتثقيب هيدروليكي وقص وطي، سعة ~1000م²/وردية.",tr:"Hat III: elektrikli besleme, hidrolik çentik, kesme ve katlama. Kapasite ~1000m²/vardiya.",fr:"Ligne III intègre alimentation électrique, entaillage hydraulique, cisaillage et pliage. ~1000m²/poste.",pt:"Linha III integra alimentadores elétricos, entalhe hidráulico, cisalhamento e dobra. ~1000m²/turno.",hi:"लाइन III: इलेक्ट्रिक फीडिंग, हाइड्रोलिक नॉचिंग, शीयरिंग और फोल्डिंग। ~1000m²/शिफ्ट।",id:"Lini III mengintegrasikan feeding elektrik, notching hidrolik, pemotongan dan pelipatan. ~1000m²/shift."}},
    "sbem-1250":{s:{zh:"液压弯头机",es:"Máquina hidráulica de codos",ru:"Гидравлический гореслокер",ar:"آلة أكواع هيدروليكية",tr:"Hidrolik dirsek makinesi",fr:"Machine à coudes hydraulique",pt:"Máquina hidráulica de cotovelos",hi:"हाइड्रोलिक एल्बो मशीन",id:"Mesin siku hidrolik"},d:{zh:"液压弯头成型机，生产圆管弯头，直径范围100-1250mm。适用于镀锌钢、不锈钢和铝制弯头。最大成型速度120m/min。",es:"Gorelocker hidráulico para codos de ducto redondo, 100-1250mm, velocidad máxima 120m/min.",ru:"Гидравлический гореслокер для круглых отводов 100-1250мм, скорость до 120м/мин.",ar:"آلة هيدروليكية لإنتاج أكواع القنوات المستديرة 100-1250مم بسرعة حتى 120م/دقيقة.",tr:"100-1250mm yuvarlak kanal dirseği için hidrolik gorelocker, maks. 120m/dk.",fr:"Gorelocker hydraulique pour coudes ronds 100-1250mm, vitesse max. 120m/min.",pt:"Gorelocker hidráulico para cotovelos redondos 100-1250mm, velocidade máx. 120m/min.",hi:"100-1250mm राउंड डक्ट एल्बो के लिए हाइड्रोलिक गोरलॉकर, अधिकतम 120m/min।",id:"Gorelocker hidrolik untuk siku saluran bulat 100-1250mm, kecepatan maks. 120m/mnt."}},
    "tdf-flange":{s:{zh:"TDF（共板）法兰成型机",es:"Máquina de brida TDF",ru:"Машина для TDF фланцев",ar:"آلة تشكيل حافة TDF",tr:"TDF flanş makinesi",fr:"Machine à brides TDF",pt:"Máquina de flange TDF",hi:"TDF फ्लैंज फॉर्मिंग मशीन",id:"Mesin flensa TDF"},d:{zh:"矩形风管TDF法兰成型机，在板材边缘成型共板法兰。两种型号覆盖不同材料厚度范围。法兰高度35±0.5mm。",es:"Máquina de formado de brida TDF para extremos de ductos rectangulares, dos modelos para diferentes espesores.",ru:"Машина для формовки TDF фланцев на прямоугольных воздуховодах, два модели для разных толщин.",ar:"آلة تشكيل حافة TDF لأطراف القنوات المستطيلة، طرازان لسماكات مختلفة.",tr:"Dikdörtgen kanal uçlarında TDF flanş şekillendirme makinesi, farklı kalınlıklar için iki model.",fr:"Machine de formage de bride TDF pour conduits rectangulaires, deux modèles pour différentes épaisseurs.",pt:"Máquina de formação de flange TDF para dutos retangulares, dois modelos para diferentes espessuras.",hi:"रेक्टैंगुलर डक्ट सिरों के लिए TDF फ्लैंज फॉर्मिंग मशीन, विभिन्न मोटाई के लिए दो मॉडल।",id:"Mesin pembentukan flensa TDF untuk ujung saluran persegi panjang, dua model untuk ketebalan berbeda."}},
    "lockformer":{s:{zh:"匹兹堡锁和咬口成型机",es:"Formadora de cierre Pittsburgh",ru:"Фальцепрокатный станок",ar:"آلة تشكيل قفل بيتسبرغ",tr:"Pittsburgh kilit makinesi",fr:"Machine à verrouillage Pittsburgh",pt:"Formadora de trava Pittsburgh",hi:"पिट्सबर्ग लॉक फॉर्मिंग मशीन",id:"Mesin pembentuk kunci Pittsburgh"},d:{zh:"矩形风管板材边缘匹兹堡锁和咬口成型。多种型号覆盖不同厚度范围和咬口类型。风管工厂必备设备。",es:"Formadora de perfiles de cierre Pittsburgh y cleats en bordes de lámina, múltiples modelos para diferentes espesores.",ru:"Фальцепрокатный станок для формовки Pittsburgh замка и защёлок, несколько моделей.",ar:"آلة تشكيل قفل بيتسبرغ على حواف الصفائح المعدنية، طرازات متعددة لسماكات مختلفة.",tr:"Sac kenarlarında Pittsburgh kilit ve klip şekillendirme, farklı kalınlıklar için çoklu modeller.",fr:"Machine de formage de verrouillage Pittsburgh et clips sur bords de tôle, plusieurs modèles.",pt:"Formadora de perfis Pittsburgh e cleats em bordas de chapa, múltiplos modelos.",hi:"शीट मेटल किनारों पर पिट्सबर्ग लॉक और क्लीट फॉर्मिंग, विभिन्न मोटाई के लिए कई मॉडल।",id:"Pembentukan kunci Pittsburgh dan cleat pada tepi lembaran logam, beberapa model untuk berbagai ketebalan."}},
    "sbhf-i":{s:{zh:"风管合缝机",es:"Máquina cerradora de costuras",ru:"Машина для закрытия швов",ar:"آلة إغلاق اللحامات",tr:"Dikiş kapatma makinesi",fr:"Machine de fermeture de joints",pt:"Máquina de fechamento de costuras",hi:"डक्ट ज़िपर सीम क्लोज़िंग मशीन",id:"Mesin penutup jahitan saluran"},d:{zh:"矩形风管纵向合缝机，快速封合匹兹堡锁缝。最大送料速度15m/min，最小风管尺寸100×100mm。",es:"Máquina cerradora de costuras longitudinales para ductos rectangulares, velocidad hasta 15m/min.",ru:"Машина для закрытия продольных швов прямоугольных воздуховодов, скорость до 15м/мин.",ar:"آلة إغلاق اللحامات الطولية للقنوات المستطيلة بسرعة حتى 15م/دقيقة.",tr:"Dikdörtgen kanallar için boyuna dikiş kapatma makinesi, hız 15m/dk'ya kadar.",fr:"Machine de fermeture de joints longitudinaux pour conduits rectangulaires, vitesse jusqu'à 15m/min.",pt:"Máquina de fechamento de costuras longitudinais para dutos retangulares, velocidade até 15m/min.",hi:"रेक्टैंगुलर डक्ट के लिए लॉन्गिट्यूडिनल सीम क्लोज़िंग मशीन, 15m/min तक की गति।",id:"Mesin penutup jahitan longitudinal untuk saluran persegi panjang, kecepatan hingga 15m/mnt."}}
  };

  const pagePath = (window.location.pathname || "/index.html").replace(/\/$/, "/index.html");
  const MAJOR_TRANSLATED_PAGES = new Set([
    "/index.html",
    "/machines.html",
    "/videos.html",
    "/about.html",
    "/contact.html",
    "/why-choose-sbkj.html",
    "/factory.html",
    "/quality.html",
    "/request-quote.html"
  ]);

  const LANGUAGE_POLICY = {
    exact: {
      "/duct-making-machine-australia.html": {
        mode: "stay_en_notice",
        fallback: "/machines.html",
        reason: "This SEO campaign page is currently published in English only."
      },
      "/hvac-duct-machinery/index.html": {
        mode: "stay_en_notice",
        fallback: "/machines.html",
        reason: "This pillar page is currently published in English only."
      },
      "/spiral-duct-machine/index.html": {
        mode: "stay_en_notice",
        fallback: "/machines.html",
        reason: "This pillar page is currently published in English only."
      },
      "/auto-duct-line/index.html": {
        mode: "stay_en_notice",
        fallback: "/machines.html",
        reason: "This pillar page is currently published in English only."
      },
      "/duct-forming-machines/index.html": {
        mode: "stay_en_notice",
        fallback: "/machines.html",
        reason: "This pillar page is currently published in English only."
      },
      "/elbow-fittings-machines/index.html": {
        mode: "stay_en_notice",
        fallback: "/machines.html",
        reason: "This pillar page is currently published in English only."
      }
    },
    patterns: [
      {
        test: (path) => path.startsWith("/product/") && !PROD[getProductSlugFromPath(path)],
        mode: "redirect_fallback",
        fallback: "/machines.html",
        reason: "This product detail page is currently available in English only."
      }
    ]
  };

  const preferredLang = localStorage.getItem("sbkj-lang") || "en";
  let currentLang = preferredLang;

  function getProductSlugFromPath(path) {
    const m = path.match(/\/product\/([^\/]+)\.html/);
    return m ? m[1] : null;
  }

  function getLanguagePolicy(path) {
    if (LANGUAGE_POLICY.exact[path]) return LANGUAGE_POLICY.exact[path];

    for (const pattern of LANGUAGE_POLICY.patterns) {
      if (pattern.test(path)) {
        return {
          mode: pattern.mode,
          fallback: pattern.fallback || "/machines.html",
          reason: pattern.reason
        };
      }
    }

    if (!MAJOR_TRANSLATED_PAGES.has(path)) {
      return {
        mode: "redirect_fallback",
        fallback: "/index.html",
        reason: "This page does not have a full multilingual version yet."
      };
    }

    return {
      mode: "translated",
      fallback: path,
      reason: ""
    };
  }

  function canApplyLangOnPage(lang, path = pagePath) {
    if (lang === "en") return true;
    return getLanguagePolicy(path).mode === "translated";
  }

  function renderLanguageNotice(message, fallbackPath) {
    if (!message) return;
    const host = document.querySelector("main") || document.querySelector(".page-hero") || document.body;
    if (!host || document.getElementById("sbLangNotice")) return;

    const notice = document.createElement("div");
    notice.id = "sbLangNotice";
    notice.className = "lang-notice";
    const safePath = typeof fallbackPath === "string" && fallbackPath ? fallbackPath : "";
    notice.innerHTML = safePath
      ? `${message} <a href="${safePath}">View the closest translated page</a>.`
      : message;

    host.insertBefore(notice, host.firstChild);
  }

  /* QA mode: add ?i18n-qa=1 to URL to visually flag missing translations */
  const QA_MODE = typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("i18n-qa") === "1";

  function t(key) {
    const entry = T[key];
    if (!entry) {
      if (QA_MODE || (typeof console !== "undefined")) {
        console.warn("[SBKJ i18n] MISSING KEY:", key, "— page:", window.location.pathname);
      }
      /* In QA mode return a clearly broken string so testers see it */
      return QA_MODE ? `⚠️[${key}]` : null;
    }
    const val = entry[currentLang];
    if (!val && currentLang !== "en") {
      console.warn("[SBKJ i18n] MISSING TRANSLATION for key:", key, "lang:", currentLang, "— falling back to EN");
      return entry.en || null;
    }
    return val || entry.en;
  }

  function translateSpecLabel(text) {
    if (currentLang === "en") return text;
    const entry = SPEC[text];
    return entry && entry[currentLang] ? entry[currentLang] : text;
  }

  function getProductSlug() {
    return getProductSlugFromPath(window.location.pathname);
  }

  function applyTranslations() {
    /* textContent translations (most elements) */
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (val !== null) {
        el.textContent = val;
        if (QA_MODE) el.removeAttribute("data-i18n-missing");
      } else if (QA_MODE) {
        el.setAttribute("data-i18n-missing", key);
        el.style.outline = "2px solid red";
        el.title = `[i18n QA] Missing key: ${key}`;
      }
    });
    /* innerHTML translations (keys that contain HTML like <br/>) */
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      const val = t(key);
      if (val !== null) el.innerHTML = val;
      else if (QA_MODE) {
        el.setAttribute("data-i18n-missing", key);
        el.style.outline = "2px solid red";
      }
    });
    /* placeholder translations */
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = t(key);
      if (val !== null) el.placeholder = val;
    });
    /* aria-label translations */
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const key = el.getAttribute("data-i18n-aria");
      const val = t(key);
      if (val !== null) el.setAttribute("aria-label", val);
    });
    /* title attribute translations */
    document.querySelectorAll("[data-i18n-title]").forEach(el => {
      const key = el.getAttribute("data-i18n-title");
      const val = t(key);
      if (val !== null) el.setAttribute("title", val);
    });
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    const sel = document.getElementById("sbLangCurrent");
    if (sel) {
      sel.textContent = LANGS[currentLang].flag + " " + LANGS[currentLang].label;
    }
    const chatInput = document.getElementById("sbChatInput");
    if (chatInput) {
      const ph = t("chat.placeholder");
      if (ph) chatInput.placeholder = ph;
    }
    document.querySelectorAll(".spec-table tbody tr").forEach(row => {
      const firstTd = row.querySelector("td:first-child");
      if (firstTd && !firstTd.dataset._orig) firstTd.dataset._orig = firstTd.textContent;
      if (firstTd) firstTd.textContent = translateSpecLabel(firstTd.dataset._orig);
    });
    const slug = getProductSlug();
    if (slug && PROD[slug]) {
      const p = PROD[slug];
      const sub = document.querySelector(".product-subtitle");
      if (sub) {
        if (!sub.dataset._orig) sub.dataset._orig = sub.textContent;
        sub.textContent = (currentLang !== "en" && p.s[currentLang]) ? p.s[currentLang] : sub.dataset._orig;
      }
      const intro = document.querySelector(".product-intro");
      if (intro) {
        const paras = intro.querySelectorAll("p");
        if (!intro.dataset._orig) intro.dataset._orig = intro.innerHTML;
        if (currentLang !== "en" && p.d[currentLang]) {
          const h2 = intro.querySelector("h2");
          const h2html = h2 ? h2.outerHTML : "";
          intro.innerHTML = h2html + "<p>" + p.d[currentLang] + "</p>";
        } else if (currentLang === "en" && intro.dataset._orig) {
          intro.innerHTML = intro.dataset._orig;
        }
      }
    }
  }

  function setLang(lang) {
    if (!LANGS[lang]) return;
    localStorage.setItem("sbkj-lang", lang);
    if (!canApplyLangOnPage(lang)) {
      currentLang = "en";
      applyTranslations();
      const policy = getLanguagePolicy(pagePath);
      if (policy.mode === "redirect_fallback" && policy.fallback && policy.fallback !== pagePath) {
        window.location.href = policy.fallback;
        return;
      }
      renderLanguageNotice(policy.reason || "This page remains in English to avoid mixed-language content.", policy.fallback);
      return;
    }
    currentLang = lang;
    applyTranslations();
  }

  function createSwitcher() {
    const nav = document.querySelector(".site-nav");
    if (!nav) return;
    const wrap = document.createElement("div");
    wrap.className = "lang-switcher";
    let optionsHtml = "";
    for (const [code, info] of Object.entries(LANGS)) {
      optionsHtml += `<button class="lang-option" data-lang="${code}">${info.flag} ${info.label}</button>`;
    }
    wrap.innerHTML = `
      <button class="lang-toggle" id="sbLangToggle" aria-expanded="false">
        <span id="sbLangCurrent">${LANGS[currentLang].flag} ${LANGS[currentLang].label}</span>
        <svg viewBox="0 0 12 12" width="10" height="10"><path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
      </button>
      <div class="lang-dropdown" id="sbLangDropdown">
        ${optionsHtml}
      </div>
    `;
    nav.parentElement.insertBefore(wrap, nav.nextSibling);

    const toggle = document.getElementById("sbLangToggle");
    const dropdown = document.getElementById("sbLangDropdown");
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = dropdown.classList.toggle("lang-dropdown-open");
      toggle.setAttribute("aria-expanded", open);
    });
    dropdown.querySelectorAll(".lang-option").forEach(btn => {
      btn.addEventListener("click", () => {
        setLang(btn.dataset.lang);
        dropdown.classList.remove("lang-dropdown-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("click", () => {
      dropdown.classList.remove("lang-dropdown-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  }

  function init() {
    if (!canApplyLangOnPage(currentLang)) {
      currentLang = "en";
    }
    createSwitcher();
    applyTranslations();

    const policy = getLanguagePolicy(pagePath);
    if (policy.mode !== "translated" && preferredLang !== "en") {
      renderLanguageNotice(`${policy.reason} Your language preference is saved and will be used on translated pages.`, policy.fallback);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  /**
   * validateKeys() — QA utility
   * Run in browser console: SBKJ_i18n.validateKeys()
   * Returns a report of every data-i18n key on the page that is:
   *   - missing from the T table entirely
   *   - missing a translation for a specific language
   */
  function validateKeys() {
    const allLangs = Object.keys(LANGS);
    const pageKeys = new Set();
    document.querySelectorAll("[data-i18n],[data-i18n-html],[data-i18n-placeholder],[data-i18n-aria],[data-i18n-title]").forEach(el => {
      ["data-i18n","data-i18n-html","data-i18n-placeholder","data-i18n-aria","data-i18n-title"].forEach(attr => {
        const k = el.getAttribute(attr);
        if (k) pageKeys.add(k);
      });
    });
    const report = { missingKeys: [], missingTranslations: {} };
    pageKeys.forEach(key => {
      if (!T[key]) {
        report.missingKeys.push(key);
      } else {
        allLangs.forEach(lang => {
          if (!T[key][lang]) {
            if (!report.missingTranslations[lang]) report.missingTranslations[lang] = [];
            report.missingTranslations[lang].push(key);
          }
        });
      }
    });
    const totalKeys = pageKeys.size;
    const missingCount = report.missingKeys.length;
    const transCount = Object.values(report.missingTranslations).reduce((s,a) => s+a.length, 0);
    console.group("[SBKJ i18n] Validation Report — " + window.location.pathname);
    console.log("Total data-i18n keys on page:", totalKeys);
    if (missingCount === 0) {
      console.log("✅ All keys exist in translation table");
    } else {
      console.error("❌ Keys missing from T table (" + missingCount + "):", report.missingKeys);
    }
    if (transCount === 0) {
      console.log("✅ All translations present for all " + allLangs.length + " languages");
    } else {
      console.warn("⚠️  Missing translations (" + transCount + " total):");
      Object.entries(report.missingTranslations).forEach(([lang, keys]) => {
        if (keys.length) console.warn("  " + lang + ":", keys);
      });
    }
    console.groupEnd();
    return report;
  }

  /**
   * scanUntranslatedElements() — scans visible text nodes for elements
   * that have no data-i18n attribute and may be hardcoded English strings.
   * Run in browser console: SBKJ_i18n.scanUntranslated()
   */
  function scanUntranslated() {
    const candidates = [];
    const skip = new Set(["SCRIPT","STYLE","NOSCRIPT","META","LINK","SVG","PATH","CIRCLE"]);
    document.querySelectorAll("h1,h2,h3,h4,p,li,dt,dd,label,button,a,span,th,td").forEach(el => {
      if (skip.has(el.tagName)) return;
      if (el.closest("[data-i18n],[data-i18n-html]")) return;
      if (el.getAttribute("data-i18n") || el.getAttribute("data-i18n-html")) return;
      const text = (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3)
        ? el.textContent.trim() : "";
      if (text.length > 3 && /[a-zA-Z]/.test(text)) {
        candidates.push({ tag: el.tagName, text: text.slice(0, 80), el });
      }
    });
    console.group("[SBKJ i18n] Potentially Untranslated Elements (" + candidates.length + ")");
    candidates.forEach(c => console.log(c.tag + ':', '"' + c.text + '"', c.el));
    console.groupEnd();
    return candidates;
  }

  window.SBKJ_i18n = { t, setLang, currentLang: () => currentLang, validateKeys, scanUntranslated };
})();
