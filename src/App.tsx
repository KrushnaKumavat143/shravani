export default function App() {
  return <div dangerouslySetInnerHTML={{ __html: PAGE_HTML }} />;
}

const PAGE_HTML = `

<!-- ══════════ FLOATING EMOJIS ══════════ -->
<div class="floats" aria-hidden="true">
  <span style="left:2%;font-size:20px;animation-duration:11s;animation-delay:0s">🦚</span>
  <span style="left:9%;font-size:18px;animation-duration:13s;animation-delay:2s">🪷</span>
  <span style="left:16%;font-size:16px;animation-duration:10s;animation-delay:5s">✨</span>
  <span style="left:23%;font-size:22px;animation-duration:14s;animation-delay:1s">🪈</span>
  <span style="left:30%;font-size:17px;animation-duration:12s;animation-delay:4s">🌸</span>
  <span style="left:37%;font-size:20px;animation-duration:9s;animation-delay:7s">🦚</span>
  <span style="left:44%;font-size:15px;animation-duration:15s;animation-delay:3s">💛</span>
  <span style="left:51%;font-size:22px;animation-duration:11s;animation-delay:6s">🪷</span>
  <span style="left:58%;font-size:18px;animation-duration:13s;animation-delay:0.5s">🌺</span>
  <span style="left:65%;font-size:16px;animation-duration:10s;animation-delay:8s">✨</span>
  <span style="left:72%;font-size:24px;animation-duration:14s;animation-delay:2.5s">🪈</span>
  <span style="left:79%;font-size:17px;animation-duration:12s;animation-delay:5.5s">🌼</span>
  <span style="left:86%;font-size:20px;animation-duration:9s;animation-delay:9s">🦚</span>
  <span style="left:93%;font-size:18px;animation-duration:15s;animation-delay:1.5s">🪷</span>
  <span style="left:6%;font-size:14px;animation-duration:11s;animation-delay:10s">💫</span>
  <span style="left:50%;font-size:16px;animation-duration:13s;animation-delay:7.5s">🌸</span>
</div>

<!-- ══════════ SIDE NAV ══════════ -->
<nav class="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
  <a href="#top"     class="nav-link flex items-center gap-2 justify-end"><span class="nav-label text-xs text-amber-300 f-dancing">Home</span><span class="nav-dot"></span></a>
  <a href="#letter"  class="nav-link flex items-center gap-2 justify-end"><span class="nav-label text-xs text-amber-300 f-dancing">Letter</span><span class="nav-dot"></span></a>
  <a href="#poem"    class="nav-link flex items-center gap-2 justify-end"><span class="nav-label text-xs text-amber-300 f-dancing">Kavita</span><span class="nav-dot"></span></a>
  <a href="#reasons" class="nav-link flex items-center gap-2 justify-end"><span class="nav-label text-xs text-amber-300 f-dancing">Reasons</span><span class="nav-dot"></span></a>
  <a href="#promise" class="nav-link flex items-center gap-2 justify-end"><span class="nav-label text-xs text-amber-300 f-dancing">Promise</span><span class="nav-dot"></span></a>
</nav>


<!-- ═══════════════════════════════════════════════
     SECTION 1 — HERO
     ═══════════════════════════════════════════════ -->
<section id="top" class="relative min-h-screen flex items-center justify-center overflow-hidden">

  <!-- BG -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image:url(/images/hero-bg.jpg);animation:slowZoom 30s ease-in-out infinite alternate"></div>
  </div>
  <div class="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/75"></div>

  <!-- Sparkles -->
  <div class="sdot" style="left:8%;top:15%;animation:sparkle 3s ease-in-out 0s infinite"></div>
  <div class="sdot" style="left:20%;top:40%;animation:sparkle 2.5s ease-in-out 1s infinite"></div>
  <div class="sdot" style="left:35%;top:20%;animation:sparkle 3.2s ease-in-out .5s infinite"></div>
  <div class="sdot" style="left:55%;top:70%;animation:sparkle 2.8s ease-in-out 2s infinite"></div>
  <div class="sdot" style="left:70%;top:25%;animation:sparkle 3.5s ease-in-out .8s infinite"></div>
  <div class="sdot" style="left:85%;top:55%;animation:sparkle 2.6s ease-in-out 1.5s infinite"></div>
  <div class="sdot" style="left:45%;top:85%;animation:sparkle 3s ease-in-out 2.5s infinite"></div>
  <div class="sdot" style="left:92%;top:35%;animation:sparkle 2.9s ease-in-out 3s infinite"></div>

  <!-- Content -->
  <div class="relative z-10 text-center px-6 max-w-4xl mx-auto a-reveal">

    <!-- Flute icon -->
    <div class="a-sway mb-8">
      <span class="text-5xl md:text-7xl inline-block">🪈</span>
    </div>

    <!-- Small tagline -->
    <p class="f-dancing text-xl md:text-3xl text-amber-300/90 mb-4 tracking-wide">
      राधा कृष्णाच्या प्रेमासारखं...
    </p>

    <!-- Name -->
    <h1 class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 a-glow">
      <span class="shimmer-gold">श्रावणी</span>
    </h1>

    <!-- Sub -->
    <p class="f-cursive text-2xl md:text-4xl text-amber-200/90 mb-10">
      You are my Radha
    </p>

    <!-- Divider -->
    <div class="flex items-center justify-center gap-5 mb-10">
      <div class="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-amber-400/70"></div>
      <span class="text-amber-400 text-3xl a-spin inline-block">🪷</span>
      <div class="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-amber-400/70"></div>
    </div>

    <!-- Marathi tagline -->
    <p class="f-marathi readable text-amber-100/85 mb-12 max-w-2xl mx-auto">
      जसं कृष्णाला राधेशिवाय चैन नाही, तसं मला तुझ्याशिवाय जगणं नाही... 🦚
    </p>

    <!-- Scroll -->
    <a href="#letter" class="inline-block a-bounce mt-2">
      <span class="text-sm f-dancing tracking-widest text-amber-300/60 block mb-2">खाली पहा</span>
      <svg class="w-6 h-6 mx-auto text-amber-300/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </a>
  </div>
</section>


<!-- ═══ DIVIDER ═══ -->
<div class="section-divider" style="background:linear-gradient(to bottom,rgba(0,0,0,.7),#0d1f33)">
  <span class="line"></span>
  <span class="text-amber-400/40 mx-4 text-xl a-heartbeat">🪷</span>
  <span class="line"></span>
</div>


<!-- ═══════════════════════════════════════════════
     SECTION 2 — LOVE LETTER
     ═══════════════════════════════════════════════ -->
<section id="letter" class="relative py-24 md:py-36 overflow-hidden">

  <div class="absolute inset-0 bg-gradient-to-b from-[#0d1f33] via-[#0f1a2e] to-[#0f1a2e]"></div>
  <div class="absolute inset-0 opacity-8 bg-cover bg-center" style="background-image:url(/images/letter-bg.jpg)"></div>

  <div class="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">

    <!-- Title -->
    <div class="text-center mb-16 md:mb-20 a-reveal">
      <span class="text-5xl md:text-6xl">💌</span>
      <h2 class="f-cursive text-4xl md:text-6xl text-amber-300 mt-6 mb-3">
        A Letter For You
      </h2>
      <p class="f-marathi text-xl md:text-2xl text-amber-200/60 mt-2">
        माझ्या राधेसाठी कृष्णाचं पत्र...
      </p>
    </div>

    <!-- Letter Card -->
    <div class="letter-paper rounded-3xl p-8 sm:p-10 md:p-14 mx-auto max-w-3xl a-reveal d2">

      <!-- Peacock stamp -->
      <div class="absolute top-5 right-5 md:top-8 md:right-8 w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 border-amber-400/25 flex items-center justify-center bg-amber-50/40 rotate-6">
        <span class="text-3xl md:text-4xl">🦚</span>
      </div>

      <!-- Letter body -->
      <div class="f-marathi text-gray-800 relative z-10">

        <p class="f-dancing text-2xl md:text-3xl text-amber-700 mb-8">
          प्रिय श्रावणी (माझी राधा),
        </p>

        <p class="readable text-gray-700 mb-8" style="text-indent:2em">
          तू माझ्या आयुष्यात आलीस आणि सगळं काही बदललं.
          जसं कृष्णाच्या बासरीच्या सुरांनी वृंदावन फुलून जातं,
          तसं तुझ्या हसण्यानं माझं जग उजळून निघतं.
          तुझ्या डोळ्यांत मला माझं संपूर्ण विश्व दिसतं —
          जसं यमुनेच्या पाण्यात चंद्राचं प्रतिबिंब. 🌙
        </p>

        <p class="readable text-gray-700 mb-8" style="text-indent:2em">
          कधी कधी मला शब्दच सापडत नाहीत
          तुझ्याबद्दलचं प्रेम व्यक्त करायला.
          तुझ्या सोबत घालवलेला प्रत्येक क्षण म्हणजे
          माझ्यासाठी एक अनमोल ठेवा आहे.
          तुझ्या हातांचा स्पर्श, तुझ्या आवाजातला गोडवा,
          तुझ्या मिठीतलं सुख — हे सगळं माझ्यासाठी
          वैकुंठापेक्षा सुंदर आहे. 🪷
        </p>

        <p class="readable text-gray-700 mb-8" style="text-indent:2em">
          तू माझ्या प्रत्येक सुखात, दुःखात, प्रत्येक क्षणात
          माझी साथ दिलीस. तुझ्याशिवाय माझं आयुष्य
          अपूर्ण आहे — जसं राधेशिवाय कृष्ण अपूर्ण.
          तू माझ्या हृदयाची धडकन आहेस.
          जन्मोजन्मी तूच माझी सोबत हवी,
          तूच माझं प्रेम हवं. 🦚
        </p>

        <p class="readable text-gray-700 mb-10" style="text-indent:2em">
          तुला एक वचन देतो — तुझ्या प्रत्येक स्वप्नाला पंख देईन,
          तुझ्या प्रत्येक अश्रूला माझ्या प्रेमानं पुसेन,
          तुझ्या प्रत्येक हास्यात सहभागी होईन.
          तू माझं सौभाग्य आहेस, माझी राधा आहेस,
          आणि मी तुझा कृष्ण कायम राहीन. 🪈💕
        </p>

        <div class="pt-6 text-right border-t border-amber-300/20">
          <p class="f-dancing text-xl md:text-2xl text-amber-700 mt-4">
            कायम तुझा,
          </p>
          <p class="f-dancing text-2xl md:text-3xl text-amber-800 mt-2">
            तुझा कृष्ण 🪈❤️
          </p>
        </div>
      </div>

      <!-- Corner decoration -->
      <div class="absolute -bottom-4 -left-4 text-3xl md:text-4xl opacity-50 rotate-12">🪷</div>
      <div class="absolute -bottom-3 -right-3 text-2xl md:text-3xl opacity-40 -rotate-12">🦚</div>
    </div>
  </div>
</section>


<!-- ═══ DIVIDER ═══ -->
<div class="section-divider" style="background:linear-gradient(to bottom,#0f1a2e,#0e1525)">
  <span class="line"></span>
  <span class="text-amber-400/40 mx-4 text-xl a-heartbeat">🪈</span>
  <span class="line"></span>
</div>


<!-- ═══════════════════════════════════════════════
     SECTION 3 — POEM (KAVITA)
     ═══════════════════════════════════════════════ -->
<section id="poem" class="relative py-24 md:py-36 overflow-hidden">

  <div class="absolute inset-0 bg-gradient-to-b from-[#0e1525] via-[#0c1220] to-[#0a0f1c]"></div>
  <div class="absolute inset-0 opacity-10 bg-cover bg-center" style="background-image:url(/images/poem-bg.jpg)"></div>

  <div class="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">

    <!-- Title -->
    <div class="text-center mb-16 md:mb-24 a-reveal">
      <span class="text-5xl md:text-6xl">📝</span>
      <h2 class="f-cursive text-4xl md:text-6xl text-amber-300 mt-6 mb-3">
        Kavita For My Radha
      </h2>
      <p class="f-marathi text-xl md:text-2xl text-amber-200/60 mt-2">
        तुझ्यासाठी एक कविता... 🌺
      </p>
    </div>

    <!-- Stanzas -->
    <div class="space-y-4 md:space-y-6">

      <!-- 1 -->
      <div class="glass poem-card rounded-2xl p-7 md:p-10 a-reveal d1">
        <div class="f-marathi text-center space-y-3 md:space-y-4">
          <p class="readable text-amber-100/90">कृष्णाच्या बासरीत तुझं नाव आहे,</p>
          <p class="readable text-amber-100/90">राधेच्या प्रेमात तुझं गाव आहे,</p>
          <p class="readable text-amber-100/90">श्रावणी तू माझ्या हृदयात अशी,</p>
          <p class="readable text-amber-100/90">जणू यमुनेच्या काठी चांदणं नाव आहे. 🪈</p>
        </div>
      </div>
      <div class="stanza-sep"><span class="text-amber-400/50 text-sm">✦</span></div>

      <!-- 2 -->
      <div class="glass poem-card rounded-2xl p-7 md:p-10 a-reveal d2">
        <div class="f-marathi text-center space-y-3 md:space-y-4">
          <p class="readable text-amber-100/90">तुझ्या डोळ्यांत चांदण्या बसल्या,</p>
          <p class="readable text-amber-100/90">तुझ्या हसण्यात फुलं उमलल्या,</p>
          <p class="readable text-amber-100/90">तू माझ्या मनात वसलीस अशी,</p>
          <p class="readable text-amber-100/90">जणू श्वासांत श्वास मिसळल्या. 🌸</p>
        </div>
      </div>
      <div class="stanza-sep"><span class="text-amber-400/50 text-sm">✦</span></div>

      <!-- 3 -->
      <div class="glass poem-card rounded-2xl p-7 md:p-10 a-reveal d3">
        <div class="f-marathi text-center space-y-3 md:space-y-4">
          <p class="readable text-amber-100/90">श्रावणी तू माझा श्रावण,</p>
          <p class="readable text-amber-100/90">तू माझ्या जीवनाचं पावन,</p>
          <p class="readable text-amber-100/90">मोरपिसासारखं तुझं रूप,</p>
          <p class="readable text-amber-100/90">तुझ्या प्रेमात भिजलंय मन. 🦚</p>
        </div>
      </div>
      <div class="stanza-sep"><span class="text-amber-400/50 text-sm">✦</span></div>

      <!-- 4 -->
      <div class="glass poem-card rounded-2xl p-7 md:p-10 a-reveal d4">
        <div class="f-marathi text-center space-y-3 md:space-y-4">
          <p class="readable text-amber-100/90">तुझ्या नावात श्रावण दडलाय,</p>
          <p class="readable text-amber-100/90">पावसाचा गोडवा सजलाय,</p>
          <p class="readable text-amber-100/90">कृष्णाच्या मुरलीसारखा,</p>
          <p class="readable text-amber-100/90">तुझ्या प्रेमात जीव न्हालाय. 🪷</p>
        </div>
      </div>
      <div class="stanza-sep"><span class="text-amber-400/50 text-sm">✦</span></div>

      <!-- 5 -->
      <div class="glass poem-card rounded-2xl p-7 md:p-10 a-reveal d5">
        <div class="f-marathi text-center space-y-3 md:space-y-4">
          <p class="readable text-amber-100/90">चंद्र जसा रात्रीला शोभतो,</p>
          <p class="readable text-amber-100/90">तसं तू माझ्या जगण्याला,</p>
          <p class="readable text-amber-100/90">राधा जशी कृष्णाला ओळखते,</p>
          <p class="readable text-amber-100/90">तशी तू ओळखतेस माझ्या मनाला. ⭐</p>
        </div>
      </div>
      <div class="stanza-sep"><span class="text-amber-400/50 text-sm">✦</span></div>

      <!-- 6 -->
      <div class="glass poem-card rounded-2xl p-7 md:p-10 a-reveal d6">
        <div class="f-marathi text-center space-y-3 md:space-y-4">
          <p class="readable text-amber-100/90">जन्मोजन्मी तूच हवीस मला,</p>
          <p class="readable text-amber-100/90">तुझ्याच हाताचा हात हवा,</p>
          <p class="readable text-amber-100/90">राधा-कृष्णाच्या प्रेमासारखं,</p>
          <p class="readable text-amber-100/90">अमर असं नातं आपलं हवं. 💛</p>
        </div>
      </div>

    </div>

    <!-- Bottom -->
    <div class="text-center mt-16 md:mt-20 a-reveal d7">
      <div class="flex items-center justify-center gap-4">
        <span class="text-2xl">🪷</span>
        <span class="f-cursive text-xl md:text-3xl text-amber-300/70">~ राधे राधे ~</span>
        <span class="text-2xl">🪷</span>
      </div>
    </div>
  </div>
</section>


<!-- ═══ DIVIDER ═══ -->
<div class="section-divider" style="background:linear-gradient(to bottom,#0a0f1c,#0c0a18)">
  <span class="line"></span>
  <span class="text-amber-400/40 mx-4 text-xl a-heartbeat">🦚</span>
  <span class="line"></span>
</div>


<!-- ═══════════════════════════════════════════════
     SECTION 4 — REASONS I LOVE YOU
     ═══════════════════════════════════════════════ -->
<section id="reasons" class="relative py-24 md:py-36 overflow-hidden">

  <div class="absolute inset-0 bg-gradient-to-b from-[#0c0a18] via-[#100e20] to-[#140a18]"></div>

  <div class="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

    <!-- Title -->
    <div class="text-center mb-16 md:mb-20 a-reveal">
      <span class="text-5xl md:text-6xl">🦚</span>
      <h2 class="f-cursive text-4xl md:text-6xl text-amber-300 mt-6 mb-3">
        Reasons I Love You
      </h2>
      <p class="f-marathi text-xl md:text-2xl text-amber-200/60 mt-2">
        कृष्णाला राधा का आवडते?... 💛
      </p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">

      <div class="glass reason-card a-glow-box rounded-2xl p-6 md:p-7 cursor-default a-reveal d1">
        <div class="flex items-start gap-5">
          <span class="r-emoji text-3xl md:text-4xl flex-shrink-0">😊</span>
          <p class="f-marathi readable text-amber-100/85">तुझं हसणं पाहिलं की सगळी दुःखं विसरतो</p>
        </div>
      </div>

      <div class="glass reason-card a-glow-box rounded-2xl p-6 md:p-7 cursor-default a-reveal d2">
        <div class="flex items-start gap-5">
          <span class="r-emoji text-3xl md:text-4xl flex-shrink-0">💪</span>
          <p class="f-marathi readable text-amber-100/85">तू माझी सर्वात मोठी ताकद आहेस</p>
        </div>
      </div>

      <div class="glass reason-card a-glow-box rounded-2xl p-6 md:p-7 cursor-default a-reveal d3">
        <div class="flex items-start gap-5">
          <span class="r-emoji text-3xl md:text-4xl flex-shrink-0">🏠</span>
          <p class="f-marathi readable text-amber-100/85">तुझ्यासोबत कुठेही 'वृंदावन' वाटतं</p>
        </div>
      </div>

      <div class="glass reason-card a-glow-box rounded-2xl p-6 md:p-7 cursor-default a-reveal d4">
        <div class="flex items-start gap-5">
          <span class="r-emoji text-3xl md:text-4xl flex-shrink-0">🪈</span>
          <p class="f-marathi readable text-amber-100/85">तू माझ्या आयुष्याची बासरी आहेस</p>
        </div>
      </div>

      <div class="glass reason-card a-glow-box rounded-2xl p-6 md:p-7 cursor-default a-reveal d5">
        <div class="flex items-start gap-5">
          <span class="r-emoji text-3xl md:text-4xl flex-shrink-0">🦚</span>
          <p class="f-marathi readable text-amber-100/85">तुझ्या सौंदर्यापुढे मोरपीस पण फिकं</p>
        </div>
      </div>

      <div class="glass reason-card a-glow-box rounded-2xl p-6 md:p-7 cursor-default a-reveal d6">
        <div class="flex items-start gap-5">
          <span class="r-emoji text-3xl md:text-4xl flex-shrink-0">🤗</span>
          <p class="f-marathi readable text-amber-100/85">तुझी मिठी म्हणजे माझं वृंदावन</p>
        </div>
      </div>

      <div class="glass reason-card a-glow-box rounded-2xl p-6 md:p-7 cursor-default a-reveal d7">
        <div class="flex items-start gap-5">
          <span class="r-emoji text-3xl md:text-4xl flex-shrink-0">👀</span>
          <p class="f-marathi readable text-amber-100/85">तुझ्या डोळ्यांत माझं पूर्ण जग दिसतं</p>
        </div>
      </div>

      <div class="glass reason-card a-glow-box rounded-2xl p-6 md:p-7 cursor-default a-reveal d8">
        <div class="flex items-start gap-5">
          <span class="r-emoji text-3xl md:text-4xl flex-shrink-0">🪷</span>
          <p class="f-marathi readable text-amber-100/85">तू कमळासारखी सुंदर आणि पवित्र आहेस</p>
        </div>
      </div>

      <div class="glass reason-card a-glow-box rounded-2xl p-6 md:p-7 cursor-default a-reveal d9">
        <div class="flex items-start gap-5">
          <span class="r-emoji text-3xl md:text-4xl flex-shrink-0">🌙</span>
          <p class="f-marathi readable text-amber-100/85">तुझ्यासोबतची रात्र चांदण्यांसारखी</p>
        </div>
      </div>

      <div class="glass reason-card a-glow-box rounded-2xl p-6 md:p-7 cursor-default a-reveal d10">
        <div class="flex items-start gap-5">
          <span class="r-emoji text-3xl md:text-4xl flex-shrink-0">🙏</span>
          <p class="f-marathi readable text-amber-100/85">तू मिळालीस हे माझं सौभाग्य आहे</p>
        </div>
      </div>

      <div class="glass reason-card a-glow-box rounded-2xl p-6 md:p-7 cursor-default a-reveal d11">
        <div class="flex items-start gap-5">
          <span class="r-emoji text-3xl md:text-4xl flex-shrink-0">🌸</span>
          <p class="f-marathi readable text-amber-100/85">तू माझ्या मनात कायम फुलासारखी फुलतेस</p>
        </div>
      </div>

      <div class="glass reason-card a-glow-box rounded-2xl p-6 md:p-7 cursor-default a-reveal d12">
        <div class="flex items-start gap-5">
          <span class="r-emoji text-3xl md:text-4xl flex-shrink-0">💍</span>
          <p class="f-marathi readable text-amber-100/85">पुन्हा जन्म मिळाला तरी तूच हवीस</p>
        </div>
      </div>

    </div>
  </div>
</section>


<!-- ═══ DIVIDER ═══ -->
<div class="section-divider" style="background:linear-gradient(to bottom,#140a18,#12081a)">
  <span class="line"></span>
  <span class="text-amber-400/40 mx-4 text-xl a-heartbeat">🪷</span>
  <span class="line"></span>
</div>


<!-- ═══════════════════════════════════════════════
     SECTION 5 — PROMISE
     ═══════════════════════════════════════════════ -->
<section id="promise" class="relative py-24 md:py-36 overflow-hidden">

  <div class="absolute inset-0 bg-gradient-to-b from-[#12081a] via-[#10071a] to-black"></div>
  <div class="absolute inset-0 opacity-15 bg-cover bg-center" style="background-image:url(/images/roses.jpg)"></div>
  <div class="absolute inset-0 bg-black/35"></div>

  <div class="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center a-reveal">

    <div class="mb-10">
      <span class="text-6xl md:text-8xl a-heartbeat inline-block">🪈</span>
    </div>

    <h2 class="f-cursive text-4xl md:text-6xl text-amber-300 mb-4">
      My Promise To You
    </h2>
    <p class="f-marathi text-xl md:text-2xl text-amber-200/50 mb-10">
      कृष्णाचं राधेला वचन... 💛
    </p>

    <div class="glass a-glow-box rounded-3xl p-10 md:p-14 max-w-3xl mx-auto">
      <div class="f-marathi readable text-amber-100/85 space-y-8">

        <p><span class="text-amber-400 text-3xl md:text-4xl">❝</span></p>

        <p>
          श्रावणी, तुला माझं वचन आहे —
        </p>

        <p>
          सुखात-दुःखात, आनंदात-संकटात,
          <br class="hidden sm:block"/>
          मी तुझ्या सोबत कायम राहीन.
        </p>

        <p>
          जसं कृष्ण राधेच्या पाठीशी उभा राहतो,
          <br class="hidden sm:block"/>
          तसा मी तुझ्या पाठीशी कायम असेन.
        </p>

        <p>
          तुझं प्रत्येक स्वप्न माझं स्वप्न असेल,
          <br class="hidden sm:block"/>
          तुझा प्रत्येक विजय माझा उत्सव असेल.
        </p>

        <p>
          तुझ्या अश्रूंना माझ्या प्रेमानं पुसेन,
          <br class="hidden sm:block"/>
          तुझ्या हास्यात माझं सर्वस्व शोधेन.
        </p>

        <p>
          हा जन्म आणि पुढचा प्रत्येक जन्म —
          <br class="hidden sm:block"/>
          राधा-कृष्णासारखं अतूट, अमर, शाश्वत.
          <br class="hidden sm:block"/>
          फक्त तुझाच राहीन, कायम तुझाच. 🦚💛
        </p>

        <p><span class="text-amber-400 text-3xl md:text-4xl">❞</span></p>
      </div>
    </div>
  </div>
</section>


<!-- ═══════════════════════════════════════════════
     FOOTER
     ═══════════════════════════════════════════════ -->
<footer class="relative py-20 md:py-28 overflow-hidden bg-black">

  <div class="absolute inset-0 bg-gradient-to-t from-amber-950/15 to-transparent"></div>

  <div class="relative z-10 max-w-4xl mx-auto px-5 text-center">

    <div class="flex items-center justify-center gap-3 mb-8">
      <span class="text-3xl md:text-4xl a-heartbeat" style="animation-delay:0s">🪷</span>
      <span class="text-3xl md:text-4xl a-heartbeat" style="animation-delay:.3s">🦚</span>
      <span class="text-3xl md:text-4xl a-heartbeat" style="animation-delay:.6s">🪈</span>
    </div>

    <h3 class="f-cursive text-4xl md:text-6xl text-amber-300 mb-5">
      Forever &amp; Always
    </h3>

    <p class="f-marathi text-xl md:text-3xl text-amber-200/70 mb-4 leading-relaxed">
      राधा-कृष्णासारखं... तू आणि मी — कायमचं 💛
    </p>

    <!-- Divider -->
    <div class="flex items-center justify-center gap-5 my-10">
      <div class="h-px w-24 bg-gradient-to-r from-transparent to-amber-400/40"></div>
      <span class="text-amber-400/50">✦</span>
      <div class="h-px w-24 bg-gradient-to-l from-transparent to-amber-400/40"></div>
    </div>

    <p class="f-marathi text-lg md:text-xl text-amber-300/40 leading-relaxed">
      श्रावणी, तुझ्यासाठी हे माझं छोटंसं प्रेम... 🪷
    </p>

    <p class="text-sm text-amber-400/25 mt-10 f-dancing tracking-wide">
      Made with 💛 for Shravani ~ Radhe Radhe 🙏
    </p>
  </div>
</footer>

<!-- Flute decoration fixed -->
<div class="fixed bottom-6 left-6 z-40">
  <div class="glass rounded-full p-3.5 cursor-pointer hover:scale-110" style="transition:all .3s">
    <span class="text-xl">🪈</span>
  </div>
</div>

`;
