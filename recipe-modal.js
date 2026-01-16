// Recipe data from Noodles.txt
const recipes = [
    {
        title: "Scallion Oil Noodles",
        prep: "10 minutes",
        cook: "10 minutes",
        total: "20 minutes",
        ingredients: [
            "1 bunch scallions (separate whites and greens, about 100g)",
            "1/2 onion, thinly sliced (about 100g)",
            "3/4 cup (180 ml) neutral oil (soybean, peanut, or canola)",
            "1/2 cup (125ml) light soy sauce",
            "2 tbsp dark soy sauce",
            "6 slices ginger",
            "1.5 tbsp sugar",
            "7 oz (200g) wheat noodles (fresh or dried)"
        ],
        instructions: [
            "Wash and pat dry the scallions thoroughly. Separate the white and green parts, then cut them into 1-inch strips. Lightly crush the white parts to help release their flavor more effectively.",
            "Slice the onions into thin strips.",
            "Add the white parts of the scallions and the onion slices to cold oil in a wok or pan. Heat gently over medium heat until they turn golden and begin to curl.",
            "Add the green parts of the scallions and continue frying over low heat until they become crispy and aromatic. Remove the scallions and set them aside.",
            "Stir the soy sauce into the infused oil. Return the crispy scallions to the pan. (Return a small portion to garnish.) Simmer until small bubbles appear, then turn off the heat.",
            "Boil the noodles according to the package instructions until al dente. Drain well.",
            "Toss the noodles with the hot scallion oil sauce until evenly coated. Top with the crispy scallions and freshly cut green onions to serve."
        ]
    },
    {
        title: "Chinese Noodle Soup",
        prep: "5 minutes",
        cook: "10 minutes",
        total: "15 minutes",
        ingredients: [
            "40g small tomato (finely chopped)",
            "0.13 tsp salt (to taste)",
            "0.13 tsp white pepper powder",
            "1 tbsp light soy sauce",
            "0.5 tsp sesame oil",
            "0.5 tsp black vinegar",
            "0.5 tsp dried shrimp flakes (optional)",
            "2 tbsp chopped scallion (and/or cilantro)",
            "1 tbsp neutral oil (such as canola, vegetable, or avocado oil)",
            "1 egg",
            "1.7 L water",
            "75g dried noodle",
            "A large handful leafy greens (such as pre-washed spinach, watercress, choy sum, or baby bok choy)"
        ],
        instructions: [
            "Put the chopped tomato, salt, white pepper powder, light soy sauce, sesame oil, black vinegar, dried shrimp flakes (if using), and scallion (or cilantro) into your noodle bowl.",
            "Pre-heat a pan or wok until it starts to smoke, and spread the oil around to coat. Fry the egg to your liking, dish it up, and set aside.",
            "Boil the water in a medium pot (or your wok), and add the noodles. When the noodles are almost done cooking, transfer 1½ cups of the noodle cooking water to the noodle bowl. Add the leafy greens to the pot/wok with the noodles. Once the noodles and greens are cooked, add them to the bowl. Top with the fried egg, and enjoy."
        ]
    },
    {
        title: "One-Pot Fried White Bee Hoon",
        prep: "15 minutes",
        cook: "20 minutes",
        total: "35 minutes",
        ingredients: [
            "100g bee hoon",
            "150g pork fillet, sliced thinly",
            "3 tbsp oil",
            "2 eggs, beaten with 1/4 tsp salt",
            "75g mushrooms (shimeji, shiitake, button, etc.)",
            "2 cups mix of shredded cabbage and carrot",
            "1/2 cup vegetable or chicken broth, lightly salted",
            "1/2 tbsp light soy sauce",
            "1 tsp sesame oil",
            "1/4 tsp salt",
            "Dash of ground white pepper",
            "100g bean sprouts",
            "Finely chopped spring onion and coriander, as garnish",
            "Meat Seasoning: 1 tbsp light soy sauce, 1/2 tbsp sesame oil, 1/2 tbsp shaoxing wine, dash of ground white pepper"
        ],
        instructions: [
            "Mix pork fillet with Meat Seasoning and set aside for 30 minutes.",
            "Soak bee hoon in room temperature water for 30 minutes. Drain and set aside.",
            "Heat 1 tbsp oil in a wok or deep frying pan over high heat. Add in egg and cook into an omelette. Remove and slice into thin strips.",
            "Heat remaining 2 tbsp oil in the wok or frying pan over high heat. Add in the pork fillet and stir-fry until the pork is no longer pink in colour, then add in the mushrooms, shredded cabbage and carrot. Stir-fry for a few minutes and add in broth, soy sauce, sesame oil, salt and white pepper. Bring to a boil and stir in the bee hoon. Turn down the heat so that the broth is still simmering. Add in the bean sprouts. Cover the pan and simmer for about 2 to 3 minutes, stirring frequently, until almost all the liquid has been absorbed.",
            "Remove the cover and add in the thinly sliced egg and toss well to mix everything together. Don't cook for too long as the bee hoon will start to break.",
            "Immediately transfer to a serving plate and serve, garnished with spring onion and coriander."
        ]
    },
    {
        title: "Wonton Noodles",
        prep: "10 minutes",
        cook: "20 minutes",
        total: "30 minutes",
        ingredients: [
            "2 garlic clove(s)",
            "1 tbsp oil",
            "Chinese flowering cabbage/choy sum",
            "815 ml water",
            "2 tbsp dark soy sauce",
            "1 tsp soy sauce",
            "1 tsp sweet soy sauce (kecap manis)",
            "1/2 tsp salt",
            "1/2 tsp sugar",
            "1 tsp sesame oil",
            "100g egg noodles"
        ],
        instructions: [
            "Prepare garlic oil by heating oil over medium heat and adding garlic to it. Allow garlic to cook for 3-5 minutes. Set garlic oil aside and pour water into the pan.",
            "Blanch vegetables (choy sum) for about 50 seconds. Set aside.",
            "In a clean pan, add dark soy sauce, soy sauce, sweet soy sauce, sesame oil, salt, sugar and a tablespoon of water. Heat over low heat. Stir garlic oil into sauce mixture.",
            "In a clean pot, bring water to a rolling boil and add noodles to cook for about 1 minute. Then, run the noodles through cold water before mixing it with the soy sauce mixture which was prepared earlier.",
            "Serve dry with pickled chillies, vegetables, barbecued pork and wonton soup."
        ]
    },
    {
        title: "Fishball Mee Pok Noodles",
        prep: "30 minutes",
        cook: "1 hour",
        total: "1 hour 30 minutes",
        ingredients: [
            "4 bundles egg noodles mee pok",
            "12 fish balls",
            "1 large fish cake cut into slices",
            "6 cups chicken broth (you can use water too, it won't taste as flavorful)",
            "50g dried anchovies",
            "1/2 tsp sugar (or to taste)",
            "1 tsp salt (or to taste)",
            "200g minced pork",
            "1 tsp soy sauce",
            "1/4 tsp ground white pepper",
            "1 tsp sesame oil",
            "1 tsp cornstarch",
            "1 tsp shallot oil or garlic oil (per serving)",
            "1 tsp fish sauce (per serving)",
            "1 tsp soy sauce (per serving)",
            "1 tsp black vinegar (per serving)",
            "1 tsp chili paste or ketchup (per serving)",
            "2 tbsp anchovy stock (per serving)",
            "2 cups bean sprouts",
            "Lettuce leaves for garnish"
        ],
        instructions: [
            "Bring the chicken broth to a boil. Add ikan bilis and seasonings. Lower the heat and let it simmer gently for 30 minutes. Season to your taste.",
            "Add fish balls and fish cakes into the soup. The ones typically bought are already precooked.",
            "Marinate the minced pork with the seasonings in a bowl for 15 minutes. Cover and keep in the refrigerator.",
            "Bring a pot of water to a boil. Add the beansprouts and blanch for 10 seconds or so and then refresh with cold water. Set aside.",
            "Prepare the tossing sauce by mixing everything together in an individual serving bowl.",
            "Bring a large pot of water to a boil. Loosen the egg noodles with your hand if they come in tight bundles. Place the noodles in the noodle blanching basket and cook for about 45 seconds and use chopsticks on the other hand to stir the noodles while cooking. Remove from boiling water and rinse in cold water to stop the cooking process. Shake off any excess water and put it in a serving bowl. Toss the noodles with the sauce.",
            "Portion the minced pork for 1 portion in an empty bowl. Ladle the hot broth over the meat. Use the back of the ladle to gently break up the meat. Let them sit for about 5 minutes. This will not fully cook the meat.",
            "Bring the broth back to a boil. Transfer the minced pork back to the noodle blanching basket and submerge this into the hot broth and use a chopstick to gently break up the meat. Only cook until the meat is no longer pink and cooked through. Do not overcook them.",
            "Top the meat on top of the noodles. Portion the fish balls, minced pork, beansprouts, and garnish with 1-2 pieces of lettuce. Garnish with chopped green onion. Serve the soup on the side if you want and serve immediately."
        ]
    }
];

function openRecipe(index) {
    const recipe = recipes[index];
    const modal = document.getElementById('recipeModal');
    const overlay = document.getElementById('recipeModalOverlay');
    const modalContent = document.getElementById('modalContent');

    // Build the HTML content
    let html = `
        <h2>${recipe.title}</h2>
        <div class="time-info">
            <div class="time-info-item">
                <strong>Prep</strong>
                <span>${recipe.prep}</span>
            </div>
            <div class="time-info-item">
                <strong>Cook</strong>
                <span>${recipe.cook}</span>
            </div>
            <div class="time-info-item">
                <strong>Total</strong>
                <span>${recipe.total}</span>
            </div>
        </div>

        <h3>Ingredients</h3>
        <ul>
    `;

    recipe.ingredients.forEach(ingredient => {
        html += `<li>${ingredient}</li>`;
    });

    html += `
        </ul>

        <h3>Instructions</h3>
        <ol>
    `;

    recipe.instructions.forEach(instruction => {
        html += `<li>${instruction}</li>`;
    });

    html += `
        </ol>
    `;

    modalContent.innerHTML = html;
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeRecipe() {
    const modal = document.getElementById('recipeModal');
    const overlay = document.getElementById('recipeModalOverlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeRecipe();
    }
});
