# Google Play — матеріали для релізу 1.0

Усе, що потрібно вставити в Play Console. Тексти готові до копіювання.

---

## 1. Основні дані

| Поле | Значення |
|---|---|
| Назва застосунку | `Compound Interest Calculator` (28 із 30 дозволених символів) |
| Package name | `com.ihorfinance.compoundcalc` — **змінити після публікації неможливо** |
| Версія | `1.0` (versionCode `1`) |
| Категорія | Finance (Фінанси) |
| Теги | calculator, investing, savings, finance |
| Тип | Безкоштовний, без покупок усередині |
| Віковий рейтинг | Everyone / Для всіх |
| Мінімальна версія Android | 7.0 (API 24) |
| Підтримувані пристрої | телефони, планшети |

Назва на іконці телефона — `Compound Interest` (коротша, щоб не обрізалась).
Це нормально, що вона відрізняється від назви в магазині.

---

## 2. Короткий опис (max 80 символів)

**Рекомендований:**
```
Real compound interest: inflation, taxes and contributions included.
```
*(68 символів)*

Запасні варіанти:
```
See what your savings are really worth after inflation and taxes.
```
*(65 символів)*
```
Compound interest calculator with inflation, tax and monthly top-ups.
```
*(69 символів)*

---

## 3. Повний опис (max 4000 символів)

```
Most compound interest calculators show you a big, comforting number. This one
shows you what that number will actually buy.

Enter your starting amount, how much you add and how often, your expected return,
and the app projects your money year by year — then subtracts inflation and tax so
you see the result in today's money, not tomorrow's.

WHAT MAKES IT DIFFERENT

• Inflation-adjusted results. A projected 500,000 in 25 years is not 500,000 of
  purchasing power. The app shows you both figures side by side, always.
• Taxes on gains. Choose between tax paid every year or once when you cash out —
  the difference over a long horizon is larger than most people expect.
• Real rate of return. The headline percentage is a proper money-weighted return
  (IRR) calculated from your actual contribution schedule, not a shortcut that
  pretends every deposit was made on day one.
• Best case / worst case. Turn on the return range to project pessimistic,
  expected and optimistic scenarios at the same time.

WHAT YOU CAN SET

• Initial deposit and investment period, up to 100 years
• Regular contributions: daily, weekly, monthly, quarterly, semi-annual or annual
• Compounding frequency: daily, monthly, quarterly, semi-annual or annual
• Expected annual return, plus an optional minimum and maximum
• Inflation rate
• Tax rate, charged annually or on exit

WHAT YOU GET

• A clear headline figure: what your money is worth in today's purchasing power
• Four summary tiles: total contributions, nominal value, value after tax, and
  value after tax and inflation
• A growth chart comparing all four lines over the whole period
• A breakdown of where the final amount comes from: your money, growth, and tax
• A full projection table, year by year or month by month, that you can scroll
  and expand

BUILT TO STAY OUT OF YOUR WAY

• Completely free. No ads, no subscriptions, no in-app purchases.
• Works fully offline. There is no server; every calculation runs on your device.
• No account, no sign-up, no email required.
• No data collected. Your inputs are saved on your phone and never leave it.
• 33 languages, with number formatting that follows each locale.
• Light and dark themes.
• Designed for phones and tablets, in both portrait and landscape.

IMPORTANT

This app is an educational and planning tool. It projects mathematical outcomes
from the assumptions you enter — it does not predict markets and it is not
financial, investment or tax advice. Real returns vary, past performance does not
guarantee future results, and tax rules differ by country. Consult a qualified
adviser before making financial decisions.
```

*(≈2 400 символів — вкладаємось із запасом)*

---

## 4. Безпека даних (Data safety)

Найважливіша секція для швидкого проходження перевірки. Для версії 1.0
відповіді такі, і всі вони — правда:

| Питання | Відповідь |
|---|---|
| Чи збирає застосунок дані користувача? | **Ні** |
| Чи передає застосунок дані третім сторонам? | **Ні** |
| Чи шифруються дані при передаванні? | Немає передавання даних |
| Чи можна запросити видалення даних? | Дані не збираються |

Обґрунтування: усі введені значення зберігаються в `localStorage` на самому
пристрої. Мережевих запитів немає взагалі — застосунок працює офлайн.

> ⚠️ Щойно з'явиться реклама AdMob, ці відповіді треба буде змінити.
> Детально — у [ADS.md](ADS.md), розділ 6.

---

## 5. Політика конфіденційності

Play вимагає **публічне посилання**. Воно вже є — вебверсія публікується на
GitHub Pages автоматично:

```
https://ihor-finance.github.io/compound-interest-calculator/#/privacy
```

Перед подачею **перевір, що посилання відкривається** у звичайному браузері.
Якщо GitHub Pages ще не увімкнено: репозиторій → Settings → Pages → Source:
GitHub Actions.

Ті самі сторінки доступні й усередині застосунку внизу екрана.

---

## 6. Графіка

| Матеріал | Розмір | Статус |
|---|---|---|
| Іконка застосунку | 512 × 512 PNG | ✅ `public/web-app-manifest-512x512.png` |
| Feature graphic | 1024 × 500 PNG | ✅ `docs/store-assets/feature-graphic.png` |
| Скриншоти телефона | мін. 2, до 8 | ⚠️ **треба зробити тобі** |
| Скриншоти планшета | необов'язково | опційно, але піднімає позиції |

### Як зробити скриншоти (5 хвилин)

1. Встанови APK на телефон.
2. Зроби знімки цих чотирьох екранів — вони показують саме те, чим застосунок
   відрізняється від конкурентів:
   - **1.** Головний екран із формою й великим результатом угорі
   - **2.** Чотири плитки з підсумками (внески / номінал / після податків / після інфляції)
   - **3.** Графік зростання з усіма лініями
   - **4.** Таблиця прогнозу по роках
3. Не обов'язково нічого домальовувати — Play приймає звичайні знімки екрана.
4. Вимоги: PNG або JPEG, від 320 до 3840 px по кожній стороні, співвідношення не
   більше 2:1. Знімок із будь-якого сучасного телефона підходить.

Порада: перед знімками переклади застосунок англійською — основна аудиторія
Play англомовна, а окремі локалізовані знімки можна додати пізніше.

---

## 7. Ключ підпису (упload key)

Реліз для Play має бути підписаний. Ключ створюєш **ти сам**, щоб пароль знав
тільки ти:

```bash
cd "C:\Disk D\Projects\Calculator\android"
```

```bash
"C:/Android/jdk-21/bin/keytool" -genkeypair -v -keystore upload-keystore.jks -alias upload -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Compound Interest Calculator, O=ihor-finance, C=UA"
```

`keytool` двічі спитає пароль — придумай один і введи його обидва рази.

Далі скопіюй `android/keystore.properties.example` у
`android/keystore.properties` і впиши той самий пароль у поля `storePassword`
та `keyPassword`. Обидва файли (`.jks` і `.properties`) уже в `.gitignore` —
у git вони не потраплять.

Після цього реліз збереться підписаним:

```bash
powershell -ExecutionPolicy Bypass -File scripts/build-android.ps1 -Release
```

Готовий `app-release.aab` з'явиться в папці `release/` — саме його заливають у Play.

> **Про втрату ключа.** Google Play App Signing (увімкнений за замовчуванням для
> всіх нових застосунків) означає, що справжній ключ підпису зберігає Google, а
> в тебе лише *ключ завантаження*. Якщо ти його втратиш — це неприємно, але
> **не фатально**: Google може скинути ключ завантаження за запитом. Усе одно
> зроби копію `upload-keystore.jks` і пароля в надійному місці — відновлення
> займає кілька днів.

---

## 8. Чекліст перед публікацією

- [ ] Акаунт розробника Google Play створено (одноразово $25)
- [ ] Ключ підпису створено, копія збережена окремо
- [ ] `app-release.aab` зібрано і **підписано**
- [ ] APK встановлено на реальний телефон і перевірено
- [ ] Перевірено в горизонтальному положенні
- [ ] Перевірено на планшеті (якщо є)
- [ ] Скриншоти зроблено
- [ ] Feature graphic завантажено
- [ ] Посилання на політику конфіденційності відкривається
- [ ] Секцію Data safety заповнено
- [ ] Анкету вікового рейтингу пройдено
- [ ] Обрано країни розповсюдження
- [ ] Оголошено, що застосунок **не** містить реклами (для 1.0 це правда)

Перша перевірка нового акаунта розробника зазвичай триває **кілька днів**.
Google також вимагає **закрите тестування з 12 тестувальниками протягом 14
днів** перед публічним релізом — це стосується нових особистих акаунтів. Заклади
цей час у план.
