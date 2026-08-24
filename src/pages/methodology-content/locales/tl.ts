import type { MethodologyContent } from '../types';

export const tl: MethodologyContent = {
  title: 'Metodolohiya ng pagkalkula',
  updated: 'Naaangkop sa bersyon {version}',

  disclaimerTitle: 'Basahin muna ito',
  disclaimer: [
    'Umiiral ang pahinang ito upang mapatunayan mo ang bawat bilang na ipinapakita ng calculator. Nakalatag dito ang lahat ng pormula, ang pagkakasunod-sunod ng paggamit ng mga ito, at isang halimbawang nalutas hanggang dulo na maaari mong ulitin gamit ang papel at lapis. Impormasyong pang-edukasyon ito tungkol sa kung paano gumagana ang kasangkapan — hindi ito payo sa pananalapi, pamumuhunan, buwis o batas, at hindi rekomendasyong bumili, magbenta o humawak ng anuman.',
    'Ang lahat ng ibinibigay ng calculator ay proyeksyon batay sa mga palagay na ipinapasok mo, hindi hula. Ipinapalagay nito na mananatiling pare-pareho ang kita, ang implasyon at ang antas ng buwis sa buong panahon. Hindi ganito kumilos ang tunay na pamilihan. Mag-iiba ang aktwal na resulta, at sa mahabang panahon ay maaaring napakalaki ng pagkakaiba.',
    'Tinatayang bilang lamang ang mga ito at ibinibigay nang walang anumang garantiya. Sarili mong pasya ang anumang desisyong gagawin mo pagkatapos gamitin ang calculator na ito, at hindi mananagot ang mga may-akda o ang naglathala sa anumang pagkalugi o pinsalang mabubuo dito. Kung mahalaga sa iyo ang pera, kalkulahin mong muli ang mga bilang at kumonsulta sa isang kwalipikadong propesyonal sa iyong bansa.',
  ],

  colSymbol: 'Simbolo',
  colMeaning: 'Kahulugan',
  colValue: 'Halaga',
  colFrequency: 'Dalas',
  colMonthlyAmount: 'Halagang idinagdag sa buwang iyon',

  inputsTitle: '1. Ano ang ipinapasok mo',
  inputsIntro: 'Ito lamang ang mga halagang ginagamit ng modelo. Walang kinukuha mula sa internet at walang ipinapalagay para sa iyo.',
  inputMeanings: [
    'Panimulang deposito — ang halagang pinagsisimulan mo',
    'Tagal ng pamumuhunan sa buong taon',
    'Inaasahang taunang kita, sa porsiyento',
    'Bilang ng compounding sa isang taon (araw-araw = 365, buwanan = 12, kada quarter = 4, kada anim na buwan = 2, taunan = 1)',
    'Laki ng regular na kontribusyon, idinaragdag sa dalas na pipiliin mo',
    'Inaasahang taunang implasyon, sa porsiyento',
    'Antas ng buwis sa tubo, sa porsiyento',
  ],

  rateTitle: '2. Pagpapalit ng iyong rate sa buwanan',
  rateBefore: 'Buwan-buwan ang paggalaw ng modelo, kaya ang taunang rate na ipinapasok mo ay kailangang ipahayag bilang katumbas na buwanang rate. Nag-compound ang rate mo nang n beses sa isang taon, kaya bawat panahon ng compounding ay nagbibigay ng r ÷ n, at ang isang buwan ay n ÷ 12 ng gayong panahon.',
  rateAfter: 'Ang eksponent mismo ang nagpapanatiling magkatugma ang dalawa: kung i-compound mo ang buwanang rate na ito nang labindalawang beses, makukuha mo mismo ang taunang rate mo, kaya tumutugma ang mga bilang sa katapusan ng taon sa tuwirang taunang pagkalkula. Sa 8 % na may taunang compounding, ang buwanang rate ay 0,643403 %.',

  contribTitle: '3. Paano idinaragdag ang mga kontribusyon',
  contribIntro: 'Dahil buwanan ang batayan ng modelo, ang mga kontribusyong mas madalas kaysa buwanan ay ginagawang katamtamang halaga bawat buwan, samantalang ang mas madalang ay idinaragdag lamang sa mga buwang talagang bumabagsak.',
  contribFrequencies: [
    'Walang kontribusyon',
    'Araw-araw',
    'Lingguhan',
    'Buwanan',
    'Kada quarter',
    'Kada anim na buwan',
    'Taunan',
  ],
  contribNote: 'Ang pag-aaverage ng araw-araw at lingguhang kontribusyon ay nagpapanatiling tumpak ang kabuuan sa isang taon — tunay ngang pumapasok ang 365 pang-araw-araw o 52 lingguhang bayad — kapalit ng ilang araw na interes dito at doon. Higit na maliit ang pagkakaibang ito kaysa sa maling hula mo sa sarili mong kita.',

  orderTitle: '4. Ano ang nangyayari bawat buwan',
  orderIntro: 'Bawat isa sa 12 × Y na buwan ay dumaraan sa parehong tatlong hakbang, sa ganitong pagkakasunod:',
  orderSteps: [
    'Kinakalkula ang interes sa balanseng dala mula noong nakaraang buwan.',
    'Idinaragdag ang kontribusyon mo para sa buwang ito.',
    'Ibinabawas ang buwis, kung may kabayaran sa buwang ito.',
  ],
  orderNote: 'Kinakalkula ang interes bago ang kontribusyon, ibig sabihin ay walang kinikita ang bayad ngayong buwan sa loob ng parehong buwan. Ito ang karaniwang kasunduan sa annuity na binabayaran sa katapusan ng panahon at siya ring mas maingat na pagpili: ang bayad sa simula ng buwan ay magtataas sa panghuling bilang nang halos isang buwang paglago.',

  taxTitle: '5. Buwis',
  taxIntro: 'Sa tubo lamang ipinapataw ang buwis, hindi kailanman sa perang inilalagay mo. Ikaw ang pumipili kung kailan ito ibabawas.',
  taxAnnualLabel: 'Taun-taon',
  taxAnnualText: 'Sa katapusan ng bawat ikalabindalawang buwan, binubuwisan ang tubong nakamit sa taong iyon at kaagad na inaalis ang buwis sa balanse. Ang tubo ay ang kasalukuyang balanse, bawas ang balanse sa simula ng taon, bawas ang lahat ng inilagay mo sa loob ng taon. Kung nagtapos ang taon sa lugi, negatibo ang tubo at walang buwis, ngunit hindi dinadala ang luging iyon upang ibawas sa mga susunod na taon.',
  taxExitLabel: 'Sa paglabas',
  taxExitText: 'Walang ibinabawas hanggang sa huling buwan; doon binubuwisan nang sabay-sabay ang buong tubo ng buong panahon. Ang tubo ay ang panghuling balanse bawas ang lahat ng kontribusyon, kasama ang panimulang deposito.',
  taxNote: 'Sa mahabang panahon, malaki ang pagkakaiba ng dalawang paraang ito, dahil ang buwis na binabayaran taun-taon ay perang tumitigil sa paglago. Sa halimbawa sa ibaba, umaabot sa mga 14 093 ang halaga ng taunang pagbubuwis — sulit na ihambing ang dalawa bago magpasya kung alin ang bagay sa sitwasyon mo.',

  inflationTitle: '6. Implasyon',
  inflationIntro: 'Hindi ibinabawas ang implasyon sa balanse. Inilalapat ito sa dulo, bilang pagpapalit ng perang panghinaharap sa kung ano ang mabibili nito ngayon:',
  inflationNote: 'Ang t ay bilang ng taong lumipas, kaya ang halaga sa buwang m ay gumagamit ng t = m ÷ 12. Kaya nga laging mas mababa ang «totoong» bilang kaysa sa nominal sa oras na lumampas sa sero ang implasyon: dumarami ang pera, ngunit mas kaunti ang nabibili ng bawat yunit.',

  figuresTitle: '7. Ang apat na pangunahing bilang',
  figuresIntro: 'Ang mga tile sa ilalim ng pangunahing resulta ay apat na tingin sa iisang simulasyon. Nagkakaiba lamang sila sa kung aling mga bawas ang naisagawa na.',
  figureNames: [
    'Kabuuang inilagay',
    'Nominal na halaga',
    'Nominal pagkatapos ng buwis',
    'Isinaayos sa implasyon',
  ],
  figureNotes: [
    'Ang panimulang deposito kasama ang bawat kontribusyon mo. Walang anumang paglago. Ito ang perang lumalabas sa bulsa mo.',
    'Ang balanseng may nakalkulang paglago ngunit walang anumang bawas. Ang pinakamalaki at pinakakaunti ang saysay sa apat — at ito mismo ang bilang na ipinapakita ng karamihan sa mga calculator nang mag-isa.',
    'Ang parehong balanse, na may buwis na ibinawas sa mga sandaling itinatakda ng piniling paraan ng pagbubuwis.',
    'Ang balanse pagkatapos ng buwis, isinalin sa kapangyarihang bumili ngayon. Ito ang naka-highlight na bilang sa itaas ng app at ang tanging sumasagot kung ano talaga ang mabibili ng perang iyon.',
  ],

  irrTitle: '8. Ang tunay na kita',
  irrWhyNot: 'Ang porsiyentong katabi ng label na «Kita (CAGR)» ay hindi ang panghuling halagang hinati sa kabuuang kontribusyon. Itinuturing ng daanang-ikli na iyon ang bawat buwanang bayad na para bang inilagay noong unang araw, at malubhang minamaliit nito ang kita — sa halimbawa sa ibaba, mga 2,6 % ang ipapakita nito sa halip na 4,71 %.',
  irrBefore: 'Sa halip, hinahanap ng calculator ang rate kung saan ang kasalukuyang halaga ng lahat ng inilagay mo ay katumbas ng halagang natatapos mo. Isinasalin muna sa perang pangkasalukuyan ang bawat bayad, kaya tunay na kita ang sagot, pagkatapos ng buwis at pagkatapos ng implasyon. Kung c(m) ang halagang inilagay sa buwang m at V ang panghuling tunay na balanse, ang buwanang rate na x ay solusyon ng:',
  irrAfter: 'Walang saradong-anyong solusyon ang ekwasyong ito, kaya nilulutas ito nang numeriko sa pamamagitan ng paghahati sa dalawa mula −50 % hanggang +50 % kada buwan, hanggang sa lumiit ang agwat nang mas mababa sa 10⁻¹². Pagkatapos ay ginagawang taunan ang buwanang resulta:',
  irrNote: 'Ito ang internal rate of return — ang parehong sukat na ginagamit sa paghahambing ng mga puhunang may hindi pantay na daloy ng pera. Dahil isinasaalang-alang nito kung kailan ginawa ang bawat bayad, tuwiran itong maihahambing sa isang inilathalang taunang kita — sa pagkakaibang naalis na rito ang buwis at ang implasyon.',

  rangeTitle: '9. Ang maasahin at mapangambang saklaw',
  rangeText: 'Kapag binuksan mo ang saklaw ng rate, tatlong ulit tumatakbo ang buong simulasyon: isang beses sa pinakamababang rate mo, isang beses sa inaasahan, at isang beses sa pinakamataas. Nananatiling pareho ang lahat ng iba pa. Hindi mga probabilidad ang tatlong resultang ito at wala silang dalang antas ng kumpiyansa; ipinapakita lamang nila kung ano ang idudulot ng parehong plano sa ilalim ng tatlong magkaibang palagay na ikaw mismo ang pumili.',

  exampleTitle: '10. Halimbawang nalutas',
  exampleIntro: 'Ito ang mga paunang halaga ng app. Maaaring suriin gamit ang calculator ang bawat bilang sa ibaba at eksaktong tumutugma ang mga ito sa ipinapakita ng app.',
  exampleGivenTitle: 'Ibinigay',
  exampleGivenLabels: [
    'Panimulang deposito',
    'Tagal',
    'Taunang kita',
    'Compounding',
    'Kontribusyon',
    'Implasyon',
    'Buwis',
  ],
  exampleStepsTitle: 'Unang taon, buwan-buwan',
  exampleSteps: [
    'Buwanang rate: (1 + 0,08 ÷ 1) sa kapangyarihang 1 ÷ 12, bawas 1 = 0,00643403.',
    'Buwan 1: 10 000 × 1,00643403 = 10 064,34, dagdag ang 500 na kontribusyon = 10 564,34.',
    'Buwan 2: 10 564,34 × 1,00643403 = 10 632,31, dagdag ang 500 = 11 132,31.',
    'Sa pagpapatuloy hanggang buwan 12, umaabot sa 17 016,94 ang balanse. Sa loob ng taon ay naglagay ka ng 6 000 at nagsimula sa 10 000, kaya ang tubo ay 17 016,94 − 16 000 = 1 016,94.',
    'Ang 15 % na buwis sa tubong ito ay 152,54, agad itong ibinabawas, at 16 864,40 ang dinadala sa ikalawang taon.',
  ],
  exampleResultTitle: 'Pagkatapos ng buong 15 taon',
  exampleResultLabels: [
    'Kabuuang inilagay',
    'Nominal na halaga',
    'Nominal pagkatapos ng buwis',
    'Sa perang pangkasalukuyan',
    'Tunay na kita bawat taon',
  ],
  exampleClosing: 'Basahing mabuti ang huling linya. Naglalagay ka ng 100 000 at nagtatapos sa kapangyarihang bumili ng 133 640. Mukhang doble ang nominal na 200 525, ngunit kinukuha rito ng buwis ang 20 663 at ng implasyon ang dagdag na 46 222. Dahil mismo sa agwat na ito umiiral ang calculator na ito.',

  excludedTitle: '11. Ano ang hindi kasama sa modelo',
  excludedIntro: 'Sinasadya ang mga pagkakaligtaan na ito. Kapag alam mo ang mga ito, alam mo rin kung gaano mapagkakatiwalaan ang resulta.',
  excluded: [
    'Komisyon ng broker, bayad sa plataporma, gastos sa pamamahala ng pondo, at ang agwat sa pagitan ng presyo ng bili at benta. Sa mahabang panahon, kayang kainin ng 1 % taunang bayad ang ikalima ng panghuling tunay na halaga.',
    'Progresibong antas ng buwis, bahaging hindi bubuwisan, pagbawas ng lugi, at mga account na may pinababang buwis. Iisang patag na antas ang ipinapataw sa buong tubo.',
    'Palitan ng salapi at galaw ng halaga nito. Nasa yunit na ipinasok mo ang lahat ng bilang.',
    'Pagbabago-bago ng pamilihan. Pantay na idinaragdag ang kita bawat buwan, kaya ang panganib ng pagkakasunod-sunod ng kita — ang pinakamabigat sa pagtatapos ng mahabang pamumuhunan — ay hindi man lamang makikita rito.',
    'Anumang paglaki ng iyong kontribusyon sa paglipas ng panahon, kasabay man ng implasyon o ng kita.',
    'Mga pag-withdraw, pahinga, o maagang paglabas bago matapos ang panahon.',
    'Mga dibidendong tinitingnan nang hiwalay sa paglago ng presyo; itinuturing na kabuuang kita ang ipinasok mong kita.',
    'Anumang natatangi sa iyong bansa, sa iyong tagapaglaan, o sa iyong personal na kalagayan.',
  ],

  limitsTitle: '12. Ang mga hangganan ng kasangkapang ito',
  limits: [
    'Palagay lamang ang lahat sa pahinang ito at wala nang iba. Tapat na kinakalkula ng modelo ang bunga ng mga bilang na isinulat mo; wala itong opinyon kung makatotohanan ang mga bilang na iyon at wala rin itong paraan upang malaman.',
    'Tinatayang bilang ang lahat ng resulta. Binibilog ang ipinapakitang halaga para sa kadalian ng pagbasa, samantalang buong-tumpak ang panloob na pagkalkula, kaya maaaring magkaiba nang huling isa o dalawang digit ang pagsusuri sa kamay.',
    'Ibinibigay ang calculator nang walang anumang garantiya. Walang anumang paghahabol na maaaring iharap laban sa mga may-akda o sa naglathala para sa anumang desisyon, pagkalugi o pinsalang may kaugnayan sa paggamit nito.',
  ],
};
