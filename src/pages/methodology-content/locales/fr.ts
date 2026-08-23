import type { MethodologyContent } from '../types';

export const fr: MethodologyContent = {
  title: 'Méthodologie de calcul',
  updated: 'Concerne la version {version}',

  disclaimerTitle: 'À lire en premier',
  disclaimer: [
    'Cette page existe pour que vous puissiez vérifier chaque chiffre affiché par le calculateur. Elle expose toutes les formules, l\'ordre dans lequel elles s\'appliquent et un exemple entièrement détaillé que vous pouvez refaire avec un papier et un crayon. Il s\'agit d\'informations pédagogiques sur le fonctionnement de l\'outil : ce n\'est pas un conseil financier, d\'investissement, fiscal ou juridique, ni une recommandation d\'acheter, de vendre ou de conserver quoi que ce soit.',
    'Tout ce que produit le calculateur est une projection à partir des hypothèses que vous saisissez, pas une prévision. Il suppose un rendement constant, une inflation constante et un taux d\'imposition constant sur toute la période. Les marchés réels ne se comportent pas ainsi. Les résultats réels différeront, et sur de longues durées ils peuvent différer énormément.',
    'Les chiffres sont approximatifs et fournis en l\'état, sans aucune garantie. Toute décision que vous prenez après avoir utilisé ce calculateur n\'appartient qu\'à vous, et ni les auteurs ni l\'éditeur n\'assument de responsabilité pour une perte ou un dommage qui en découlerait. Si l\'argent compte pour vous, refaites les calculs vous-même et consultez un conseiller qualifié dans votre pays.',
  ],

  colSymbol: 'Symbole',
  colMeaning: 'Signification',
  colValue: 'Valeur',
  colFrequency: 'Fréquence',
  colMonthlyAmount: 'Montant ajouté ce mois-là',

  inputsTitle: '1. Ce que vous saisissez',
  inputsIntro: 'Ce sont les seules valeurs utilisées par le modèle. Rien n\'est récupéré sur internet et rien n\'est supposé à votre place.',
  inputMeanings: [
    'Dépôt initial — la somme avec laquelle vous commencez',
    'Durée de placement en années entières',
    'Rendement annuel attendu, en pourcentage',
    'Périodes de capitalisation par an (quotidienne = 365, mensuelle = 12, trimestrielle = 4, semestrielle = 2, annuelle = 1)',
    'Montant du versement, ajouté à la fréquence que vous choisissez',
    'Inflation annuelle attendue, en pourcentage',
    'Taux d\'imposition sur les gains, en pourcentage',
  ],

  rateTitle: '2. Convertir votre taux en taux mensuel',
  rateBefore: 'Le modèle avance mois par mois : le taux annuel que vous saisissez doit donc être exprimé en taux mensuel équivalent. Votre taux capitalise n fois par an, chaque période de capitalisation rapporte donc r ÷ n, et un mois représente n ÷ 12 d\'une telle période.',
  rateAfter: 'C\'est l\'exposant qui garde les deux cohérents : capitaliser ce taux mensuel douze fois reproduit exactement votre taux annuel, si bien que les chiffres de fin d\'année coïncident avec un calcul annuel direct. Avec 8 % capitalisés annuellement, le taux mensuel vaut 0,643403 %.',

  contribTitle: '3. Comment les versements sont ajoutés',
  contribIntro: 'Le modèle fonctionnant au mois, les versements plus fréquents que mensuels sont convertis en un montant mensuel moyen, et les moins fréquents ne sont ajoutés que dans les mois où ils tombent réellement.',
  contribFrequencies: [
    'Aucun versement',
    'Quotidien',
    'Hebdomadaire',
    'Mensuel',
    'Trimestriel',
    'Semestriel',
    'Annuel',
  ],
  contribNote: 'Lisser les versements quotidiens et hebdomadaires garde le total annuel exact — 365 versements quotidiens et 52 hebdomadaires sont bien ce qui est crédité sur une année — au prix de quelques jours d\'intérêts ici ou là. L\'écart est très inférieur à l\'erreur commise en estimant votre rendement.',

  orderTitle: '4. Ce qui se passe chaque mois',
  orderIntro: 'Chacun des 12 × Y mois est traité selon les trois mêmes étapes, dans cet ordre :',
  orderSteps: [
    'Les intérêts sont appliqués au solde reporté du mois précédent.',
    'Votre versement du mois est ajouté.',
    'L\'impôt est prélevé, s\'il est dû ce mois-ci.',
  ],
  orderNote: 'Les intérêts sont appliqués avant le versement : le paiement du mois ne rapporte donc rien ce mois-ci. C\'est la convention de l\'annuité de fin de période, et c\'est le choix prudent : verser en début de mois relèverait le résultat final d\'environ un mois de croissance.',

  taxTitle: '5. Impôt',
  taxIntro: 'L\'impôt ne porte que sur les gains, jamais sur l\'argent que vous versez. C\'est vous qui choisissez quand il est prélevé.',
  taxAnnualLabel: 'Chaque année',
  taxAnnualText: 'À la fin de chaque douzième mois, le gain réalisé durant l\'année est imposé et l\'impôt est retiré du solde immédiatement. Le gain est le solde actuel, moins le solde en début d\'année, moins tout ce que vous avez versé pendant l\'année. Si l\'année se termine en perte, le gain est négatif et aucun impôt n\'est dû, mais cette perte n\'est pas reportée sur les années suivantes.',
  taxExitLabel: 'À la sortie',
  taxExitText: 'Rien n\'est prélevé jusqu\'au tout dernier mois, où l\'ensemble du gain de toute la période est imposé en une seule fois. Le gain est le solde final moins tous les versements, dépôt initial compris.',
  taxNote: 'Sur une longue durée, les deux modes diffèrent nettement, car l\'impôt payé chaque année est de l\'argent qui cesse de capitaliser. Dans l\'exemple ci-dessous, l\'imposition annuelle coûte environ 14 093 : il vaut la peine de comparer les deux avant de décider lequel correspond à votre situation.',

  inflationTitle: '6. Inflation',
  inflationIntro: 'L\'inflation n\'est pas retranchée du solde. Elle est appliquée à la fin, comme conversion de l\'argent futur en ce qu\'il achèterait aujourd\'hui :',
  inflationNote: 't est le nombre d\'années écoulées : une valeur au mois m utilise donc t = m ÷ 12. C\'est pourquoi le chiffre « réel » est toujours inférieur au nominal dès que l\'inflation est positive : l\'argent croît, mais chaque unité achète moins.',

  figuresTitle: '7. Les quatre chiffres clés',
  figuresIntro: 'Les tuiles sous le résultat principal sont quatre vues d\'une même simulation. Elles ne diffèrent que par les déductions déjà appliquées.',
  figureNames: [
    'Total des versements',
    'Valeur nominale',
    'Nominal après impôt',
    'Corrigé de l\'inflation',
  ],
  figureNotes: [
    'Le dépôt initial plus chacun de vos versements. Aucune croissance. C\'est l\'argent qui sort de votre poche.',
    'Le solde avec la croissance appliquée mais sans aucune déduction. C\'est le plus grand et le moins significatif des quatre — c\'est le chiffre que la plupart des calculateurs affichent seul.',
    'Le même solde, impôt retiré aux moments fixés par votre mode d\'imposition.',
    'Le solde après impôt converti en pouvoir d\'achat d\'aujourd\'hui. C\'est le chiffre mis en avant en haut de l\'application, et le seul qui réponde à la question de ce que cet argent achètera réellement.',
  ],

  irrTitle: '8. Le rendement réel',
  irrWhyNot: 'Le pourcentage affiché à côté de « Rentabilité (CAGR) » n\'est pas la valeur finale divisée par le total des versements. Ce raccourci traite chaque versement mensuel comme s\'il avait été investi le premier jour, ce qui sous-estime lourdement le rendement : dans l\'exemple ci-dessous, il indiquerait environ 2,6 % au lieu de 4,71 %.',
  irrBefore: 'Le calculateur cherche plutôt le taux qui rend la valeur actuelle de tout ce que vous avez versé égale à la valeur dont vous disposez au bout du compte. Chaque versement est d\'abord converti en argent d\'aujourd\'hui : la réponse est donc un rendement réel, après impôt et après inflation. Avec c(m) le montant versé au mois m et V le solde réel final, le taux mensuel x est la solution de :',
  irrAfter: 'Cette équation n\'a pas de solution analytique ; elle est donc résolue numériquement par dichotomie entre −50 % et +50 % par mois, en resserrant l\'intervalle jusqu\'à ce qu\'il soit inférieur à 10⁻¹². Le résultat mensuel est ensuite annualisé :',
  irrNote: 'C\'est le taux de rendement interne, la mesure employée pour comparer des placements aux flux irréguliers. Comme il tient compte du moment de chaque versement, il se compare directement à un rendement annuel affiché — à ceci près que celui-ci est net d\'impôt et d\'inflation.',

  rangeTitle: '9. La fourchette optimiste et pessimiste',
  rangeText: 'Lorsque vous activez la fourchette de taux, la simulation entière est exécutée trois fois : une fois avec votre taux minimal, une fois avec le taux attendu et une fois avec le taux maximal. Tout le reste est identique. Ces trois résultats ne sont pas des probabilités et ne portent aucun intervalle de confiance ; ils montrent simplement ce que donne le même plan sous trois hypothèses que vous avez vous-même choisies.',

  exampleTitle: '10. Un exemple détaillé',
  exampleIntro: 'Ce sont les valeurs par défaut de l\'application. Chaque chiffre ci-dessous peut être refait à la calculatrice et correspond exactement à ce qu\'affiche l\'application.',
  exampleGivenTitle: 'Données de départ',
  exampleGivenLabels: [
    'Dépôt initial',
    'Durée',
    'Rendement annuel',
    'Capitalisation',
    'Versement',
    'Inflation',
    'Impôt',
  ],
  exampleStepsTitle: 'La première année, mois par mois',
  exampleSteps: [
    'Taux mensuel : (1 + 0,08 ÷ 1) élevé à la puissance 1 ÷ 12, moins 1 = 0,00643403.',
    'Mois 1 : 10 000 × 1,00643403 = 10 064,34, plus le versement de 500 = 10 564,34.',
    'Mois 2 : 10 564,34 × 1,00643403 = 10 632,31, plus 500 = 11 132,31.',
    'En poursuivant jusqu\'au mois 12, le solde atteint 17 016,94. Sur l\'année vous avez versé 6 000 et commencé avec 10 000 : le gain est donc 17 016,94 − 16 000 = 1 016,94.',
    'L\'impôt de 15 % sur ce gain vaut 152,54, prélevé immédiatement, laissant 16 864,40 à reporter en deuxième année.',
  ],
  exampleResultTitle: 'Au bout des 15 ans',
  exampleResultLabels: [
    'Total des versements',
    'Valeur nominale',
    'Nominal après impôt',
    'En argent d\'aujourd\'hui',
    'Rendement réel annuel',
  ],
  exampleClosing: 'Lisez attentivement cette dernière ligne. Vous versez 100 000 et vous terminez avec le pouvoir d\'achat de 133 640. Les 200 525 nominaux ressemblent à un doublement, mais l\'impôt en retire 20 663 et l\'inflation 46 222 de plus. C\'est précisément pour cet écart que ce calculateur existe.',

  excludedTitle: '11. Ce que le modèle n\'inclut pas',
  excludedIntro: 'Ce sont des omissions délibérées. Les connaître vous dit jusqu\'où faire confiance au résultat.',
  excluded: [
    'Commissions de courtage, frais de plateforme, frais de gestion et écarts entre cours acheteur et vendeur. Sur un horizon long, 1 % de frais annuels peut absorber un cinquième de la valeur réelle finale.',
    'Tranches d\'imposition progressives, abattements, imputation des pertes et enveloppes fiscales. Un taux unique et forfaitaire est appliqué à tous les gains.',
    'La conversion de devises et les variations de change. Tous les chiffres sont dans l\'unité que vous avez saisie.',
    'La volatilité des marchés. Le rendement est appliqué uniformément chaque mois : le risque lié à l\'ordre des rendements, celui qui compte le plus en fin de placement long, reste invisible ici.',
    'Toute augmentation de vos versements au fil du temps, avec l\'inflation ou avec vos revenus.',
    'Les retraits, les pauses ou une sortie anticipée avant la fin de la période.',
    'Les dividendes traités séparément de la progression des cours ; le rendement saisi est supposé être le rendement total.',
    'Tout ce qui est propre à votre pays, à votre intermédiaire ou à votre situation personnelle.',
  ],

  limitsTitle: '12. Limites de cet outil',
  limits: [
    'Tout ce qui figure sur cette page est une hypothèse, rien de plus. Le modèle calcule fidèlement les conséquences des chiffres que vous avez saisis ; il n\'a pas d\'avis sur leur réalisme et aucun moyen de le savoir.',
    'Tous les résultats sont approximatifs. Les valeurs affichées sont arrondies pour la lisibilité alors que le calcul interne conserve toute sa précision : une vérification à la main peut donc différer d\'un ou deux derniers chiffres.',
    'Le calculateur est fourni en l\'état, sans aucune garantie. Aucune réclamation ne peut être adressée aux auteurs ni à l\'éditeur au titre d\'une décision, d\'une perte ou d\'un dommage lié à son utilisation.',
  ],
};
