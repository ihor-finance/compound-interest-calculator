import type { MethodologyContent } from '../types';

export const az: MethodologyContent = {
  title: 'Hesablama metodologiyası',
  updated: '{version} versiyasına aiddir',

  disclaimerTitle: 'Əvvəlcə bunu oxuyun',
  disclaimer: [
    'Bu səhifə kalkulyatorun göstərdiyi hər rəqəmi yoxlaya bilməniz üçün mövcuddur. Burada bütün düsturlar, onların tətbiq ardıcıllığı və kağız-qələmlə təkrarlaya biləcəyiniz sona qədər həll edilmiş nümunə verilib. Bu, alətin necə işlədiyi barədə maarifləndirici məlumatdır — maliyyə, investisiya, vergi və ya hüquq məsləhəti deyil və nəyisə almaq, satmaq ya saxlamaq üçün tövsiyə deyil.',
    'Kalkulyatorun verdiyi hər şey sizin daxil etdiyiniz ehtimallara əsaslanan proyeksiyadır, proqnoz deyil. O, gəlirliliyin, inflyasiyanın və vergi dərəcəsinin bütün dövr boyu dəyişməz qaldığını fərz edir. Real bazarlar belə davranmır. Faktiki nəticələr fərqli olacaq, uzun dövrlərdə isə nəhəng dərəcədə fərqlənə bilər.',
    'Rəqəmlər təxminidir və heç bir zəmanət olmadan olduğu kimi təqdim edilir. Bu kalkulyatordan istifadə etdikdən sonra verdiyiniz hər qərar yalnız sizindir və nə müəlliflər, nə də naşir bundan doğan itki və ya zərərə görə məsuliyyət daşımır. Pul sizin üçün əhəmiyyətlidirsə, rəqəmləri özünüz yenidən hesablayın və öz ölkənizdə ixtisaslı mütəxəssislə məsləhətləşin.',
  ],

  colSymbol: 'İşarə',
  colMeaning: 'Mənası',
  colValue: 'Dəyər',
  colFrequency: 'Tezlik',
  colMonthlyAmount: 'Həmin ay əlavə olunan məbləğ',

  inputsTitle: '1. Nə daxil edirsiniz',
  inputsIntro: 'Model yalnız bu dəyərlərdən istifadə edir. İnternetdən heç nə çəkilmir və sizin əvəzinizə heç nə fərz edilmir.',
  inputMeanings: [
    'İlkin qoyuluş — başladığınız məbləğ',
    'İnvestisiya müddəti tam illərlə',
    'Gözlənilən illik gəlirlilik, faizlə',
    'İldəki kapitallaşma dövrlərinin sayı (gündəlik = 365, aylıq = 12, rüblük = 4, yarımillik = 2, illik = 1)',
    'Müntəzəm töhfənin həcmi, seçdiyiniz tezliklə əlavə olunur',
    'Gözlənilən illik inflyasiya, faizlə',
    'Mənfəətdən vergi dərəcəsi, faizlə',
  ],

  rateTitle: '2. Dərəcənizin aylıq dərəcəyə çevrilməsi',
  rateBefore: 'Model ay-ay irəliləyir, ona görə daxil etdiyiniz illik dərəcə ekvivalent aylıq dərəcə kimi ifadə olunmalıdır. Dərəcəniz ildə n dəfə kapitallaşır, yəni hər kapitallaşma dövrü r ÷ n verir və bir ay belə bir dövrün n ÷ 12 hissəsidir.',
  rateAfter: 'Məhz qüvvət göstəricisi ikisini uzlaşdırır: bu aylıq dərəcəni on iki dəfə kapitallaşdırsanız, dəqiq öz illik dərəcənizi alarsınız, ona görə ilin sonundakı rəqəmlər birbaşa illik hesablama ilə üst-üstə düşür. İllik kapitallaşma ilə 8 % zamanı aylıq dərəcə 0,643403 % olur.',

  contribTitle: '3. Töhfələr necə əlavə olunur',
  contribIntro: 'Model aylıq əsasda işlədiyi üçün aydan tez-tez edilən töhfələr orta aylıq məbləğə çevrilir, daha seyrək olanlar isə yalnız həqiqətən düşdükləri aylarda əlavə edilir.',
  contribFrequencies: [
    'Töhfəsiz',
    'Hər gün',
    'Hər həftə',
    'Hər ay',
    'Hər rüb',
    'Hər altı ayda bir',
    'İldə bir dəfə',
  ],
  contribNote: 'Gündəlik və həftəlik töhfələrin ortalanması illik cəmi dəqiq saxlayır — bir il ərzində həqiqətən 365 gündəlik və ya 52 həftəlik ödəniş daxil olur — bunun əvəzində bir neçə günlük faiz o yan-bu yana sürüşür. Bu fərq öz gəlirliliyinizi təxmin edərkən buraxdığınız səhvdən qat-qat kiçikdir.',

  orderTitle: '4. Hər ay nə baş verir',
  orderIntro: '12 × Y ayın hər biri eyni üç mərhələdən, məhz bu ardıcıllıqla keçir:',
  orderSteps: [
    'Keçən aydan köçürülən qalığa faiz hesablanır.',
    'Bu ayın töhfəniz əlavə olunur.',
    'Həmin ay ödənilməlidirsə, vergi tutulur.',
  ],
  orderNote: 'Faiz töhfədən əvvəl hesablanır, yəni bu ayın ödənişi eyni ay ərzində heç nə qazanmır. Bu, dövrün sonunda ödənilən annuitetin qəbul olunmuş qaydasıdır və eyni zamanda daha ehtiyatlı seçimdir: ayın əvvəlində edilən ödəniş son rəqəmi təxminən bir aylıq artım qədər qaldırardı.',

  taxTitle: '5. Vergi',
  taxIntro: 'Vergi yalnız mənfəətdən tutulur, heç vaxt sizin qoyduğunuz puldan yox. Nə vaxt tutulacağını siz seçirsiniz.',
  taxAnnualLabel: 'Hər il',
  taxAnnualText: 'Hər on ikinci ayın sonunda həmin il əldə edilən mənfəət vergiyə cəlb olunur və vergi dərhal qalıqdan çıxılır. Mənfəət cari qalıqdan ilin əvvəlindəki qalıq və il ərzində qoyduğunuz hər şey çıxıldıqdan sonra qalan məbləğdir. İl zərərlə bağlanarsa, mənfəət mənfi olur və vergi tutulmur, lakin həmin zərər sonrakı illərə qarşı nəzərə alınmaq üçün köçürülmür.',
  taxExitLabel: 'Çıxarkən',
  taxExitText: 'Son aya qədər heç nə tutulmur; sonra isə bütün dövrün ümumi mənfəəti bir dəfəyə vergiyə cəlb olunur. Mənfəət son qalıqdan bütün töhfələrin, o cümlədən ilkin qoyuluşun çıxılması ilə alınır.',
  taxNote: 'Uzun dövrdə bu iki rejim əhəmiyyətli dərəcədə fərqlənir, çünki hər il ödənilən vergi artımdan qalan puldur. Aşağıdakı nümunədə illik vergiləndirmə təxminən 14 093 baha başa gəlir — hansının sizin vəziyyətinizə uyğun olduğunu qərara almazdan əvvəl hər ikisini müqayisə etməyə dəyər.',

  inflationTitle: '6. İnflyasiya',
  inflationIntro: 'İnflyasiya qalıqdan çıxılmır. O, sonda, gələcək pulun bu gün nə alacağına çevrilməsi kimi tətbiq olunur:',
  inflationNote: 't keçən illərin sayıdır, ona görə m ayındakı dəyər t = m ÷ 12 istifadə edir. Məhz buna görə inflyasiya sıfırdan böyük olan kimi «real» rəqəm həmişə nominaldan aşağı olur: pul artır, amma hər vahid daha az alır.',

  figuresTitle: '7. Dörd əsas rəqəm',
  figuresIntro: 'Əsas nəticənin altındakı lövhəciklər eyni simulyasiyanın dörd görünüşüdür. Onlar yalnız hansı çıxılmaların artıq nəzərə alındığı ilə fərqlənir.',
  figureNames: [
    'Ümumi qoyulan',
    'Nominal dəyər',
    'Vergidən sonra nominal',
    'İnflyasiyaya düzəliş edilmiş',
  ],
  figureNotes: [
    'İlkin qoyuluş üstəgəl hər töhfəniz. Heç bir artım olmadan. Bu, cibinizdən çıxan puldur.',
    'Artım hesablanmış, lakin heç bir çıxılma edilməmiş qalıq. Dördünün ən böyüyü və ən az mənalısı — və məhz bu rəqəmi kalkulyatorların çoxu tək-tənha göstərir.',
    'Eyni qalıq, vergi isə seçdiyiniz vergitutma üsulunun müəyyən etdiyi anlarda tutulub.',
    'Vergidən sonrakı qalıq, bugünkü alıcılıq qabiliyyətinə çevrilmiş. Bu, tətbiqin yuxarısındakı vurğulanan rəqəmdir və bu pulun həqiqətən nə alacağına cavab verən yeganə göstəricidir.',
  ],

  irrTitle: '8. Əsl gəlirlilik',
  irrWhyNot: '«Gəlirlilik (CAGR)» yazısının yanındakı faiz son dəyərin ümumi töhfələrə bölünməsi deyil. Bu qısa yol hər aylıq ödənişə sanki birinci gün qoyulmuş kimi yanaşır və gəlirliliyi ciddi şəkildə aşağı göstərir — aşağıdakı nümunədə o, 4,71 % əvəzinə təxminən 2,6 % göstərərdi.',
  irrBefore: 'Bunun əvəzinə kalkulyator elə bir dərəcə axtarır ki, qoyduğunuz hər şeyin bugünkü dəyəri sonda əldə etdiyiniz dəyərə bərabər olsun. Hər ödəniş əvvəlcə bugünkü pula çevrilir, ona görə cavab vergidən və inflyasiyadan sonrakı real gəlirlilikdir. Əgər c(m) m ayında qoyulan məbləğ, V isə son real qalıqdırsa, aylıq dərəcə x bu tənliyin həllidir:',
  irrAfter: 'Bu tənliyin qapalı formada həlli yoxdur, ona görə ayda −50 % ilə +50 % arasında yarıya bölmə üsulu ilə, interval 10⁻¹²-dən kiçik olana qədər daraldılaraq ədədi şəkildə həll edilir. Sonra aylıq nəticə illik ifadəyə gətirilir:',
  irrNote: 'Bu, daxili gəlirlilik normasıdır — qeyri-bərabər pul axınları olan investisiyaları müqayisə etmək üçün istifadə olunan həmin göstərici. Hər ödənişin nə vaxt edildiyini nəzərə aldığı üçün onu dərc olunmuş illik gəlirliliklə birbaşa müqayisə etmək olar — bu fərqlə ki, buradan vergilər və inflyasiya artıq çıxılıb.',

  rangeTitle: '9. Optimist və pessimist aralıq',
  rangeText: 'Dərəcə aralığını qoşduqda bütün simulyasiya üç dəfə icra olunur: bir dəfə ən aşağı dərəcənizlə, bir dəfə gözlənilənlə, bir dəfə də ən yüksəyi ilə. Qalan hər şey dəyişmir. Bu üç nəticə ehtimal deyil və heç bir etibarlılıq səviyyəsi daşımır; onlar sadəcə eyni planın özünüz seçdiyiniz üç fərqli ehtimal altında nə verdiyini göstərir.',

  exampleTitle: '10. Həll edilmiş nümunə',
  exampleIntro: 'Bunlar tətbiqin ilkin dəyərləridir. Aşağıdakı hər rəqəmi kalkulyatorla yoxlamaq olar və onlar tətbiqin göstərdiyi ilə dəqiq üst-üstə düşür.',
  exampleGivenTitle: 'Verilənlər',
  exampleGivenLabels: [
    'İlkin qoyuluş',
    'Müddət',
    'İllik gəlirlilik',
    'Kapitallaşma',
    'Töhfə',
    'İnflyasiya',
    'Vergi',
  ],
  exampleStepsTitle: 'Birinci il, ay-ay',
  exampleSteps: [
    'Aylıq dərəcə: (1 + 0,08 ÷ 1) 1 ÷ 12 qüvvətində, mənfi 1 = 0,00643403.',
    '1-ci ay: 10 000 × 1,00643403 = 10 064,34, üstəgəl 500 töhfə = 10 564,34.',
    '2-ci ay: 10 564,34 × 1,00643403 = 10 632,31, üstəgəl 500 = 11 132,31.',
    '12-ci aya qədər davam etdikdə qalıq 17 016,94-ə çatır. İl ərzində 6 000 qoydunuz və 10 000 ilə başladınız, deməli mənfəət 17 016,94 − 16 000 = 1 016,94.',
    'Bu mənfəətdən 15 % vergi 152,54 edir, dərhal tutulur və ikinci ilə 16 864,40 keçir.',
  ],
  exampleResultTitle: 'Bütün 15 ildən sonra',
  exampleResultLabels: [
    'Ümumi qoyulan',
    'Nominal dəyər',
    'Vergidən sonra nominal',
    'Bugünkü pulla',
    'İllik real gəlirlilik',
  ],
  exampleClosing: 'Son sətri diqqətlə oxuyun. Siz 100 000 qoyursunuz və 133 640 alıcılıq qabiliyyəti ilə bitirirsiniz. Nominal 200 525 ikiqat artım kimi görünür, lakin vergi ondan 20 663, inflyasiya isə daha 46 222 götürür. Bu kalkulyator məhz bu uçurum üçün mövcuddur.',

  excludedTitle: '11. Model nəyi nəzərə almır',
  excludedIntro: 'Bunlar qəsdən buraxılanlardır. Onları bilirsinizsə, nəticəyə nə qədər etibar etmək olduğunu da bilirsiniz.',
  excluded: [
    'Broker komissiyalarını, platforma haqlarını, fond idarəetmə xərclərini və alış ilə satış qiyməti arasındakı fərqi. Uzun üfüqdə illik 1 % haqq son real dəyərin beşdə birini yeyə bilər.',
    'Proqressiv vergi dərəcələrini, vergidən azad hədləri, zərərin nəzərə alınmasını və vergi güzəştli hesabları. Bütün mənfəətə vahid bir dərəcə tətbiq olunur.',
    'Valyuta mübadiləsini və məzənnə hərəkətini. Bütün rəqəmlər daxil etdiyiniz vahiddədir.',
    'Bazar dalğalanmasını. Gəlirlilik hər ay bərabər hesablanır, ona görə gəlirliliklərin ardıcıllığı riski — uzun investisiyanın sonuna doğru ən çox əhəmiyyət kəsb edən — burada ümumiyyətlə görünmür.',
    'Töhfələrinizin zamanla artmasını, istər inflyasiya ilə, istərsə də gəlirlə.',
    'Çıxarışları, fasilələri və ya müddət bitmədən erkən çıxmanı.',
    'Qiymət artımından ayrı nəzərdən keçirilən dividendləri; daxil edilən gəlirlilik ümumi gəlirlilik sayılır.',
    'Məhz sizin ölkənizə, provayderinizə və ya şəxsi vəziyyətinizə xas olan hər şeyi.',
  ],

  limitsTitle: '12. Bu alətin hüdudları',
  limits: [
    'Bu səhifədəki hər şey ehtimaldır, artıq bir şey deyil. Model daxil etdiyiniz rəqəmlərin nəticələrini sədaqətlə hesablayır; həmin rəqəmlərin real olub-olmaması barədə onun fikri yoxdur və bunu bilməyə imkanı da yoxdur.',
    'Bütün nəticələr təxminidir. Göstərilən dəyərlər oxunaqlılıq üçün yuvarlaqlaşdırılır, daxili hesablama isə tam dəqiqliyi saxlayır, ona görə əl ilə yoxlama son bir-iki rəqəmdə fərqlənə bilər.',
    'Kalkulyator heç bir zəmanət olmadan olduğu kimi təqdim edilir. Onun istifadəsi ilə bağlı hər hansı qərar, itki və ya zərərə görə müəlliflərə və ya naşirə qarşı heç bir iddia qaldırıla bilməz.',
  ],
};
