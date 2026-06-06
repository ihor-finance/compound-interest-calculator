import { useTranslation } from '../i18n/useTranslation';
import { LegalPageLayout } from './LegalPageLayout';

interface Props {
  
}

const content = {
  uk: {
    title: "Політика конфіденційності",
    updated: "Останнє оновлення: червень 2026",
    h1: "Загальні положення",
    p1: "Цей документ описує, як веб-додаток «Складний відсоток» (далі — Сервіс) обробляє інформацію під час вашого використання калькулятора. Сервіс розроблено та підтримується Redempsly.",
    h2: "Які дані ми збираємо",
    p2: "Ми НЕ збираємо персональних даних. Сервіс працює повністю на стороні вашого браузера (client-side). Числа, які ви вводите в калькулятор (суми внесків, ставки, період тощо), обробляються локально на вашому пристрої і не передаються на жодний сервер.",
    h3: "Автоматично зібрана технічна інформація",
    p3: "Під час відвідування Сервісу наш хостинг-провайдер може автоматично фіксувати:",
    l3_1: "IP-адресу (в анонімізованій формі);",
    l3_2: "тип браузера та операційної системи;",
    l3_3: "дату та час відвідування;",
    l3_4: "сторінки, які ви переглядали.",
    p4: "Ця інформація використовується виключно для забезпечення працездатності Сервісу та аналізу загальної відвідуваності. Вона не прив'язується до конкретної особи.",
    h4: "Файли cookie",
    p5: "Сервіс може використовувати технічні файли cookie для збереження ваших налаштувань (обрана мова, тема інтерфейсу). Детальніше — у Політиці Cookie.",
    h5: "Аналітика",
    p6: "Сервіс може використовувати сторонні інструменти веб-аналітики (наприклад, Google Analytics або аналогічні) для розуміння того, як відвідувачі взаємодіють із Сервісом. Ці інструменти збирають анонімізовану статистику без ідентифікації конкретних користувачів.",
    h6: "Передача даних третім особам",
    p7: "Ми не продаємо, не обмінюємо та не передаємо будь-яку інформацію третім особам, за винятком випадків, передбачених законодавством.",
    h7: "Безпека",
    p8: "Оскільки Сервіс не збирає персональних даних, ризики для вашої приватності мінімальні. Сервіс доступний через захищене з'єднання (HTTPS).",
    h8: "Зміни до цієї політики",
    p9: "Ми можемо оновлювати цю Політику конфіденційності час від часу. Актуальна версія завжди доступна на цій сторінці з вказаною датою останнього оновлення.",
    h9: "Контакти",
    p10: "Якщо у вас є питання щодо цієї Політики — зверніться до нас через pokhyton.i@gmail.com."
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: June 2026",
    h1: "General Provisions",
    p1: "This document describes how the \"Compound Interest\" web application (hereinafter - the Service) processes information during your use of the calculator. The Service is developed and maintained by Redempsly.",
    h2: "What Data We Collect",
    p2: "We DO NOT collect personal data. The Service runs entirely on your browser (client-side). The numbers you enter into the calculator (contributions, rates, periods, etc.) are processed locally on your device and are not transmitted to any server.",
    h3: "Automatically Collected Technical Information",
    p3: "When visiting the Service, our hosting provider may automatically record:",
    l3_1: "IP address (in anonymized form);",
    l3_2: "browser type and operating system;",
    l3_3: "date and time of visit;",
    l3_4: "pages you viewed.",
    p4: "This information is used exclusively to ensure the functionality of the Service and analyze overall traffic. It is not linked to any specific individual.",
    h4: "Cookies",
    p5: "The Service may use technical cookies to save your preferences (selected language, interface theme). For details, see the Cookie Policy.",
    h5: "Analytics",
    p6: "The Service may use third-party web analytics tools (e.g., Google Analytics or similar) to understand how visitors interact with the Service. These tools collect anonymized statistics without identifying specific users.",
    h6: "Data Transfer to Third Parties",
    p7: "We do not sell, trade, or transfer any information to third parties, except as required by law.",
    h7: "Security",
    p8: "Since the Service does not collect personal data, risks to your privacy are minimal. The Service is accessible via a secure connection (HTTPS).",
    h8: "Changes to this Policy",
    p9: "We may update this Privacy Policy from time to time. The current version is always available on this page with the indicated date of the last update.",
    h9: "Contacts",
    p10: "If you have any questions regarding this Policy, contact us at pokhyton.i@gmail.com."
  },
  pl: {
    title: "Polityka prywatności",
    updated: "Ostatnia aktualizacja: Czerwiec 2026",
    h1: "Postanowienia ogólne",
    p1: "Niniejszy dokument opisuje, w jaki sposób aplikacja internetowa \"Procent składany\" (dalej - Serwis) przetwarza informacje podczas korzystania z kalkulatora. Serwis jest rozwijany i utrzymywany przez Redempsly.",
    h2: "Jakie dane zbieramy",
    p2: "NIE zbieramy danych osobowych. Serwis działa całkowicie po stronie Twojej przeglądarki (client-side). Liczby wprowadzane do kalkulatora (kwoty składek, stawki, okres itp.) są przetwarzane lokalnie na Twoim urządzeniu i nie są przesyłane na żaden serwer.",
    h3: "Automatycznie zbierane informacje techniczne",
    p3: "Podczas odwiedzania Serwisu nasz dostawca hostingu może automatycznie rejestrować:",
    l3_1: "adres IP (w formie zanonimizowanej);",
    l3_2: "typ przeglądarki i system operacyjny;",
    l3_3: "datę i godzinę wizyty;",
    l3_4: "przeglądane strony.",
    p4: "Informacje te są wykorzystywane wyłącznie w celu zapewnienia funkcjonalności Serwisu i analizy ogólnego ruchu. Nie są one powiązane z konkretną osobą.",
    h4: "Pliki cookie",
    p5: "Serwis może używać technicznych plików cookie w celu zapisywania Twoich preferencji (wybrany język, motyw interfejsu). Szczegóły w Polityce Cookie.",
    h5: "Analityka",
    p6: "Serwis może korzystać z zewnętrznych narzędzi analityki internetowej (np. Google Analytics) w celu zrozumienia, jak odwiedzający korzystają z Serwisu. Narzędzia te zbierają zanonimizowane statystyki bez identyfikacji konkretnych użytkowników.",
    h6: "Przekazywanie danych stronom trzecim",
    p7: "Nie sprzedajemy, nie wymieniamy ani nie przekazujemy żadnych informacji stronom trzecim, z wyjątkiem przypadków przewidzianych prawem.",
    h7: "Bezpieczeństwo",
    p8: "Ponieważ Serwis nie zbiera danych osobowych, ryzyko dla Twojej prywatności jest minimalne. Serwis jest dostępny przez bezpieczne połączenie (HTTPS).",
    h8: "Zmiany w niniejszej polityce",
    p9: "Możemy od czasu do czasu aktualizować niniejszą Politykę prywatności. Aktualna wersja jest zawsze dostępna na tej stronie ze wskazaną datą ostatniej aktualizacji.",
    h9: "Kontakty",
    p10: "Jeśli masz jakiekolwiek pytania dotyczące tej Polityki, skontaktuj się z nami pod adresem pokhyton.i@gmail.com."
  },
  de: {
    title: "Datenschutzerklärung",
    updated: "Zuletzt aktualisiert: Juni 2026",
    h1: "Allgemeine Bestimmungen",
    p1: "Dieses Dokument beschreibt, wie die Webanwendung \"Zinseszins\" (im Folgenden - der Dienst) Informationen während Ihrer Nutzung des Rechners verarbeitet. Der Dienst wird von Redempsly entwickelt und gepflegt.",
    h2: "Welche Daten wir sammeln",
    p2: "Wir sammeln KEINE personenbezogenen Daten. Der Dienst läuft vollständig in Ihrem Browser (Client-Seite). Die Zahlen, die Sie in den Rechner eingeben (Beiträge, Zinssätze, Zeiträume usw.), werden lokal auf Ihrem Gerät verarbeitet und nicht an einen Server übertragen.",
    h3: "Automatisch gesammelte technische Informationen",
    p3: "Beim Besuch des Dienstes kann unser Hosting-Anbieter automatisch Folgendes aufzeichnen:",
    l3_1: "IP-Adresse (in anonymisierter Form);",
    l3_2: "Browsertyp und Betriebssystem;",
    l3_3: "Datum und Uhrzeit des Besuchs;",
    l3_4: "Von Ihnen aufgerufene Seiten.",
    p4: "Diese Informationen werden ausschließlich verwendet, um die Funktionalität des Dienstes sicherzustellen und den Gesamtverkehr zu analysieren. Sie sind nicht mit einer bestimmten Person verknüpft.",
    h4: "Cookies",
    p5: "Der Dienst kann technische Cookies verwenden, um Ihre Einstellungen zu speichern (ausgewählte Sprache, Benutzeroberflächendesign). Details finden Sie in der Cookie-Richtlinie.",
    h5: "Analytik",
    p6: "Der Dienst kann Webanalysetools von Drittanbietern (z. B. Google Analytics oder ähnliches) verwenden, um zu verstehen, wie Besucher mit dem Dienst interagieren. Diese Tools sammeln anonymisierte Statistiken ohne Identifizierung bestimmter Benutzer.",
    h6: "Datenweitergabe an Dritte",
    p7: "Wir verkaufen, handeln oder übertragen keine Informationen an Dritte, es sei denn, dies ist gesetzlich vorgeschrieben.",
    h7: "Sicherheit",
    p8: "Da der Dienst keine personenbezogenen Daten sammelt, sind die Risiken für Ihre Privatsphäre minimal. Der Dienst ist über eine sichere Verbindung (HTTPS) zugänglich.",
    h8: "Änderungen an dieser Richtlinie",
    p9: "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Die aktuelle Version ist immer auf dieser Seite mit dem angegebenen Datum der letzten Aktualisierung verfügbar.",
    h9: "Kontakte",
    p10: "Wenn Sie Fragen zu dieser Richtlinie haben, kontaktieren Sie uns unter pokhyton.i@gmail.com."
  },
  fr: {
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : Juin 2026",
    h1: "Dispositions générales",
    p1: "Ce document décrit comment l'application Web « Intérêts composés » (ci-après - le Service) traite les informations pendant votre utilisation de la calculatrice. Le Service est développé et maintenu par Redempsly.",
    h2: "Quelles données nous collectons",
    p2: "Nous ne collectons PAS de données personnelles. Le Service s'exécute entièrement sur votre navigateur (côté client). Les chiffres que vous entrez dans la calculatrice (contributions, taux, périodes, etc.) sont traités localement sur votre appareil et ne sont transmis à aucun serveur.",
    h3: "Informations techniques collectées automatiquement",
    p3: "Lors de la visite du Service, notre fournisseur d'hébergement peut enregistrer automatiquement :",
    l3_1: "Adresse IP (sous forme anonymisée) ;",
    l3_2: "Type de navigateur et système d'exploitation ;",
    l3_3: "Date et heure de la visite ;",
    l3_4: "Pages que vous avez consultées.",
    p4: "Ces informations sont utilisées exclusivement pour assurer la fonctionnalité du Service et analyser le trafic global. Elles ne sont liées à aucun individu spécifique.",
    h4: "Cookies",
    p5: "Le Service peut utiliser des cookies techniques pour enregistrer vos préférences (langue sélectionnée, thème de l'interface). Pour plus de détails, consultez la Politique relative aux cookies.",
    h5: "Analytique",
    p6: "Le Service peut utiliser des outils d'analyse Web tiers (par exemple, Google Analytics ou similaire) pour comprendre comment les visiteurs interagissent avec le Service. Ces outils collectent des statistiques anonymisées sans identifier des utilisateurs spécifiques.",
    h6: "Transfert de données à des tiers",
    p7: "Nous ne vendons, n'échangeons ni ne transférons aucune information à des tiers, sauf si la loi l'exige.",
    h7: "Sécurité",
    p8: "Puisque le Service ne collecte pas de données personnelles, les risques pour votre vie privée sont minimes. Le Service est accessible via une connexion sécurisée (HTTPS).",
    h8: "Modifications de cette politique",
    p9: "Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. La version actuelle est toujours disponible sur cette page avec la date indiquée de la dernière mise à jour.",
    h9: "Contacts",
    p10: "Si vous avez des questions concernant cette Politique, contactez-nous à pokhyton.i@gmail.com."
  },
  es: {
    title: "Política de Privacidad",
    updated: "Última actualización: Junio de 2026",
    h1: "Disposiciones Generales",
    p1: "Este documento describe cómo la aplicación web \"Interés Compuesto\" (en adelante, el Servicio) procesa la información durante su uso de la calculadora. El Servicio es desarrollado y mantenido por Redempsly.",
    h2: "Qué datos recopilamos",
    p2: "NO recopilamos datos personales. El Servicio se ejecuta completamente en su navegador (del lado del cliente). Los números que ingresa en la calculadora (contribuciones, tasas, períodos, etc.) se procesan localmente en su dispositivo y no se transmiten a ningún servidor.",
    h3: "Información técnica recopilada automáticamente",
    p3: "Al visitar el Servicio, nuestro proveedor de alojamiento puede registrar automáticamente:",
    l3_1: "Dirección IP (en forma anónima);",
    l3_2: "Tipo de navegador y sistema operativo;",
    l3_3: "Fecha y hora de la visita;",
    l3_4: "Páginas que ha visto.",
    p4: "Esta información se utiliza exclusivamente para garantizar la funcionalidad del Servicio y analizar el tráfico general. No está vinculada a ningún individuo específico.",
    h4: "Cookies",
    p5: "El Servicio puede utilizar cookies técnicas para guardar sus preferencias (idioma seleccionado, tema de interfaz). Para obtener más detalles, consulte la Política de Cookies.",
    h5: "Analítica",
    p6: "El Servicio puede utilizar herramientas de análisis web de terceros (por ejemplo, Google Analytics o similar) para comprender cómo los visitantes interactúan con el Servicio. Estas herramientas recopilan estadísticas anónimas sin identificar usuarios específicos.",
    h6: "Transferencia de datos a terceros",
    p7: "No vendemos, intercambiamos ni transferimos ninguna información a terceros, excepto según lo exija la ley.",
    h7: "Seguridad",
    p8: "Dado que el Servicio no recopila datos personales, los riesgos para su privacidad son mínimos. El Servicio es accesible a través de una conexión segura (HTTPS).",
    h8: "Cambios en esta Política",
    p9: "Podemos actualizar esta Política de Privacidad de vez en cuando. La versión actual siempre está disponible en esta página con la fecha indicada de la última actualización.",
    h9: "Contactos",
    p10: "Si tiene alguna pregunta sobre esta Política, contáctenos en pokhyton.i@gmail.com."
  },
  it: {
    title: "Informativa sulla privacy",
    updated: "Ultimo aggiornamento: Giugno 2026",
    h1: "Disposizioni generali",
    p1: "Questo documento descrive come l'applicazione web \"Interesse Composto\" (di seguito - il Servizio) tratta le informazioni durante l'uso del calcolatore. Il Servizio è sviluppato e gestito da Redempsly.",
    h2: "Quali dati raccogliamo",
    p2: "NON raccogliamo dati personali. Il Servizio viene eseguito interamente sul tuo browser (lato client). I numeri inseriti nel calcolatore (contributi, tassi, periodi, ecc.) vengono elaborati localmente sul tuo dispositivo e non vengono trasmessi a nessun server.",
    h3: "Informazioni tecniche raccolte automaticamente",
    p3: "Visitando il Servizio, il nostro provider di hosting potrebbe registrare automaticamente:",
    l3_1: "Indirizzo IP (in forma anonima);",
    l3_2: "Tipo di browser e sistema operativo;",
    l3_3: "Data e ora della visita;",
    l3_4: "Pagine che hai visualizzato.",
    p4: "Queste informazioni vengono utilizzate esclusivamente per garantire la funzionalità del Servizio e analizzare il traffico complessivo. Non sono collegate a nessun individuo specifico.",
    h4: "Cookie",
    p5: "Il Servizio potrebbe utilizzare cookie tecnici per salvare le tue preferenze (lingua selezionata, tema dell'interfaccia). Per i dettagli, consulta l'Informativa sui cookie.",
    h5: "Analitica",
    p6: "Il Servizio potrebbe utilizzare strumenti di analisi web di terze parti (ad es., Google Analytics o simili) per comprendere come i visitatori interagiscono con il Servizio. Questi strumenti raccolgono statistiche anonime senza identificare utenti specifici.",
    h6: "Trasferimento dei dati a terzi",
    p7: "Non vendiamo, scambiamo o trasferiamo alcuna informazione a terzi, salvo quanto richiesto dalla legge.",
    h7: "Sicurezza",
    p8: "Poiché il Servizio non raccoglie dati personali, i rischi per la tua privacy sono minimi. Il Servizio è accessibile tramite una connessione sicura (HTTPS).",
    h8: "Modifiche a questa Informativa",
    p9: "Potremmo aggiornare questa Informativa sulla privacy di tanto in tanto. La versione attuale è sempre disponibile su questa pagina con la data indicata dell'ultimo aggiornamento.",
    h9: "Contatti",
    p10: "Se hai domande su questa Informativa, contattaci all'indirizzo pokhyton.i@gmail.com."
  },
  pt: {
    title: "Política de Privacidade",
    updated: "Última atualização: Junho de 2026",
    h1: "Disposições Gerais",
    p1: "Este documento descreve como a aplicação web \"Juros Compostos\" (doravante - o Serviço) processa informações durante a sua utilização da calculadora. O Serviço é desenvolvido e mantido por Redempsly.",
    h2: "Quais dados coletamos",
    p2: "NÃO coletamos dados pessoais. O Serviço é executado inteiramente em seu navegador (lado do cliente). Os números que você insere na calculadora (contribuições, taxas, períodos, etc.) são processados localmente no seu dispositivo e não são transmitidos para nenhum servidor.",
    h3: "Informações técnicas coletadas automaticamente",
    p3: "Ao visitar o Serviço, nosso provedor de hospedagem pode registrar automaticamente:",
    l3_1: "Endereço IP (em forma anônima);",
    l3_2: "Tipo de navegador e sistema operacional;",
    l3_3: "Data e hora da visita;",
    l3_4: "Páginas que você visualizou.",
    p4: "Essas informações são usadas exclusivamente para garantir a funcionalidade do Serviço e analisar o tráfego geral. Elas não estão vinculadas a nenhum indivíduo específico.",
    h4: "Cookies",
    p5: "O Serviço pode usar cookies técnicos para salvar suas preferências (idioma selecionado, tema da interface). Para mais detalhes, consulte a Política de Cookies.",
    h5: "Analítica",
    p6: "O Serviço pode usar ferramentas de análise da web de terceiros (por exemplo, Google Analytics ou similar) para entender como os visitantes interagem com o Serviço. Essas ferramentas coletam estatísticas anônimas sem identificar usuários específicos.",
    h6: "Transferência de dados a terceiros",
    p7: "Não vendemos, trocamos ou transferimos qualquer informação a terceiros, exceto conforme exigido por lei.",
    h7: "Segurança",
    p8: "Como o Serviço não coleta dados pessoais, os riscos para a sua privacidade são mínimos. O Serviço é acessível através de uma conexão segura (HTTPS).",
    h8: "Alterações a esta Política",
    p9: "Podemos atualizar esta Política de Privacidade de tempos em tempos. A versão atual está sempre disponível nesta página com a data indicada da última atualização.",
    h9: "Contatos",
    p10: "Se você tiver alguma dúvida sobre esta Política, contate-nos em pokhyton.i@gmail.com."
  },
  tr: {
    title: "Gizlilik Politikası",
    updated: "Son güncelleme: Haziran 2026",
    h1: "Genel Hükümler",
    p1: "Bu belge, \"Bileşik Faiz\" web uygulamasının (bundan böyle - Hizmet olarak anılacaktır) hesap makinesini kullanımınız sırasında bilgileri nasıl işlediğini açıklamaktadır. Hizmet Redempsly tarafından geliştirilmekte ve sürdürülmektedir.",
    h2: "Hangi Verileri Topluyoruz",
    p2: "Kişisel veri TOPLAMIYORUZ. Hizmet tamamen tarayıcınızda (istemci tarafı) çalışır. Hesap makinesine girdiğiniz sayılar (katkılar, oranlar, dönemler vb.) cihazınızda yerel olarak işlenir ve hiçbir sunucuya iletilmez.",
    h3: "Otomatik Olarak Toplanan Teknik Bilgiler",
    p3: "Hizmeti ziyaret ederken barındırma sağlayıcımız otomatik olarak şunları kaydedebilir:",
    l3_1: "IP adresi (anonimleştirilmiş biçimde);",
    l3_2: "Tarayıcı türü ve işletim sistemi;",
    l3_3: "Ziyaretin tarihi ve saati;",
    l3_4: "Görüntülediğiniz sayfalar.",
    p4: "Bu bilgiler yalnızca Hizmetin işlevselliğini sağlamak ve genel trafiği analiz etmek için kullanılır. Belirli bir bireyle bağlantılı değildir.",
    h4: "Çerezler",
    p5: "Hizmet, tercihlerinizi (seçilen dil, arayüz teması) kaydetmek için teknik çerezler kullanabilir. Ayrıntılar için Çerez Politikasına bakın.",
    h5: "Analitik",
    p6: "Hizmet, ziyaretçilerin Hizmetle nasıl etkileşime girdiğini anlamak için üçüncü taraf web analizi araçlarını (örneğin Google Analytics veya benzeri) kullanabilir. Bu araçlar, belirli kullanıcıları tanımlamadan anonimleştirilmiş istatistikler toplar.",
    h6: "Üçüncü Taraflara Veri Aktarımı",
    p7: "Yasaların gerektirdiği durumlar haricinde hiçbir bilgiyi üçüncü taraflara satmıyor, takas etmiyor veya aktarmıyoruz.",
    h7: "Güvenlik",
    p8: "Hizmet kişisel veri toplamadığı için gizliliğinize yönelik riskler minimum düzeydedir. Hizmete güvenli bir bağlantı (HTTPS) üzerinden erişilebilir.",
    h8: "Bu Politikadaki Değişiklikler",
    p9: "Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Mevcut sürüm, son güncellemenin belirtilen tarihiyle her zaman bu sayfada mevcuttur.",
    h9: "İletişim",
    p10: "Bu Politikayla ilgili sorularınız varsa, pokhyton.i@gmail.com adresinden bizimle iletişime geçin."
  },
  zh: {
    title: "隐私政策",
    updated: "最后更新：2026年6月",
    h1: "一般规定",
    p1: "本文件描述了“复利”Web应用程序（以下简称-服务）在您使用计算器期间如何处理信息。该服务由Redempsly开发和维护。",
    h2: "我们收集哪些数据",
    p2: "我们不收集个人数据。服务完全在您的浏览器（客户端）上运行。您输入计算器的数字（存款、利率、期限等）会在您的设备上进行本地处理，不会传输到任何服务器。",
    h3: "自动收集的技术信息",
    p3: "在访问服务时，我们的托管提供商可能会自动记录：",
    l3_1: "IP地址（匿名形式）；",
    l3_2: "浏览器类型和操作系统；",
    l3_3: "访问的日期和时间；",
    l3_4: "您查看的页面。",
    p4: "这些信息仅用于确保服务的功能并分析整体流量。它不与任何特定个人关联。",
    h4: "Cookies",
    p5: "服务可能会使用技术cookie来保存您的首选项（所选语言、界面主题）。有关详细信息，请参阅Cookie政策。",
    h5: "分析",
    p6: "服务可能会使用第三方网络分析工具（例如，Google Analytics或类似工具）来了解访问者如何与服务交互。这些工具收集匿名统计信息，而不识别特定用户。",
    h6: "数据传输给第三方",
    p7: "除非法律要求，否则我们不会向第三方出售、交易或转让任何信息。",
    h7: "安全",
    p8: "由于服务不收集个人数据，您的隐私风险很小。可通过安全连接（HTTPS）访问该服务。",
    h8: "本政策的更改",
    p9: "我们可能会不时更新本隐私政策。当前版本始终在此页面上提供，并附有上次更新的指示日期。",
    h9: "联系方式",
    p10: "如果您对本政策有任何疑问，请通过pokhyton.i@gmail.com与我们联系。"
  },
  ja: {
    title: "プライバシーポリシー",
    updated: "最終更新日：2026年6月",
    h1: "一般規定",
    p1: "このドキュメントでは、「複利」Webアプリケーション（以下、サービス）が計算機の使用中に情報をどのように処理するかについて説明します。サービスはRedempslyによって開発および保守されています。",
    h2: "収集するデータ",
    p2: "個人データは収集しません。サービスは完全にブラウザ（クライアント側）で実行されます。計算機に入力した数値（拠出金、利率、期間など）はデバイス上でローカルに処理され、サーバーには送信されません。",
    h3: "自動的に収集される技術情報",
    p3: "サービスにアクセスすると、ホスティングプロバイダーが自動的に以下を記録する場合があります。",
    l3_1: "IPアドレス（匿名化された形式）；",
    l3_2: "ブラウザの種類とオペレーティングシステム；",
    l3_3: "訪問の日時；",
    l3_4: "閲覧したページ。",
    p4: "この情報は、サービスの機能を確保し、全体のトラフィックを分析するためにのみ使用されます。特定の個人にはリンクされていません。",
    h4: "Cookie",
    p5: "サービスは、設定（選択した言語、インターフェーステーマ）を保存するために技術的なCookieを使用する場合があります。詳細については、Cookieポリシーを参照してください。",
    h5: "分析",
    p6: "サービスは、訪問者がサービスをどのように操作しているかを理解するために、サードパーティのWeb分析ツール（Google Analyticsなど）を使用する場合があります。これらのツールは、特定のユーザーを特定することなく匿名化された統計を収集します。",
    h6: "第三者へのデータ転送",
    p7: "法律で義務付けられている場合を除き、第三者に情報を販売、取引、または転送することはありません。",
    h7: "セキュリティ",
    p8: "サービスは個人データを収集しないため、プライバシーのリスクは最小限に抑えられます。サービスには安全な接続（HTTPS）を介してアクセスできます。",
    h8: "このポリシーの変更",
    p9: "このプライバシーポリシーは随時更新される場合があります。現在のバージョンは、最終更新日とともに常にこのページで入手できます。",
    h9: "連絡先",
    p10: "このポリシーについて質問がある場合は、pokhyton.i@gmail.comまでご連絡ください。"
  },
  ko: {
    title: "개인정보 처리방침",
    updated: "최근 업데이트: 2026년 6월",
    h1: "일반 규정",
    p1: "본 문서는 \"복리\" 웹 애플리케이션(이하 서비스)이 계산기 사용 중 정보를 처리하는 방법을 설명합니다. 서비스는 Redempsly에서 개발 및 유지 관리합니다.",
    h2: "수집하는 데이터",
    p2: "당사는 개인 데이터를 수집하지 않습니다. 서비스는 귀하의 브라우저(클라이언트 측)에서 전적으로 실행됩니다. 계산기에 입력한 숫자(납입금, 이자율, 기간 등)는 귀하의 기기에서 로컬로 처리되며 서버로 전송되지 않습니다.",
    h3: "자동으로 수집되는 기술 정보",
    p3: "서비스를 방문할 때 당사의 호스팅 제공업체는 자동으로 다음을 기록할 수 있습니다.",
    l3_1: "IP 주소(익명화된 형태);",
    l3_2: "브라우저 유형 및 운영 체제;",
    l3_3: "방문 날짜 및 시간;",
    l3_4: "조회한 페이지.",
    p4: "이 정보는 서비스의 기능을 보장하고 전반적인 트래픽을 분석하는 데만 사용됩니다. 특정 개인과 연결되지 않습니다.",
    h4: "쿠키",
    p5: "서비스는 기본 설정(선택한 언어, 인터페이스 테마)을 저장하기 위해 기술 쿠키를 사용할 수 있습니다. 자세한 내용은 쿠키 정책을 참조하세요.",
    h5: "분석",
    p6: "서비스는 방문자가 서비스와 상호 작용하는 방식을 이해하기 위해 타사 웹 분석 도구(예: Google Analytics 또는 유사 도구)를 사용할 수 있습니다. 이러한 도구는 특정 사용자를 식별하지 않고 익명화된 통계를 수집합니다.",
    h6: "제3자에게 데이터 전송",
    p7: "당사는 법률에서 요구하는 경우를 제외하고는 제3자에게 어떠한 정보도 판매, 거래 또는 양도하지 않습니다.",
    h7: "보안",
    p8: "서비스가 개인 데이터를 수집하지 않으므로 개인 정보 보호에 대한 위험이 최소화됩니다. 보안 연결(HTTPS)을 통해 서비스에 액세스할 수 있습니다.",
    h8: "이 정책의 변경",
    p9: "당사는 때때로 본 개인정보 처리방침을 업데이트할 수 있습니다. 최신 버전은 마지막 업데이트된 날짜와 함께 항상 이 페이지에서 확인할 수 있습니다.",
    h9: "연락처",
    p10: "본 정책에 대한 질문이 있는 경우 pokhyton.i@gmail.com으로 문의하십시오."
  },
  hi: {
    title: "गोपनीयता नीति",
    updated: "अंतिम अद्यतन: जून 2026",
    h1: "सामान्य प्रावधान",
    p1: "यह दस्तावेज़ बताता है कि \"चक्रवृद्धि ब्याज\" वेब एप्लिकेशन (इसके बाद - सेवा) कैलकुलेटर के आपके उपयोग के दौरान जानकारी को कैसे संसाधित करता है। सेवा Redempsly द्वारा विकसित और अनुरक्षित है।",
    h2: "हम कौन सा डेटा एकत्र करते हैं",
    p2: "हम व्यक्तिगत डेटा एकत्र नहीं करते हैं। सेवा पूरी तरह से आपके ब्राउज़र (क्लाइंट-साइड) पर चलती है। जो संख्याएं आप कैलकुलेटर में दर्ज करते हैं (योगदान, दरें, अवधि, आदि) वे आपके डिवाइस पर स्थानीय रूप से संसाधित होती हैं और किसी भी सर्वर पर प्रसारित नहीं होती हैं।",
    h3: "स्वचालित रूप से एकत्रित तकनीकी जानकारी",
    p3: "सेवा पर जाने पर, हमारा होस्टिंग प्रदाता स्वचालित रूप से रिकॉर्ड कर सकता है:",
    l3_1: "IP पता (अनाम रूप में);",
    l3_2: "ब्राउज़र प्रकार और ऑपरेटिंग सिस्टम;",
    l3_3: "यात्रा की तिथि और समय;",
    l3_4: "वे पृष्ठ जिन्हें आपने देखा।",
    p4: "यह जानकारी विशेष रूप से सेवा की कार्यक्षमता सुनिश्चित करने और समग्र ट्रैफ़िक का विश्लेषण करने के लिए उपयोग की जाती है। यह किसी भी विशिष्ट व्यक्ति से जुड़ा नहीं है।",
    h4: "कुकीज़",
    p5: "सेवा आपकी प्राथमिकताओं (चयनित भाषा, इंटरफ़ेस थीम) को सहेजने के लिए तकनीकी कुकीज़ का उपयोग कर सकती है। विवरण के लिए, कुकी नीति देखें।",
    h5: "एनालिटिक्स",
    p6: "सेवा यह समझने के लिए कि विज़िटर सेवा के साथ कैसे सहभागिता करते हैं, तृतीय-पक्ष वेब एनालिटिक्स टूल (उदा., Google Analytics या इसी तरह के) का उपयोग कर सकती है। ये उपकरण विशिष्ट उपयोगकर्ताओं की पहचान किए बिना अनाम आंकड़े एकत्र करते हैं।",
    h6: "तीसरे पक्ष को डेटा स्थानांतरण",
    p7: "हम कानूनी रूप से आवश्यक होने के अलावा किसी भी जानकारी को तीसरे पक्ष को बेचते, व्यापार करते या स्थानांतरित नहीं करते हैं।",
    h7: "सुरक्षा",
    p8: "चूंकि सेवा व्यक्तिगत डेटा एकत्र नहीं करती है, आपकी गोपनीयता के लिए जोखिम न्यूनतम हैं। सेवा सुरक्षित कनेक्शन (HTTPS) के माध्यम से सुलभ है।",
    h8: "इस नीति में परिवर्तन",
    p9: "हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। वर्तमान संस्करण हमेशा इस पृष्ठ पर अंतिम अपडेट की निर्दिष्ट तिथि के साथ उपलब्ध होता है।",
    h9: "संपर्क",
    p10: "यदि आपके पास इस नीति के संबंध में कोई प्रश्न हैं, तो pokhyton.i@gmail.com पर हमसे संपर्क करें।"
  },
  ar: {
    title: "سياسة الخصوصية",
    updated: "آخر تحديث: يونيو 2026",
    h1: "أحكام عامة",
    p1: "يصف هذا المستند كيف يقوم تطبيق الويب \"الفائدة المركبة\" (المشار إليه فيما يلي باسم - الخدمة) بمعالجة المعلومات أثناء استخدامك للآلة الحاسبة. تم تطوير الخدمة وصيانتها بواسطة Redempsly.",
    h2: "ما البيانات التي نجمعها",
    p2: "نحن لا نجمع بيانات شخصية. تعمل الخدمة بالكامل على متصفحك (جانب العميل). الأرقام التي تدخلها في الآلة الحاسبة (المساهمات، الأسعار، الفترات، وما إلى ذلك) تتم معالجتها محليًا على جهازك ولا يتم نقلها إلى أي خادم.",
    h3: "المعلومات الفنية التي يتم جمعها تلقائيًا",
    p3: "عند زيارة الخدمة، قد يسجل مزود الاستضافة الخاص بنا تلقائيًا:",
    l3_1: "عنوان IP (في شكل مجهول)؛",
    l3_2: "نوع المتصفح ونظام التشغيل؛",
    l3_3: "تاريخ ووقت الزيارة؛",
    l3_4: "الصفحات التي قمت بمشاهدتها.",
    p4: "تُستخدم هذه المعلومات حصريًا لضمان وظائف الخدمة وتحليل إجمالي حركة المرور. لا يرتبط بأي فرد معين.",
    h4: "ملفات تعريف الارتباط (Cookies)",
    p5: "قد تستخدم الخدمة ملفات تعريف ارتباط فنية لحفظ تفضيلاتك (اللغة المحددة، سمة الواجهة). للحصول على تفاصيل، راجع سياسة ملفات تعريف الارتباط.",
    h5: "التحليلات",
    p6: "قد تستخدم الخدمة أدوات تحليل ويب لجهات خارجية (على سبيل المثال، Google Analytics أو ما شابه) لفهم كيفية تفاعل الزوار مع الخدمة. تقوم هذه الأدوات بجمع إحصائيات مجهولة دون تحديد مستخدمين معينين.",
    h6: "نقل البيانات إلى جهات خارجية",
    p7: "نحن لا نبيع أو نتاجر أو ننقل أي معلومات إلى جهات خارجية، إلا وفقًا لما يقتضيه القانون.",
    h7: "الأمان",
    p8: "نظرًا لأن الخدمة لا تجمع بيانات شخصية، فإن المخاطر التي تهدد خصوصيترك ضئيلة. يمكن الوصول إلى الخدمة عبر اتصال آمن (HTTPS).",
    h8: "تغييرات على هذه السياسة",
    p9: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. الإصدار الحالي متاح دائمًا على هذه الصفحة مع التاريخ المحدد لآخر تحديث.",
    h9: "جهات الاتصال",
    p10: "إذا كانت لديك أي أسئلة بخصوص هذه السياسة، فاتصل بنا على pokhyton.i@gmail.com."
  }
};

export const PrivacyPolicy = ({}: Props) => {
  const { locale: lang } = useTranslation();

  const t = (content as any)[lang] || content.en;
  
  return (
    <LegalPageLayout>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <h1>{t.title}</h1>
        <p className="last-updated">{t.updated}</p>

        <h2>{t.h1}</h2>
        <p>{t.p1}</p>

        <h2>{t.h2}</h2>
        <p><strong>{lang === 'uk' ? 'Ми НЕ збираємо персональних даних.' : (lang === 'pl' ? 'NIE zbieramy danych osobowych.' : (lang === 'en' ? 'We DO NOT collect personal data.' : t.p2.split('.')[0] + '.'))}</strong> {t.p2.substring(t.p2.indexOf('.') + 1).trim()}</p>

        <h2>{t.h3}</h2>
        <p>{t.p3}</p>
        <ul>
          <li>{t.l3_1}</li>
          <li>{t.l3_2}</li>
          <li>{t.l3_3}</li>
          <li>{t.l3_4}</li>
        </ul>
        <p>{t.p4}</p>

        <h2>{t.h4}</h2>
        <p>{t.p5}</p>

        <h2>{t.h5}</h2>
        <p>{t.p6}</p>

        <h2>{t.h6}</h2>
        <p>{t.p7}</p>

        <h2>{t.h7}</h2>
        <p>{t.p8}</p>

        <h2>{t.h8}</h2>
        <p>{t.p9}</p>

        <h2>{t.h9}</h2>
        <p>{t.p10}</p>
      </div>
    </LegalPageLayout>
  );
};
