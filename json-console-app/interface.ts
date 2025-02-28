// src/interfaces.ts

// 🎬 Interface voor een filmmaatschappij
export interface FilmCompany {
    id: string; // Uniek ID
    name: string; // Naam van het bedrijf
    foundedYear: number; // Jaar waarin het bedrijf is opgericht
    founder: string; // Oprichter
    headquarters: string; // Hoofdkantoorlocatie
    logoUrl: string; // URL van het logo
  }
  
  // 🎞️ Interface voor een regisseur
  export interface Director {
    id: string; // Uniek ID
    name: string; // Naam van de regisseur
    description: string; // Beschrijving
    age: number; // Leeftijd
    isActive: boolean; // Actieve status
    birthDate: string; // Geboortedatum
    imageUrl: string; // URL van de afbeelding
    nationality: string; // Nationaliteit
    awards: string[]; // Lijst van awards
    notableMovies: string[]; // Belangrijke films
    filmCompany: FilmCompany; // Gekoppelde filmmaatschappij
  }
  
  // 🎬 Interface voor een film
  export interface Movie {
    id: string; // Uniek ID
    name: string; // Naam van de film
    description: string; // Beschrijving
    releaseYear: number; // Jaar van release
    isPopular: boolean; // Populariteitsstatus
    releaseDate: string; // Datum van release
    imageUrl: string; // URL van de film afbeelding
    genre: string; // Genre van de film
    actors: string[]; // Lijst van acteurs
    director: {
      id: string; // ID van de regisseur
      name: string; // Naam van de regisseur
      nationality: string; // Nationaliteit van de regisseur
      awards: number; // Aantal gewonnen awards
      imageUrl: string; // URL van de regisseur afbeelding
    };
  }
  

export {}