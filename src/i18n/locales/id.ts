import type { TranslationKeys } from '../types';

export const id: TranslationKeys = {
  app: {
    title: 'Bunga Majemuk',
    subtitle: 'Kalkulator',
    calculator: 'Kalkulator',
    scenarios: 'Skenario',
    settings: 'Pengaturan',
    theme: 'Tema',
    themeLight: 'Tema terang',
    themeDark: 'Tema gelap',
    presets: 'Preset',
    conservative: 'Konservatif',
    balanced: 'Seimbang',
    aggressive: 'Agresif',
  },

  form: {
    noContribution: 'Tanpa setoran rutin',
    initialDeposit: 'Setoran awal',
    period: 'Jangka waktu investasi',
    years: 'tahun',
    annualReturn: 'Imbal hasil tahunan',
    rateRange: 'Rentang imbal hasil',
    minReturn: 'Imbal hasil min.',
    maxReturn: 'Imbal hasil maks.',
    compounding: 'Frekuensi pemajemukan',
    compoundingDaily: 'Harian',
    compoundingWeekly: 'Mingguan',
    compoundingMonthly: 'Bulanan',
    compoundingQuarterly: 'Triwulanan',
    compoundingSemiannual: 'Semesteran',
    compoundingAnnually: 'Tahunan',
    contributions: 'Setoran rutin',
    contributionsMonthly: 'Bulanan',
    inflation: 'Inflasi',
    taxRate: 'Tarif pajak',
    taxation: 'Pemungutan pajak',
    taxAnnual: 'Tahunan',
    taxOnExit: 'Saat pencairan',
  },

  hero: {
    badge: 'Hasil utama',
    badgeWarning: 'Hasil utama',
    title: 'Daya beli riil dalam {years} tahun',
    descriptionPositive: 'Dari {contributions} yang Anda setorkan, Anda akan memiliki setara {result} dalam nilai uang hari ini — itu {delta} lebih banyak daripada yang Anda investasikan, bahkan setelah pajak dan inflasi.',
    descriptionNegative: 'Dari {contributions} yang Anda setorkan, Anda hanya akan memiliki setara {result} dalam nilai uang hari ini — itu {delta} lebih sedikit daripada yang Anda investasikan. Inflasi dan pajak menggerus lebih banyak daripada yang dihasilkan investasi.',
    descriptionNeutral: 'Dari {contributions} yang Anda setorkan, Anda akan memiliki setara sekitar {result} dalam nilai uang hari ini — investasi ini nyaris hanya menutup kerugian akibat pajak dan inflasi.',
    totalReturn: 'total imbal hasil',
  },

  metrics: {
    cagrLabel: 'Imbal hasil (CAGR)',
    netEffectLabel: 'efek bersih',
    rangeLabel: 'Rentang',
  },

  satellites: {
    totalContributions: 'Total setoran',
    nominalValue: 'Nilai nominal',
    nominalAfterTax: 'Nominal setelah pajak',
    withInflation: 'Disesuaikan inflasi',

    subtitleContributions: 'Total yang diinvestasikan selama periode — setoran awal ditambah semua setoran rutin.',
    subtitleNominal: 'Hasil investasi sebelum pajak, dalam nilai nominal.',
    subtitleAfterTax: 'Laba bersih (laba nominal dikurangi pajak).',
    subtitleInflation: 'Nilai masa depan dalam uang hari ini. Menunjukkan berapa daya beli investasi Anda setelah disesuaikan dengan inflasi.',
  },

  deltas: {
    nominalLine1: 'Laba investasi: uang Anda menghasilkan {delta} di atas yang Anda setorkan — itu {pct} dari total setoran.',
    nominalFormula: '{nominal} (nominal) − {contributions} (setoran) = {deltaSigned}',
    nominalFormulaPercent: '{delta} ÷ {contributions} × 100 = {pct}',

    taxLine1: 'Dampak pajak: pajak mengurangi total sebesar {delta} — itu {pct} dari nilai nominal.',
    taxFormula: '{afterTax} (setelah pajak) − {nominal} (sebelum pajak) = {deltaSigned}',
    taxFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',

    inflationLine1: 'Dampak inflasi: selama {years} tahun dengan inflasi {rate}%, uang kehilangan {delta} daya beli — itu {pct} dari nilai nominal.',
    inflationFormula: '{withInflation} (nilai riil) − {nominal} (nominal) = {deltaSigned}',
    inflationFormulaPercent: '{delta} ÷ {nominal} × 100 = {pct}',
  },

  heroReturn: {
    positive: 'Total pertumbuhan riil: setoran Anda ({contributions}) tumbuh menjadi {result} dalam nilai uang hari ini — itu {pct} laba bersih setelah pajak dan inflasi.',
    negative: 'Total kerugian riil: setoran Anda ({contributions}) hanya akan bernilai {result} dalam nilai uang hari ini — itu {pct}. Inflasi dan pajak menggerus lebih banyak daripada yang dihasilkan investasi.',
  },

  chart: {
    title: 'Grafik pertumbuhan',
    scenarios: 'Skenario',
    nominal: 'Nominal',
    withInflation: 'Disesuaikan inflasi',
    afterTaxAndInflation: 'Setelah pajak & inflasi',
    contributions: 'Setoran',
    rateRange: 'Rentang imbal hasil',
    optimistic: 'Optimistis',
    pessimistic: 'Pesimistis',
    disclaimer: 'Perhitungan bersifat perkiraan dan ilustratif. Hasil sebenarnya dapat berbeda karena perubahan suku bunga, inflasi, peraturan perpajakan, biaya, dan faktor pasar lainnya.',
  },

  donut: {
    title: 'Struktur investasi',
    percent: 'Persen',
    amount: 'Jumlah',
    initialDeposit: 'Setoran awal',
    contributions: 'Setoran rutin',
    netProfit: 'Laba bersih setelah pajak',
    taxesPaid: 'Pajak dibayar',
    disclaimer: 'Rincian perkiraan. Nilai sebenarnya bergantung pada instrumen yang dipilih, tarif pajak, dan ketentuan yang berlaku.',
    warningNegativeProfit: '* Laba bersih negatif — investasi tidak menutupi inflasi secara riil.',
  },

  table: {
    yearLabel: 'Tahun {n}',
    monthLabel: 'Bulan {n}',
    start: 'Awal',
    title: 'Tabel proyeksi',
    monthly: 'Bulanan',
    yearly: 'Tahunan',
    expand: 'Perluas',
    showAll: 'Tampilkan semua {n} baris',
    hiddenRows: '{n} disembunyikan',
    close: 'Tutup',
    collapse: 'Ciutkan',
    period: 'Periode',
    contributions: 'Setoran',
    nominalValue: 'Nilai nominal',
    withInflation: 'Disesuaikan inflasi',
    nominalAfterTax: 'Nominal setelah pajak',
    afterTaxAndInflation: 'Setelah pajak & inflasi',
    taxesPaid: 'Pajak dibayar',
    min: 'Min',
    base: 'Dasar',
    max: 'Maks',
    swipeHint: '← geser →',
  },

  warnings: {
    inflationExceeds: 'Imbal hasil tidak menutupi inflasi.',
    inflationExceedsDetail: 'Dengan parameter saat ini (imbal hasil {rate}%, inflasi {inflation}%) investasi Anda tidak tumbuh secara riil. Pertimbangkan instrumen dengan imbal hasil lebih tinggi atau turunkan perkiraan inflasi.',
    negativeCagr: 'CAGR negatif berarti inflasi dan pajak menggerus lebih banyak daripada yang dihasilkan investasi.',
    negativeRateRange: 'Anda sedang memodelkan skenario kerugian pasar. Hasil pesimistis pada grafik menunjukkan apa yang terjadi jika imbal hasil turun menjadi {minRate}% per tahun.',
  },

  disclaimer: {
    title: 'Tentang hasil ini',
    text: 'Angka di atas menunjukkan perkiraan daya beli riil investasi Anda setelah membayar pajak penghasilan. Perhitungan bersifat informatif dan tidak memperhitungkan kemungkinan perubahan kondisi pasar, suku bunga, dan peraturan.',
    warning: 'Ini bukan nasihat investasi.',
    pastResults: 'Kinerja masa lalu tidak menjamin hasil di masa depan.',
  },

  footer: {
    developer: 'Dikembangkan oleh',
    copyright: '© {year} Seluruh hak cipta dilindungi.',
    disclaimer: 'Bukan nasihat keuangan.',
    privacy: 'Privasi',
    terms: 'Ketentuan',
    methodology: 'Metodologi',
  },

  tooltips: {
    initialDeposit: 'Jumlah yang Anda investasikan di awal.',
    period: 'Berapa tahun Anda berencana mempertahankan investasi ini.',
    annualReturn: 'Perkiraan imbal hasil tahunan dalam persen dari investasi Anda.',
    rateRange: 'Aktifkan untuk memodelkan skenario optimistis dan pesimistis dengan imbal hasil berbeda.',
    compounding: 'Seberapa sering bunga yang diperoleh ditambahkan ke saldo dan mulai menghasilkan bunga sendiri.',
    contributions: 'Setoran tambahan rutin di luar investasi awal.',
    inflation: 'Perkiraan laju tahunan kenaikan harga yang membuat uang kehilangan daya beli.',
    taxRate: 'Persentase laba investasi yang dipotong pajak.',
    taxation: 'Kapan pajak dibayar: tahunan (setiap tahun atas laba tahun itu) atau saat pencairan (sekali, ketika Anda menarik dana).',

    totalContributions: 'Total yang akan Anda investasikan: setoran awal ditambah semua setoran rutin selama periode.',
    nominalValue: 'Tabungan Anda tanpa pajak atau inflasi. Ini hasil murni bunga majemuk — yang akan Anda miliki di dunia ideal tanpa biaya apa pun.',
    nominalAfterTax: 'Yang tersisa setelah membayar pajak penghasilan. Inflasi TIDAK diperhitungkan — ini angka nominal seperti yang tampak di rekening Anda.',
    withInflation: 'Berapa daya beli uang Anda dalam {years} tahun setelah disesuaikan dengan inflasi. Pajak TIDAK diperhitungkan — dampaknya ditampilkan pada kartu sebelumnya.',

    cagr: 'CAGR (tingkat pertumbuhan tahunan majemuk) — rata-rata imbal hasil riil tahunan setelah pajak dan inflasi. Menjawab pertanyaan: "Berapa persen daya beli saya tumbuh setiap tahun?" CAGR negatif berarti inflasi menggerus laba lebih cepat daripada yang dihasilkan investasi.',
    netEffect: 'Selisih antara daya beli riil Anda di akhir periode dan total yang Anda investasikan. Sederhananya: berapa banyak lebih (atau kurang) "uang hari ini" yang Anda miliki di akhir dibandingkan yang Anda setorkan.',
    range: 'Batas kemungkinan hasil Anda: dari pesimistis (imbal hasil lebih rendah) hingga optimistis (imbal hasil lebih tinggi). Membantu menilai ketidakpastian proyeksi — hasil nyata kemungkinan besar berada dalam rentang ini.',
    minReturn: 'Imbal hasil tahunan terburuk yang Anda perkirakan.',
    maxReturn: 'Imbal hasil tahunan terbaik yang Anda perkirakan.',
  },

  legal: {
    backToCalculator: 'Kembali ke kalkulator',
    privacyTitle: 'Kebijakan Privasi',
    termsTitle: 'Ketentuan Penggunaan',
    lastUpdated: 'Terakhir diperbarui: {date}',
    contact: 'Hubungi kami di {email}.',
  },
};
