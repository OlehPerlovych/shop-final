/**
 * @jest-environment node
 */
import {getRandomNumber} from "./utils/utilFunctions";
import {isCategoryExists, setProducts} from "./firebase/db-service";
import productConfig from './utils/products-config.json';

jest.setTimeout(100000);

test('get random number', ()=>
{
    expect(getRandomNumber(1,1)).toEqual(1);
});

test('get random number 1 ', ()=>
{
    expect(getRandomNumber(1,10)).toBeGreaterThanOrEqual(1);
});
test('get random number 2', ()=>
{
    expect(getRandomNumber(1,10)).toBeLessThanOrEqual(10);
});
test('set products', ()=>
{
    setProducts()
        .then(count => expect(count).toEqual(productConfig.length));
});
test('category bread exists', ()=>
{
    isCategoryExists('bread')
        .then(res => expect(res).toBeTruthy());
});
test('category milk not exists', ()=>
{
    isCategoryExists('milk')
        .then(res => expect(res).toBeFalsy());
});