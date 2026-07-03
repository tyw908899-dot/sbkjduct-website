/* ================================================================
   Taokron AI Product Assistant
   Smart recommendation chatbot for HVAC duct machinery
   ================================================================ */
(function () {
  "use strict";

  const PRODUCTS = [
    { id:"sbal-v", name:"Auto Duct Line SBAL-V", cat:"auto-line", tags:["rectangular","auto","duct line","5 line","five line","production line","tdf","coil line"], desc:"Fully automatic 5-line rectangular duct production line with CNC control." },
    { id:"sbal-iii", name:"Auto Duct Line SBAL-III", cat:"auto-line", tags:["rectangular","auto","duct line","3 line","three line","production line","tdf"], desc:"Automatic 3-line rectangular duct production line." },
    { id:"rectangular-duct-line-ii", name:"Rectangular Duct Line II", cat:"auto-line", tags:["rectangular","auto","duct line","2 line","two line","production line"], desc:"Automatic 2-line rectangular duct production line." },
    { id:"sbtf-1602", name:"Spiral Tubeformer SBTF-1602", cat:"spiral", tags:["spiral","round","tube","duct forming","large diameter","1602"], desc:"High-end spiral duct forming machine for large diameters up to 1600mm." },
    { id:"sbtf-2020", name:"Spiral Tubeformer SBTF-2020", cat:"spiral", tags:["spiral","round","tube","duct forming","large diameter","2020","2000mm"], desc:"Heavy-duty spiral tubeformer for diameters up to 2000mm." },
    { id:"sbtf-1500", name:"Spiral Tubeformer SBTF-1500", cat:"spiral", tags:["spiral","round","tube","duct forming","1500","compact"], desc:"Compact spiral tubeformer for small to medium diameter round ducts." },
    { id:"sbtf-1500c", name:"Spiral Tubeformer SBTF-1500C", cat:"spiral", tags:["spiral","round","tube","duct forming","1500c","corrugated"], desc:"Spiral tubeformer with corrugated duct capability." },
    { id:"stainless-duct-forming", name:"Stainless Duct Forming Machine", cat:"spiral", tags:["stainless","spiral","round","duct forming","stainless steel"], desc:"Spiral duct forming machine designed for stainless steel material." },
    { id:"metal-corrugated-spiral-pipe", name:"Metal Corrugated Spiral Pipe Machine", cat:"spiral", tags:["corrugated","spiral","pipe","metal"], desc:"Machine for producing corrugated spiral pipes." },
    { id:"sblr-600", name:"Aluminum Flexible Duct SBLR-600", cat:"flexible", tags:["flexible","aluminum","duct","foil","sblr","600"], desc:"Aluminum flexible duct forming machine." },
    { id:"sblr-600a", name:"Aluminum Flexible Duct SBLR-600A", cat:"flexible", tags:["flexible","aluminum","duct","foil","sblr","600a","three section"], desc:"Three-section aluminum flexible duct forming machine." },
    { id:"canvas-flexible-duct", name:"Canvas Flexible Duct Machine", cat:"flexible", tags:["flexible","canvas","duct","fabric","cloth"], desc:"Canvas/fabric flexible duct forming machine." },
    { id:"sblf-500", name:"Semi-Rigid Aluminum Duct SBLF-500", cat:"flexible", tags:["semi-rigid","aluminum","duct","sblf","500"], desc:"Semi-rigid aluminum duct forming machine." },
    { id:"flexible-duct-insulation", name:"Flexible Duct Insulation Machine", cat:"flexible", tags:["flexible","insulation","wrap","cotton","thermal"], desc:"Insulation wrapping machine for flexible ducts." },
    { id:"flexible-duct-shrinking", name:"Flexible Duct Shrinking Machine", cat:"flexible", tags:["flexible","shrinking","packing","compress"], desc:"Shrinking and packing machine for flexible ducts." },
    { id:"shrink-tube-machine", name:"Shrink Tube Machine", cat:"flexible", tags:["shrink","tube","packing"], desc:"Tube shrinking machine for duct packing." },
    { id:"flexible-duct-connector", name:"Flexible Duct Connector Machine", cat:"flexible", tags:["flexible","connector","rubber","ring","joint"], desc:"Machine for producing flexible duct connectors." },
    { id:"lockformer", name:"Lockformer SBLC Series", cat:"forming", tags:["lockformer","lock","seam","pittsburgh","snap","bite","joint","edge"], desc:"Multi-function lockformer for Pittsburgh, snap lock and other seam profiles." },
    { id:"tdf-flange", name:"TDF Flange Forming Machine", cat:"flange", tags:["tdf","flange","forming","transverse"], desc:"TDF (Transverse Duct Flange) forming machine." },
    { id:"transverse-duct-connector-flange", name:"TDC Flange Machine", cat:"flange", tags:["tdc","flange","connector","transverse"], desc:"TDC (Transverse Duct Connector) flange forming machine." },
    { id:"tdf-cleat-cutting", name:"TDF Cleat Cutting Machine", cat:"flange", tags:["tdf","cleat","cutting","flange"], desc:"Cleat cutting machine for TDF flange systems." },
    { id:"sbck-50a", name:"Angle Steel Punching SBCK-50A", cat:"flange", tags:["angle","steel","iron","punching","hole","flange","punch"], desc:"Angle steel/iron punching machine for flange fabrication." },
    { id:"sbyfl-50", name:"Round Flange Forming SBYFL-50", cat:"flange", tags:["round","flange","forming","circular","ring"], desc:"Round flange forming machine." },
    { id:"sbyfl-50-1", name:"Round Flange Punching SBYFL-50-1", cat:"flange", tags:["round","flange","punching","hole","circular"], desc:"Round flange punching machine." },
    { id:"sbyflhj-50", name:"Round Flange Welding SBYFLHJ-50", cat:"flange", tags:["round","flange","welding","butt","circular"], desc:"Round flange butt welding machine." },
    { id:"sb-fs1535l", name:"Angle Flange Line SB-FS1535L", cat:"flange", tags:["angle","flange","line","production","auto"], desc:"Automatic angle steel flange production line." },
    { id:"sbem-1250", name:"Gorelocker SBEM-1250", cat:"elbow", tags:["elbow","gore","gorelocker","hydraulic","bend","fitting"], desc:"Hydraulic gorelocker for round duct elbows." },
    { id:"sbwt-1000", name:"Gorelocker SBWT-1000", cat:"elbow", tags:["elbow","gore","gorelocker","electric","bend","fitting"], desc:"Electric gorelocker for round duct elbows." },
    { id:"sbwt-1500", name:"Gorelocker SBWT-1500", cat:"elbow", tags:["elbow","gore","gorelocker","speed","bend","fitting"], desc:"Variable speed gorelocker for round duct elbows." },
    { id:"elbow-welder", name:"Elbow Welder", cat:"welding", tags:["elbow","welder","welding","seam","inner","outer"], desc:"Inner/outer seam welder for round duct elbows." },
    { id:"spiral-duct-flanging", name:"Spiral Duct Flanging Machine", cat:"forming", tags:["spiral","flanging","flange","round","duct"], desc:"Flanging machine for spiral round ducts." },
    { id:"sbsf-1525", name:"Hydraulic Flanging SBSF-1525", cat:"forming", tags:["hydraulic","flanging","round","tube"], desc:"Hydraulic flanging/beading machine for round tubes." },
    { id:"ovalizer-sbht-3100", name:"Ovalizer SBHT-3100", cat:"forming", tags:["oval","ovalizer","elliptical","duct","forming"], desc:"Oval duct forming machine for converting round to oval." },
    { id:"oval-roller", name:"Oval Roller SBOR-1.2x1500", cat:"forming", tags:["oval","roller","rolling","plate","bending"], desc:"Oval roller for plate bending operations." },
    { id:"fitting-shaper", name:"Fitting Shaper SBJQJ-500", cat:"forming", tags:["fitting","shaper","tee","reducer","transition","saddle"], desc:"Automatic fitting shaper for tees, reducers and transitions." },
    { id:"grooving-beading", name:"Grooving & Beading Machine", cat:"forming", tags:["grooving","beading","rib","stiffener","groove"], desc:"Grooving and beading machine for duct reinforcement." },
    { id:"sblq-15", name:"Beading Machine SBLQ-15", cat:"forming", tags:["beading","grooving","rib","hydraulic"], desc:"Hydraulic beading and grooving machine." },
    { id:"motor-rotary-machine", name:"Motor Rotary Machine", cat:"forming", tags:["rotary","motor","beading","swaging","wiring","crimping"], desc:"Motor-driven rotary machine for beading, swaging and wiring." },
    { id:"plasma-cutter", name:"Plasma Cutter", cat:"cutting", tags:["plasma","cutting","cnc","sheet","metal","cut"], desc:"CNC plasma cutting machine for sheet metal." },
    { id:"laser-cutting", name:"Laser Cutting Machine", cat:"cutting", tags:["laser","cutting","cnc","fiber","sheet","metal","precision"], desc:"Fiber laser cutting machine for high-precision sheet metal cutting." },
    { id:"sheet-metal-shearing", name:"Sheet Metal Shearing Machine", cat:"cutting", tags:["shearing","shear","cutting","sheet","metal","guillotine"], desc:"Electric sheet metal shearing/guillotine machine." },
    { id:"composite-board-cutting", name:"Composite Board Cutting", cat:"cutting", tags:["composite","board","cutting","panel","insulation"], desc:"Cutting machine for composite insulation boards." },
    { id:"slitting-machine", name:"Slitting Machine", cat:"cutting", tags:["slitting","slit","coil","strip","cutting"], desc:"Coil slitting machine for cutting sheet metal into strips." },
    { id:"sbkt-12", name:"Cleat Cutting Machine SBKT-12", cat:"cutting", tags:["cleat","cutting","strip","clip"], desc:"Cleat and strip cutting machine." },
    { id:"stitch-welder", name:"Stitch Welder", cat:"welding", tags:["stitch","welder","welding","seam","duct"], desc:"Stitch welding machine for duct seams." },
    { id:"seam-welder", name:"Seam Welder", cat:"welding", tags:["seam","welder","welding","continuous","resistance"], desc:"Continuous seam welding machine." },
    { id:"spot-welder", name:"Spot Welder", cat:"welding", tags:["spot","welder","welding","point","resistance"], desc:"Resistance spot welding machine." },
    { id:"sb-zf1500", name:"Automatic Stitchwelder SB-ZF1500", cat:"welding", tags:["automatic","stitch","welder","welding","straight","seam","longitudinal"], desc:"Automatic longitudinal seam stitch welding machine." },
    { id:"medium-frequency-welding", name:"Medium Frequency Welding", cat:"welding", tags:["medium","frequency","welding","inverter"], desc:"Medium frequency inverter welding machine." },
    { id:"handheld-laser-welding", name:"Handheld Laser Welding", cat:"welding", tags:["handheld","laser","welding","portable","fiber"], desc:"Handheld fiber laser welding machine." },
    { id:"roll-bending", name:"Roll Bending Machine", cat:"bending", tags:["roll","bending","rolling","plate","cylinder","round"], desc:"Electric roll bending machine for forming cylinders." },
    { id:"sbjy-1500b", name:"Hydraulic Rolling SBJY-1500B", cat:"bending", tags:["hydraulic","rolling","bending","plate","heavy"], desc:"Hydraulic plate rolling/bending machine." },
    { id:"hydraulic-folding", name:"Hydraulic Folding Machine", cat:"bending", tags:["hydraulic","folding","bending","sheet","metal","press brake"], desc:"Hydraulic folding/bending machine." },
    { id:"pneumatic-folding", name:"Pneumatic Folding Machine", cat:"bending", tags:["pneumatic","folding","bending","air"], desc:"Pneumatic folding machine." },
    { id:"metal-bending-tdf", name:"Metal Bending (TDF)", cat:"bending", tags:["bending","tdf","flange","hand","folder","folding"], desc:"Hand folding machine for TDF flange edges." },
    { id:"f1275-pro", name:"Seam Closing F1275-PRO", cat:"forming", tags:["seam","closing","round","duct","zipper","hand","portable"], desc:"Portable seam closing machine for round ducts." },
    { id:"f350", name:"Rivet Gun F350", cat:"forming", tags:["rivet","riveting","nail","clinch","joining","f350"], desc:"Nail-free clinch riveting tool." },
    { id:"sbhf-i", name:"Seam Closing SBHF-I", cat:"forming", tags:["seam","closing","square","rectangular","duct"], desc:"Seam closing machine for rectangular/square ducts." },
    { id:"duct-zipper-tdf", name:"Duct Zipper (TDF)", cat:"forming", tags:["duct","zipper","tdf","seam","closing","vertical"], desc:"Vertical TDF duct zipper/seam closing machine." },
    { id:"sbwkhfj-45", name:"Volute Seam Closer SBWKHFJ-45", cat:"forming", tags:["volute","snail","seam","closing","square","rectangular"], desc:"Vertical volute/snail seam closing machine." },
    { id:"hydraulic-riveting", name:"Hydraulic Riveting Machine", cat:"forming", tags:["hydraulic","riveting","rivet","joining"], desc:"Single-head hydraulic riveting machine." },
    { id:"pneumatic-corner-mounting", name:"Corner Mounting Machine", cat:"forming", tags:["corner","mounting","inserting","angle","bracket","pneumatic"], desc:"Pneumatic corner bracket mounting/inserting machine." },
    { id:"auto-corner-making", name:"Auto Corner Making Machine", cat:"forming", tags:["corner","making","bracket","angle","stamping","auto"], desc:"Automatic corner bracket stamping machine." },
    { id:"auto-hoop-machine", name:"Auto Hoop Machine", cat:"forming", tags:["hoop","clamp","band","ring","duct","support"], desc:"Automatic duct hoop/clamp forming machine." },
    { id:"run-out-table", name:"Run-out Table / Decoiler", cat:"auxiliary", tags:["run-out","table","decoiler","uncoiler","coil","support","stand"], desc:"Run-out table and decoiler for coil feeding." },
    { id:"automatic-drive-cleat", name:"Automatic Drive Cleat Machine", cat:"forming", tags:["drive","cleat","forming","auto","clip"], desc:"Automatic drive cleat forming machine." },
  ];

  const CATEGORIES = {
    "auto-line": "Auto Duct Production Lines",
    "spiral": "Spiral Duct / Round Duct Machines",
    "flexible": "Flexible Duct Machines",
    "flange": "Flange & Punching Machines",
    "elbow": "Elbow Making Machines (Gorelockers)",
    "forming": "Forming & Seam Closing Machines",
    "cutting": "Cutting Machines",
    "welding": "Welding Machines",
    "bending": "Bending, Rolling & Folding Machines",
    "auxiliary": "Auxiliary Equipment",
  };

  const INTENTS = [
    { keys:["rectangular","square","rect duct","方管","矩形"], response:"rectangular" },
    { keys:["round","circular","spiral","圆管","螺旋"], response:"round" },
    { keys:["oval","elliptical","椭圆"], response:"oval" },
    { keys:["flexible","flex duct","aluminum foil","软管","铝箔"], response:"flexible" },
    { keys:["elbow","gore","bend","弯头","虾米弯"], response:"elbow" },
    { keys:["welding","weld","welder","焊","焊机","焊接"], response:"welding" },
    { keys:["cutting","cut","shear","plasma","laser","切割","剪板","等离子","激光"], response:"cutting" },
    { keys:["flange","法兰","角钢","冲孔","角码"], response:"flange" },
    { keys:["folding","fold","bending","bend","rolling","roll","折弯","卷板","折边"], response:"bending" },
    { keys:["seam","closing","zipper","合缝","咬口","lock"], response:"seam-closing" },
    { keys:["production line","auto line","全自动","生产线","duct line"], response:"auto-line" },
    { keys:["insulation","保温","棉"], response:"insulation" },
    { keys:["stainless","不锈钢"], response:"stainless" },
    { keys:["beading","grooving","压筋","辘线"], response:"beading" },
    { keys:["corner","角码","装订"], response:"corner" },
    { keys:["rivet","铆"], response:"rivet" },
    { keys:["all","everything","catalog","所有","全部","目录"], response:"all" },
    { keys:["hello","hi","hey","你好","您好","help","帮"], response:"greeting" },
    { keys:["price","cost","quote","价格","多少钱","报价"], response:"price" },
    { keys:["contact","phone","email","whatsapp","联系","电话"], response:"contact" },
  ];

  const RESPONSES = {
    greeting: {
      text: "Hello! I'm the Taokron Product Assistant. I can help you find the right HVAC duct machinery. What type of duct or process are you interested in?",
      suggestions: ["Round / Spiral Duct","Rectangular Duct","Flexible Duct","Elbow Making","Welding","Cutting","Show All Categories"]
    },
    rectangular: {
      text: "For rectangular duct production, here are our key solutions:",
      products: ["sbal-v","sbal-iii","rectangular-duct-line-ii","lockformer","tdf-flange","sbhf-i","duct-zipper-tdf","sbwkhfj-45"],
      followUp: "Would you like to know more about any of these, or explore related equipment like flanging, corner mounting, or welding?"
    },
    round: {
      text: "For round/spiral duct production, we offer these machines:",
      products: ["sbtf-1602","sbtf-2020","sbtf-1500","sbtf-1500c","stainless-duct-forming","spiral-duct-flanging","sbsf-1525","f1275-pro"],
      followUp: "Interested in a specific diameter range or material type?"
    },
    oval: {
      text: "For oval duct forming:",
      products: ["ovalizer-sbht-3100","oval-roller"],
      followUp: "The Ovalizer converts round spiral ducts to oval shape. Would you also like to see spiral tubeformers?"
    },
    flexible: {
      text: "Our flexible duct machinery range:",
      products: ["sblr-600","sblr-600a","sblf-500","canvas-flexible-duct","flexible-duct-insulation","flexible-duct-shrinking","shrink-tube-machine","flexible-duct-connector"],
      followUp: "Are you looking for aluminum foil, semi-rigid, or canvas flexible ducts?"
    },
    elbow: {
      text: "Our elbow making machines (gorelockers):",
      products: ["sbem-1250","sbwt-1000","sbwt-1500","elbow-welder","fitting-shaper"],
      followUp: "The SBEM-1250 is our flagship hydraulic model. Need details on elbow diameter range?"
    },
    welding: {
      text: "Our welding machine lineup:",
      products: ["stitch-welder","seam-welder","spot-welder","sb-zf1500","medium-frequency-welding","handheld-laser-welding","elbow-welder"],
      followUp: "What type of welding do you need — seam, spot, stitch, or laser?"
    },
    cutting: {
      text: "Our cutting machines:",
      products: ["laser-cutting","plasma-cutter","sheet-metal-shearing","composite-board-cutting","slitting-machine","sbkt-12"],
      followUp: "Laser offers highest precision, plasma is cost-effective for thicker sheets. What's your material and thickness?"
    },
    flange: {
      text: "Our flange forming and punching equipment:",
      products: ["tdf-flange","transverse-duct-connector-flange","tdf-cleat-cutting","sbck-50a","sbyfl-50","sbyfl-50-1","sbyflhj-50","sb-fs1535l"],
      followUp: "Do you need TDF, TDC, or angle steel flange systems?"
    },
    bending: {
      text: "Our bending, rolling and folding machines:",
      products: ["roll-bending","sbjy-1500b","hydraulic-folding","pneumatic-folding","metal-bending-tdf"],
      followUp: "What thickness and width of sheet metal will you be working with?"
    },
    "seam-closing": {
      text: "Our seam closing and lockforming equipment:",
      products: ["lockformer","sbhf-i","duct-zipper-tdf","sbwkhfj-45","f1275-pro","f350"],
      followUp: "For rectangular ducts or round ducts?"
    },
    "auto-line": {
      text: "Our automatic duct production lines for high-volume manufacturing:",
      products: ["sbal-v","sbal-iii","rectangular-duct-line-ii"],
      followUp: "The SBAL-V is our most advanced 5-line system. What's your target production volume?"
    },
    insulation: {
      text: "Our insulation and packing equipment:",
      products: ["flexible-duct-insulation","flexible-duct-shrinking","shrink-tube-machine"],
      followUp: "These machines handle insulation wrapping and compression packing for flexible ducts."
    },
    stainless: {
      text: "For stainless steel duct production:",
      products: ["stainless-duct-forming","sbtf-1602","sbtf-1500"],
      followUp: "Our SBSS-800 is designed specifically for stainless steel. The spiral tubeformers also support stainless steel coils."
    },
    beading: {
      text: "Our beading and grooving machines:",
      products: ["grooving-beading","sblq-15","motor-rotary-machine"],
      followUp: "These add reinforcement ribs and stiffeners to duct surfaces."
    },
    corner: {
      text: "Our corner bracket equipment:",
      products: ["auto-corner-making","pneumatic-corner-mounting"],
      followUp: "The auto corner machine stamps brackets, and the mounting machine installs them."
    },
    rivet: {
      text: "Our riveting solutions:",
      products: ["f350","hydraulic-riveting"],
      followUp: "The F350 is a portable clinch riveter, great for on-site work."
    },
    all: {
      text: "We manufacture 60+ types of HVAC duct machinery. Here are our main categories:",
      categories: true,
      followUp: "Which category interests you?"
    },
    price: {
      text: "For pricing and quotations, please contact our sales team directly. We provide competitive pricing based on your specific requirements and configuration.",
      contact: true,
    },
    contact: {
      text: "You can reach us through:",
      contact: true,
    },
    fallback: {
      text: "I'm not sure I understand. Let me show you our main product categories so you can find what you need:",
      suggestions: ["Round / Spiral Duct","Rectangular Duct","Flexible Duct","Elbow Making","Welding","Cutting","Flange & Punching","Bending & Folding","Show All Categories"]
    }
  };

  function findIntent(input) {
    const lower = input.toLowerCase().trim();
    if (!lower) return "greeting";
    let best = null, bestScore = 0;
    for (const intent of INTENTS) {
      let score = 0;
      for (const key of intent.keys) {
        if (lower.includes(key.toLowerCase())) {
          score += key.length;
        }
      }
      if (score > bestScore) { bestScore = score; best = intent.response; }
    }
    if (!best) {
      for (const p of PRODUCTS) {
        const nameL = p.name.toLowerCase();
        if (lower.includes(nameL) || nameL.includes(lower)) return { direct: p };
        for (const tag of p.tags) {
          if (lower.includes(tag) && tag.length > 3) return { direct: p };
        }
      }
    }
    return best || "fallback";
  }

  function getProductById(id) { return PRODUCTS.find(p => p.id === id); }

  function isProductPage() {
    return window.location.pathname.includes("/product/");
  }
  function getBasePath() {
    return isProductPage() ? "../" : "";
  }

  function buildProductCard(p) {
    const base = getBasePath();
    return `<a href="${base}product/${p.id}.html" class="sb-chat-product" target="_blank">
      <img src="${base}assets/images/${p.id}.jpg" alt="${p.name}" onerror="this.src='${base}assets/images/placeholder.svg'" />
      <div><strong>${p.name}</strong><span>${p.desc}</span></div>
    </a>`;
  }

  function buildResponse(intentKey) {
    if (typeof intentKey === "object" && intentKey.direct) {
      const p = intentKey.direct;
      return `<p>Here's what I found:</p>${buildProductCard(p)}<p class="sb-chat-dim">Would you like to see similar machines or other categories?</p>`;
    }
    const r = RESPONSES[intentKey] || RESPONSES.fallback;
    let html = `<p>${r.text}</p>`;
    if (r.products) {
      html += '<div class="sb-chat-products">';
      for (const pid of r.products) {
        const p = getProductById(pid);
        if (p) html += buildProductCard(p);
      }
      html += "</div>";
    }
    if (r.categories) {
      html += '<div class="sb-chat-categories">';
      for (const [key, label] of Object.entries(CATEGORIES)) {
        html += `<button class="sb-chat-cat-btn" data-query="${label}">${label}</button>`;
      }
      html += "</div>";
    }
    if (r.contact) {
      const base = getBasePath();
      html += `<div class="sb-chat-contact">
        <a href="https://wa.me/61435074994" target="_blank" rel="noopener">WhatsApp: +61 435 074 994</a>
        <a href="mailto:sales@sbkjduct.com">Email: sales@sbkjduct.com</a>
        <a href="${base}contact.html">Visit Contact Page</a>
      </div>`;
    }
    if (r.followUp) html += `<p class="sb-chat-dim">${r.followUp}</p>`;
    return html;
  }

  function createWidget() {
    const container = document.createElement("div");
    container.id = "sbChatWidget";
    container.innerHTML = `
      <button class="sb-chat-fab" id="sbChatFab" aria-label="AI Assistant">
        <svg class="sb-chat-fab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2a7 7 0 0 1 7 7v1a7 7 0 0 1-14 0V9a7 7 0 0 1 7-7z"/>
          <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
          <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
          <path d="M9 14c.6 1.2 1.5 1.5 3 1.5s2.4-.3 3-1.5"/>
          <path d="M7.5 19.8A9.96 9.96 0 0 0 12 21a9.96 9.96 0 0 0 4.5-1.2"/>
          <path d="M9 22v-2"/>
          <path d="M15 22v-2"/>
        </svg>
        <svg class="sb-chat-fab-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
        <span class="sb-chat-fab-pulse"></span>
      </button>
      <div class="sb-chat-window" id="sbChatWindow" role="dialog" aria-label="Taokron product assistant chat">
        <div class="sb-chat-header">
          <div class="sb-chat-header-info">
            <div class="sb-chat-avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2a7 7 0 0 1 7 7v1a7 7 0 0 1-14 0V9a7 7 0 0 1 7-7z"/>
                <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
                <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
                <path d="M9 14c.6 1.2 1.5 1.5 3 1.5s2.4-.3 3-1.5"/>
              </svg>
            </div>
            <div>
              <strong>Taokron Assistant</strong>
              <span>AI Product Advisor</span>
            </div>
          </div>
          <button class="sb-chat-minimize" id="sbChatMin" aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="sb-chat-body" id="sbChatBody"></div>
        <div class="sb-chat-suggestions" id="sbChatSuggestions"></div>
        <div class="sb-chat-input-wrap">
          <input type="text" id="sbChatInput" aria-label="Ask the Taokron product assistant" placeholder="Ask about machines, ducts, welding..." autocomplete="off" />
          <button id="sbChatSend" aria-label="Send">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9z"/></svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(container);

    const fab = document.getElementById("sbChatFab");
    const win = document.getElementById("sbChatWindow");
    const min = document.getElementById("sbChatMin");
    const body = document.getElementById("sbChatBody");
    const input = document.getElementById("sbChatInput");
    const sendBtn = document.getElementById("sbChatSend");
    const sugWrap = document.getElementById("sbChatSuggestions");
    let isOpen = false;

    function toggle() {
      isOpen = !isOpen;
      container.classList.toggle("sb-chat-open", isOpen);
      if (isOpen && body.children.length === 0) showGreeting();
      if (isOpen) setTimeout(() => input.focus(), 350);
    }

    function showGreeting() {
      addBotMessage(buildResponse("greeting"));
      showSuggestions(RESPONSES.greeting.suggestions);
    }

    function addBotMessage(html) {
      const msg = document.createElement("div");
      msg.className = "sb-chat-msg sb-chat-bot";
      msg.innerHTML = `<div class="sb-chat-bubble">${html}</div>`;
      body.appendChild(msg);
      requestAnimationFrame(() => {
        msg.classList.add("sb-chat-msg-in");
        body.scrollTop = body.scrollHeight;
      });
      bindCategoryButtons(msg);
    }

    function addUserMessage(text) {
      const msg = document.createElement("div");
      msg.className = "sb-chat-msg sb-chat-user";
      msg.innerHTML = `<div class="sb-chat-bubble">${escapeHtml(text)}</div>`;
      body.appendChild(msg);
      requestAnimationFrame(() => {
        msg.classList.add("sb-chat-msg-in");
        body.scrollTop = body.scrollHeight;
      });
    }

    function showSuggestions(items) {
      if (!items || !items.length) { sugWrap.innerHTML = ""; return; }
      sugWrap.innerHTML = items.map(s => `<button class="sb-chat-sug">${s}</button>`).join("");
      sugWrap.querySelectorAll(".sb-chat-sug").forEach(btn => {
        btn.addEventListener("click", () => handleInput(btn.textContent));
      });
    }

    function bindCategoryButtons(container) {
      container.querySelectorAll(".sb-chat-cat-btn").forEach(btn => {
        btn.addEventListener("click", () => handleInput(btn.dataset.query));
      });
    }

    function handleInput(text) {
      if (!text.trim()) return;
      addUserMessage(text);
      sugWrap.innerHTML = "";
      setTimeout(() => {
        const intent = findIntent(text);
        const html = buildResponse(intent);
        addBotMessage(html);
        const r = (typeof intent === "string") ? RESPONSES[intent] : null;
        if (r && r.suggestions) showSuggestions(r.suggestions);
        else if (!r || (!r.products && !r.categories && !r.contact)) {
          showSuggestions(RESPONSES.fallback.suggestions);
        }
      }, 400);
    }

    function escapeHtml(str) {
      const d = document.createElement("div");
      d.textContent = str;
      return d.innerHTML;
    }

    fab.addEventListener("click", toggle);
    min.addEventListener("click", toggle);
    sendBtn.addEventListener("click", () => { handleInput(input.value); input.value = ""; });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") { handleInput(input.value); input.value = ""; }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createWidget);
  } else {
    createWidget();
  }
})();
