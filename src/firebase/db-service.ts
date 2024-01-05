import {doc, setDoc, getDoc, deleteDoc, collection, getDocs, getCountFromServer} from 'firebase/firestore';

import productConfig from '../utils/products-config.json';
import {db} from "./firebase-config";
import {CATEGORIES_COLLECTION, PRODUCTS_COLLECTION} from "../utils/constants";
import {CategoryType, ProductType} from "../utils/types";
import {getRandomNumber} from "../utils/utilFunctions";

const productCollection = collection(db, PRODUCTS_COLLECTION);
const categoriesCollection = collection(db, CATEGORIES_COLLECTION);
export async function addProduct(product: ProductType)
{
    product.id = getRandomNumber(100000,999999).toString();
    const ref = doc(productCollection, product.id);
    await setDoc(ref, product);
}
export async function addCategory(category: CategoryType)
{
    const ref = doc(categoriesCollection, category.name);
    await setDoc(ref, category);
}
export async function removeProduct(id: string)
{
    const ref = doc(productCollection, id);
    await deleteDoc(ref);
}
export async function removeCategory(name: string)
{
    const ref = doc(categoriesCollection, name);
    await deleteDoc(ref);
}
export async function isCategoryExists(name: string)
{
    const ref = doc(categoriesCollection, name);
    return (await getDoc(ref)).exists();
}
export async function setProducts()
{
    let collectionCount = (await getCountFromServer(productCollection)).data().count;
    if(collectionCount === 0)
    {
        const products: ProductType[] = productConfig.map(pc => ({image: pc.name + '.jpg', title: pc.name,
                        category: pc.name.split('-')[0], unit: pc.unit, cost: pc.cost}));
        for(let i= 0; i <products.length; i++)
        {
            const res = await isCategoryExists(products[i].category);
            if(!res)
                await addCategory({name: products[i].category});
            await addProduct(products[i]);
            collectionCount++;
        }
        console.log(`created ${collectionCount} products`);
    }
    return collectionCount;
}
