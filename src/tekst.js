export const tekst = [
  'Ak, det er dog herligt at tænke på, at man har fåt en sikker, betrygget stilling; at man har sit ​rundelige udkomme. Ikke sandt; det er en stor nydelse at tænke på?',
  'Kære Nora, vær ikke du vred på mig. Det er det værste ved en stilling som min, at den afsætter så megen bitterhed i sindet. Man har ingen at arbejde for; og dog nødes man til at være om sig på alle kanter. Leve skal man jo; og så blir man egenkærlig.',
  'Den gamle herre var jo slet ikke til; det var bare noget, jeg sad her og tænkte op igen og op igen, når jeg ikke vidste nogen udvej til at skaffe penge. Men det kan også være det samme; det gamle kedelige menneske kan bli for mig hvor han er; ​jeg bryr mig hverken om ham eller hans testament, for nu er jeg sorgløs.',
  'Å, det er en sagfører Krogstad, et menneske, som De ikke kender noget til. Han er bedærvet i karakter-rødderne, frue. Men selv han begyndte ​at snakke om, som noget højvigtigt, at han måtte leve.'
];

export default function useAvsnitt(antall) {
        return tekst.slice(0, antall);
}

