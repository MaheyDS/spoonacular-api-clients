/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 80,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: david@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InlineObject3 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineObject3
 * @version 1.0
 */
class InlineObject3 {
    /**
     * Constructs a new <code>InlineObject3</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineObject3
     * @param instructions {String} The recipe's instructions.
     */
    constructor(instructions) { 
        
        InlineObject3.initialize(this, instructions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, instructions) { 
        obj['instructions'] = instructions;
    }

    /**
     * Constructs a <code>InlineObject3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject3} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject3} The populated <code>InlineObject3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject3();

            if (data.hasOwnProperty('instructions')) {
                obj['instructions'] = ApiClient.convertToType(data['instructions'], 'String');
            }
            if (data.hasOwnProperty('view')) {
                obj['view'] = ApiClient.convertToType(data['view'], 'String');
            }
            if (data.hasOwnProperty('defaultCss')) {
                obj['defaultCss'] = ApiClient.convertToType(data['defaultCss'], 'Boolean');
            }
            if (data.hasOwnProperty('showBacklink')) {
                obj['showBacklink'] = ApiClient.convertToType(data['showBacklink'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The recipe's instructions.
 * @member {String} instructions
 */
InlineObject3.prototype['instructions'] = undefined;

/**
 * How to visualize the equipment, either \"grid\" or \"list\".
 * @member {String} view
 */
InlineObject3.prototype['view'] = undefined;

/**
 * Whether the default CSS should be added to the response.
 * @member {Boolean} defaultCss
 */
InlineObject3.prototype['defaultCss'] = undefined;

/**
 * Whether to show a backlink to spoonacular. If set false, this call counts against your quota.
 * @member {Boolean} showBacklink
 */
InlineObject3.prototype['showBacklink'] = undefined;






export default InlineObject3;

