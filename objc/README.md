# OpenAPIClient

The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 80,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.

This ObjC package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0
- Package version: 1.0
- Build package: org.openapitools.codegen.languages.ObjcClientCodegen
For more information, please visit [https://spoonacular.com/contact](https://spoonacular.com/contact)

## Requirements

The SDK requires [**ARC (Automatic Reference Counting)**](http://stackoverflow.com/questions/7778356/how-to-enable-disable-automatic-reference-counting) to be enabled in the Xcode project.

## Installation & Usage
### Install from Github using [CocoaPods](https://cocoapods.org/)

Add the following to the Podfile:

```ruby
pod 'OpenAPIClient', :git => 'https://github.com/GIT_USER_ID/GIT_REPO_ID.git'
```

To specify a particular branch, append `, :branch => 'branch-name-here'`

To specify a particular commit, append `, :commit => '11aa22'`

### Install from local path using [CocoaPods](https://cocoapods.org/)

Put the SDK under your project folder (e.g. /path/to/objc_project/Vendor/OpenAPIClient) and then add the following to the Podfile:

```ruby
pod 'OpenAPIClient', :path => 'Vendor/OpenAPIClient'
```

### Usage

Import the following:

```objc
#import <OpenAPIClient/OAIApiClient.h>
#import <OpenAPIClient/OAIDefaultConfiguration.h>
// load models
#import <OpenAPIClient/OAIInlineObject.h>
#import <OpenAPIClient/OAIInlineObject1.h>
#import <OpenAPIClient/OAIInlineObject10.h>
#import <OpenAPIClient/OAIInlineObject11.h>
#import <OpenAPIClient/OAIInlineObject12.h>
#import <OpenAPIClient/OAIInlineObject13.h>
#import <OpenAPIClient/OAIInlineObject14.h>
#import <OpenAPIClient/OAIInlineObject15.h>
#import <OpenAPIClient/OAIInlineObject16.h>
#import <OpenAPIClient/OAIInlineObject2.h>
#import <OpenAPIClient/OAIInlineObject3.h>
#import <OpenAPIClient/OAIInlineObject4.h>
#import <OpenAPIClient/OAIInlineObject5.h>
#import <OpenAPIClient/OAIInlineObject6.h>
#import <OpenAPIClient/OAIInlineObject7.h>
#import <OpenAPIClient/OAIInlineObject8.h>
#import <OpenAPIClient/OAIInlineObject9.h>
// load API classes for accessing endpoints
#import <OpenAPIClient/OAIDefaultApi.h>

```

## Recommendation

It's recommended to create an instance of ApiClient per thread in a multi-threaded environment to avoid any potential issues.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```objc


NSString* *username = dsky; // The username.
NSString* *hash = 4b5v4398573406; // The private hash for the username.
OAIInlineObject11* *inlineObject11 = [[OAIInlineObject11 alloc] init]; // 

OAIDefaultApi *apiInstance = [[OAIDefaultApi alloc] init];

// Add to Meal Plan
[apiInstance addToMealPlanWithUsername:username
    hash:hash
    inlineObject11:inlineObject11
              completionHandler: ^(NSObject* output, NSError* error) {
                            if (output) {
                                NSLog(@"%@", output);
                            }
                            if (error) {
                                NSLog(@"Error: %@", error);
                            }
                        }];

```

## Documentation for API Endpoints

All URIs are relative to *https://api.spoonacular.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OAIDefaultApi* | [**addToMealPlan**](docs/OAIDefaultApi.md#addtomealplan) | **POST** /mealplanner/{username}/items | Add to Meal Plan
*OAIDefaultApi* | [**addToShoppingList**](docs/OAIDefaultApi.md#addtoshoppinglist) | **POST** /mealplanner/{username}/shopping-list/items | Add to Shopping List
*OAIDefaultApi* | [**analyzeARecipeSearchQuery**](docs/OAIDefaultApi.md#analyzearecipesearchquery) | **GET** /recipes/queries/analyze | Analyze a Recipe Search Query
*OAIDefaultApi* | [**analyzeRecipeInstructions**](docs/OAIDefaultApi.md#analyzerecipeinstructions) | **POST** /recipes/analyzeInstructions | Analyze Recipe Instructions
*OAIDefaultApi* | [**autocompleteIngredientSearch**](docs/OAIDefaultApi.md#autocompleteingredientsearch) | **GET** /food/ingredients/autocomplete | Autocomplete Ingredient Search
*OAIDefaultApi* | [**autocompleteMenuItemSearch**](docs/OAIDefaultApi.md#autocompletemenuitemsearch) | **GET** /food/menuItems/suggest | Autocomplete Menu Item Search
*OAIDefaultApi* | [**autocompleteProductSearch**](docs/OAIDefaultApi.md#autocompleteproductsearch) | **GET** /food/products/suggest | Autocomplete Product Search
*OAIDefaultApi* | [**autocompleteRecipeSearch**](docs/OAIDefaultApi.md#autocompleterecipesearch) | **GET** /recipes/autocomplete | Autocomplete Recipe Search
*OAIDefaultApi* | [**classifyCuisine**](docs/OAIDefaultApi.md#classifycuisine) | **POST** /recipes/cuisine | Classify Cuisine
*OAIDefaultApi* | [**classifyGroceryProduct**](docs/OAIDefaultApi.md#classifygroceryproduct) | **POST** /food/products/classify | Classify Grocery Product
*OAIDefaultApi* | [**classifyGroceryProductBulk**](docs/OAIDefaultApi.md#classifygroceryproductbulk) | **POST** /food/products/classifyBatch | Classify Grocery Product Bulk
*OAIDefaultApi* | [**clearMealPlanDay**](docs/OAIDefaultApi.md#clearmealplanday) | **DELETE** /mealplanner/{username}/day/{date} | Clear Meal Plan Day
*OAIDefaultApi* | [**computeGlycemicLoad**](docs/OAIDefaultApi.md#computeglycemicload) | **POST** /food/ingredients/glycemicLoad | Compute Glycemic Load
*OAIDefaultApi* | [**connectUser**](docs/OAIDefaultApi.md#connectuser) | **POST** /users/connect | Connect User
*OAIDefaultApi* | [**convertAmounts**](docs/OAIDefaultApi.md#convertamounts) | **GET** /recipes/convert | Convert Amounts
*OAIDefaultApi* | [**createRecipeCard**](docs/OAIDefaultApi.md#createrecipecard) | **POST** /recipes/visualizeRecipe | Create Recipe Card
*OAIDefaultApi* | [**deleteFromMealPlan**](docs/OAIDefaultApi.md#deletefrommealplan) | **DELETE** /mealplanner/{username}/items/{id} | Delete from Meal Plan
*OAIDefaultApi* | [**deleteFromShoppingList**](docs/OAIDefaultApi.md#deletefromshoppinglist) | **DELETE** /mealplanner/{username}/shopping-list/items/{id} | Delete from Shopping List
*OAIDefaultApi* | [**detectFoodInText**](docs/OAIDefaultApi.md#detectfoodintext) | **POST** /food/detect | Detect Food in Text
*OAIDefaultApi* | [**extractRecipeFromWebsite**](docs/OAIDefaultApi.md#extractrecipefromwebsite) | **GET** /recipes/extract | Extract Recipe from Website
*OAIDefaultApi* | [**generateMealPlan**](docs/OAIDefaultApi.md#generatemealplan) | **GET** /mealplanner/generate | Generate Meal Plan
*OAIDefaultApi* | [**generateShoppingList**](docs/OAIDefaultApi.md#generateshoppinglist) | **POST** /mealplanner/{username}/shopping-list/{start-date}/{end-date} | Generate Shopping List
*OAIDefaultApi* | [**getARandomFoodJoke**](docs/OAIDefaultApi.md#getarandomfoodjoke) | **GET** /food/jokes/random | Get a Random Food Joke
*OAIDefaultApi* | [**getAnalyzedRecipeInstructions**](docs/OAIDefaultApi.md#getanalyzedrecipeinstructions) | **GET** /recipes/{id}/analyzedInstructions | Get Analyzed Recipe Instructions
*OAIDefaultApi* | [**getComparableProducts**](docs/OAIDefaultApi.md#getcomparableproducts) | **GET** /food/products/upc/{upc}/comparable | Get Comparable Products
*OAIDefaultApi* | [**getConversationSuggests**](docs/OAIDefaultApi.md#getconversationsuggests) | **GET** /food/converse/suggest | Get Conversation Suggests
*OAIDefaultApi* | [**getDishPairingForWine**](docs/OAIDefaultApi.md#getdishpairingforwine) | **GET** /food/wine/dishes | Get Dish Pairing for Wine
*OAIDefaultApi* | [**getIngredientInformation**](docs/OAIDefaultApi.md#getingredientinformation) | **GET** /food/ingredients/{id}/information | Get Ingredient Information
*OAIDefaultApi* | [**getIngredientSubstitutes**](docs/OAIDefaultApi.md#getingredientsubstitutes) | **GET** /food/ingredients/substitutes | Get Ingredient Substitutes
*OAIDefaultApi* | [**getIngredientSubstitutesByID**](docs/OAIDefaultApi.md#getingredientsubstitutesbyid) | **GET** /food/ingredients/{id}/substitutes | Get Ingredient Substitutes by ID
*OAIDefaultApi* | [**getMealPlanTemplate**](docs/OAIDefaultApi.md#getmealplantemplate) | **GET** /mealplanner/{username}/templates/{id} | Get Meal Plan Template
*OAIDefaultApi* | [**getMealPlanTemplates**](docs/OAIDefaultApi.md#getmealplantemplates) | **GET** /mealplanner/{username}/templates | Get Meal Plan Templates
*OAIDefaultApi* | [**getMealPlanWeek**](docs/OAIDefaultApi.md#getmealplanweek) | **GET** /mealplanner/{username}/week/{start-date} | Get Meal Plan Week
*OAIDefaultApi* | [**getMenuItemInformation**](docs/OAIDefaultApi.md#getmenuiteminformation) | **GET** /food/menuItems/{id} | Get Menu Item Information
*OAIDefaultApi* | [**getProductInformation**](docs/OAIDefaultApi.md#getproductinformation) | **GET** /food/products/{id} | Get Product Information
*OAIDefaultApi* | [**getRandomFoodTrivia**](docs/OAIDefaultApi.md#getrandomfoodtrivia) | **GET** /food/trivia/random | Get Random Food Trivia
*OAIDefaultApi* | [**getRandomRecipes**](docs/OAIDefaultApi.md#getrandomrecipes) | **GET** /recipes/random | Get Random Recipes
*OAIDefaultApi* | [**getRecipeEquipmentByID**](docs/OAIDefaultApi.md#getrecipeequipmentbyid) | **GET** /recipes/{id}/equipmentWidget.json | Get Recipe Equipment by ID
*OAIDefaultApi* | [**getRecipeInformation**](docs/OAIDefaultApi.md#getrecipeinformation) | **GET** /recipes/{id}/information | Get Recipe Information
*OAIDefaultApi* | [**getRecipeInformationBulk**](docs/OAIDefaultApi.md#getrecipeinformationbulk) | **GET** /recipes/informationBulk | Get Recipe Information Bulk
*OAIDefaultApi* | [**getRecipeIngredientsByID**](docs/OAIDefaultApi.md#getrecipeingredientsbyid) | **GET** /recipes/{id}/ingredientWidget.json | Get Recipe Ingredients by ID
*OAIDefaultApi* | [**getRecipeNutritionWidgetByID**](docs/OAIDefaultApi.md#getrecipenutritionwidgetbyid) | **GET** /recipes/{id}/nutritionWidget.json | Get Recipe Nutrition Widget by ID
*OAIDefaultApi* | [**getRecipePriceBreakdownByID**](docs/OAIDefaultApi.md#getrecipepricebreakdownbyid) | **GET** /recipes/{id}/priceBreakdownWidget.json | Get Recipe Price Breakdown by ID
*OAIDefaultApi* | [**getRecipeTasteByID**](docs/OAIDefaultApi.md#getrecipetastebyid) | **GET** /recipes/{id}/tasteWidget.json | Get Recipe Taste by ID
*OAIDefaultApi* | [**getShoppingList**](docs/OAIDefaultApi.md#getshoppinglist) | **GET** /mealplanner/{username}/shopping-list | Get Shopping List
*OAIDefaultApi* | [**getSimilarRecipes**](docs/OAIDefaultApi.md#getsimilarrecipes) | **GET** /recipes/{id}/similar | Get Similar Recipes
*OAIDefaultApi* | [**getWineDescription**](docs/OAIDefaultApi.md#getwinedescription) | **GET** /food/wine/description | Get Wine Description
*OAIDefaultApi* | [**getWinePairing**](docs/OAIDefaultApi.md#getwinepairing) | **GET** /food/wine/pairing | Get Wine Pairing
*OAIDefaultApi* | [**getWineRecommendation**](docs/OAIDefaultApi.md#getwinerecommendation) | **GET** /food/wine/recommendation | Get Wine Recommendation
*OAIDefaultApi* | [**guessNutritionByDishName**](docs/OAIDefaultApi.md#guessnutritionbydishname) | **GET** /recipes/guessNutrition | Guess Nutrition by Dish Name
*OAIDefaultApi* | [**imageAnalysisByURL**](docs/OAIDefaultApi.md#imageanalysisbyurl) | **GET** /food/images/analyze | Image Analysis by URL
*OAIDefaultApi* | [**imageClassificationByURL**](docs/OAIDefaultApi.md#imageclassificationbyurl) | **GET** /food/images/classify | Image Classification by URL
*OAIDefaultApi* | [**ingredientSearch**](docs/OAIDefaultApi.md#ingredientsearch) | **GET** /food/ingredients/search | Ingredient Search
*OAIDefaultApi* | [**mapIngredientsToGroceryProducts**](docs/OAIDefaultApi.md#mapingredientstogroceryproducts) | **POST** /food/ingredients/map | Map Ingredients to Grocery Products
*OAIDefaultApi* | [**parseIngredients**](docs/OAIDefaultApi.md#parseingredients) | **POST** /recipes/parseIngredients | Parse Ingredients
*OAIDefaultApi* | [**quickAnswer**](docs/OAIDefaultApi.md#quickanswer) | **GET** /recipes/quickAnswer | Quick Answer
*OAIDefaultApi* | [**searchAllFood**](docs/OAIDefaultApi.md#searchallfood) | **GET** /food/search | Search All Food
*OAIDefaultApi* | [**searchCustomFoods**](docs/OAIDefaultApi.md#searchcustomfoods) | **GET** /food/customFoods/search | Search Custom Foods
*OAIDefaultApi* | [**searchFoodVideos**](docs/OAIDefaultApi.md#searchfoodvideos) | **GET** /food/videos/search | Search Food Videos
*OAIDefaultApi* | [**searchGroceryProducts**](docs/OAIDefaultApi.md#searchgroceryproducts) | **GET** /food/products/search | Search Grocery Products
*OAIDefaultApi* | [**searchGroceryProductsByUPC**](docs/OAIDefaultApi.md#searchgroceryproductsbyupc) | **GET** /food/products/upc/{upc} | Search Grocery Products by UPC
*OAIDefaultApi* | [**searchMenuItems**](docs/OAIDefaultApi.md#searchmenuitems) | **GET** /food/menuItems/search | Search Menu Items
*OAIDefaultApi* | [**searchRecipes**](docs/OAIDefaultApi.md#searchrecipes) | **GET** /recipes/complexSearch | Search Recipes
*OAIDefaultApi* | [**searchRecipesByIngredients**](docs/OAIDefaultApi.md#searchrecipesbyingredients) | **GET** /recipes/findByIngredients | Search Recipes by Ingredients
*OAIDefaultApi* | [**searchRecipesByNutrients**](docs/OAIDefaultApi.md#searchrecipesbynutrients) | **GET** /recipes/findByNutrients | Search Recipes by Nutrients
*OAIDefaultApi* | [**searchSiteContent**](docs/OAIDefaultApi.md#searchsitecontent) | **GET** /food/site/search | Search Site Content
*OAIDefaultApi* | [**summarizeRecipe**](docs/OAIDefaultApi.md#summarizerecipe) | **GET** /recipes/{id}/summary | Summarize Recipe
*OAIDefaultApi* | [**talkToChatbot**](docs/OAIDefaultApi.md#talktochatbot) | **GET** /food/converse | Talk to Chatbot
*OAIDefaultApi* | [**visualizeEquipment**](docs/OAIDefaultApi.md#visualizeequipment) | **POST** /recipes/visualizeEquipment | Visualize Equipment
*OAIDefaultApi* | [**visualizeIngredients**](docs/OAIDefaultApi.md#visualizeingredients) | **POST** /recipes/visualizeIngredients | Visualize Ingredients
*OAIDefaultApi* | [**visualizeMenuItemNutritionByID**](docs/OAIDefaultApi.md#visualizemenuitemnutritionbyid) | **GET** /food/menuItems/{id}/nutritionWidget | Visualize Menu Item Nutrition by ID
*OAIDefaultApi* | [**visualizePriceBreakdown**](docs/OAIDefaultApi.md#visualizepricebreakdown) | **POST** /recipes/visualizePriceEstimator | Visualize Price Breakdown
*OAIDefaultApi* | [**visualizeProductNutritionByID**](docs/OAIDefaultApi.md#visualizeproductnutritionbyid) | **GET** /food/products/{id}/nutritionWidget | Visualize Product Nutrition by ID
*OAIDefaultApi* | [**visualizeRecipeEquipmentByID**](docs/OAIDefaultApi.md#visualizerecipeequipmentbyid) | **GET** /recipes/{id}/equipmentWidget | Visualize Recipe Equipment by ID
*OAIDefaultApi* | [**visualizeRecipeIngredientsByID**](docs/OAIDefaultApi.md#visualizerecipeingredientsbyid) | **GET** /recipes/{id}/ingredientWidget | Visualize Recipe Ingredients by ID
*OAIDefaultApi* | [**visualizeRecipeNutrition**](docs/OAIDefaultApi.md#visualizerecipenutrition) | **POST** /recipes/visualizeNutrition | Visualize Recipe Nutrition
*OAIDefaultApi* | [**visualizeRecipeNutritionByID**](docs/OAIDefaultApi.md#visualizerecipenutritionbyid) | **GET** /recipes/{id}/nutritionWidget | Visualize Recipe Nutrition by ID
*OAIDefaultApi* | [**visualizeRecipePriceBreakdownByID**](docs/OAIDefaultApi.md#visualizerecipepricebreakdownbyid) | **GET** /recipes/{id}/priceBreakdownWidget | Visualize Recipe Price Breakdown by ID
*OAIDefaultApi* | [**visualizeRecipeTaste**](docs/OAIDefaultApi.md#visualizerecipetaste) | **POST** /recipes/visualizeTaste | Visualize Recipe Taste
*OAIDefaultApi* | [**visualizeRecipeTasteByID**](docs/OAIDefaultApi.md#visualizerecipetastebyid) | **GET** /recipes/{id}/tasteWidget | Visualize Recipe Taste by ID


## Documentation For Models

 - [OAIInlineObject](docs/OAIInlineObject.md)
 - [OAIInlineObject1](docs/OAIInlineObject1.md)
 - [OAIInlineObject10](docs/OAIInlineObject10.md)
 - [OAIInlineObject11](docs/OAIInlineObject11.md)
 - [OAIInlineObject12](docs/OAIInlineObject12.md)
 - [OAIInlineObject13](docs/OAIInlineObject13.md)
 - [OAIInlineObject14](docs/OAIInlineObject14.md)
 - [OAIInlineObject15](docs/OAIInlineObject15.md)
 - [OAIInlineObject16](docs/OAIInlineObject16.md)
 - [OAIInlineObject2](docs/OAIInlineObject2.md)
 - [OAIInlineObject3](docs/OAIInlineObject3.md)
 - [OAIInlineObject4](docs/OAIInlineObject4.md)
 - [OAIInlineObject5](docs/OAIInlineObject5.md)
 - [OAIInlineObject6](docs/OAIInlineObject6.md)
 - [OAIInlineObject7](docs/OAIInlineObject7.md)
 - [OAIInlineObject8](docs/OAIInlineObject8.md)
 - [OAIInlineObject9](docs/OAIInlineObject9.md)


## Documentation For Authorization


## apiKeyScheme

- **Type**: API key
- **API key parameter name**: api_key
- **Location**: URL query string


## Author

david@spoonacular.com


