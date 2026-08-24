import type { MethodologyContent } from '../types';

export const uz: MethodologyContent = {
  title: 'Hisoblash metodologiyasi',
  updated: '{version} versiyasiga tegishli',

  disclaimerTitle: 'Avval shuni o‘qing',
  disclaimer: [
    'Bu sahifa kalkulyator ko‘rsatadigan har bir raqamni o‘zingiz tekshira olishingiz uchun mavjud. Bu yerda barcha formulalar, ularning qo‘llanish tartibi va qog‘oz-qalam bilan takrorlay oladigan to‘liq yechilgan misol keltirilgan. Bu — asbob qanday ishlashi haqidagi ma’rifiy ma’lumot: moliyaviy, investitsiyaviy, soliq yoki huquqiy maslahat emas va biror narsani sotib olish, sotish yoki saqlashga tavsiya ham emas.',
    'Kalkulyator beradigan hamma narsa siz kiritgan taxminlarga asoslangan proyeksiya, bashorat emas. U daromadlilik, inflyatsiya va soliq stavkasi butun davr mobaynida o‘zgarmas qoladi deb faraz qiladi. Haqiqiy bozorlar bunday yo‘l tutmaydi. Amaldagi natijalar farq qiladi, uzoq muddatda esa farq juda katta bo‘lishi mumkin.',
    'Raqamlar taxminiy bo‘lib, hech qanday kafolatsiz, qanday bo‘lsa shundayligicha taqdim etiladi. Ushbu kalkulyatordan foydalangach qabul qiladigan har qanday qaroringiz faqat o‘zingizniki bo‘lib, na mualliflar, na nashr etuvchi undan kelib chiqadigan zarar yoki yo‘qotish uchun javob beradi. Pul siz uchun ahamiyatli bo‘lsa, raqamlarni o‘zingiz qayta hisoblang va o‘z mamlakatingizdagi malakali mutaxassis bilan maslahatlashing.',
  ],

  colSymbol: 'Belgi',
  colMeaning: 'Ma’nosi',
  colValue: 'Qiymati',
  colFrequency: 'Davriyligi',
  colMonthlyAmount: 'O‘sha oyda qo‘shiladigan summa',

  inputsTitle: '1. Siz nima kiritasiz',
  inputsIntro: 'Model faqat shu qiymatlardan foydalanadi. Internetdan hech narsa tortib olinmaydi va siz uchun hech narsa faraz qilinmaydi.',
  inputMeanings: [
    'Boshlang‘ich badal — siz boshlaydigan summa',
    'Investitsiya muddati to‘liq yillarda',
    'Kutilayotgan yillik daromadlilik, foizda',
    'Yiliga kapitallashuv davrlari soni (kunlik = 365, oylik = 12, choraklik = 4, yarim yillik = 2, yillik = 1)',
    'Muntazam badal miqdori, siz tanlagan davriylikda qo‘shiladi',
    'Kutilayotgan yillik inflyatsiya, foizda',
    'Foydadan olinadigan soliq stavkasi, foizda',
  ],

  rateTitle: '2. Stavkangizni oylikka aylantirish',
  rateBefore: 'Model oydan oyga qadam tashlaydi, shuning uchun siz kiritgan yillik stavkani unga teng oylik stavka sifatida ifodalash kerak. Stavkangiz yiliga n marta kapitallashadi, ya’ni har bir kapitallashuv davri r ÷ n beradi, bir oy esa shunday davrning n ÷ 12 qismi.',
  rateAfter: 'Aynan daraja ko‘rsatkichi ikkalasini muvofiqlikda ushlab turadi: bu oylik stavkani o‘n ikki marta kapitallashtirsangiz, aynan o‘zingizning yillik stavkangizni olasiz, shu bois yil oxiridagi raqamlar to‘g‘ridan-to‘g‘ri yillik hisob bilan mos tushadi. Yillik kapitallashuvli 8 % holatida oylik stavka 0,643403 % bo‘ladi.',

  contribTitle: '3. Badallar qanday qo‘shiladi',
  contribIntro: 'Model oylik asosda ishlagani uchun oydan tez-tez qilinadigan badallar o‘rtacha oylik summaga aylantiriladi, siyrakroqlari esa faqat haqiqatan tushadigan oylardagina qo‘shiladi.',
  contribFrequencies: [
    'Badalsiz',
    'Har kuni',
    'Har hafta',
    'Har oy',
    'Har chorak',
    'Olti oyda bir',
    'Yiliga bir',
  ],
  contribNote: 'Kunlik va haftalik badallarni o‘rtachalash yillik yig‘indini aniq saqlaydi — bir yil ichida haqiqatan 365 kunlik yoki 52 haftalik to‘lov tushadi — buning evaziga bir necha kunlik foiz u yoq-bu yoqqa suriladi. Bu farq o‘z daromadlilikni taxmin qilishda yo‘l qo‘yadigan xatoingizdan ancha kichik.',

  orderTitle: '4. Har oyda nima sodir bo‘ladi',
  orderIntro: '12 × Y oyning har biri aynan shu tartibda bir xil uch bosqichdan o‘tadi:',
  orderSteps: [
    'O‘tgan oydan ko‘chgan qoldiqqa foiz hisoblanadi.',
    'Shu oydagi badalingiz qo‘shiladi.',
    'Agar shu oyda soliq to‘lanishi lozim bo‘lsa, u ushlab qolinadi.',
  ],
  orderNote: 'Foiz badaldan oldin hisoblanadi, ya’ni shu oydagi to‘lov o‘sha oyning o‘zida hech narsa ishlab topmaydi. Bu — davr oxirida to‘lanadigan annuitetning qabul qilingan tartibi va ayni paytda ehtiyotkorroq tanlov: oy boshidagi to‘lov yakuniy raqamni taxminan bir oylik o‘sish miqdorida ko‘tarardi.',

  taxTitle: '5. Soliq',
  taxIntro: 'Soliq faqat foydadan olinadi, hech qachon siz qo‘ygan puldan emas. Uni qachon ushlab qolish — o‘zingiz tanlaysiz.',
  taxAnnualLabel: 'Har yili',
  taxAnnualText: 'Har o‘n ikkinchi oy oxirida o‘sha yili olingan foyda soliqqa tortiladi va soliq darhol qoldiqdan yechib olinadi. Foyda — joriy qoldiqdan yil boshidagi qoldiq va yil davomida qo‘shgan hamma narsangiz ayirilgandagi miqdor. Agar yil zarar bilan yakunlansa, foyda manfiy bo‘ladi va soliq olinmaydi, ammo bu zarar keyingi yillar hisobiga o‘tkazilmaydi.',
  taxExitLabel: 'Chiqishda',
  taxExitText: 'Eng oxirgi oyga qadar hech narsa ushlab qolinmaydi; so‘ngra butun davrning umumiy foydasi bir yo‘la soliqqa tortiladi. Foyda — yakuniy qoldiqdan barcha badallar, jumladan boshlang‘ich badal ham, ayirilgandagi miqdor.',
  taxNote: 'Uzoq muddatda bu ikki tartib sezilarli farq qiladi, chunki har yili to‘langan soliq — o‘sishdan to‘xtagan pul. Quyidagi misolda yillik soliqqa tortish taxminan 14 093 turadi — qaysi biri sizning ahvolingizga mos kelishini hal qilishdan avval ikkalasini solishtirib ko‘rishga arziydi.',

  inflationTitle: '6. Inflyatsiya',
  inflationIntro: 'Inflyatsiya qoldiqdan ayirilmaydi. U oxirida, kelajakdagi pulni bugun sotib oladigan narsasiga aylantirish sifatida qo‘llanadi:',
  inflationNote: 't — o‘tgan yillar soni, shuning uchun m oyidagi qiymat t = m ÷ 12 dan foydalanadi. Aynan shu sababdan inflyatsiya noldan katta bo‘lishi bilan «real» raqam har doim nominaldan past bo‘ladi: pul ko‘payadi, lekin har bir birlik kamroq sotib oladi.',

  figuresTitle: '7. To‘rtta asosiy raqam',
  figuresIntro: 'Asosiy natija ostidagi kartochkalar — bitta modellashtirishning to‘rtta ko‘rinishi. Ular faqat qaysi chegirmalar allaqachon bajarilgani bilan farq qiladi.',
  figureNames: [
    'Jami qo‘yilgan',
    'Nominal qiymat',
    'Soliqdan keyingi nominal',
    'Inflyatsiyaga tuzatilgan',
  ],
  figureNotes: [
    'Boshlang‘ich badal ustiga har bir badalingiz. Hech qanday o‘sishsiz. Bu — cho‘ntagingizdan chiqadigan pul.',
    'O‘sishi hisoblangan, lekin birorta chegirmasiz qoldiq. To‘rttasining ichida eng kattasi va eng kam ma’noga egasi — aynan shu raqamni ko‘pchilik kalkulyatorlar yolg‘iz ko‘rsatadi.',
    'O‘sha qoldiq, soliq esa siz tanlagan soliqqa tortish usuli belgilagan paytlarda ushlab qolingan.',
    'Soliqdan keyingi qoldiq, bugungi xarid qobiliyatiga aylantirilgan. Bu — ilovaning yuqorisidagi ajratib ko‘rsatilgan raqam va bu pul aslida nima sotib olishiga javob beradigan yagona ko‘rsatkich.',
  ],

  irrTitle: '8. Haqiqiy daromadlilik',
  irrWhyNot: '«Daromadlilik (CAGR)» yozuvi yonidagi foiz — yakuniy qiymatning umumiy badallarga bo‘lingani emas. O‘sha qisqa yo‘l har bir oylik to‘lovni go‘yo birinchi kuni qo‘yilgandek hisoblaydi va daromadlilikni jiddiy pasaytirib ko‘rsatadi — quyidagi misolda u 4,71 % o‘rniga taxminan 2,6 % ko‘rsatgan bo‘lardi.',
  irrBefore: 'Buning o‘rniga kalkulyator shunday stavkani qidiradiki, unda siz qo‘ygan hamma narsaning bugungi qiymati siz yakunlaydigan qiymatga teng bo‘lsin. Har bir to‘lov avval bugungi pulga aylantiriladi, shuning uchun javob — soliqdan va inflyatsiyadan keyingi real daromadlilik. Agar c(m) — m oyida qo‘yilgan summa, V esa yakuniy real qoldiq bo‘lsa, oylik stavka x quyidagi tenglamaning yechimidir:',
  irrAfter: 'Bu tenglamaning yopiq ko‘rinishdagi yechimi yo‘q, shu bois u oyiga −50 % bilan +50 % oralig‘ida teng ikkiga bo‘lish usuli bilan, oraliq 10⁻¹² dan kichik bo‘lgunicha toraytirilib, sonli tarzda yechiladi. So‘ngra oylik natija yillik ko‘rinishga keltiriladi:',
  irrNote: 'Bu — ichki daromadlilik normasi, ya’ni pul oqimlari notekis bo‘lgan investitsiyalarni solishtirishda ishlatiladigan o‘sha ko‘rsatkich. U har bir to‘lov qachon qilinganini hisobga olgani uchun uni e’lon qilingan yillik daromadlilik bilan bevosita solishtirsa bo‘ladi — faqat bu yerda soliq va inflyatsiya allaqachon olib tashlangan.',

  rangeTitle: '9. Optimistik va pessimistik oraliq',
  rangeText: 'Stavkalar oralig‘ini yoqqaningizda butun modellashtirish uch marta bajariladi: bir marta eng past stavkangiz bilan, bir marta kutilayotgani bilan va bir marta eng yuqorisi bilan. Qolgan hamma narsa o‘zgarmaydi. Bu uchta natija ehtimollik emas va hech qanday ishonch darajasini bildirmaydi; ular shunchaki o‘zingiz tanlagan uch xil taxmin ostida bir xil reja nima berishini ko‘rsatadi.',

  exampleTitle: '10. Yechilgan misol',
  exampleIntro: 'Bular — ilovaning boshlang‘ich qiymatlari. Quyidagi har bir raqamni kalkulyatorda tekshirsa bo‘ladi va ular ilova ko‘rsatadigan narsa bilan aniq mos keladi.',
  exampleGivenTitle: 'Berilganlar',
  exampleGivenLabels: [
    'Boshlang‘ich badal',
    'Muddat',
    'Yillik daromadlilik',
    'Kapitallashuv',
    'Badal',
    'Inflyatsiya',
    'Soliq',
  ],
  exampleStepsTitle: 'Birinchi yil, oyma-oy',
  exampleSteps: [
    'Oylik stavka: (1 + 0,08 ÷ 1) ning 1 ÷ 12 darajasi, minus 1 = 0,00643403.',
    '1-oy: 10 000 × 1,00643403 = 10 064,34, ustiga 500 badal = 10 564,34.',
    '2-oy: 10 564,34 × 1,00643403 = 10 632,31, ustiga 500 = 11 132,31.',
    '12-oygacha davom ettirilsa, qoldiq 17 016,94 ga yetadi. Yil davomida 6 000 qo‘ydingiz va 10 000 dan boshladingiz, demak foyda 17 016,94 − 16 000 = 1 016,94.',
    'Bu foydadan 15 % soliq 152,54 bo‘ladi, u darhol ushlab qolinadi va ikkinchi yilga 16 864,40 o‘tadi.',
  ],
  exampleResultTitle: 'To‘liq 15 yildan keyin',
  exampleResultLabels: [
    'Jami qo‘yilgan',
    'Nominal qiymat',
    'Soliqdan keyingi nominal',
    'Bugungi pulda',
    'Yillik real daromadlilik',
  ],
  exampleClosing: 'Oxirgi qatorni diqqat bilan o‘qing. Siz 100 000 qo‘yasiz va 133 640 xarid qobiliyati bilan yakunlaysiz. Nominal 200 525 ikki barobar o‘sishdek ko‘rinadi, biroq soliq undan 20 663 ni, inflyatsiya esa yana 46 222 ni oladi. Bu kalkulyator aynan shu tafovut uchun mavjud.',

  excludedTitle: '11. Model nimani hisobga olmaydi',
  excludedIntro: 'Bular — ataylab qoldirilgan jihatlar. Ularni bilsangiz, natijaga qanchalik ishonish mumkinligini ham bilasiz.',
  excluded: [
    'Broker komissiyalari, platforma to‘lovlari, fond boshqaruvi xarajatlari va sotib olish bilan sotish narxi orasidagi farqni. Uzoq ufqda yillik 1 % to‘lov yakuniy real qiymatning beshdan birini yeb qo‘yishi mumkin.',
    'Progressiv soliq bosqichlari, soliqsiz chegaralar, zararni hisobga olish va soliq imtiyozli hisobvaraqlarni. Butun foydaga bitta yagona tekis stavka qo‘llanadi.',
    'Valyuta ayirboshlash va kurs harakatini. Barcha raqamlar siz kiritgan birlikda.',
    'Bozor tebranishini. Daromadlilik har oyda bir tekis hisoblanadi, shuning uchun daromadlar ketma-ketligi xavfi — uzoq investitsiyaning oxiriga borib eng ko‘p ahamiyat kasb etadigan xavf — bu yerda umuman ko‘rinmaydi.',
    'Badallaringizning vaqt o‘tishi bilan o‘sishini, u inflyatsiya bilan bo‘ladimi yoki daromad bilan.',
    'Yechib olishlar, tanaffuslar yoki muddatdan oldin chiqishni.',
    'Narx o‘sishidan alohida ko‘riladigan dividendlarni; kiritilgan daromadlilik umumiy daromadlilik deb hisoblanadi.',
    'Aynan sizning mamlakatingizga, provayderingizga yoki shaxsiy sharoitingizga xos bo‘lgan har qanday narsani.',
  ],

  limitsTitle: '12. Ushbu asbobning chegaralari',
  limits: [
    'Bu sahifadagi hamma narsa — taxmin, undan ortiq emas. Model siz kiritgan raqamlarning oqibatlarini sodiqlik bilan hisoblaydi; u bu raqamlar haqqoniymi yoki yo‘qmi degan fikrga ega emas va buni bilishning imkoni ham yo‘q.',
    'Barcha natijalar taxminiy. Ko‘rsatilayotgan qiymatlar o‘qishga qulay bo‘lishi uchun yaxlitlanadi, ichki hisob esa to‘liq aniqlikni saqlaydi, shu bois qo‘lda tekshirish oxirgi bir-ikki raqamda farq qilishi mumkin.',
    'Kalkulyator hech qanday kafolatsiz, qanday bo‘lsa shundayligicha taqdim etiladi. Undan foydalanish bilan bog‘liq har qanday qaror, yo‘qotish yoki zarar uchun mualliflarga yoki nashr etuvchiga hech qanday da’vo qo‘yib bo‘lmaydi.',
  ],
};
