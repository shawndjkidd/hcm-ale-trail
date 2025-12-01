import React, { useState } from 'react';
import { X, Instagram, Facebook } from 'lucide-react';

export default function HCMAleTrailApp() {
  const [collectedStamps, setCollectedStamps] = useState([]);
  const [selectedBrewery, setSelectedBrewery] = useState(null);
  const [language, setLanguage] = useState('en');
  const [secretCode, setSecretCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);
  const [showQRInstructions, setShowQRInstructions] = useState(false);

  const breweryCodes = {
    1: 'BIACRAFT2024',
    2: 'DARKNESS2024',
    3: 'DEME2024',
    4: 'STEERSMAN2024',
    5: 'EASTWEST2024',
    6: 'PASTEUR2024',
    7: 'ROOSTER2024',
    8: 'BRIDGES2024',
    9: 'BELGO2024'
  };

  const translations = {
    en: {
      stampsCollected: "STAMPS COLLECTED",
      validated: "VALIDATED!",
      validate: "VALIDATE",
      enterCode: "OR ENTER CODE",
      shareTag: "SHARE & TAG US",
      tags: "TAGS",
      website: "WEBSITE",
      googleMaps: "GOOGLE MAPS",
      instructions: "INSTRUCTIONS",
      howItWorks: "HOW IT WORKS",
      step1: "Visit any of the 9 breweries on the Ale Trail",
      step2: "Buy a beer and ask your server/bartender for:",
      step2a: "• The QR code to scan, OR",
      step2b: "• Have them enter the secret code for you",
      step3: "Collect your stamp when validated!",
      step4: "Collect all 9 stamps to earn a FREE hat!",
      noRush: "Take your time - finish in a day or a year!",
      scanOrCode: "SCAN QR CODE",
      lookForQR: "Ask your bartender to show you the QR code!",
      howToScan: "📱 HOW TO SCAN:",
      iphoneInstructions: "• iPhone: Open Camera app",
      androidInstructions: "• Android: Open Camera or use Google Lens",
      pointQR: "• Point at the QR code",
      tapNotification: "• Tap the notification to get your stamp!",
      orAskBartender: "Or ask the bartender to enter the secret code for you!",
      gotIt: "GOT IT!",
      invalidCode: "INVALID CODE!",
      copyright: "© 2024 HO CHI MINH ALE TRAIL"
    },
    vi: {
      stampsCollected: "SỐ DẤU",
      validated: "ĐÃ XÁC NHẬN!",
      validate: "XÁC NHẬN",
      enterCode: "HOẶC NHẬP MÃ",
      shareTag: "CHIA SẺ & GẮN THẺ",
      tags: "THẺ",
      website: "TRANG WEB",
      googleMaps: "GOOGLE MAPS",
      instructions: "HƯỚNG DẪN",
      howItWorks: "CÁCH THỨC",
      step1: "Ghé thăm bất kỳ 9 nhà máy bia nào trên Ale Trail",
      step2: "Mua bia và yêu cầu nhân viên phục vụ/bartender:",
      step2a: "• Mã QR để quét, HOẶC",
      step2b: "• Nhập mã bí mật cho bạn",
      step3: "Nhận tem của bạn khi được xác nhận!",
      step4: "Thu thập đủ 9 tem để nhận MŨ MIỄN PHÍ!",
      noRush: "Hãy từ từ - hoàn thành trong một ngày hoặc một năm!",
      scanOrCode: "QUÉT MÃ QR",
      lookForQR: "Hỏi bartender để xem mã QR!",
      howToScan: "📱 CÁCH QUÉT:",
      iphoneInstructions: "• iPhone: Mở ứng dụng Camera",
      androidInstructions: "• Android: Mở Camera hoặc dùng Google Lens",
      pointQR: "• Chỉ vào mã QR",
      tapNotification: "• Nhấn vào thông báo để nhận tem!",
      orAskBartender: "Hoặc yêu cầu bartender nhập mã bí mật cho bạn!",
      gotIt: "HIỂU RỒI!",
      invalidCode: "MÃ KHÔNG HỢP LỆ!",
      copyright: "© 2024 HÀNH TRÌNH BIA HỒ CHÍ MINH"
    },
    ko: {
      stampsCollected: "스탬프",
      validated: "확인됨!",
      validate: "확인",
      enterCode: "또는 코드 입력",
      shareTag: "공유 & 태그",
      tags: "태그",
      website: "웹사이트",
      googleMaps: "구글 지도",
      instructions: "사용 방법",
      howItWorks: "이용 방법",
      step1: "에일 트레일에 있는 9개 양조장 중 하나를 방문하세요",
      step2: "맥주를 구매하고 서버/바텐더에게 요청하세요:",
      step2a: "• 스캔할 QR 코드, 또는",
      step2b: "• 비밀 코드를 직접 입력해 달라고 요청",
      step3: "확인되면 스탬프를 받으세요!",
      step4: "9개의 스탬프를 모두 모아 무료 모자를 받으세요!",
      noRush: "천천히 하세요 - 하루 또는 일년 안에 완료하세요!",
      scanOrCode: "QR 코드 스캔",
      lookForQR: "바텐더에게 QR 코드를 보여달라고 요청하세요!",
      howToScan: "📱 스캔 방법:",
      iphoneInstructions: "• iPhone: 카메라 앱 열기",
      androidInstructions: "• Android: 카메라 열기 또는 Google Lens 사용",
      pointQR: "• QR 코드를 가리키기",
      tapNotification: "• 알림을 탭하여 스탬프 받기!",
      orAskBartender: "또는 바텐더에게 비밀 코드 입력을 요청하세요!",
      gotIt: "알겠습니다!",
      invalidCode: "잘못된 코드!",
      copyright: "© 2024 호치민 에일 트레일"
    },
    ja: {
      stampsCollected: "スタンプ",
      validated: "確認済み!",
      validate: "確認",
      enterCode: "またはコード入力",
      shareTag: "シェア & タグ",
      tags: "タグ",
      website: "ウェブサイト",
      googleMaps: "グーグルマップ",
      instructions: "使い方",
      howItWorks: "利用方法",
      step1: "エールトレイルの9つの醸造所のいずれかを訪問",
      step2: "ビールを購入してサーバー/バーテンダーに依頼:",
      step2a: "• スキャンするQRコード、または",
      step2b: "• シークレットコードの入力を依頼",
      step3: "確認されたらスタンプを取得！",
      step4: "9つのスタンプを集めて無料の帽子をもらう！",
      noRush: "ゆっくりと - 1日または1年で完了！",
      scanOrCode: "QRコードスキャン",
      lookForQR: "バーテンダーにQRコードを見せてもらいましょう!",
      howToScan: "📱 スキャン方法:",
      iphoneInstructions: "• iPhone: カメラアプリを開く",
      androidInstructions: "• Android: カメラを開くまたはGoogle Lensを使用",
      pointQR: "• QRコードに向ける",
      tapNotification: "• 通知をタップしてスタンプを取得！",
      orAskBartender: "またはバーテンダーにコード入力を依頼してください!",
      gotIt: "わかりました！",
      invalidCode: "無効なコード!",
      copyright: "© 2024 ホーチミン エールトレイル"
    }
  };

  const t = translations[language];

  const breweries = [
    {
      id: 1,
      name: "BiaCraft",
      subtitle: "Le Ngo Cat",
      district: "District 3",
      address: "1 Le Ngo Cat, District 3",
      tagline: "Funky names, creative food, and the OG craft beer hangout.",
      fb: "https://facebook.com/biacraft",
      ig: "https://www.instagram.com/biacraftartisanales/",
      maps: "https://maps.app.goo.gl/jwRQhzZMzijiHYtN7",
      logo: "./assets/BiaCraft_Logo.jpg"
    },
    {
      id: 2,
      name: "Heart of",
      subtitle: "Darkness",
      district: "District 1",
      address: "31D Ly Tu Trong, District 1",
      tagline: "Award-winning craft brewery with bold, innovative beers.",
      fb: "https://facebook.com/HeartOfDarknessBrewery",
      ig: "https://instagram.com/heartofdarknessbrewery",
      maps: "https://maps.app.goo.gl/ah6bzRWZhM6gz3C78",
      logo: "./assets/heart_of_darkness_logo.jpg"
    },
    {
      id: 3,
      name: "Deme",
      subtitle: "Brewing",
      district: "District 3",
      address: "201B Nam Ky Khoi Nghia, District 3",
      tagline: "Small batch brews with big personality and local flavor.",
      fb: "https://facebook.com/demebrewing",
      ig: "https://instagram.com/demebrewing",
      maps: "https://maps.app.goo.gl/NMMSRCjDehDUvtD5A",
      logo: "./assets/deme_logo.jpg"
    },
    {
      id: 4,
      name: "Steersman",
      subtitle: "Brewery",
      district: "Tan Binh",
      address: "18B Cong Hoa, Tan Binh",
      tagline: "Neighborhood taproom serving fresh, quality craft beer.",
      fb: "https://facebook.com/steersmanbrewery",
      ig: "https://instagram.com/steersmanbrewery",
      maps: "https://maps.app.goo.gl/ZtHzaoCea36zqUdWA",
      logo: "./assets/steersman_logo.jpg"
    },
    {
      id: 5,
      name: "East West",
      subtitle: "Brewing",
      district: "District 1",
      address: "181–185 Ly Tu Trong, District 1",
      tagline: "Where East meets West in every perfectly crafted pint.",
      fb: "https://facebook.com/eastwestbrewery",
      ig: "https://instagram.com/eastwestbrewery",
      maps: "https://maps.app.goo.gl/2CjzhfFS6h2qmNeq8",
      logo: "./assets/east_west_brewing__logo.jpg"
    },
    {
      id: 6,
      name: "Pasteur St",
      subtitle: "Brewing",
      district: "District 1",
      address: "144 Pasteur, District 1",
      tagline: "Saigon's original craft brewery with Vietnamese-inspired ales.",
      fb: "https://facebook.com/PasteurStreet",
      ig: "https://instagram.com/pasteurstreetbrewing",
      maps: "https://maps.app.goo.gl/zm7Jx6aNj8Yg7t3F7",
      logo: "./assets/BiaCraft_Logo.jpg"
    },
    {
      id: 7,
      name: "Rooster",
      subtitle: "Beers",
      district: "District 1",
      address: "31 Ho Huan Nghiep, District 1",
      tagline: "Bold brews and good vibes in the heart of Saigon.",
      fb: "https://facebook.com/roosterbeers",
      ig: "https://instagram.com/roosterbeers",
      maps: "https://maps.app.goo.gl/kxQy9aCbHnchCScf8",
      logo: "./assets/rooster_logo.jpg"
    },
    {
      id: 8,
      name: "7 Bridges",
      subtitle: "Brewing",
      district: "District 1",
      address: "25 Ly Tu Trong, District 1",
      tagline: "Connecting beer lovers with exceptional craft brews.",
      fb: "https://facebook.com/7BridgesBrewingCo",
      ig: "https://instagram.com/7bridgesbrewing",
      maps: "https://maps.app.goo.gl/2CjzhfFS6h2qmNeq8",
      logo: "./assets/7B_logo.jpg"
    },
    {
      id: 9,
      name: "Belgo",
      subtitle: "Saigon",
      district: "District 1",
      address: "159A Nguyen Van Thu, District 1",
      tagline: "Belgian-style beers with a tropical Saigon twist.",
      fb: "https://facebook.com/belgosaigon",
      ig: "https://instagram.com/belgosaigon",
      maps: "https://maps.app.goo.gl/2CjzhfFS6h2qmNeq8",
      logo: "./assets/Belgo_logo_copy.jpg"
    }
  ];

  const handleValidate = () => {
    const code = secretCode.toUpperCase().trim();
    if (breweryCodes[selectedBrewery.id] === code) {
      setCollectedStamps([...collectedStamps, selectedBrewery.id]);
      setSecretCode('');
      setCodeError('');
      setSelectedBrewery(null);
    } else {
      setCodeError(t.invalidCode);
    }
  };

  const progress = (collectedStamps.length / 9) * 100;

  return (
    <div className="min-h-screen bg-red-600 p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-6">
        {/* Language Selector */}
        <div className="flex justify-center gap-4 mb-6">
          {[
            { code: 'en', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/1024px-Flag_of_the_United_Kingdom_%283-5%29.svg.png', alt: 'UK' },
            { code: 'vi', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png', alt: 'Vietnam' },
            { code: 'ko', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1200px-Flag_of_South_Korea.svg.png', alt: 'Korea' },
            { code: 'ja', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png', alt: 'Japan' }
          ].map(lang => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className={`${
                language === lang.code ? 'scale-110 ring-8 ring-yellow-400' : 'scale-100 opacity-70'
              } w-32 h-24 transition-all hover:scale-105 border-8 border-black relative overflow-hidden`}
              style={{
                filter: 'sepia(20%) contrast(110%) brightness(90%) saturate(130%)',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.4)'
              }}
            >
              <img 
                src={lang.flag} 
                alt={lang.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src="./assets/Logo-Ale-Trail-2023-03.png" 
            alt="HCM Ale Trail"
            className="w-80 h-auto"
          />
        </div>

        {/* Progress Bar */}
        <div className="bg-yellow-400 border-8 border-black p-6 text-center">
          <h2 className="font-black text-5xl text-red-600 mb-4" style={{fontFamily: 'Impact, sans-serif'}}>
            {t.stampsCollected}: {collectedStamps.length}/9
          </h2>
          <div className="h-16 bg-black border-4 border-red-600">
            <div 
              className="h-full bg-green-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setShowInstructions(true)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-yellow-400 font-black py-6 text-center text-3xl uppercase border-8 border-black transition-all hover:scale-105"
            style={{fontFamily: 'Impact, sans-serif'}}
          >
            {t.instructions}
          </button>
          <a
            href="https://www.hochiminhaletrail.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-red-600 font-black py-6 text-center text-3xl uppercase border-8 border-black transition-all hover:scale-105"
            style={{fontFamily: 'Impact, sans-serif'}}
          >
            {t.website}
          </a>
          <a
            href="https://www.google.com/maps/d/u/1/viewer?mid=1ZO-30TD2syibuwwqGF7wDxwHACOEsBQ&ll=10.779285271728757%2C106.69519550000001&z=15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-700 hover:bg-green-600 text-yellow-400 font-black py-6 text-center text-3xl uppercase border-8 border-black transition-all hover:scale-105"
            style={{fontFamily: 'Impact, sans-serif'}}
          >
            {t.googleMaps}
          </a>
        </div>
      </div>

      {/* Brewery Tickets */}
      <div className="max-w-6xl mx-auto space-y-4">
        {breweries.map((brewery) => {
          const hasStamp = collectedStamps.includes(brewery.id);
          return (
            <div
              key={brewery.id}
              onClick={() => setSelectedBrewery(brewery)}
              className={`${
                hasStamp ? 'bg-yellow-400' : 'bg-white'
              } border-8 border-black cursor-pointer hover:scale-105 transition-all relative`}
              style={{
                backgroundImage: hasStamp ? 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)' : 'none'
              }}
            >
              <div className="flex items-center">
                {/* Left: Number */}
                <div className={`${
                  hasStamp ? 'bg-green-700' : 'bg-red-600'
                } w-32 h-32 flex items-center justify-center border-r-8 border-black border-dashed`}>
                  <span className="font-black text-7xl text-yellow-400" style={{fontFamily: 'Impact, sans-serif'}}>
                    {brewery.id}
                  </span>
                </div>

                {/* Middle: Info */}
                <div className="flex-1 px-8 py-4">
                  <h3 className="font-black text-4xl text-red-600 leading-none" style={{fontFamily: 'Impact, sans-serif'}}>
                    {brewery.name}
                  </h3>
                  <p className="font-black text-3xl text-red-600 leading-none mb-2" style={{fontFamily: 'Impact, sans-serif'}}>
                    {brewery.subtitle}
                  </p>
                  <p className="font-bold text-xl text-red-500">⭐ {brewery.district}</p>
                </div>

                {/* Right: Stamp Box */}
                <div className="w-48 h-32 border-l-8 border-black border-dashed flex items-center justify-center">
                  {hasStamp ? (
                    <div className="text-center">
                      <div className="text-6xl mb-2">✓</div>
                      <p className="font-black text-xl text-green-700" style={{fontFamily: 'Impact, sans-serif'}}>
                        {t.validated}
                      </p>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-20">
                      <div className="w-24 h-24 border-8 border-dashed border-red-600 rounded-full" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* QR Scanning Instructions Modal */}
      {showQRInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-yellow-400 max-w-3xl w-full border-8 border-black relative">
            {/* Close Button */}
            <button
              onClick={() => setShowQRInstructions(false)}
              className="absolute top-4 right-4 bg-red-600 text-white w-16 h-16 flex items-center justify-center border-4 border-black hover:scale-110 transition-all z-10"
            >
              <X size={40} strokeWidth={4} />
            </button>

            <div className="p-10">
              {/* Header */}
              <div className="bg-red-600 border-4 border-black p-6 mb-8">
                <h2 className="font-black text-5xl text-center text-yellow-400 leading-none" style={{fontFamily: 'Impact, sans-serif'}}>
                  {t.scanOrCode}
                </h2>
              </div>

              {/* QR Code Visual */}
              <div className="bg-white border-4 border-black p-8 mb-8 text-center">
                <div className="text-9xl mb-4">📱</div>
                <p className="font-bold text-2xl text-black" style={{fontFamily: 'Special Elite, monospace'}}>
                  {t.lookForQR}
                </p>
              </div>

              {/* How to Scan Instructions */}
              <div className="bg-red-600 border-4 border-black p-8 mb-6">
                <h3 className="font-black text-3xl text-yellow-400 mb-6" style={{fontFamily: 'Impact, sans-serif'}}>
                  {t.howToScan}
                </h3>
                <div className="space-y-3 text-yellow-400 font-bold text-xl">
                  <p>{t.iphoneInstructions}</p>
                  <p>{t.androidInstructions}</p>
                  <p>{t.pointQR}</p>
                  <p>{t.tapNotification}</p>
                </div>
              </div>

              {/* Alternative Option */}
              <div className="bg-green-700 border-4 border-black p-6 mb-6">
                <p className="font-black text-2xl text-yellow-400 text-center" style={{fontFamily: 'Impact, sans-serif'}}>
                  {t.orAskBartender}
                </p>
              </div>

              {/* Got It Button */}
              <button
                onClick={() => setShowQRInstructions(false)}
                className="w-full bg-red-600 text-yellow-400 font-black py-8 text-5xl uppercase border-8 border-black hover:scale-105 transition-all"
                style={{fontFamily: 'Impact, sans-serif'}}
              >
                {t.gotIt}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instructions Modal */}
      {showInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-yellow-400 max-w-3xl w-full border-8 border-black relative">
            {/* Close Button */}
            <button
              onClick={() => setShowInstructions(false)}
              className="absolute top-4 right-4 bg-red-600 text-white w-16 h-16 flex items-center justify-center border-4 border-black hover:scale-110 transition-all z-10"
            >
              <X size={40} strokeWidth={4} />
            </button>

            <div className="p-10">
              <h2 className="font-black text-7xl text-center text-red-600 mb-8 leading-none" style={{fontFamily: 'Impact, sans-serif'}}>
                {t.howItWorks}
              </h2>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-red-600 border-4 border-black p-6 flex items-start gap-6">
                  <div className="bg-yellow-400 border-4 border-black w-16 h-16 flex-shrink-0 flex items-center justify-center">
                    <span className="font-black text-4xl text-red-600" style={{fontFamily: 'Impact, sans-serif'}}>1</span>
                  </div>
                  <p className="font-bold text-2xl text-yellow-400 flex-1 pt-2" style={{fontFamily: 'Impact, sans-serif'}}>
                    {t.step1}
                  </p>
                </div>

                {/* Step 2 with sub-bullets */}
                <div className="bg-red-600 border-4 border-black p-6">
                  <div className="flex items-start gap-6 mb-4">
                    <div className="bg-yellow-400 border-4 border-black w-16 h-16 flex-shrink-0 flex items-center justify-center">
                      <span className="font-black text-4xl text-red-600" style={{fontFamily: 'Impact, sans-serif'}}>2</span>
                    </div>
                    <p className="font-bold text-2xl text-yellow-400 flex-1 pt-2" style={{fontFamily: 'Impact, sans-serif'}}>
                      {t.step2}
                    </p>
                  </div>
                  <div className="ml-24 space-y-2">
                    <p className="font-bold text-xl text-yellow-400" style={{fontFamily: 'Impact, sans-serif'}}>
                      {t.step2a}
                    </p>
                    <p className="font-bold text-xl text-yellow-400" style={{fontFamily: 'Impact, sans-serif'}}>
                      {t.step2b}
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-red-600 border-4 border-black p-6 flex items-start gap-6">
                  <div className="bg-yellow-400 border-4 border-black w-16 h-16 flex-shrink-0 flex items-center justify-center">
                    <span className="font-black text-4xl text-red-600" style={{fontFamily: 'Impact, sans-serif'}}>3</span>
                  </div>
                  <p className="font-bold text-2xl text-yellow-400 flex-1 pt-2" style={{fontFamily: 'Impact, sans-serif'}}>
                    {t.step3}
                  </p>
                </div>

                {/* Step 4 */}
                <div className="bg-red-600 border-4 border-black p-6 flex items-start gap-6">
                  <div className="bg-yellow-400 border-4 border-black w-16 h-16 flex-shrink-0 flex items-center justify-center">
                    <span className="font-black text-4xl text-red-600" style={{fontFamily: 'Impact, sans-serif'}}>4</span>
                  </div>
                  <p className="font-bold text-2xl text-yellow-400 flex-1 pt-2" style={{fontFamily: 'Impact, sans-serif'}}>
                    {t.step4}
                  </p>
                </div>
              </div>

              <div className="bg-green-700 border-4 border-black p-6 mt-8">
                <p className="font-black text-3xl text-yellow-400 text-center" style={{fontFamily: 'Impact, sans-serif'}}>
                  {t.noRush}
                </p>
              </div>

              <button
                onClick={() => setShowInstructions(false)}
                className="w-full bg-red-600 text-yellow-400 font-black py-8 mt-6 text-5xl uppercase border-8 border-black hover:scale-105 transition-all"
                style={{fontFamily: 'Impact, sans-serif'}}
              >
                GOT IT!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-8 text-center">
        <p className="font-black text-2xl text-yellow-400" style={{fontFamily: 'Impact, sans-serif'}}>
          {t.copyright}
        </p>
      </div>

      {/* Brewery Modal */}
      {selectedBrewery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="bg-yellow-400 max-w-2xl w-full border-8 border-black relative">
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedBrewery(null);
                setSecretCode('');
                setCodeError('');
              }}
              className="absolute top-4 right-4 bg-red-600 text-white w-16 h-16 flex items-center justify-center border-4 border-black hover:scale-110 transition-all z-10"
            >
              <X size={40} strokeWidth={4} />
            </button>

            <div className="p-10">
              {/* QR Code Section - Clickable */}
              <button
                onClick={() => setShowQRInstructions(true)}
                className="w-full bg-yellow-400 border-8 border-red-600 p-6 mb-6 hover:scale-105 transition-all"
              >
                <div className="bg-red-600 border-4 border-black p-4 mb-4">
                  <p className="font-black text-3xl text-yellow-400" style={{fontFamily: 'Impact, sans-serif'}}>
                    {t.scanOrCode}
                  </p>
                </div>
                <div className="bg-white border-4 border-black p-8">
                  <div className="text-center">
                    <div className="text-8xl mb-4">📱</div>
                    <p className="font-bold text-xl text-black" style={{fontFamily: 'Special Elite, monospace'}}>
                      {t.lookForQR}
                    </p>
                  </div>
                </div>
              </button>

              {/* Brewery Name */}
              <h2 className="font-black text-6xl text-center text-red-600 mb-2 leading-none" style={{fontFamily: 'Impact, sans-serif'}}>
                {selectedBrewery.name}
              </h2>
              <p className="font-black text-5xl text-center text-red-600 mb-4 leading-none" style={{fontFamily: 'Impact, sans-serif'}}>
                {selectedBrewery.subtitle}
              </p>

              {/* Brewery Tagline/Description */}
              <div className="bg-red-600 border-4 border-black p-4 mb-6">
                <p className="font-bold text-xl text-yellow-400 text-center leading-tight">
                  {selectedBrewery.tagline || selectedBrewery.description}
                </p>
              </div>

              {/* Share Section */}
              <div className="bg-red-600 border-8 border-black p-6 mb-6">
                <h3 className="font-black text-3xl text-yellow-400 text-center mb-4" style={{fontFamily: 'Impact, sans-serif'}}>
                  ★ {t.shareTag} ★
                </h3>
                
                <div className="flex gap-4 mb-4">
                  <a
                    href={selectedBrewery.ig}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black py-4 text-center text-2xl uppercase border-4 border-black hover:scale-105 transition-all flex items-center justify-center gap-2"
                    style={{fontFamily: 'Impact, sans-serif'}}
                  >
                    <Instagram size={28} />
                    INSTA
                  </a>
                  <a
                    href={selectedBrewery.fb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white font-black py-4 text-center text-2xl uppercase border-4 border-black hover:scale-105 transition-all flex items-center justify-center gap-2"
                    style={{fontFamily: 'Impact, sans-serif'}}
                  >
                    <Facebook size={28} />
                    FACEBOOK
                  </a>
                </div>

                <button className="w-full bg-yellow-400 text-red-600 font-black py-4 text-3xl uppercase border-4 border-black hover:scale-105 transition-all flex items-center justify-center gap-2"
                  style={{fontFamily: 'Impact, sans-serif'}}
                >
                  📋 {t.tags}
                </button>
              </div>

              {/* Code Entry */}
              {!collectedStamps.includes(selectedBrewery.id) ? (
                <div>
                  <div className="text-center mb-4">
                    <p className="font-black text-2xl text-red-600" style={{fontFamily: 'Impact, sans-serif'}}>
                      -------------- {t.enterCode} --------------
                    </p>
                  </div>

                  <input
                    type="password"
                    value={secretCode}
                    onChange={(e) => {
                      setSecretCode(e.target.value);
                      setCodeError('');
                    }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') handleValidate();
                    }}
                    className="w-full px-8 py-6 text-4xl font-black text-center uppercase border-8 border-black mb-4 bg-black text-gray-400"
                    style={{fontFamily: 'Impact, sans-serif', letterSpacing: '8px'}}
                    placeholder="****"
                    maxLength="20"
                  />

                  {codeError && (
                    <p className="text-center font-black text-2xl text-red-600 mb-4" style={{fontFamily: 'Impact, sans-serif'}}>
                      ❌ {codeError}
                    </p>
                  )}

                  <button
                    onClick={handleValidate}
                    className="w-full bg-red-600 text-yellow-400 font-black py-8 text-5xl uppercase border-8 border-black hover:scale-105 transition-all"
                    style={{fontFamily: 'Impact, sans-serif'}}
                  >
                    {t.validate}
                  </button>
                </div>
              ) : (
                <div className="bg-green-700 border-8 border-black p-10 text-center">
                  <div className="text-8xl mb-4">✓</div>
                  <p className="font-black text-6xl text-yellow-400" style={{fontFamily: 'Impact, sans-serif'}}>
                    {t.validated}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HCMAleTrailApp />);
