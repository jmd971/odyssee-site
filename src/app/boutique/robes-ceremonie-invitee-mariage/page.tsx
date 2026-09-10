import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { GALERIE_CEREMONIE } from '@/lib/images'
import { breadcrumbSchema, faqSchema, type FaqItem } from '@/lib/schema'
import {
  Breadcrumb, CtaFinal, FaqSection, Galerie, JsonLd, OuNousTrouver, PageHero, PourAllerPlusLoin,
} from '@/components/ui/blocks'

const PATH = '/boutique/robes-ceremonie-invitee-mariage'
const TITLE = 'Robe invitée mariage & cérémonie femme – Guadeloupe | Odyssée'
const DESC =
  'Robes de cérémonie et tenues d’invitée de mariage pour femme en Guadeloupe. Essayage et conseil à Jarry, Baie-Mahault. Béatrice vous aide à choisir selon l’occasion.'

export const revalidate = 600

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: SITE_CONFIG.url + PATH },
  openGraph: { title: TITLE, description: DESC, url: SITE_CONFIG.url + PATH },
}

const faqItems: FaqItem[] = [
  {
    question: 'Quelle robe porter pour un mariage en Guadeloupe quand on est invitée ?',
    answer:
      'Une robe de cocktail mi-longue ou une robe de cérémonie longue et fluide, dans une matière qui respire. La règle non écrite : on évite le blanc, réservé à la mariée, et le noir intégral si la cérémonie est en journée. Chez Odyssée, à Jarry, Béatrice vous fait essayer plusieurs coupes avant de trancher.',
  },
  {
    question: 'Quelle tenue pour un mariage à la mairie ?',
    answer:
      'Le mariage civil est plus court et plus sobre que la cérémonie religieuse. Une robe genou, un tailleur-robe ou un ensemble structuré conviennent parfaitement. On garde les matières très brillantes pour la soirée.',
  },
  {
    question: 'Quelle robe pour un mariage sur la plage ?',
    answer:
      'Une robe longue fluide en voile ou en lin, des sandales plates ou compensées — les talons fins s’enfoncent dans le sable. Les imprimés clairs fonctionnent très bien sur les mariages de bord de mer en Guadeloupe.',
  },
  {
    question: 'Quelle robe choisir quand on est ronde ou qu’on a du ventre ?',
    answer:
      'Les coupes empire et portefeuille dégagent la taille et allongent la silhouette. Les tissus qui tombent, plutôt que ceux qui collent, changent tout. C’est exactement ce qu’on regarde ensemble en cabine : le conseil morphologie est compris dans l’essayage, sans supplément.',
  },
  {
    question: 'Faut-il prendre rendez-vous pour essayer ?',
    answer:
      'Non, vous pouvez pousser la porte pendant les heures d’ouverture, du mardi au samedi de 10h à 19h. Le rendez-vous reste conseillé si vous voulez du temps dédié, par exemple à l’approche d’une grosse cérémonie.',
  },
  {
    question: 'Les mariés imposent une couleur ou un thème, comment faire ?',
    answer:
      'C’est de plus en plus fréquent. Demandez la palette exacte plutôt que le nom d’une couleur : « bleu » ne veut rien dire, un nuancier ou une photo évite l’erreur. Si le thème est imposé au cortège seulement, vous n’êtes pas tenue de le suivre en tant qu’invitée. Venez avec la capture d’écran du faire-part, on part de là.',
  },
  {
    question: 'Combien de temps avant la cérémonie faut-il s’y prendre ?',
    answer:
      'Trois semaines suffisent dans la plupart des cas, une seule après-midi si la pièce vous va telle quelle. Prévoyez plus large si une retouche est nécessaire ou si la cérémonie tombe en pleine saison des mariages, quand tout le monde cherche en même temps.',
  },
  {
    question: 'Peut-on porter du madras à un mariage en Guadeloupe ?',
    answer:
      'Cela dépend du mariage. Le madras est une tenue de tradition, souvent portée par la famille ou le cortège dans un cadre précis, parfois pour un moment de la journée seulement. En tant qu’invitée, ne l’improvisez pas : demandez aux mariés. Nous ne vendons pas de madras, mais nous vous dirons franchement si votre tenue s’accorde ou détonne.',
  },
  {
    question: 'Vendez-vous des robes de mariée ?',
    answer:
      'Non. Odyssée habille les invitées, les témoins et les mères des mariés, pas la mariée elle-même. Pour une robe de mariée, plusieurs maisons spécialisées existent en Guadeloupe, dont certaines à Jarry.',
  },
]

const occasions = [
  {
    titre: 'Invitée de mariage',
    texte:
      'La tenue doit être habillée sans voler la vedette. Robe de cocktail mi-longue, robe de cérémonie fluide, ou ensemble pantalon large si vous n’êtes pas à l’aise en robe. On évite le blanc, le crème et l’ivoire.',
  },
  {
    titre: 'Témoin ou demoiselle d’honneur',
    texte:
      'Vous serez sur toutes les photos et debout une bonne partie de la journée. On privilégie une coupe qui tient sans être réajustée en permanence, et des couleurs qui s’accordent avec le cortège si la mariée a fixé une palette.',
  },
  {
    titre: 'Mère des mariés',
    texte:
      'Une tenue de cérémonie structurée, souvent en deux pièces, avec une belle matière. C’est la demande la plus fréquente en boutique, et celle où le conseil compte le plus.',
  },
  {
    titre: 'Baptême, communion, remise de diplôme',
    texte:
      'Cérémonies plus courtes, souvent en journée et en extérieur. Une robe imprimée ou une couleur franche fonctionne mieux qu’une tenue de soirée sortie de son contexte.',
  },
]

const saisons = [
  {
    q: 'Un mariage en juin ou en septembre',
    a: 'Pleine chaleur et forte humidité. Le coton, le lin, le voile et la viscose fluide sont vos alliés. On évite les doublures épaisses et les matières synthétiques qui ne respirent pas.',
  },
  {
    q: 'Un mariage en fin d’année',
    a: 'Les soirées sont un peu plus fraîches et les cérémonies plus habillées. C’est le moment des matières nobles, du satin et des couleurs profondes.',
  },
  {
    q: 'Un mariage bohème ou champêtre',
    a: 'Coupes souples, imprimés végétaux, accessoires en matières naturelles. Le raphia et les perles de nos boucles d’oreilles artisanales collent parfaitement à cet esprit.',
  },
]

const codes = [
  {
    titre: 'Le blanc, l’ivoire et le crème',
    texte:
      'Ils appartiennent à la mariée, sans exception. Cela vaut aussi pour une robe blanche à motifs et pour le total look blanc des soirées : dans une église, sur les photos, il vous place à côté d’elle. Si vous tenez au blanc, gardez-le pour une soirée blanche, c’est un autre exercice.',
  },
  {
    titre: 'Le madras',
    texte:
      'C’est une tenue de tradition, pas un imprimé décoratif. Selon les familles, il est porté par le cortège, à un moment précis de la journée, ou pas du tout. Une invitée qui arrive en madras sans que ce soit prévu se retrouve mal placée. Demandez aux mariés, la réponse prend dix secondes.',
  },
  {
    titre: 'Le noir intégral en journée',
    texte:
      'Il n’est plus interdit, mais il reste lourd sous le soleil de midi et il photographie mal en extérieur. Une touche de noir dans un ensemble, oui. Une robe noire de la tête aux pieds à une cérémonie de 11 h, on préfère vous le déconseiller.',
  },
  {
    titre: 'Le dress code imposé par les mariés',
    texte:
      'Quand une palette est annoncée sur le faire-part, demandez le nuancier ou une photo plutôt que le nom de la couleur. Et vérifiez à qui elle s’applique : souvent au cortège seulement, rarement à toute la salle.',
  },
]

const jourJ = [
  {
    q: 'La journée est longue, plus longue que prévu',
    a: 'Mairie, église, photos, vin d’honneur, repas, soirée. Une tenue qu’il faut réajuster toutes les dix minutes devient insupportable dès le vin d’honneur. C’est le premier test qu’on fait en cabine : vous vous asseyez, vous levez les bras, vous marchez.',
  },
  {
    q: 'On passe du climatisé au plein soleil',
    a: 'L’église ou la salle sont souvent fraîches, l’extérieur non. Une matière qui respire vous sauve la journée, une doublure synthétique vous la gâche. C’est le critère qui compte le plus ici, avant la coupe et avant la couleur.',
  },
  {
    q: 'Le sol n’est pas celui d’une salle de mariage métropolitaine',
    a: 'Herbe, sable, gravier, dalles de jardin. Les talons fins s’y plantent. Les compensées, les blocs et les sandales plates habillées existent, et vous danserez encore à minuit.',
  },
  {
    q: 'Les photos restent',
    a: 'Les couleurs franches ressortent, les imprimés très petits se brouillent à distance, le brillant excessif renvoie le flash. On regarde toujours la tenue en photo avant de valider — le miroir et l’objectif ne racontent pas la même chose.',
  },
]

export default function Page() {
  const trail = [
    { name: 'Boutique', path: '/boutique' },
    { name: 'Robes de cérémonie & invitée de mariage', path: PATH },
  ]

  return (
    <>
      <JsonLd data={[faqSchema(faqItems), breadcrumbSchema(trail)]} />
      <Breadcrumb trail={trail} />

      <PageHero
        eyebrow="Boutique · Jarry, Guadeloupe"
        title={<>Robe d’invitée de mariage<br /><span className="italic text-or">&amp; tenue de cérémonie</span></>}
        intro="Vous êtes invitée, témoin ou mère des mariés, et la date approche. Odyssée vous habille à Jarry, Baie-Mahault, avec un essayage tranquille et un avis franc sur ce qui vous va."
        ctaLabel="Réserver un essayage"
      />

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <p className="font-sans text-blanc-casse/75 leading-relaxed text-base md:text-lg">
            Trouver une <strong>robe d’invitée de mariage en Guadeloupe</strong> ne devrait pas être
            un casse-tête. Chez Odyssée Showroom Privé, à <strong>Jarry, Baie-Mahault</strong>, vous
            trouvez des <strong>robes de cérémonie</strong> et des tenues de cocktail pensées pour le
            climat d’ici : des matières qui respirent, des coupes qui tiennent toute la journée, et
            des couleurs qui passent aussi bien à l’église qu’au vin d’honneur.
          </p>
          <p className="font-sans text-blanc-casse/60 leading-relaxed mt-6">
            Béatrice vous reçoit, écoute le contexte — lieu, horaire, rôle, budget — et sort les
            pièces qui correspondent vraiment. Vous repartez habillée, pas seulement conseillée.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-luxury">
          <h2 className="section-title mb-10">Nos tenues de cérémonie</h2>
          <Galerie
            visuels={GALERIE_CEREMONIE}
            cols="md:grid-cols-4"
            legende="Pièces vues en boutique — le stock tourne, passez ou écrivez-nous pour savoir ce qui est disponible en ce moment"
          />
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-8">Que porter selon votre rôle</h2>
          <div className="space-y-8">
            {occasions.map((item) => (
              <div key={item.titre} className="border-l-2 border-or pl-6">
                <h3 className="font-serif text-xl font-medium text-blanc-casse mb-2">{item.titre}</h3>
                <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-8">Selon la saison et le lieu</h2>
          <div className="space-y-6">
            {saisons.map((item) => (
              <div key={item.q}>
                <h3 className="font-sans text-sm font-medium text-or mb-2">{item.q}</h3>
                <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-blanc-casse/55 leading-relaxed mt-8">
            Vous hésitez encore ? Notre guide{' '}
            <Link href="/blog/quelle-robe-mariage-guadeloupe" className="text-or hover:underline">
              quelle robe porter à un mariage en Guadeloupe
            </Link>{' '}
            détaille les cas de figure, saison par saison et morphologie par morphologie.
          </p>
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-4">Les codes à connaître ici</h2>
          <p className="font-sans text-sm text-blanc-casse/55 leading-relaxed mb-8">
            Ce sont les questions qu’on nous pose en cabine, et celles qu’aucun guide écrit
            ailleurs ne traite. Un mariage en Guadeloupe a ses usages.
          </p>
          <div className="space-y-8">
            {codes.map((item) => (
              <div key={item.titre} className="border-l-2 border-or pl-6">
                <h3 className="font-serif text-xl font-medium text-blanc-casse mb-2">{item.titre}</h3>
                <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed">{item.texte}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-blanc-casse/55 leading-relaxed mt-8">
            Sur le blanc et ses exceptions, notre article{' '}
            <Link href="/blog/tenue-soiree-blanche-femme" className="text-or hover:underline">
              comment s’habiller pour une soirée blanche
            </Link>{' '}
            explique quand il devient au contraire la bonne réponse.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <h2 className="section-title mb-4">Ce qui se passe vraiment le jour J</h2>
          <p className="font-sans text-sm text-blanc-casse/55 leading-relaxed mb-8">
            Une tenue se choisit en cabine mais se vit pendant douze heures. Voilà ce qu’on
            anticipe avec vous avant de valider.
          </p>
          <div className="space-y-6">
            {jourJ.map((item) => (
              <div key={item.q}>
                <h3 className="font-sans text-sm font-medium text-or mb-2">{item.q}</h3>
                <p className="font-sans text-sm text-blanc-casse/70 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-blanc-casse/55 leading-relaxed mt-8">
            Comptez trois semaines avant la date pour être tranquille, une après-midi si la pièce
            vous va telle quelle. En pleine saison des mariages, prenez de l’avance : tout le monde
            cherche en même temps.
          </p>
        </div>
      </section>

      <section className="py-16 bg-noir-alt">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-subtitle text-or">Ce qui change vraiment</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-blanc-casse mb-6">
              Un avis honnête,<br /><span className="italic text-or">pas un argumentaire</span>
            </h2>
            <p className="font-sans text-blanc-casse/65 leading-relaxed mb-4">
              Une cérémonie, c’est une journée longue, des photos qui restent, et souvent un budget
              qu’on ne veut pas regretter. Si une pièce ne vous va pas, Béatrice vous le dit.
            </p>
            <p className="font-sans text-blanc-casse/65 leading-relaxed mb-8">
              Le conseil en morphologie et en couleurs est compris dans l’essayage. Si vous voulez
              aller plus loin, il existe un{' '}
              <Link href="/services/relooking" className="text-or hover:underline">
                accompagnement relooking vestimentaire
              </Link>{' '}
              complet.
            </p>
            <a href={SITE_CONFIG.booking} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Réserver mon essayage
            </a>
          </div>
          <div className="bg-noir border border-blanc-casse/10 p-10">
            <h3 className="font-serif text-2xl text-blanc-casse mb-6">En pratique</h3>
            <ul className="space-y-4 font-sans text-sm text-blanc-casse/65">
              <li className="flex gap-3"><span className="text-or" aria-hidden="true">✦</span> Ouvert du mardi au samedi, 10h–19h</li>
              <li className="flex gap-3"><span className="text-or" aria-hidden="true">✦</span> Entrée libre, rendez-vous conseillé avant une cérémonie</li>
              <li className="flex gap-3"><span className="text-or" aria-hidden="true">✦</span> Conseil morphologie et couleurs compris</li>
              <li className="flex gap-3"><span className="text-or" aria-hidden="true">✦</span> Accessoires et bijoux assortis sur place</li>
              <li className="flex gap-3"><span className="text-or" aria-hidden="true">✦</span> Parking gratuit à Jarry, Baie-Mahault</li>
            </ul>
          </div>
        </div>
      </section>

      <OuNousTrouver />
      <FaqSection items={faqItems} />

      <PourAllerPlusLoin
        liens={[
          {
            label: 'Robes de soirée & cocktail',
            href: '/boutique/robes-soiree-cocktail',
            desc: 'Pour une soirée, un gala ou un anniversaire, plutôt qu’une cérémonie de journée.',
          },
          {
            label: 'Accessoires & bijoux',
            href: '/boutique/accessoires-bijoux',
            desc: 'Boucles d’oreilles artisanales, sacs et pièces qui finissent une tenue de cérémonie.',
          },
          {
            label: 'Quelle robe pour un mariage',
            href: '/blog/quelle-robe-mariage-guadeloupe',
            desc: 'Le guide complet : saison, lieu, rôle, morphologie et couleurs à éviter.',
          },
        ]}
      />

      <CtaFinal
        titre="Votre cérémonie approche ?"
        texte="Passez à la boutique de Jarry ou réservez un créneau : on trouve la tenue ensemble, sans précipitation."
      />
    </>
  )
}
