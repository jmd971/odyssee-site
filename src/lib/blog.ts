import { IMAGES, type Visuel } from './images'
import type { FaqItem } from './schema'

export type Bloc =
  | { type: 'p'; texte: string }
  | { type: 'h2'; texte: string }
  | { type: 'h3'; texte: string }
  | { type: 'ul'; items: string[] }
  | { type: 'lien'; href: string; avant: string; ancre: string; apres: string }

export type Article = {
  slug: string
  titre: string
  h1: string
  description: string
  date: string
  dateISO: string
  categorie: string
  resume: string
  visuel: Visuel
  contenu: Bloc[]
  faq?: FaqItem[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'quelle-robe-mariage-guadeloupe',
    titre: 'Quelle robe porter à un mariage en Guadeloupe ?',
    h1: 'Quelle robe porter à un mariage en Guadeloupe quand on est invitée',
    description:
      'Le guide complet pour choisir sa robe d’invitée de mariage en Guadeloupe : saison, lieu, morphologie, couleurs à éviter et erreurs fréquentes.',
    date: '8 août 2026',
    dateISO: '2026-08-08',
    categorie: 'Guide',
    resume:
      'Mairie, plage, église, vin d’honneur qui dure : ce qui marche vraiment sous le climat d’ici, et ce qu’on regrette une fois sur place.',
    visuel: IMAGES.totalLookBlanc,
    contenu: [
      {
        type: 'p',
        texte:
          'Recevoir un faire-part, c’est agréable. Se demander quoi porter, beaucoup moins. En Guadeloupe, la question se complique d’un paramètre que les guides métropolitains ignorent : il fait chaud, il fait humide, et une cérémonie dure souvent du matin jusqu’à tard le soir.',
      },
      {
        type: 'p',
        texte:
          'Voici comment trancher, cas par cas, sans se retrouver à transpirer dans une matière qui ne pardonne rien.',
      },
      { type: 'h2', texte: 'La règle de base : trois couleurs à éviter' },
      {
        type: 'p',
        texte:
          'Le blanc est réservé à la mariée. Cela vaut aussi pour l’ivoire, le crème et le champagne très clair, qui passent pour du blanc sur les photos. Le noir intégral reste discutable pour une cérémonie de journée : personne ne vous en voudra en soirée, mais à 10h du matin en extérieur, il fait sombre et il chauffe.',
      },
      {
        type: 'p',
        texte:
          'La troisième couleur à éviter est celle du cortège, si la mariée en a fixé une. Un simple message à la personne qui organise vous évite d’arriver assortie aux demoiselles d’honneur.',
      },
      { type: 'h2', texte: 'Selon le lieu de la cérémonie' },
      { type: 'h3', texte: 'Un mariage à la mairie' },
      {
        type: 'p',
        texte:
          'Le mariage civil est court, souvent en fin de matinée, et plus sobre. Une robe à hauteur de genou, un tailleur-robe ou un ensemble structuré suffisent largement. Gardez les matières très brillantes et les fentes hautes pour la soirée.',
      },
      { type: 'h3', texte: 'Un mariage sur la plage' },
      {
        type: 'p',
        texte:
          'C’est le cas où le mauvais choix se paie le plus vite. Les talons fins s’enfoncent dans le sable, les tissus lourds collent, et le vent règle son compte à toute jupe trop légère non lestée. Optez pour une robe longue fluide en voile ou en lin, avec des sandales plates ou compensées.',
      },
      { type: 'h3', texte: 'Un mariage à l’église puis en salle' },
      {
        type: 'p',
        texte:
          'Le format le plus fréquent, et le plus exigeant : il faut tenir de l’office climatisé au vin d’honneur en extérieur. Pensez à une pièce d’épaules amovible — étole, veste courte — plutôt qu’à une robe entièrement couverte.',
      },
      { type: 'h2', texte: 'Selon la saison' },
      {
        type: 'p',
        texte:
          'De juin à octobre, la chaleur et l’humidité sont au maximum. Le coton, le lin, la viscose fluide et le voile respirent ; le polyester doublé, non. Une doublure épaisse peut transformer une belle robe en épreuve d’endurance.',
      },
      {
        type: 'p',
        texte:
          'En fin d’année, les soirées se rafraîchissent légèrement et les cérémonies sont souvent plus habillées. C’est le moment des matières nobles et des couleurs profondes : bleu nuit, émeraude, bordeaux.',
      },
      { type: 'h2', texte: 'Selon votre morphologie' },
      {
        type: 'p',
        texte:
          'La question revient souvent, formulée sans détour : quelle robe quand on est ronde, ou quand on a du ventre. La réponse tient en deux principes.',
      },
      {
        type: 'ul',
        items: [
          'Dégager la taille plutôt que la serrer : les coupes empire et portefeuille allongent la silhouette là où une ceinture marquée souligne ce qu’on cherchait à adoucir.',
          'Choisir un tissu qui tombe plutôt qu’un tissu qui colle : la fluidité fait plus pour une silhouette que n’importe quelle gaine.',
          'Assumer une seule zone mise en valeur : le décolleté ou les jambes ou le dos, pas les trois ensemble.',
          'Se méfier des imprimés très petits sur une grande surface, qui donnent souvent un effet brouillon en photo.',
        ],
      },
      {
        type: 'p',
        texte:
          'Après 60 ans, le raisonnement ne change pas : ce sont les mêmes règles de coupe. La seule différence utile est le confort des matières et la hauteur de talon, parce que la journée est longue.',
      },
      { type: 'h2', texte: 'Les trois erreurs qu’on voit le plus' },
      {
        type: 'ul',
        items: [
          'Acheter la robe très en avance et les accessoires au dernier moment : la couleur ne tombe jamais juste, et les boucles d’oreilles se battent avec l’encolure.',
          'Essayer une seule pièce. On croit savoir ce qui nous va, et la deuxième robe essayée détrompe presque toujours.',
          'Oublier de marcher, s’asseoir et lever les bras en cabine. Une robe qui va debout et immobile ne dit rien de ce qu’elle vaudra au bout de six heures.',
        ],
      },
      { type: 'h2', texte: 'Où essayer en Guadeloupe' },
      {
        type: 'lien',
        href: '/boutique/robes-ceremonie-invitee-mariage',
        avant: 'Odyssée Showroom Privé, à Jarry (Baie-Mahault), habille les invitées, les témoins et les mères des mariés. Vous pouvez voir les ',
        ancre: 'robes de cérémonie et tenues d’invitée de mariage',
        apres:
          ' disponibles, et venir essayer sans rendez-vous du mardi au samedi. Nous ne vendons pas de robes de mariée : pour cela, plusieurs maisons spécialisées existent en Guadeloupe.',
      },
    ],
    faq: [
      {
        question: 'Peut-on porter une robe imprimée à un mariage ?',
        answer:
          'Oui, à condition que l’imprimé ne soit ni trop petit ni trop chargé. Un motif large et lisible passe très bien en Guadeloupe, notamment sur les cérémonies en extérieur.',
      },
      {
        question: 'Une combinaison-pantalon est-elle acceptable ?',
        answer:
          'Tout à fait, et c’est même souvent plus confortable pour une longue journée. Une combinaison fluide dans une belle matière est aussi habillée qu’une robe.',
      },
      {
        question: 'Quelle hauteur de talon choisir ?',
        answer:
          'Si la cérémonie comporte une partie en extérieur, sur herbe ou sur sable, préférez un talon large ou une compensée. Beaucoup d’invitées prévoient une seconde paire pour la soirée.',
      },
    ],
  },
  {
    slug: 'tenue-soiree-blanche-femme',
    titre: 'Tenue de soirée blanche : comment s’habiller',
    h1: 'Tenue de soirée blanche : comment s’habiller sans se tromper',
    description:
      'Que porter à une soirée blanche : robes, ensembles et pantalons, matières à privilégier sous le climat antillais, et erreurs classiques à éviter.',
    date: '8 août 2026',
    dateISO: '2026-08-08',
    categorie: 'Guide',
    resume:
      'La soirée blanche est un classique du calendrier antillais. Facile en apparence, piégeuse en pratique : tout se joue sur la matière et la coupe.',
    visuel: IMAGES.totalLookBlanc,
    contenu: [
      {
        type: 'p',
        texte:
          'Une soirée blanche a ceci de particulier que le code couleur est imposé à tout le monde. Ce qui vous distingue n’est donc plus la couleur, mais la coupe, la matière et les accessoires. C’est exactement là que la plupart des tenues se ratent.',
      },
      { type: 'h2', texte: 'Le piège numéro un : la transparence' },
      {
        type: 'p',
        texte:
          'Le blanc est la couleur la moins indulgente qui soit. Sous un éclairage de soirée, et surtout sous les flashs, un tissu fin devient transparent sans prévenir. Le test à faire en cabine est simple : tenez votre téléphone allumé derrière le tissu. Si vous voyez la lumière au travers, la photo la verra aussi.',
      },
      {
        type: 'p',
        texte:
          'La parade n’est pas de renoncer, mais de choisir une matière avec du grain — broderie anglaise, crêpe, lin épais, dentelle doublée — plutôt qu’un voile lisse.',
      },
      { type: 'h2', texte: 'Robe, ensemble ou pantalon ?' },
      { type: 'h3', texte: 'La robe longue' },
      {
        type: 'p',
        texte:
          'Le choix le plus sûr, à condition qu’elle ne colle pas. Une robe blanche moulante met en évidence chaque couture de sous-vêtement. Préférez une coupe évasée ou une taille légèrement marquée.',
      },
      { type: 'h3', texte: 'L’ensemble deux pièces' },
      {
        type: 'p',
        texte:
          'Notre préféré pour une soirée qui dure. Un haut à épaules dénudées et un pantalon large donnent de l’allure sans sacrifier le confort, et permettent de faire évoluer la tenue au fil de la soirée.',
      },
      { type: 'h3', texte: 'Le pantalon blanc' },
      {
        type: 'p',
        texte:
          'Souvent tapé comme « tenue soirée blanche femme pantalon », c’est une option très demandée et sous-estimée. Un pantalon large fluide avec un top travaillé est plus habillé qu’une robe banale.',
      },
      { type: 'h2', texte: 'Quand on est ronde' },
      {
        type: 'p',
        texte:
          'Le blanc a la réputation d’élargir. C’est vrai pour un blanc brillant et moulant, faux pour un blanc mat et fluide. Une matière avec de la tenue, une taille dégagée et une longueur franche font toute la différence — bien plus que la couleur elle-même.',
      },
      { type: 'h2', texte: 'Les accessoires font tout le travail' },
      {
        type: 'p',
        texte:
          'Puisque la tenue est monochrome, ce sont les accessoires qui portent la personnalité. C’est le moment des boucles d’oreilles franches, d’un collier fort sur une encolure dégagée, ou d’une touche de couleur unique.',
      },
      {
        type: 'ul',
        items: [
          'Une seule pièce forte : de grandes boucles d’oreilles ou un collier marquant, pas les deux.',
          'Le doré et le raphia fonctionnent particulièrement bien sur le blanc en contexte antillais.',
          'Une pointe de couleur vive — un sac, une ceinture — suffit à sortir du lot sans casser le code.',
          'Attention aux chaussures blanches bon marché, qui jaunissent sous les lumières artificielles.',
        ],
      },
      { type: 'h2', texte: 'Soirée blanche en extérieur ou en croisière' },
      {
        type: 'p',
        texte:
          'Sur un pont de bateau ou en bord de mer, ajoutez deux contraintes : le vent et le sel. Une jupe très légère non lestée devient ingérable, et les matières fragiles supportent mal l’humidité marine. Le coton et le lin restent les valeurs les plus fiables.',
      },
      {
        type: 'lien',
        href: '/boutique/robes-soiree-cocktail',
        avant: 'Pour voir ce qui est disponible en boutique, allez du côté des ',
        ancre: 'robes de soirée et de cocktail',
        apres: ', et venez essayer à Jarry, Baie-Mahault, du mardi au samedi.',
      },
    ],
    faq: [
      {
        question: 'Le blanc cassé est-il accepté à une soirée blanche ?',
        answer:
          'Oui, dans la grande majorité des cas. Écru, ivoire et blanc cassé passent sans problème, sauf si l’organisateur a explicitement demandé du blanc pur.',
      },
      {
        question: 'Quelles chaussures porter avec une tenue blanche ?',
        answer:
          'Le doré et le nude sont les plus sûrs : ils allongent la jambe sans imposer une seconde couleur. Le blanc sur blanc fonctionne aussi, à condition que les teintes soient proches.',
      },
    ],
  },
  {
    slug: 'combien-coute-relooking-guadeloupe',
    titre: 'Combien coûte un relooking vestimentaire en Guadeloupe ?',
    h1: 'Combien coûte un relooking vestimentaire en Guadeloupe ?',
    description:
      'Prix d’un relooking vestimentaire en Guadeloupe : ce qui fait varier la facture, les formules courantes, et comment éviter de payer pour du vent.',
    date: '8 août 2026',
    dateISO: '2026-08-08',
    categorie: 'Guide',
    resume:
      'La question que tout le monde se pose et que peu de professionnels affichent. Voici ce qui fait réellement varier le prix.',
    visuel: IMAGES.miseEnBeaute,
    contenu: [
      {
        type: 'p',
        texte:
          'Précision utile d’emblée : il est question ici de relooking vestimentaire, celui qui concerne votre garde-robe et votre image. Pas de relooking de meuble ni de cuisine, qui monopolisent pourtant une bonne partie des résultats de recherche sur le mot.',
      },
      { type: 'h2', texte: 'Ce qui fait varier le prix' },
      {
        type: 'p',
        texte:
          'Trois facteurs expliquent l’essentiel de l’écart entre deux devis.',
      },
      {
        type: 'ul',
        items: [
          'La durée : une séance ciblée d’une heure et un accompagnement d’une demi-journée n’ont rien à voir.',
          'Le périmètre : simple bilan de style, ou bilan plus tri de garde-robe, ou bilan plus accompagnement achat.',
          'Le déplacement : une intervention chez vous, avec tri de votre penderie, coûte mécaniquement plus qu’une séance en boutique.',
        ],
      },
      { type: 'h2', texte: 'Les formules qu’on rencontre' },
      { type: 'h3', texte: 'La séance de conseil ciblée' },
      {
        type: 'p',
        texte:
          'Une heure environ, centrée sur un besoin précis : une cérémonie à préparer, une prise de poste, une pièce qu’on n’arrive pas à porter. C’est la formule la plus accessible, et souvent la plus rentable pour commencer.',
      },
      { type: 'h3', texte: 'Le bilan de style complet' },
      {
        type: 'p',
        texte:
          'Deux à trois heures : analyse de morphologie, colorimétrie, puis mise en pratique en essayage. Vous repartez avec des repères réutilisables, y compris quand vous achetez ailleurs.',
      },
      { type: 'h3', texte: 'L’accompagnement shopping' },
      {
        type: 'p',
        texte:
          'La formule la plus chère, parce qu’elle mobilise la conseillère sur une demi-journée. À réserver aux situations où la garde-robe est vraiment à reconstruire.',
      },
      { type: 'h2', texte: 'Le poste de dépense qu’on oublie' },
      {
        type: 'p',
        texte:
          'Le tarif de la prestation n’est pas le coût réel. Un relooking se solde presque toujours par des achats, et c’est là que la facture peut déraper si personne ne cadre le budget en amont.',
      },
      {
        type: 'p',
        texte:
          'Une bonne conseillère vous demande votre budget vêtements avant de commencer, pas après. Si la question n’est jamais posée, c’est un mauvais signe.',
      },
      { type: 'h2', texte: 'Comment savoir si ça vaut le coup' },
      {
        type: 'p',
        texte:
          'Le meilleur indicateur n’est pas le prix, c’est ce qui reste six mois plus tard. Un relooking réussi se mesure au nombre de pièces que vous portez réellement, et au temps que vous ne passez plus à hésiter le matin.',
      },
      {
        type: 'p',
        texte:
          'À l’inverse, une séance qui se termine par une liste de recommandations sans essayage réel produit rarement un changement durable. La liste reste dans le téléphone, et la garde-robe ne bouge pas.',
      },
      {
        type: 'lien',
        href: '/services/relooking',
        avant: 'Chez Odyssée, à Jarry, la séance se déroule dans la boutique : ce qu’on identifie ensemble peut être essayé dans la foulée, sans obligation d’achat. Le détail du ',
        ancre: 'relooking vestimentaire et du conseil en image',
        apres: ' est sur la page dédiée, et le tarif vous est annoncé avant de réserver.',
      },
    ],
    faq: [
      {
        question: 'Un relooking est-il réservé aux grandes occasions ?',
        answer:
          'Non. Les demandes les plus fréquentes concernent le quotidien : une silhouette qui a changé, un nouveau poste, ou l’envie d’arrêter d’acheter des pièces jamais portées.',
      },
      {
        question: 'Faut-il acheter des vêtements après la séance ?',
        answer:
          'Aucune obligation. Beaucoup de clientes commencent par trier ce qu’elles possèdent déjà, et c’est souvent l’étape la plus rentable.',
      },
      {
        question: 'Combien de temps dure un relooking complet ?',
        answer:
          'Comptez deux à trois heures pour une formule complète incluant le diagnostic et la mise en pratique en essayage.',
      },
    ],
  },
  {
    slug: 'ou-acheter-robe-de-soiree-guadeloupe',
    titre: 'Où acheter une robe de soirée en Guadeloupe ?',
    h1: 'Où acheter une robe de soirée en Guadeloupe',
    description:
      'Où trouver une robe de soirée ou de cocktail en Guadeloupe : les options possibles, leurs limites, et comment choisir selon votre délai et votre budget.',
    date: '8 août 2026',
    dateISO: '2026-08-08',
    categorie: 'Guide',
    resume:
      'Boutique physique, commande en ligne, location : chaque option a un vrai intérêt et un vrai défaut. Voici comment trancher.',
    visuel: IMAGES.robeImprimee,
    contenu: [
      {
        type: 'p',
        texte:
          'Trouver une robe de soirée en Guadeloupe pose une difficulté que les métropolitains ne connaissent pas : le choix local est plus restreint, et la commande en ligne se heurte aux délais et aux retours compliqués. Voici les options réelles, avec leurs limites.',
      },
      { type: 'h2', texte: 'La boutique physique' },
      {
        type: 'p',
        texte:
          'C’est la seule option qui règle la question de l’essayage, et l’essayage est décisif sur une robe de soirée. Une coupe qui semble parfaite sur un mannequin peut ne rien donner sur vous, et l’inverse est tout aussi vrai.',
      },
      {
        type: 'p',
        texte:
          'La zone de Jarry, à Baie-Mahault, concentre plusieurs enseignes, ce qui permet d’enchaîner les essayages sans traverser l’île. L’avantage secondaire est le conseil : quelqu’un qui connaît son stock vous fera gagner un temps considérable.',
      },
      { type: 'h2', texte: 'La commande en ligne' },
      {
        type: 'p',
        texte:
          'Le choix est infini et les prix parfois imbattables. Deux réserves sérieuses cependant : les délais d’acheminement vers les Antilles, qui rendent l’exercice risqué à moins de trois semaines de l’événement, et les retours, souvent à votre charge et longs.',
      },
      {
        type: 'p',
        texte:
          'Si vous commandez en ligne, prenez systématiquement vos mensurations et comparez-les au guide des tailles du vendeur plutôt que de vous fier à votre taille habituelle.',
      },
      { type: 'h2', texte: 'La location' },
      {
        type: 'p',
        texte:
          'Intéressante pour une robe très marquée qu’on ne remettra pas. Elle suppose en revanche d’accepter une contrainte de calendrier stricte et de ne pas pouvoir faire de retouches.',
      },
      { type: 'h2', texte: 'Comment choisir selon votre situation' },
      {
        type: 'ul',
        items: [
          'Moins de trois semaines avant l’événement : boutique physique, sans hésiter. Le risque logistique du en ligne n’en vaut pas la peine.',
          'Budget serré : la boutique reste compétitive si vous visez une pièce polyvalente que vous remettrez, plutôt qu’une robe à usage unique.',
          'Morphologie sur laquelle vous avez des doutes : l’essayage accompagné vous fera économiser beaucoup d’essais infructueux.',
          'Besoin d’une pièce que personne n’aura : privilégiez les boutiques qui travaillent en petites séries.',
        ],
      },
      { type: 'h2', texte: 'La question des retouches' },
      {
        type: 'p',
        texte:
          'C’est le point le plus négligé. Une robe correctement retouchée à la taille et à la longueur change complètement d’allure, et coûte souvent bien moins cher qu’un modèle plus haut de gamme mal ajusté. Prévoyez-la dans votre budget dès le départ.',
      },
      {
        type: 'lien',
        href: '/boutique/robes-soiree-cocktail',
        avant: 'Odyssée Showroom Privé, à Jarry, travaille en petites séries avec essayage et conseil sur place. Vous pouvez voir la sélection de ',
        ancre: 'robes de soirée et de cocktail',
        apres: ' et passer du mardi au samedi, de 10h à 19h, sans rendez-vous.',
      },
    ],
    faq: [
      {
        question: 'Quel budget prévoir pour une robe de soirée en Guadeloupe ?',
        answer:
          'Cela dépend énormément de la pièce et de l’occasion. Le plus utile est de fixer votre budget avant d’entrer en boutique et de l’annoncer : une bonne vendeuse s’y tiendra et vous fera gagner du temps.',
      },
      {
        question: 'Combien de temps avant l’événement faut-il s’y prendre ?',
        answer:
          'Trois à quatre semaines est un délai confortable, notamment s’il faut des retouches. En dessous de deux semaines, restez sur une boutique physique.',
      },
    ],
  },
  {
    slug: 'accessoiriser-tenue-chic-elegante',
    titre: 'Comment accessoiriser une tenue pour un look chic et élégant ?',
    h1: 'Comment accessoiriser une tenue pour un look chic et élégant',
    description:
      'Bijoux, sacs et accessoires : les règles simples pour sublimer une tenue sans la surcharger, adaptées au style antillais.',
    date: '13 mars 2025',
    dateISO: '2025-03-13',
    categorie: 'Conseils mode',
    resume:
      'Les astuces pour sublimer votre style avec des bijoux, sacs et accessoires, sans tomber dans la surcharge.',
    visuel: IMAGES.bijoux,
    contenu: [
      {
        type: 'p',
        texte:
          'Un accessoire bien choisi transforme une tenue simple. Mal choisi, il la dessert. La différence tient à quelques principes faciles à retenir.',
      },
      { type: 'h2', texte: 'Une seule pièce forte à la fois' },
      {
        type: 'p',
        texte:
          'Si vous portez de grandes boucles d’oreilles, laissez le cou dégagé. Si vous portez un collier marquant, restez sur des puces discrètes. Deux pièces fortes se neutralisent au lieu de s’additionner.',
      },
      { type: 'h2', texte: 'Partir de l’encolure' },
      {
        type: 'p',
        texte:
          'L’encolure décide du bijou, pas l’inverse. Un col rond appelle un sautoir ou rien. Un décolleté en V supporte un pendentif qui suit la ligne. Une épaule dénudée se suffit souvent à elle-même.',
      },
      { type: 'h2', texte: 'Les matières naturelles avant tout' },
      {
        type: 'p',
        texte:
          'Le raphia, les perles de bois, les pierres mates : sous notre lumière, ces matières rendent bien mieux que le strass, qui prend vite un air artificiel en plein jour.',
      },
      { type: 'h2', texte: 'Le sac compte plus qu’on ne croit' },
      {
        type: 'p',
        texte:
          'C’est l’accessoire qu’on garde à la main sur toutes les photos. Un sac fatigué annule l’effet d’une belle tenue. Pour une soirée, un petit format suffit — et il oblige à ne prendre que l’essentiel, ce qui est une bonne discipline.',
      },
      {
        type: 'lien',
        href: '/boutique/accessoires-bijoux',
        avant: 'Vous pouvez voir la sélection de ',
        ancre: 'bijoux artisanaux et accessoires',
        apres: ' disponible à la boutique de Jarry.',
      },
    ],
  },
  {
    slug: 'tendances-mode-guadeloupe',
    titre: 'Les 5 tendances mode incontournables en Guadeloupe',
    h1: 'Les 5 tendances mode incontournables en Guadeloupe',
    description:
      'Couleurs vibrantes, imprimés tropicaux, matières légères : les tendances mode qui fonctionnent réellement sous le climat antillais.',
    date: '13 mars 2025',
    dateISO: '2025-03-13',
    categorie: 'Conseils mode',
    resume:
      'Les tendances qui tiennent vraiment sous notre climat, et celles qu’il vaut mieux laisser aux magazines métropolitains.',
    visuel: IMAGES.ensembleImprime,
    contenu: [
      {
        type: 'p',
        texte:
          'Toutes les tendances ne se transposent pas ici. Une pièce pensée pour un automne parisien n’a aucun sens sous 30 degrés et 80 % d’humidité. Voici celles qui fonctionnent réellement en Guadeloupe.',
      },
      { type: 'h2', texte: '1. Les ensembles coordonnés' },
      {
        type: 'p',
        texte:
          'Veste longue ouverte et pantalon large assortis : une tenue entière réglée d’un coup, sans effort de composition. C’est la pièce qui part le plus vite en boutique, et ce n’est pas un hasard.',
      },
      { type: 'h2', texte: '2. Les imprimés larges et lisibles' },
      {
        type: 'p',
        texte:
          'Les motifs graphiques de grande taille rendent mieux que les petits imprimés, qui deviennent brouillons en photo et sous forte lumière.',
      },
      { type: 'h2', texte: '3. Le total look blanc' },
      {
        type: 'p',
        texte:
          'Un incontournable du calendrier local, porté bien au-delà des soirées blanches officielles. Toute la réussite tient à la matière : avec du grain, jamais lisse et fin.',
      },
      { type: 'h2', texte: '4. Le wax revisité' },
      {
        type: 'p',
        texte:
          'Loin de la tenue de cérémonie traditionnelle, le wax contemporain se porte en touches : un bord de manche, un empiècement, une association avec de la résille ou un uni. Plus discret, plus portable au quotidien.',
      },
      { type: 'h2', texte: '5. Les matières qui respirent' },
      {
        type: 'p',
        texte:
          'Ce n’est pas une tendance, c’est une nécessité devenue un critère de style. Coton, lin, viscose fluide. Une belle pièce dans une matière qui ne respire pas finira au fond du placard, quelle que soit sa coupe.',
      },
      {
        type: 'lien',
        href: '/boutique/vetements-femme',
        avant: 'Ces pièces passent régulièrement à la boutique : voyez la sélection ',
        ancre: 'prêt-à-porter femme à Jarry',
        apres: '.',
      },
    ],
  },
  {
    slug: 'trouver-tenue-ideale-boutique',
    titre: '5 conseils pour trouver la tenue idéale en boutique',
    h1: '5 conseils pour trouver la tenue idéale en boutique',
    description:
      'Astuces mode et morphologie pour dénicher la tenue parfaite en boutique, gagner du temps et éviter les achats regrettés.',
    date: '27 janvier 2025',
    dateISO: '2025-01-27',
    categorie: 'Conseils mode',
    resume:
      'Comment aborder un essayage pour en ressortir avec la bonne pièce, plutôt qu’avec un doute et un ticket de caisse.',
    visuel: IMAGES.robeDenim,
    contenu: [
      {
        type: 'p',
        texte:
          'La plupart des achats regrettés se décident en cabine, en quelques minutes, dans de mauvaises conditions. Voici comment mettre les chances de votre côté.',
      },
      { type: 'h2', texte: '1. Y aller avec les bonnes chaussures' },
      {
        type: 'p',
        texte:
          'Essayer une robe longue en baskets ne dit rien de son tombé réel. Emportez la hauteur de talon que vous porterez, ou demandez-en une en boutique.',
      },
      { type: 'h2', texte: '2. Bouger dans la cabine' },
      {
        type: 'p',
        texte:
          'Asseyez-vous, levez les bras, marchez. Une pièce qui va debout et immobile peut devenir inconfortable au bout de deux heures, et une cérémonie en dure six.',
      },
      { type: 'h2', texte: '3. Annoncer son budget' },
      {
        type: 'p',
        texte:
          'Ce n’est pas gênant, c’est efficace. Une vendeuse qui connaît votre limite vous montre les bonnes pièces et vous évite de tomber amoureuse d’un modèle hors de portée.',
      },
      { type: 'h2', texte: '4. Essayer une pièce qu’on n’aurait pas choisie' },
      {
        type: 'p',
        texte:
          'C’est souvent celle-là qui fonctionne. Nous avons tous des a priori sur ce qui nous va, hérités d’un essayage raté il y a des années.',
      },
      { type: 'h2', texte: '5. Se méfier de la lumière' },
      {
        type: 'p',
        texte:
          'Regardez la pièce à la lumière du jour si c’est possible. Les éclairages de cabine flattent certaines couleurs et en trahissent d’autres, particulièrement les blancs et les nudes.',
      },
      {
        type: 'lien',
        href: '/services/stylisme',
        avant: 'Si vous préférez ne pas décider seule, une ',
        ancre: 'séance de conseil en stylisme',
        apres: ' d’une heure suffit généralement à trancher.',
      },
    ],
  },
]

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug)
}
