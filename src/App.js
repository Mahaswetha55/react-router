import React from "react";
import "./App.css";
 
function App() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src=
"https://w7.pngwing.com/pngs/525/938/png-transparent-gray-and-red-shopping-cart-illustration-supermarket-trolleys-service-colored-ribbon-shopping-centre.png"
                        />
                    </div>
                    <li>
                        <a href="#flowers">FLOWERS</a>
                    </li>
                    <li>
                        <a href="#fruits">FRUITS</a>
                    </li>
                    <li>
                        <a href="#nuts">NUTS</a>
                    </li>
                    <li>
                        <a href="#vegetables">VEGETABLES</a>
                    </li>
                </ul>
 
                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
                    </button>
                </div>
            </nav>
 
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                            FLOWERS MAKES MEMORIES!!!...
                        </h1>
                        <p class="text-small">
                        We human beings are a creature of habit and we love to make good old memories. Whether it is spending a nice dinner with family or capturing a candid of our lovers or simply going for a vacation to get an idea or an inspiration, capturing wonderful memories is something which makes our hearts take a ‘happy spin’. 
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            COLOURFUL AND HEALTHY FRUITS!!!...
                        </h1>
                        <p class="text-small">
                        Red fruits and vegetables, such as tomatoes, strawberries and red beans, are packed with vitamin C, vitamin A, potassium and antioxidants. Yellow/orange fruits and vegetables, including carrots, peaches, squash and pineapple, are also loaded with vitamin C, vitamin A and potassium.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            BEST NUTS YOU'LL EVER THE TASTE!!!...
                        </h1>
                        <p class="text-small">
                        Nuts may offer numerous health benefits, such as reducing your risk of heart disease and supporting your immune system. Some types of nuts include almonds, pistachios, and walnuts.Nuts have various textures, flavors, and nutrient profiles. They’re great on their own, paired with fruit, or added to dishes like salads, desserts, and grains.There are many benefits of eating nuts, such asTrusted Source supporting healthy body weight and helping to reduce your risk of certain health conditions like heart disease.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            FRESH VEGETABLES EVERYDAY!!!...
                        </h1>
                        <p class="text-small">
                        There is no single most healthy vegetable, but eating a variety of vegetables can improve health and well-being. Nutritious options to add to the diet include spinach, peas, sweet potatoes, and tomatoes.we look at 15 of the most healthful vegetables and suggest ways to enjoy them as part of a balanced diet.Specific vegetables may offer more health advantages to certain people, depending on their diets, overall health, and nutritional needs.
                        </p>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    );
}
 
export default App;