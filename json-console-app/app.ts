import readline from 'readline-sync';

import movies from './movies.json';
import director  from './director.json';



  
while (true) {
    

console.log("Welcome to the JSON data viewer!\n");
console.log("1. View all data");
console.log("2. Filter by ID");
console.log("3. Exit");

const answer : number =  readline.questionInt("\nPlease enter your choice: " );

switch (answer) {
    case 1:
        console.log(`You chose View all data`);
        console.log("\nMovies data loaded:");
        movies.forEach((movie: any) => {

            console.log(`- ${movie.name} (${movie.id})`)
        });
        
        console.log("\nDirectors data loaded:");
        director.forEach((director: any) => {
            console.log(`- ${director.name} (${director.id})`)
        });
        
        break;
    case 2:
        console.log(`You chose filter by ID`);

        const idNummer : string = readline.question(`\nPlease enter the ID youn want to filter by: `)
        const movie = movies.find((movie: any) => idNummer === movie.id);
        const dir = director.find((dir: any) => idNummer === dir.id)
        if (movie) {
            console.log(`- ${movie.name} (${movie.id})`);
            console.log(`- Description: ${movie.description}`);
            console.log(`- ReleaseYear: ${movie.releaseYear}`);
            console.log(`- isPopular: ${movie.isPopular}`);
            console.log(`- image: ${movie.imageUrl}`);
            console.log(`- Genre: ${movie.genre}`);
            console.log(`- Actors: ${movie.actors.join(',')}`)
            
            const director = movie.director;
            if (director) {
                console.log(`\n Director Info:`);
                console.log(`- Name: ${director.name}`);
                console.log(`- Nationality: ${director.nationality}`);
                console.log(`- Awards: ${director.awards}`);
                console.log(`- Image URL: ${director.imageUrl}`);
            }

        }

        if (dir) {
            console.log(`\nDirector Details:`);
            console.log(`- Name: ${dir.name}`);
            console.log(`- Description: ${dir.description}`);
            console.log(`- Age: ${dir.age}`);
            console.log(`- Active: ${dir.isActive}`);
            console.log(`- Birth Date: ${dir.birthDate}`);
            console.log(`- Nationality: ${dir.nationality}`);
            console.log(`- Awards: ${dir.awards.join(', ')}`);
            console.log(`- Notable Movies: ${dir.notableMovies.join(', ')}`);
            
            const filmCompany = dir.filmCompany;
            if(filmCompany){
            console.log(`\nFilm Company Info:`);
                console.log(`- Name: ${filmCompany.name}`);
                console.log(`- Founded Year: ${filmCompany.foundedYear}`);
                console.log(`- Founder: ${filmCompany.founder}`);
                console.log(`- Headquarters: ${filmCompany.headquarters}`);
                console.log(`- Logo URL: ${filmCompany.logoUrl}`);
            }
        }else{
            console.log(`No movie or director found with ID: ${idNummer}`)
        }

        break
    case 3: 
    console.log(`Goodbye!`);
    process.exit(0);  
    break;
    default:
        console.log(`Invalide choise. Please try again`);
        
}
}