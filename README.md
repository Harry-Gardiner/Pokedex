# Pokedex

## Aim
Build a replica of the pokedex, a digital encyclopedia created by Professor Oak as an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokemon in the world that are contained in its database. 

I aim to build the app in two versions:
- V1:
  - pokedex for generation 1 pokemon
  - replicate the functionality of the pokedex
  - display a list of all 151 pokemon
    - GET pokemon
  - search and display a single pokemon
    - GET pokemon/(name/id)
- V2:
  - same functionality as V1
  - create a visual representation of the pokedex

**Front end**

V1 will include a search box. The searched pokemon will be displayed in a card. The 151 pokemon will be displayed as a scrollable list.

V2 will be a visual replica of the pokedex created using CSS. The search box will be outside of the pokedex, but all information re the pokemon will be contained within the pokedex. 

**Back end**

RESTful Pokemon API <https://pokeapi.co/>

GET requests will be made the to API. 