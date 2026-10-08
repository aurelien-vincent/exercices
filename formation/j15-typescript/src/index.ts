const prenom: string = "Thomas";
const age: number = 28;
const email: string = "thomas@example.com";
const compteActif: boolean = true;

const technologies: string[] = [
  "React",
  "Typescript",
  "Node.js",
];

function afficherUtilisateur(prenom: string, age: number, email: string, compteActif: boolean, technologies: string[]): void {
console.log(`Bonjour ${prenom}`);
console.log(`Age : ${age}`);
console.log(`Email : ${email}`);
console.log(`Compte actif : ${compteActif}`);
console.log(`Technologies : ${technologies.join(", ")}`);
}

afficherUtilisateur(prenom, age, email, compteActif, technologies);
