const { useState } = React;

const X = ({ size = 24, strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Messenger = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.13.26.35.27.57l.05 1.78c.04.57.61.94 1.13.71l1.98-.87c.17-.08.36-.1.55-.06.91.25 1.87.38 2.88.38 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2zm5.89 7.58l-2.89 4.58c-.45.73-1.44.91-2.13.39l-2.3-1.72a.6.6 0 0 0-.72 0l-3.1 2.36c-.41.32-.96-.17-.68-.61l2.89-4.58c.45-.73 1.44-.91 2.13-.39l2.3 1.72a.6.6 0 0 0 .72 0l3.1-2.36c.41-.32.96.17.68.61z"/>
  </svg>
);

const Copy = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

function HCMAleTrailApp() {
  const [collectedStamps, setCollectedStamps] = useState([]);
  const [selectedBrewery, setSelectedBrewery] = useState(null);
  const [language, setLanguage] = useState('en');
  const [secretCode, setSecretCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);
  const [showQRInstructions, setShowQRInstructions] = useState(false);
  const [copied, setCopied] = useState(false);

  const links = {
    website: 'https://www.hochiminhaletrail.com/',
    googleMaps: 'https://www.google.com/maps/d/u/1/viewer?usp=sharing&mid=1ZO-30TD2syibuwwqGF7wDxwHACOEsBQ',
    instagram: 'https://www.instagram.com/hcm.aletrail/',
    messenger: 'https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F115480196509607%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0'
  };

  const breweryCodes = {
    1: 'BIACRAFT2024', 2: 'DARKNESS2024', 3: 'DEME2024', 4: 'STEERSMAN2024',
    5: 'EASTWEST2024', 6: 'ROOSTER2024', 7: 'BRIDGES2024', 8: 'BELGO2024'
  };

  const translations = {
    en: {
      stamps: "STAMPS", validated: "DONE!", validate: "GO!",
      enterCode: "CODE", shareTag: "SHARE", website: "WEBSITE",
      googleMaps: "GOOGLE MAPS", faq: "FAQ", howItWorks: "HOW TO PLAY",
      step1: "GO TO ANY BREWERY",
      step2: "BUY BEER & GET:",
      step2a: "QR CODE", step2b: "OR SECRET CODE",
      step3: "GET STAMP!",
      step4: "8 STAMPS = FREE HAT!",
      noRush: "NO RUSH!",
      scanOrCode: "SCAN QR", lookForQR: "ASK FOR QR!",
      gotIt: "OK!", invalidCode: "NOPE!", copyright: "© 2024 HCM ALE TRAIL",
      copyTags: "COPY TAGS", copied: "COPIED!"
    },
    vi: {
      stamps: "TEM", validated: "XONG!", validate: "OK!",
      enterCode: "MÃ", shareTag: "SHARE", website: "WEBSITE",
      googleMaps: "GOOGLE MAPS", faq: "FAQ", howItWorks: "CÁCH CHƠI",
      step1: "ĐẾN QUÁN BIA",
      step2: "MUA BIA & LẤY:",
      step2a: "MÃ QR", step2b: "HOẶC MÃ SỐ",
      step3: "NHẬN TEM!",
      step4: "8 TEM = MŨ FREE!",
      noRush: "TỪ TỪ!",
      scanOrCode: "QUÉT QR", lookForQR: "HỎI MÃ QR!",
      gotIt: "OK!", invalidCode: "SAI!", copyright: "© 2024 ALE TRAIL",
      copyTags: "COPY TAGS", copied: "COPIED!"
    },
    ko: {
      stamps: "스탬프", validated: "완료!", validate: "확인!",
      enterCode: "코드", shareTag: "공유", website: "WEBSITE",
      googleMaps: "GOOGLE MAPS", faq: "FAQ", howItWorks: "방법",
      step1: "양조장 방문",
      step2: "맥주 & 받기:",
      step2a: "QR 코드", step2b: "또는 비밀코드",
      step3: "스탬프!",
      step4: "8개 = 무료모자!",
      noRush: "천천히!",
      scanOrCode: "QR스캔", lookForQR: "QR 요청!",
      gotIt: "OK!", invalidCode: "오류!", copyright: "© 2024 HCM",
      copyTags: "COPY", copied: "OK!"
    },
    ja: {
      stamps: "スタンプ", validated: "完了!", validate: "OK!",
      enterCode: "コード", shareTag: "シェア", website: "WEBSITE",
      googleMaps: "GOOGLE MAPS", faq: "FAQ", howItWorks: "遊び方",
      step1: "醸造所へ行く",
      step2: "ビール買って:",
      step2a: "QRコード", step2b: "または秘密コード",
      step3: "スタンプ!",
      step4: "8個=無料帽子!",
      noRush: "ゆっくり!",
      scanOrCode: "QRスキャン", lookForQR: "QR聞いて!",
      gotIt: "OK!", invalidCode: "違う!", copyright: "© 2024 HCM",
      copyTags: "COPY", copied: "OK!"
    }
  };

  const t = translations[language];

  const flags = [
    { code: 'en', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1024px-Flag_of_the_United_Kingdom_%283-5%29.svg.png', alt: 'UK' },
    { code: 'vi', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png', alt: 'Vietnam' },
    { code: 'ko', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1200px-Flag_of_South_Korea.svg.png', alt: 'Korea' },
    { code: 'ja', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png', alt: 'Japan' }
  ];

  const breweries = [
    { 
      id: 1, 
      name: "BIACRAFT", 
      district: "District 3", 
      logo: "https://lh3.googleusercontent.com/sitesv/AAzXCkdK7Ckh29Bn9ivYjVNAlJWTyN9PslADW92zaCphCTvvddAEnCSxi_dlY2iMY5clflVN1yXCMdbq2AVVO_ioqKx1dnw5DeOEkBnV7Eo_atNA8_YYr8gV2anEALnH7Ci0AlV710hBPf3vOEYmT0FhYOf2ZbiUKS-NfsOPf6Sy1f_x1Ncn8Odmv0Ec=w1280",
      ig: "https://www.instagram.com/biacraftartisanales/",
      fb: "https://facebook.com/biacraft",
      tags: "#hcmaletrail @biacraftartisanales"
    },
    { 
      id: 2, 
      name: "HEART OF DARKNESS", 
      district: "District 1", 
      logo: "https://lh3.googleusercontent.com/sitesv/AAzXCkdDal3ZRQ0-YCuLFCERn5sfV3zjleSH-50uCOFbQgeLBNGoWqluNGNfh7zAtFCQkeLbZ642_ay83YPNhpIWc-kq_u2_tg_rI-Kmwc45_-x5YQ3HPghm0_HD1eQPF4UknWmK61Q2Dzql4maOKWwZtO-x3a5d6Ahhn7pr625DX0NJpERvWB2q_BgY_Co=w1280",
      ig: "https://instagram.com/heartofdarknessbrewery",
      fb: "https://facebook.com/HeartOfDarknessBrewery",
      tags: "#hcmaletrail @heartofdarknessbrewery"
    },
    { 
      id: 3, 
      name: "DEME", 
      district: "District 3", 
      logo: "https://lh3.googleusercontent.com/sitesv/AAzXCkdZ2wqJkHlpA-r3oUWGRR8ORdu_ZlMxIfm-LR00eo0HxUB7QJvH4H1rqOOAY9iEpmm8YGkJdEpGUCRR5K8juFwsqZ1K6Ptuyptn1wsMRYfDqqzuRFB2nFwUJlmcITxc_w9dBpJOZOzO2AIEUHZq2f8Fwb3cRv3A6aFONpvCKwWt3Nk2-DmEMZOsytQ=w1280",
      ig: "https://instagram.com/demebrewing",
      fb: "https://facebook.com/demebrewing",
      tags: "#hcmaletrail @demebrewing"
    },
    { 
      id: 4, 
      name: "STEERSMAN", 
      district: "Tan Binh", 
      logo: "https://lh3.googleusercontent.com/sitesv/AAzXCkf7k0Vs-ZyX2tCPnel531ZobxtdWA4bFdDXolqBsigbrB1eciN4oWcTTMcmD-T6CEtPnt3fvmxunZpSQczX32LOepHUUDpiEalgMsVhtotX7dTo2CBcIXr4MYuk4nv92VXLgbX2exbNIv32gHTtHOKWGfuS9p3PbW6qZ-3W4HNc7XNF_MeA3PlMvKY=w1280",
      ig: "https://instagram.com/steersmanbrewery",
      fb: "https://facebook.com/steersmanbrewery",
      tags: "#hcmaletrail @steersmanbrewery"
    },
    { 
      id: 5, 
      name: "EAST WEST", 
      district: "District 1", 
      logo: "https://lh3.googleusercontent.com/sitesv/AAzXCkdkQ7DIUeqpmOGC1jjZ_guFx6ZZeAPL6bCZIYy2l2KRybNHviagKuZXZnqCYeJw7XKkT5RDTIzL0UoQUZmTQ1BJRcGM5WQ0GGi_arfGg7gZQanAyysq_sMotaymA5kG61trRNhhKA0l_uXEY1kDlClBENoNON17ZAhXC8VKBVGd-tmSBA0Fas5AM88=w1280",
      ig: "https://instagram.com/eastwestbrewing",
      fb: "https://facebook.com/eastwestbrewery",
      tags: "#hcmaletrail @eastwestbrewing"
    },
    { 
      id: 6, 
      name: "ROOSTER", 
      district: "District 1", 
      logo: "https://lh3.googleusercontent.com/sitesv/AAzXCke6ZXB89vvBUEWhAOaAA9G1lC4_MsvZ4b8Hx_Q-r9FQnyKW0HjV5m9ggg9ZU6byWxtbx5x8uyBsv8r9j97jozow6nl9uZoiz8C_OHFWDSkcf2SRsFzQ09UbdrdfA-4cKvarEr4wUUm-58iZm04vrIkqPo1B-wmO6MobivQvMy9gK3evra6oybGaSlA=w1280",
      ig: "https://instagram.com/roosterbeers",
      fb: "https://facebook.com/roosterbeers",
      tags: "#hcmaletrail @roosterbeers"
    },
    { 
      id: 7, 
      name: "7 BRIDGES", 
      district: "District 1", 
      logo: "https://lh3.googleusercontent.com/sitesv/AAzXCkcaFLgzmPjSp2MEKO6vUSgAReQHE8f8VYbxeJd0ph-o8l_mOOPaKoJluvOvTDS9ytC0N1_3g2kpvKiL88O9gA_Vm2ZsIYWfl9fSKEBdx_xVHzDQGcqiuq5zFZ-IH_ADMqofO7EwfZhHXF2SxEjZkru9kYZoL82dzFPhgGxyFyv1Qep47qzouNGlAjg=w1280",
      ig: "https://instagram.com/7bridgesbrewing",
      fb: "https://facebook.com/7BridgesBrewingCo",
      tags: "#hcmaletrail @7bridgesbrewing"
    },
    { 
      id: 8, 
      name: "BELGO", 
      district: "District 1", 
      logo: "https://lh3.googleusercontent.com/sitesv/AAzXCkfpeHaQ7DOVCrkiTbALlX3kjWHlMcO8ilBlxeVBC6rWBubr_YJ1izhjGGbyS92pyLDX0UXhbQfykzCWltoAnDvoGtLLhT63Lyww_2j3QwONC-LJhGDg4PemxOaqF8xwOtKGiBmdTWfLVPc8ihdNaXFDED_4CA85c6bbWlGhENPpExnslVEkH3F-aCk=w1280",
      ig: "https://instagram.com/belgosaigon",
      fb: "https://facebook.com/belgosaigon",
      tags: "#hcmaletrail @belgosaigon"
    }
  ];

  const handleValidate = () => {
    const code = secretCode.toUpperCase().trim();
    if (breweryCodes[selectedBrewery.id] === code) {
      setCollectedStamps([...collectedStamps, selectedBrewery.id]);
      setSecretCode(''); setCodeError(''); setSelectedBrewery(null);
    } else { setCodeError(t.invalidCode); }
  };

  const handleCopyTags = (tags) => {
    navigator.clipboard.writeText(tags).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const progress = (collectedStamps.length / 8) * 100;

  const block = { 
    fontFamily: 'Impact, Haettenschweiler, "Arial Black", sans-serif', 
    fontWeight: 900,
    letterSpacing: '-1px',
    textTransform: 'uppercase'
  };

  const breweryBlock = {
    ...block,
    letterSpacing: '-2px',
    lineHeight: '0.85'
  };

  const nameSize = 'text-5xl md:text-6xl';

  return (
    <div className="min-h-screen bg-red-600 p-2">
      <div className="max-w-2xl mx-auto">
        
        {/* FLAGS */}
        <div className="flex justify-center gap-2 mb-2">
          {flags.map(lang => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`${language === lang.code ? 'ring-4 ring-yellow-400 scale-110' : 'opacity-50'} 
                w-20 h-12 border-4 border-black overflow-hidden transition-all hover:scale-110`}
            >
              <img src={lang.flag} alt={lang.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* HEADER */}
        <div className="bg-yellow-400 border-8 border-black p-3 mb-2 text-center overflow-hidden">
          <h1 
            className="text-5xl md:text-6xl text-red-600 leading-none whitespace-nowrap"
            style={{
              ...block,
              letterSpacing: '0.3em',
              transform: 'scaleX(1.05)'
            }}
          >
            HCM ALE TRAIL
          </h1>
        </div>

        {/* STAMPS COUNTER - COMPACT HORIZONTAL */}
        <div className="bg-black border-8 border-yellow-400 p-2 mb-2">
          <div className="flex items-center justify-between">
            <span className="text-4xl md:text-5xl text-yellow-400" style={block}>{t.stamps}</span>
            <span className="text-5xl md:text-6xl text-yellow-400" style={block}>{collectedStamps.length}/8</span>
          </div>
          <div className="h-4 bg-red-900 border-2 border-yellow-400 mt-2">
            <div className="h-full bg-green-500 transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* BUTTONS ROW 1 */}
        <div className="flex gap-2 mb-2">
          <button onClick={() => setShowInstructions(true)}
            className="w-20 bg-yellow-400 text-red-600 py-3 text-2xl border-8 border-black active:scale-95 transition-all"
            style={block}>
            {t.faq}
          </button>
          <a href={links.website} target="_blank" rel="noopener noreferrer"
            className="flex-1 bg-black text-yellow-400 py-3 text-xl md:text-2xl border-8 border-yellow-400 active:scale-95 transition-all text-center flex items-center justify-center"
            style={block}>
            {t.website}
          </a>
          <a href={links.googleMaps} target="_blank" rel="noopener noreferrer"
            className="flex-1 bg-green-600 text-white py-3 text-xl md:text-2xl border-8 border-black active:scale-95 transition-all text-center flex items-center justify-center"
            style={block}>
            {t.googleMaps}
          </a>
        </div>

        {/* BUTTONS ROW 2 */}
        <div className="flex gap-2 mb-2">
          <a href={links.instagram} target="_blank" rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-3 text-2xl border-8 border-black active:scale-95 transition-all text-center flex items-center justify-center gap-2"
            style={block}>
            <Instagram size={28} /> INSTAGRAM
          </a>
          <a href={links.messenger} target="_blank" rel="noopener noreferrer"
            className="flex-1 bg-blue-500 text-white py-3 text-2xl border-8 border-black active:scale-95 transition-all text-center flex items-center justify-center gap-2"
            style={block}>
            <Messenger size={28} /> MESSENGER
          </a>
        </div>

        {/* BREWERY LIST */}
        <div className="space-y-1">
          {breweries.map((brewery) => {
            const hasStamp = collectedStamps.includes(brewery.id);
            
            return (
              <div 
                key={brewery.id} 
                onClick={() => setSelectedBrewery(brewery)}
                className={`${hasStamp ? 'bg-yellow-400' : 'bg-white'} border-8 border-black cursor-pointer active:scale-[0.98] transition-all`}
              >
                <div className="flex items-center h-32">
                  {/* NUMBER */}
                  <div className={`${hasStamp ? 'bg-green-600' : 'bg-red-600'} w-24 h-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-6xl text-yellow-400" style={block}>{brewery.id}</span>
                  </div>
                  
                  {/* NAME & DISTRICT */}
                  <div className="flex-1 px-3 py-1 flex flex-col justify-center overflow-hidden">
                    <h3 className={`${nameSize} text-red-600`} style={breweryBlock}>
                      {brewery.name}
                    </h3>
                    <p className="text-xl md:text-2xl text-red-500 -mt-1" style={block}>
                      {brewery.district}
                    </p>
                  </div>
                  
                  {/* LOGO - ALWAYS VISIBLE */}
                  <div className="w-32 h-full flex items-center justify-center border-l-8 border-black border-dashed flex-shrink-0 p-1">
                    <div className={`w-28 h-28 rounded-full overflow-hidden border-4 ${hasStamp ? 'border-green-500' : 'border-gray-300'} bg-white flex items-center justify-center relative`}>
                      <img 
                        src={brewery.logo} 
                        alt={brewery.name}
                        className={`w-full h-full object-cover ${hasStamp ? '' : 'opacity-40 grayscale'}`}
                      />
                      {hasStamp && (
                        <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
                          <span className="text-white text-lg font-bold">✓</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTER */}
        <div className="mt-3 text-center">
          <p className="text-2xl text-yellow-400" style={block}>{t.copyright}</p>
        </div>
      </div>

      {/* FAQ MODAL */}
      {showInstructions && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-2">
          <div className="bg-yellow-400 max-w-md w-full border-8 border-black relative">
            <button onClick={() => setShowInstructions(false)}
              className="absolute -top-6 -right-6 bg-red-600 text-yellow-400 w-16 h-16 flex items-center justify-center border-8 border-black text-4xl"
              style={block}>
              X
            </button>
            <div className="p-4">
              <h2 className="text-5xl text-center text-red-600 mb-4" style={block}>{t.howItWorks}</h2>
              
              <div className="space-y-2">
                <div className="bg-red-600 border-4 border-black p-3 flex items-center gap-3">
                  <span className="text-5xl text-yellow-400 w-16" style={block}>1</span>
                  <span className="text-2xl text-yellow-400 flex-1" style={block}>{t.step1}</span>
                </div>
                <div className="bg-red-600 border-4 border-black p-3 flex items-center gap-3">
                  <span className="text-5xl text-yellow-400 w-16" style={block}>2</span>
                  <div className="flex-1">
                    <span className="text-2xl text-yellow-400 block" style={block}>{t.step2}</span>
                    <span className="text-xl text-yellow-300" style={block}>{t.step2a} / {t.step2b}</span>
                  </div>
                </div>
                <div className="bg-red-600 border-4 border-black p-3 flex items-center gap-3">
                  <span className="text-5xl text-yellow-400 w-16" style={block}>3</span>
                  <span className="text-2xl text-yellow-400 flex-1" style={block}>{t.step3}</span>
                </div>
                <div className="bg-green-600 border-4 border-black p-3 flex items-center gap-3">
                  <span className="text-5xl text-white w-16" style={block}>4</span>
                  <span className="text-2xl text-white flex-1" style={block}>{t.step4}</span>
                </div>
              </div>

              <div className="bg-black border-4 border-yellow-400 p-3 mt-3">
                <p className="text-3xl text-yellow-400 text-center" style={block}>{t.noRush}</p>
              </div>

              <button onClick={() => setShowInstructions(false)}
                className="w-full bg-red-600 text-yellow-400 py-5 mt-3 text-5xl border-8 border-black"
                style={block}>
                {t.gotIt}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BREWERY MODAL */}
      {selectedBrewery && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-2">
          <div className="bg-yellow-400 max-w-md w-full border-8 border-black relative max-h-[95vh] overflow-y-auto">
            <button onClick={() => { setSelectedBrewery(null); setSecretCode(''); setCodeError(''); setCopied(false); }}
              className="absolute -top-6 -right-6 bg-red-600 text-yellow-400 w-16 h-16 flex items-center justify-center border-8 border-black text-4xl z-10"
              style={block}>
              X
            </button>
            <div className="p-4">
              {/* QR Button */}
              <button onClick={() => setShowQRInstructions(true)}
                className="w-full bg-white border-8 border-red-600 p-4 mb-3 active:scale-95 transition-all">
                <div className="text-7xl text-center">📱</div>
                <p className="text-3xl text-red-600 text-center" style={block}>{t.scanOrCode}</p>
              </button>

              {/* Name & District */}
              <div className="bg-red-600 border-8 border-black p-4 mb-3 text-center">
                <h2 className="text-4xl md:text-5xl text-yellow-400 leading-none" style={breweryBlock}>
                  {selectedBrewery.name}
                </h2>
                <p className="text-2xl text-yellow-300 mt-1" style={block}>{selectedBrewery.district}</p>
              </div>

              {/* BREWERY SOCIALS */}
              <div className="flex gap-2 mb-3">
                <a href={selectedBrewery.ig} target="_blank" rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 text-2xl border-4 border-black flex items-center justify-center gap-2 active:scale-95 transition-all"
                  style={block}>
                  <Instagram size={28} /> IG
                </a>
                <a href={selectedBrewery.fb} target="_blank" rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white py-4 text-2xl border-4 border-black flex items-center justify-center gap-2 active:scale-95 transition-all"
                  style={block}>
                  <Facebook size={28} /> FB
                </a>
              </div>

              {/* COPY TAGS BOX */}
              <div className="bg-black border-4 border-yellow-400 p-3 mb-3">
                <p className="text-sm text-yellow-400 text-center mb-2 font-mono break-all">
                  {selectedBrewery.tags}
                </p>
                <button 
                  onClick={() => handleCopyTags(selectedBrewery.tags)}
                  className={`w-full ${copied ? 'bg-green-600' : 'bg-yellow-400'} ${copied ? 'text-white' : 'text-black'} py-3 text-2xl border-4 border-black flex items-center justify-center gap-2 active:scale-95 transition-all`}
                  style={block}
                >
                  <Copy size={24} /> {copied ? t.copied : t.copyTags}
                </button>
              </div>

              {/* Code Entry */}
              {!collectedStamps.includes(selectedBrewery.id) ? (
                <div>
                  <p className="text-3xl text-red-600 text-center mb-2" style={block}>— {t.enterCode} —</p>
                  <input type="password" value={secretCode}
                    onChange={(e) => { setSecretCode(e.target.value); setCodeError(''); }}
                    onKeyPress={(e) => { if (e.key === 'Enter') handleValidate(); }}
                    className="w-full px-4 py-5 text-4xl text-center uppercase border-8 border-black mb-2 bg-black text-yellow-400"
                    style={{ ...block, letterSpacing: '8px' }}
                    placeholder="****" maxLength="20" />
                  {codeError && <p className="text-center text-3xl text-red-600 mb-2" style={block}>❌ {codeError}</p>}
                  <button onClick={handleValidate}
                    className="w-full bg-green-600 text-white py-6 text-5xl border-8 border-black active:scale-95 transition-all"
                    style={block}>
                    {t.validate}
                  </button>
                </div>
              ) : (
                <div className="bg-green-600 border-8 border-black p-6 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white bg-white mb-2">
                    <img 
                      src={selectedBrewery.logo} 
                      alt={selectedBrewery.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-5xl text-white" style={block}>{t.validated}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* QR MODAL */}
      {showQRInstructions && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-2">
          <div className="bg-yellow-400 max-w-md w-full border-8 border-black relative">
            <button onClick={() => setShowQRInstructions(false)}
              className="absolute -top-6 -right-6 bg-red-600 text-yellow-400 w-16 h-16 flex items-center justify-center border-8 border-black text-4xl"
              style={block}>
              X
            </button>
            <div className="p-4">
              <div className="bg-white border-8 border-black p-6 mb-3 text-center">
                <div className="text-8xl">📱</div>
                <p className="text-3xl text-black mt-2" style={block}>{t.lookForQR}</p>
              </div>
              
              <div className="bg-red-600 border-4 border-black p-4 mb-3">
                <p className="text-2xl text-yellow-400" style={block}>• iPHONE → CAMERA</p>
                <p className="text-2xl text-yellow-400" style={block}>• ANDROID → LENS</p>
                <p className="text-2xl text-yellow-400" style={block}>• POINT → TAP → DONE!</p>
              </div>

              <button onClick={() => setShowQRInstructions(false)}
                className="w-full bg-green-600 text-white py-6 text-5xl border-8 border-black"
                style={block}>
                {t.gotIt}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<HCMAleTrailApp />, document.getElementById('root'));
