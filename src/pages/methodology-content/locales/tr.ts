import type { MethodologyContent } from '../types';

export const tr: MethodologyContent = {
  title: 'Hesaplama yöntemi',
  updated: 'Sürüm {version} için geçerlidir',

  disclaimerTitle: 'Önce bunu okuyun',
  disclaimer: [
    'Bu sayfa, hesaplayıcının gösterdiği her sayıyı kendiniz denetleyebilesiniz diye var. Kullanılan bütün formülleri, hangi sırayla uygulandıklarını ve kâğıt kalemle yeniden yapabileceğiniz, baştan sona işlenmiş bir örneği içerir. Aracın nasıl çalıştığına dair eğitici bir açıklamadır; finansal, yatırım, vergi veya hukuk danışmanlığı değildir ve herhangi bir şeyi alma, satma ya da elde tutma tavsiyesi de değildir.',
    'Hesaplayıcının ürettiği her şey, girdiğiniz varsayımlardan yola çıkan bir projeksiyondur; öngörü değildir. Dönemin tamamı boyunca getirinin, enflasyonun ve vergi oranının sabit kaldığını varsayar. Gerçek piyasalar böyle davranmaz. Gerçekleşen sonuçlar farklı olacaktır ve uzun vadede fark çok büyük olabilir.',
    'Rakamlar yaklaşıktır ve hiçbir garanti verilmeksizin olduğu gibi sunulur. Bu hesaplayıcıyı kullandıktan sonra aldığınız her karar yalnızca size aittir; ne yazarlar ne de yayıncı bundan doğacak herhangi bir zarardan sorumludur. Para sizin için önemliyse sayıları kendiniz kontrol edin ve ülkenizde yetkin bir danışmana başvurun.',
  ],

  colSymbol: 'Simge',
  colMeaning: 'Anlamı',
  colValue: 'Değer',
  colFrequency: 'Sıklık',
  colMonthlyAmount: 'O ay eklenen tutar',

  inputsTitle: '1. Girdiğiniz değerler',
  inputsIntro: 'Modelin kullandığı tek şey bu değerlerdir. İnternetten hiçbir veri çekilmez ve sizin adınıza hiçbir varsayım yapılmaz.',
  inputMeanings: [
    'Başlangıç tutarı — yola çıktığınız miktar',
    'Yatırım süresi, tam yıl olarak',
    'Beklenen yıllık getiri, yüzde olarak',
    'Yılda bileşiklendirme sayısı (günlük = 365, aylık = 12, üç aylık = 4, altı aylık = 2, yıllık = 1)',
    'Katkı tutarı, seçtiğiniz sıklıkta eklenir',
    'Beklenen yıllık enflasyon, yüzde olarak',
    'Kazanç üzerindeki vergi oranı, yüzde olarak',
  ],

  rateTitle: '2. Oranınızı aylık orana çevirmek',
  rateBefore: 'Model ay ay ilerlediği için, girdiğiniz yıllık oranın eşdeğer bir aylık oran olarak ifade edilmesi gerekir. Oranınız yılda n kez bileşiklenir, yani her bileşiklendirme döneminde r ÷ n kazandırır ve bir ay bu dönemin n ÷ 12\'sine denk gelir.',
  rateAfter: 'İkisini tutarlı kılan şey üstür: bu aylık oranı on iki kez bileşiklendirdiğinizde yıllık oranınız birebir geri gelir, dolayısıyla yıl sonu rakamları doğrudan yıllık hesapla aynı çıkar. Yılda bir bileşiklenen %8 için aylık oran %0,643403\'tür.',

  contribTitle: '3. Katkılar nasıl ekleniyor',
  contribIntro: 'Model aylık işlediğinden, aydan daha sık yapılan katkılar ortalama bir aylık tutara çevrilir; daha seyrek olanlar ise yalnızca gerçekten denk geldikleri aylarda eklenir.',
  contribFrequencies: [
    'Katkı yok',
    'Günlük',
    'Haftalık',
    'Aylık',
    'Üç aylık',
    'Altı aylık',
    'Yıllık',
  ],
  contribNote: 'Günlük ve haftalık katkıları ortalamak yıllık toplamı tam tutar — bir yılda gerçekten yatan şey 365 günlük ya da 52 haftalık ödemedir — bunun bedeli yer yer birkaç günlük faizdir. Bu fark, kendi getirinizi tahmin ederken yaptığınız hatadan çok daha küçüktür.',

  orderTitle: '4. Her ay ne oluyor',
  orderIntro: '12 × Y ayın her biri aynı üç adımdan, şu sırayla geçer:',
  orderSteps: [
    'Geçen aydan devreden bakiyeye faiz işletilir.',
    'Bu aya ait katkınız eklenir.',
    'Bu ay ödenmesi gereken vergi varsa düşülür.',
  ],
  orderNote: 'Faiz katkıdan önce işletilir; yani bu ay yatırdığınız para bu ay hiçbir şey kazandırmaz. Bu, dönem sonu ödemeli anüite kabulüdür ve ihtiyatlı olanıdır: ay başında ödeme yapmak nihai rakamı yaklaşık bir aylık büyüme kadar yükseltirdi.',

  taxTitle: '5. Vergi',
  taxIntro: 'Vergi yalnızca kazanç üzerinden alınır, yatırdığınız anaparadan asla alınmaz. Ne zaman alınacağını siz seçersiniz.',
  taxAnnualLabel: 'Her yıl',
  taxAnnualText: 'Her on ikinci ayın sonunda o yıl elde edilen kazanç vergilendirilir ve vergi bakiyeden hemen çıkarılır. Kazanç, şu anki bakiyeden yıl başındaki bakiye ve yıl içinde yaptığınız tüm katkılar düşülerek bulunur. Yıl zararla kapanırsa kazanç negatif olur ve vergi alınmaz; ancak bu zarar sonraki yıllara mahsup edilmek üzere devretmez.',
  taxExitLabel: 'Çıkışta',
  taxExitText: 'En son aya kadar hiçbir kesinti yapılmaz; o ay tüm dönemin kazancının tamamı bir kerede vergilendirilir. Kazanç, nihai bakiyeden başlangıç tutarı dahil bütün katkıların düşülmesiyle bulunur.',
  taxNote: 'Uzun vadede iki yöntem belirgin biçimde ayrışır, çünkü her yıl ödenen vergi bileşiklenmesi duran paradır. Aşağıdaki örnekte yıllık vergileme yaklaşık 14 093 tutuyor; hangisinin durumunuza uyduğuna karar vermeden önce ikisini karşılaştırmakta fayda var.',

  inflationTitle: '6. Enflasyon',
  inflationIntro: 'Enflasyon bakiyeden düşülmez. En sonda, gelecekteki paranın bugün ne satın alacağına çevrilmesi olarak uygulanır:',
  inflationNote: 't geçen yıl sayısıdır, dolayısıyla m. aydaki bir değer t = m ÷ 12 kullanır. Enflasyon sıfırın üzerindeyken "reel" rakamın her zaman nominalden düşük olmasının nedeni budur: para büyür, ama her birimin aldığı azalır.',

  figuresTitle: '7. Dört ana rakam',
  figuresIntro: 'Ana sonucun altındaki dört kutu, aynı simülasyonun dört farklı görünümüdür. Yalnızca hangi kesintilerin uygulandığı bakımından ayrılırlar.',
  figureNames: [
    'Toplam katkı',
    'Nominal değer',
    'Vergi sonrası nominal',
    'Enflasyona göre düzeltilmiş',
  ],
  figureNotes: [
    'Başlangıç tutarı artı yaptığınız her katkı. Hiçbir büyüme içermez. Cebinizden çıkan paranın kendisidir.',
    'Büyümenin işlendiği ama hiçbir kesintinin yapılmadığı bakiye. Dördü içinde en büyüğü ve en az anlamlısı — çoğu hesaplayıcının tek başına gösterdiği rakam tam da budur.',
    'Aynı bakiye, seçtiğiniz vergileme biçiminin belirlediği anlarda vergi düşülmüş hali.',
    'Vergi sonrası bakiyenin bugünün alım gücüne çevrilmiş hali. Uygulamanın üstünde öne çıkan rakam budur ve o paranın gerçekte ne satın alacağını yanıtlayan tek rakamdır.',
  ],

  irrTitle: '8. Reel getiri',
  irrWhyNot: '"Kârlılık (CAGR)" yanındaki yüzde, nihai değerin toplam katkıya bölünmesi değildir. O kestirme yol, her aylık ödemeyi ilk gün yatırılmış gibi sayar ve getiriyi ciddi biçimde düşük gösterir — aşağıdaki örnekte %4,71 yerine yaklaşık %2,6 çıkardı.',
  irrBefore: 'Bunun yerine hesaplayıcı, yatırdığınız her şeyin bugünkü değerini elinizde kalan değere eşitleyen oranı çözer. Her ödeme önce bugünün parasına çevrildiği için, sonuç vergi ve enflasyon sonrası reel bir getiridir. m. ayda yatırılan tutar c(m) ve nihai reel bakiye V olmak üzere, aylık oran x şu denklemin çözümüdür:',
  irrAfter: 'Bu denklemin kapalı bir çözümü yoktur; bu yüzden aylık −%50 ile +%50 aralığında ikiye bölme yöntemiyle sayısal olarak çözülür ve aralık 10⁻¹²\'nin altına inene dek daraltılır. Ardından aylık sonuç yıllığa çevrilir:',
  irrNote: 'Bu, iç verim oranıdır; nakit akışları düzensiz yatırımları karşılaştırmakta kullanılan ölçüyle aynıdır. Her ödemenin ne zaman yapıldığını hesaba kattığı için ilan edilen yıllık getirilerle doğrudan kıyaslanabilir — şu farkla ki buradaki rakam vergi ve enflasyondan arındırılmıştır.',

  rangeTitle: '9. İyimser ve kötümser aralık',
  rangeText: 'Oran aralığını açtığınızda simülasyonun tamamı üç kez çalıştırılır: bir kez en düşük oranınızla, bir kez beklenen oranla, bir kez de en yüksek oranla. Diğer her şey aynı kalır. Bu üç sonuç olasılık değildir ve hiçbir güven düzeyi taşımaz; yalnızca aynı planın, kendi seçtiğiniz üç farklı varsayım altında ne ürettiğini gösterirler.',

  exampleTitle: '10. İşlenmiş bir örnek',
  exampleIntro: 'Bunlar uygulamanın varsayılan değerleridir. Aşağıdaki her rakam bir hesap makinesiyle yeniden bulunabilir ve uygulamanın gösterdiğiyle birebir aynıdır.',
  exampleGivenTitle: 'Girdiler',
  exampleGivenLabels: [
    'Başlangıç tutarı',
    'Süre',
    'Yıllık getiri',
    'Bileşiklendirme',
    'Katkı',
    'Enflasyon',
    'Vergi',
  ],
  exampleStepsTitle: 'İlk yıl, ay ay',
  exampleSteps: [
    'Aylık oran: (1 + 0,08 ÷ 1) üzeri 1 ÷ 12, eksi 1 = 0,00643403.',
    '1. ay: 10 000 × 1,00643403 = 10 064,34, üstüne 500 katkı = 10 564,34.',
    '2. ay: 10 564,34 × 1,00643403 = 10 632,31, üstüne 500 = 11 132,31.',
    'Böyle 12. aya kadar sürdürünce bakiye 17 016,94\'e ulaşır. Yıl boyunca 6 000 katkı yaptınız ve 10 000 ile başladınız, dolayısıyla kazanç 17 016,94 − 16 000 = 1 016,94.',
    'Bu kazanç üzerinden %15 vergi 152,54 eder; hemen düşülür ve ikinci yıla 16 864,40 devreder.',
  ],
  exampleResultTitle: '15 yılın sonunda',
  exampleResultLabels: [
    'Toplam katkı',
    'Nominal değer',
    'Vergi sonrası nominal',
    'Bugünün parasıyla',
    'Yıllık reel getiri',
  ],
  exampleClosing: 'Şu son satırı dikkatle okuyun. 100 000 yatırıyorsunuz ve elinizde 133 640\'lık alım gücü kalıyor. Nominal 200 525 iki katına çıkmış gibi görünür, ama verginin aldığı 20 663, enflasyonun aldığı ise ayrıca 46 222\'dir. Bu hesaplayıcının var olma sebebi tam olarak bu farktır.',

  excludedTitle: '11. Modelin içermedikleri',
  excludedIntro: 'Bunlar bilinçli eksiltmelerdir. Bilmek, sonuca ne kadar güvenebileceğinizi söyler.',
  excluded: [
    'Aracı kurum komisyonları, platform ücretleri, fon yönetim giderleri ve alış-satış makası. Uzun vadede yıllık %1\'lik bir gider, nihai reel değerin beşte birini yiyebilir.',
    'Artan oranlı vergi dilimleri, istisnalar, zarar mahsubu ve vergi avantajlı hesaplar. Tüm kazançlara tek bir düz oran uygulanır.',
    'Döviz çevrimi ve kur hareketleri. Bütün rakamlar sizin girdiğiniz birimdedir.',
    'Piyasa dalgalanması. Getiri her ay eşit işlendiği için, uzun bir yatırımın sonuna doğru en çok önem taşıyan getiri sırası riski burada görünmez.',
    'Katkılarınızın zamanla artması; ister enflasyonla ister gelirle olsun.',
    'Dönem bitmeden yapılan çekimler, aralar veya erken çıkış.',
    'Fiyat artışından ayrı ele alınan temettüler; girdiğiniz getiri toplam getiri sayılır.',
    'Ülkenize, kurumunuza veya kişisel koşullarınıza özgü her şey.',
  ],

  limitsTitle: '12. Bu aracın sınırları',
  limits: [
    'Bu sayfadaki her şey bir varsayımdır, fazlası değil. Model, yazdığınız sayıların doğuracağı sonuçları sadakatle hesaplar; bu sayıların gerçekçi olup olmadığı konusunda bir görüşü yoktur ve bunu bilmesinin bir yolu da yoktur.',
    'Bütün sonuçlar yaklaşıktır. Gösterilen değerler okunabilirlik için yuvarlanırken içerideki aritmetik tam duyarlığı korur; bu yüzden elle yapılan bir denetim son bir iki basamakta farklılık gösterebilir.',
    'Hesaplayıcı hiçbir garanti verilmeksizin olduğu gibi sunulur. Kullanımıyla bağlantılı hiçbir karar, zarar veya kayıp için yazarlara ya da yayıncıya karşı talepte bulunulamaz.',
  ],
};
