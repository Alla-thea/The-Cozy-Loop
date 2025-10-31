let allPatterns = [
    { id: 1, name: "Simple Beanie", level: "Beginner", category: 1, duration: "Short", image: "Images/beanie.png" },
    { id: 2, name: "Crochet Cardigan", level: "Intermediate", category: 1, duration: "Long", image: "Images/Crochet Cardigan.png" },
    { id: 3, name: "Lacy Summer Top", level: "Intermediate", category: 1, duration: "Medium", image: "Images/Lacy Summer Top.png" },
    { id: 4, name: "Chunky Sweater", level: "Advanced", category: 1, duration: "Long", image: "Images/Chunky Sweater.png" },
    { id: 5, name: "Granny Skirt", level: "Intermediate", category: 1, duration: "Medium", image: "Images/Granny Skirt.png" },
    { id: 6, name: "Infinity Scarf", level: "Beginner", category: 2, duration: "Medium", image: "Images/Infinity Scarf.png" },
    { id: 7, name: "Fingerless Gloves", level: "Beginner", category: 2, duration: "Short", image: "Images/Fingerless Gloves.png" },
    { id: 8, name: "Bucket Hat", level: "Intermediate", category: 2, duration: "Medium", image: "Images/Bucket Hat.png" },
    { id: 9, name: "Crochet Tote Bag", level: "Intermediate", category: 2, duration: "Medium", image: "Images/Crochet Tote Bag.png" },
    { id: 10, name: "Headband with Bow", level: "Beginner", category: 2, duration: "Short", image: "Images/Headband with Bow.png" },
    { id: 11, name: "Granny Square Blanket", level: "Beginner", category: 3, duration: "Long", image: "Images/Granny Square Blanket.png" },
    { id: 12, name: "Textured Cushion Cover", level: "Intermediate", category: 3, duration: "Medium", image: "Images/Textured Cushion Cover.png" },
    { id: 13, name: "Crochet Plant Hanger", level: "Beginner", category: 3, duration: "Short", image: "Images/Crochet Plant Hanger.png" },
    { id: 14, name: "Table Runner", level: "Intermediate", category: 3, duration: "Medium", image: "Images/Table Runner.png" },
    { id: 15, name: "Round Rug", level: "Advanced", category: 3, duration: "Long", image: "Images/Round Rug.png" },
    { id: 16, name: "Amigurumi Bunny", level: "Intermediate", category: 4, duration: "Medium", image: "Images/Amigurumi Bunny.png" },
    { id: 17, name: "Mini Octopus", level: "Beginner", category: 4, duration: "Short", image: "Images/Mini Octopus.png" },
    { id: 18, name: "Crochet Teddy Bear", level: "Intermediate", category: 4, duration: "Medium", image: "Images/Teddy Bear.png" },
    { id: 19, name: "Dinosaur Plush", level: "Advanced", category: 4, duration: "Long", image: "Images/Dinosaur Plush.png" },
    { id: 20, name: "Crochet Ball", level: "Beginner", category: 4, duration: "Short", image: "Images/Crochet Ball.png" }
];

let categories = [ 
    {id: 1, category: "Clothing"},
    {id: 2, category: "Accessories"},
    {id: 3, category: "Home Decor"},
    {id: 4, category: "Toys"}
];

let difficulties = [
    { id: 1, level: "Beginner" },
    { id: 2, level: "Intermediate" },
    { id: 3, level: "Advanced" }
];

let durations = [
    { id: 1, level: "Short" },
    { id: 2, level: "Medium" },
    { id: 3, level: "Long" }
];

// Active filters
let activeFilters = {
    category: [],
    difficulty: [],
    duration: []
};

// Initialize the page
function init() {
    createFilterChips();
    displayItems(allPatterns);
}

// Create filter chips
function createFilterChips() {
    // Category chips
    let categoryHTML = '';
    categories.forEach(cat => {
        categoryHTML += `<div class="filter-chip" onclick="toggleFilter('category', ${cat.id}, '${cat.category}')">${cat.category}</div>`;
    });
    document.getElementById('categoryFilters').innerHTML = categoryHTML;

    // Difficulty chips
    let difficultyHTML = '';
    difficulties.forEach(diff => {
        difficultyHTML += `<div class="filter-chip" onclick="toggleFilter('difficulty', '${diff.level}', '${diff.level}')">${diff.level}</div>`;
    });
    document.getElementById('difficultyFilters').innerHTML = difficultyHTML;

    // Duration chips
    let durationHTML = '';
    durations.forEach(dur => {
        durationHTML += `<div class="filter-chip" onclick="toggleFilter('duration', '${dur.level}', '${dur.level}')">${dur.level}</div>`;
    });
    document.getElementById('durationFilters').innerHTML = durationHTML;
}

// Toggle filter visibility
function toggleFilters() {
    document.getElementById('filterOptions').classList.toggle('active');
}

// Toggle individual filter
function toggleFilter(filterType, value, displayName) {
    const index = activeFilters[filterType].indexOf(value);
    
    if (index > -1) {
        activeFilters[filterType].splice(index, 1);
    } else {
        activeFilters[filterType].push(value);
    }
    
    updateFilterUI();
    applyFilters();
}

// Update filter UI
function updateFilterUI() {
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
    });

    document.querySelectorAll('.filter-chip').forEach(chip => {
        const text = chip.textContent;
        if (activeFilters.category.some(id => categories.find(c => c.id === id)?.category === text) ||
            activeFilters.difficulty.includes(text) ||
            activeFilters.duration.includes(text)) {
            chip.classList.add('active');
        }
    });
}

// Apply filters
function applyFilters() {
    let filteredPatterns = allPatterns;

    // Filter by category
    if (activeFilters.category.length > 0) {
        filteredPatterns = filteredPatterns.filter(pattern => 
            activeFilters.category.includes(pattern.category)
        );
    }

    // Filter by difficulty
    if (activeFilters.difficulty.length > 0) {
        filteredPatterns = filteredPatterns.filter(pattern => 
            activeFilters.difficulty.includes(pattern.level)
        );
    }

    // Filter by duration
    if (activeFilters.duration.length > 0) {
        filteredPatterns = filteredPatterns.filter(pattern => 
            activeFilters.duration.includes(pattern.duration)
        );
    }

    displayItems(filteredPatterns);
}

// Clear all filters
function clearAllFilters() {
    activeFilters = {
        category: [],
        difficulty: [],
        duration: []
    };
    updateFilterUI();
    displayItems(allPatterns);
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            filterPatterns(searchTerm);
        });
    }
    
    function filterPatterns(searchTerm) {
        // Get all pattern cards - adjust selector if your HTML structure is different
        const patternCards = document.querySelectorAll('.pattern-card, [class*="pattern"], [class*="card"]');
        
        if (patternCards.length === 0) {
            console.log('No pattern cards found. Check your HTML structure.');
            return;
        }
        
        patternCards.forEach(card => {
            // Get text content from the card
            const cardText = card.textContent.toLowerCase();
            
            // Show/hide based on search
            if (searchTerm === '' || cardText.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
});

// Display items
function displayItems(itemList) {
    if (itemList.length === 0) {
        document.getElementById('itemList').style.display = 'none';
        document.getElementById('noResults').style.display = 'block';
        return;
    }

    document.getElementById('itemList').style.display = 'grid';
    document.getElementById('noResults').style.display = 'none';

    let allItems = "";
    for(let i = 0; i < itemList.length; i++) {
        const categoryName = categories.find(cat => cat.id === itemList[i].category).category;
        const levelClass = itemList[i].level.toLowerCase();
        
        let item = `
            <div class="item-card" onclick="openItemDetailPage(${itemList[i].id})">
                <img src="${itemList[i].image}" alt="${itemList[i].name}">
                <div class="item-card-content">
                    <h4>${itemList[i].name}</h4>
                    <p><strong>Category:</strong> ${categoryName}</p>
                    <p><strong>Duration:</strong> ${itemList[i].duration}</p>
                    <span class="level-badge level-${levelClass}">${itemList[i].level}</span>
                </div>
            </div>
        `;
        allItems += item;
    }
    document.getElementById("itemList").innerHTML = allItems;
}

// Open item detail page
function openItemDetailPage(selectedItemID) {
    localStorage.setItem("danielItemID", selectedItemID);
    window.open("item-detail.html", "_self");
}

// Initialize on page load
init();

//Slide Show Section//
let slideIndex = 0;

showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
    
    setTimeout(showSlides, 3000);
}

function currentSlide(n) {
    slideIndex = n - 1;
    
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    slides[slideIndex].classList.add("active");
    dots[slideIndex].classList.add("active");
}