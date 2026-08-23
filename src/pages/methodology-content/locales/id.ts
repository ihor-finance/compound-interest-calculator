import type { MethodologyContent } from '../types';

export const id: MethodologyContent = {
  title: 'Metodologi perhitungan',
  updated: 'Berlaku untuk versi {version}',

  disclaimerTitle: 'Baca ini lebih dulu',
  disclaimer: [
    'Halaman ini ada supaya Anda bisa memeriksa setiap angka yang ditampilkan kalkulator. Di sini tercantum semua rumus, urutan penerapannya, dan sebuah contoh yang dihitung penuh sehingga bisa Anda ulangi dengan kertas dan pena. Ini informasi edukatif tentang cara kerja alat ini — bukan nasihat keuangan, investasi, perpajakan, atau hukum, dan bukan pula rekomendasi untuk membeli, menjual, atau menahan apa pun.',
    'Semua yang dihasilkan kalkulator adalah proyeksi dari asumsi yang Anda masukkan, bukan ramalan. Ia mengandaikan imbal hasil, inflasi, dan tarif pajak yang tetap sepanjang periode. Pasar sungguhan tidak berperilaku demikian. Hasil nyata akan berbeda, dan pada jangka panjang perbedaannya bisa sangat besar.',
    'Angka-angka ini bersifat perkiraan dan disediakan apa adanya, tanpa jaminan apa pun. Setiap keputusan yang Anda ambil setelah memakai kalkulator ini sepenuhnya menjadi tanggung jawab Anda; penulis maupun penerbit tidak menanggung kerugian atau kerusakan apa pun yang timbul darinya. Jika uang itu penting bagi Anda, periksa sendiri angkanya dan bicaralah dengan penasihat bersertifikat di negara Anda.',
  ],

  colSymbol: 'Simbol',
  colMeaning: 'Arti',
  colValue: 'Nilai',
  colFrequency: 'Frekuensi',
  colMonthlyAmount: 'Jumlah yang ditambahkan pada bulan itu',

  inputsTitle: '1. Yang Anda masukkan',
  inputsIntro: 'Hanya nilai-nilai inilah yang dipakai model. Tidak ada yang diambil dari internet dan tidak ada yang diasumsikan atas nama Anda.',
  inputMeanings: [
    'Setoran awal — jumlah yang menjadi titik mulai Anda',
    'Jangka waktu investasi dalam tahun bulat',
    'Imbal hasil tahunan yang diharapkan, dalam persen',
    'Jumlah periode pemajemukan per tahun (harian = 365, bulanan = 12, triwulanan = 4, semesteran = 2, tahunan = 1)',
    'Besar setoran rutin, ditambahkan sesuai frekuensi yang Anda pilih',
    'Inflasi tahunan yang diharapkan, dalam persen',
    'Tarif pajak atas keuntungan, dalam persen',
  ],

  rateTitle: '2. Mengubah tarif Anda menjadi tarif bulanan',
  rateBefore: 'Model bergerak bulan demi bulan, jadi tarif tahunan yang Anda masukkan harus dinyatakan sebagai tarif bulanan yang setara. Tarif Anda dimajemukkan n kali setahun, sehingga tiap periode pemajemukan menghasilkan r ÷ n, dan satu bulan setara dengan n ÷ 12 periode tersebut.',
  rateAfter: 'Pangkat itulah yang menjaga keduanya konsisten: memajemukkan tarif bulanan ini dua belas kali menghasilkan persis tarif tahunan Anda, sehingga angka akhir tahun sama dengan perhitungan tahunan langsung. Dengan 8 % yang dimajemukkan tahunan, tarif bulanannya 0,643403 %.',

  contribTitle: '3. Bagaimana setoran ditambahkan',
  contribIntro: 'Karena model bekerja per bulan, setoran yang lebih sering daripada bulanan diubah menjadi rata-rata bulanan, sedangkan yang lebih jarang hanya ditambahkan pada bulan-bulan saat setoran itu benar-benar jatuh.',
  contribFrequencies: [
    'Tanpa setoran',
    'Harian',
    'Mingguan',
    'Bulanan',
    'Triwulanan',
    'Semesteran',
    'Tahunan',
  ],
  contribNote: 'Merata-ratakan setoran harian dan mingguan menjaga total setahun tetap tepat — 365 setoran harian dan 52 setoran mingguan memang itulah yang benar-benar masuk dalam setahun — dengan konsekuensi selisih bunga beberapa hari di sana-sini. Selisih itu jauh lebih kecil daripada kesalahan menebak imbal hasil Anda sendiri.',

  orderTitle: '4. Yang terjadi setiap bulan',
  orderIntro: 'Setiap dari 12 × Y bulan diproses dengan tiga langkah yang sama, dalam urutan berikut:',
  orderSteps: [
    'Bunga dihitung atas saldo yang dibawa dari bulan lalu.',
    'Setoran Anda untuk bulan ini ditambahkan.',
    'Pajak dipotong, jika bulan ini memang terutang.',
  ],
  orderNote: 'Bunga dihitung sebelum setoran, artinya uang yang Anda masukkan bulan ini belum menghasilkan apa-apa pada bulan yang sama. Ini konvensi anuitas biasa dan sekaligus pilihan yang lebih konservatif: menyetor di awal bulan akan menaikkan angka akhir kira-kira sebesar satu bulan pertumbuhan.',

  taxTitle: '5. Pajak',
  taxIntro: 'Pajak hanya dikenakan atas keuntungan, tidak pernah atas uang yang Anda setorkan. Kapan dipungut, Anda sendiri yang menentukan.',
  taxAnnualLabel: 'Tahunan',
  taxAnnualText: 'Pada akhir setiap bulan kedua belas, keuntungan yang diperoleh selama tahun itu dikenai pajak dan pajaknya langsung dikurangkan dari saldo. Keuntungan adalah saldo saat ini, dikurangi saldo di awal tahun, dikurangi seluruh setoran selama tahun tersebut. Bila tahun itu berakhir rugi, keuntungan menjadi negatif dan tidak ada pajak, tetapi kerugian itu tidak dibawa ke tahun-tahun berikutnya.',
  taxExitLabel: 'Saat pencairan',
  taxExitText: 'Tidak ada potongan sampai bulan terakhir; pada saat itu seluruh keuntungan selama periode penuh dikenai pajak sekaligus. Keuntungan adalah saldo akhir dikurangi semua setoran, termasuk setoran awal.',
  taxNote: 'Pada jangka panjang kedua cara ini berbeda cukup jauh, sebab pajak yang dibayar tiap tahun adalah uang yang berhenti berbunga majemuk. Pada contoh di bawah, pemajakan tahunan menelan sekitar 14 093 — sebaiknya bandingkan keduanya sebelum memutuskan mana yang cocok dengan keadaan Anda.',

  inflationTitle: '6. Inflasi',
  inflationIntro: 'Inflasi tidak dikurangkan dari saldo. Ia diterapkan di akhir, sebagai pengubahan uang masa depan menjadi apa yang bisa dibeli hari ini:',
  inflationNote: 't adalah jumlah tahun yang berlalu, jadi nilai pada bulan m memakai t = m ÷ 12. Inilah sebabnya angka «riil» selalu lebih rendah daripada nominal ketika inflasi di atas nol: uangnya bertambah, tetapi setiap satuannya membeli lebih sedikit.',

  figuresTitle: '7. Empat angka utama',
  figuresIntro: 'Empat kotak di bawah hasil utama adalah empat sudut pandang atas simulasi yang sama. Bedanya hanya pada potongan apa saja yang sudah diterapkan.',
  figureNames: [
    'Total setoran',
    'Nilai nominal',
    'Nominal setelah pajak',
    'Disesuaikan inflasi',
  ],
  figureNotes: [
    'Setoran awal ditambah setiap setoran rutin Anda. Tanpa pertumbuhan apa pun. Inilah uang yang keluar dari kantong Anda.',
    'Saldo dengan pertumbuhan tetapi tanpa potongan apa pun. Yang terbesar dan paling tidak bermakna dari keempatnya — dan justru angka inilah yang ditampilkan sendirian oleh kebanyakan kalkulator.',
    'Saldo yang sama, dengan pajak sudah dipotong pada saat-saat yang ditentukan oleh cara pemajakan pilihan Anda.',
    'Saldo setelah pajak yang diubah ke daya beli hari ini. Inilah angka utama di bagian atas aplikasi dan satu-satunya yang menjawab apa yang sebenarnya bisa dibeli uang itu.',
  ],

  irrTitle: '8. Imbal hasil riil',
  irrWhyNot: 'Persentase di samping «Imbal hasil (CAGR)» bukanlah nilai akhir dibagi total setoran. Jalan pintas itu memperlakukan setiap setoran bulanan seolah diinvestasikan pada hari pertama, sehingga imbal hasilnya jauh terlalu rendah — pada contoh di bawah ia akan menampilkan sekitar 2,6 % alih-alih 4,71 %.',
  irrBefore: 'Sebagai gantinya kalkulator mencari tarif yang membuat nilai sekarang dari semua yang Anda setorkan sama dengan nilai yang akhirnya Anda pegang. Setiap setoran lebih dulu diubah ke uang hari ini, sehingga jawabannya adalah imbal hasil riil, setelah pajak dan setelah inflasi. Dengan c(m) sebagai jumlah yang disetor pada bulan m dan V sebagai saldo riil akhir, tarif bulanan x adalah penyelesaian dari:',
  irrAfter: 'Persamaan itu tidak punya penyelesaian bentuk tertutup, jadi diselesaikan secara numerik dengan metode bagi dua antara −50 % dan +50 % per bulan, menyempitkan selang sampai lebih kecil dari 10⁻¹². Hasil bulanan kemudian disetahunkan:',
  irrNote: 'Inilah tingkat pengembalian internal, ukuran yang sama yang dipakai untuk membandingkan investasi dengan arus kas tak beraturan. Karena memperhitungkan kapan setiap setoran dilakukan, angka ini bisa langsung dibandingkan dengan imbal hasil tahunan yang diiklankan — bedanya, yang ini sudah bersih dari pajak dan inflasi.',

  rangeTitle: '9. Rentang optimistis dan pesimistis',
  rangeText: 'Saat Anda menyalakan rentang imbal hasil, seluruh simulasi dijalankan tiga kali: sekali dengan imbal hasil minimum, sekali dengan yang diharapkan, dan sekali dengan yang maksimum. Selebihnya sama persis. Ketiga hasil itu bukan probabilitas dan tidak memiliki tingkat keyakinan apa pun; keduanya sekadar menunjukkan apa yang dihasilkan rencana yang sama di bawah tiga asumsi yang Anda pilih sendiri.',

  exampleTitle: '10. Contoh yang dihitung penuh',
  exampleIntro: 'Ini nilai bawaan aplikasi. Setiap angka di bawah bisa dihitung ulang dengan kalkulator dan sama persis dengan yang ditampilkan aplikasi.',
  exampleGivenTitle: 'Masukan',
  exampleGivenLabels: [
    'Setoran awal',
    'Jangka waktu',
    'Imbal hasil tahunan',
    'Pemajemukan',
    'Setoran rutin',
    'Inflasi',
    'Pajak',
  ],
  exampleStepsTitle: 'Tahun pertama, bulan demi bulan',
  exampleSteps: [
    'Tarif bulanan: (1 + 0,08 ÷ 1) pangkat 1 ÷ 12, dikurangi 1 = 0,00643403.',
    'Bulan 1: 10 000 × 1,00643403 = 10 064,34, ditambah setoran 500 = 10 564,34.',
    'Bulan 2: 10 564,34 × 1,00643403 = 10 632,31, ditambah 500 = 11 132,31.',
    'Diteruskan sampai bulan 12, saldo mencapai 17 016,94. Sepanjang tahun Anda menyetor 6 000 dan memulai dengan 10 000, jadi keuntungannya 17 016,94 − 16 000 = 1 016,94.',
    'Pajak 15 % atas keuntungan itu sebesar 152,54, langsung dipotong, menyisakan 16 864,40 untuk dibawa ke tahun kedua.',
  ],
  exampleResultTitle: 'Setelah 15 tahun penuh',
  exampleResultLabels: [
    'Total setoran',
    'Nilai nominal',
    'Nominal setelah pajak',
    'Dalam uang hari ini',
    'Imbal hasil riil per tahun',
  ],
  exampleClosing: 'Bacalah baris terakhir itu baik-baik. Anda menyetor 100 000 dan berakhir dengan daya beli setara 133 640. Angka nominal 200 525 tampak seperti berlipat dua, tetapi pajak mengambil 20 663 dan inflasi mengambil 46 222 lagi. Selisih itulah alasan keberadaan kalkulator ini.',

  excludedTitle: '11. Yang tidak dimasukkan model',
  excludedIntro: 'Ini kelalaian yang disengaja. Mengetahuinya memberi tahu Anda sejauh mana hasilnya bisa dipercaya.',
  excluded: [
    'Komisi broker, biaya platform, biaya pengelolaan dana, dan selisih harga beli-jual. Pada jangka panjang, biaya 1 % per tahun bisa melahap seperlima nilai riil akhir.',
    'Lapisan tarif progresif, penghasilan tidak kena pajak, kompensasi kerugian, dan rekening berfasilitas pajak. Satu tarif tetap diterapkan pada seluruh keuntungan.',
    'Konversi mata uang dan pergerakan kurs. Semua angka dalam satuan yang Anda masukkan.',
    'Gejolak pasar. Imbal hasil diterapkan merata setiap bulan, sehingga risiko urutan imbal hasil — yang paling menentukan menjelang akhir investasi panjang — tidak terlihat di sini.',
    'Kenaikan setoran Anda seiring waktu, baik mengikuti inflasi maupun mengikuti penghasilan.',
    'Penarikan, jeda, atau keluar lebih awal sebelum periode berakhir.',
    'Dividen yang diperlakukan terpisah dari kenaikan harga; imbal hasil yang Anda masukkan dianggap sebagai imbal hasil total.',
    'Segala hal yang khas bagi negara Anda, penyedia jasa Anda, atau keadaan pribadi Anda.',
  ],

  limitsTitle: '12. Batas alat ini',
  limits: [
    'Semua yang ada di halaman ini adalah asumsi, tidak lebih. Model menghitung dengan setia akibat dari angka yang Anda ketikkan; ia tidak berpendapat apakah angka itu masuk akal, dan memang tidak punya cara untuk tahu.',
    'Semua hasil bersifat perkiraan. Nilai yang ditampilkan dibulatkan agar mudah dibaca, sedangkan perhitungan di dalamnya menjaga ketelitian penuh, sehingga pemeriksaan manual bisa berbeda pada satu atau dua digit terakhir.',
    'Kalkulator ini disediakan apa adanya, tanpa jaminan apa pun. Tidak ada tuntutan yang dapat diajukan kepada penulis maupun penerbit atas keputusan, kerugian, atau kerusakan apa pun yang berkaitan dengan penggunaannya.',
  ],
};
