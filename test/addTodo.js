const { Builder,By,Key} = require('selenium-webdriver');
// Different asserts
const assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;

// Mocha 
describe('Add a todo to LambdaTest sample app', () => {
    it('Successfully adds a todo',async () =>{
        let driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://lambdatest.github.io/sample-todo-app/');

        //await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.ENTER);
        await driver.findElement(By.id('sampletodotext')).sendKeys('Learn selenium');
        await driver.findElement(By.css('#addbutton')).click();
        
        // Find what we just put into the list
        let todoText = await driver.findElement(By.css('li:last-child')).getText();
        console.log(todoText);
       
        //Get the third item of the list
        let items = await driver.findElements(By.css('li'));
        let thirdItemText = await items[2].getText();
        //console.log(thirdItemText);
        thirdItemText.should.equal('Third Item');


        //Asserts
        assert.equal(todoText,'Learn selenium'); // Builtin Node
        expect(todoText).to.equal('Learn selenium'); // Chai expect
        todoText.should.equal('Learn selenium'); // Chai should

        // Close browser and exit Selenium
        await driver.quit();
        
    });
    it ('This test should be pending');

});
