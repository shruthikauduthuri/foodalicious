import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Food {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) : Food[] {
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[] {
    return [
      { name: 'All', count: 24 },
      { name: 'Veg', count: 13 },
      { name: 'Non-Veg', count: 8 },
      { name: 'Breakfast', count: 6 },
      { name: 'Lunch', count: 6 },
      { name: 'Snacks', count: 13 },
      { name: 'Dinner', count: 10 },
      { name: 'Desserts', count: 3 },
      { name: 'Salads', count: 2 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {

    return tag == "All" ?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll():Food[] {
    return[
      {
        id: 1,
        name: 'Idli',
        price: 40,
        cookTime: '20-30',
        favorite: false,
        origins: ['South-India', 'Asia'],
        imageUrl: '/assets/images/Foods/Idli.jpg',
        tags: ['All', 'Breakfast', 'Dinner','Veg'],
      },
      {
        id: 2,
        name: 'Dosa',
        price: 40,
        cookTime: '5-10',
        favorite: true,
        origins: ['South-India', 'Asia'],
        imageUrl: '/assets/images/Foods/Dosa.jpg',
        tags: ['All', 'Breakfast', 'Dinner','Veg'],
      },
      {
        id: 3,
        name: 'Vada',
        price: 35,
        cookTime: '20-30',
        favorite: false,
        origins: ['South-India', 'Asia'],
        imageUrl: '/assets/images/Foods/Vada.jpg',
        tags: ['All', 'Breakfast', 'Dinner','Veg'],
      },
      {
        id: 4,
        name: 'Puri',
        price: 40,
        cookTime: '5-10',
        favorite: false,
        origins: ['South-India', 'Asia'],
        imageUrl: '/assets/images/Foods/Puri.jpg',
        tags: ['All', 'Breakfast', 'Dinner','Veg'],
      },
      {
        id: 5,
        name: 'Veg Thali',
        price: 100,
        cookTime: '60-120',
        favorite: false,
        origins: ['India', 'Asia'],
        imageUrl: '/assets/images/Foods/VegThali.jpg',
        tags: ['All','Lunch', 'Veg','Dinner'],
      },
      {
        id: 6,
        name: 'Non Veg Thali',
        price: 150,
        cookTime: '60-120',
        favorite: true,
        origins: ['India', 'Asia'],
        imageUrl: '/assets/images/Foods/NonVegThali.jpg',
        tags: ['All','Lunch', 'Non-Veg','Dinner'],
      },
      {
        id: 7,
        name: 'Veg Biryani',
        price: 200,
        cookTime: '40-50',
        favorite: false,
        origins: ['India', 'Asia'],
        imageUrl: '/assets/images/Foods/VegBiryani.jpg',
        tags: ['All','Lunch', 'Veg','Dinner'],
      },
      {
        id: 8,
        name: 'Non-Veg Biryani',
        price: 250,
        cookTime: '40-50',
        favorite: true,
        origins: ['India', 'Asia'],
        imageUrl: '/assets/images/Foods/ChickenBiryani.jpg',
        tags: ['All','Lunch', 'Dinner','Non-Veg','Dinner'],
      },
      {
        id: 9,
        name: 'Veg Pizza',
        cookTime: '15-20',
        price: 250,
        favorite: false,
        origins: ['Italy'],
        imageUrl: '/assets/images/Foods/Pizza.jpg',
        tags: ['All','Snacks','Veg'],
      },
      {
        id: 10,
        name: 'Non-Veg Pizza',
        cookTime: '15-20',
        price: 300,
        favorite: true,
        origins: ['Italy'],
        imageUrl: '/assets/images/Foods/ChickenPizza.jpg',
        tags: ['All','Snacks','Non-Veg'],
      },
      {
        id: 11,
        name: 'Veg Burger',
        price: 150,
        cookTime: '15-20',
        favorite: false,
        origins: ['Germany'],
        imageUrl: '/assets/images/Foods/VegBurger.jpg',
        tags: ['All','Snacks', 'Veg'],
      },
      {
        id: 12,
        name: 'Non-Veg Burger',
        price: 200,
        cookTime: '15-20',
        favorite: true,
        origins: ['Germany'],
        imageUrl: '/assets/images/Foods/Burger.jpg',
        tags: ['All','Snacks','Non-Veg'],
      },
      {
        id: 13,
        name: 'Veg Noodles',
        price: 80,
        cookTime: '15-20',
        favorite: false,
        origins: ['China'],
        imageUrl: '/assets/images/Foods/Noodles.jpg',
        tags: ['All','Snacks','Veg'],
      },
      {
        id: 14,
        name: 'Non-Veg Noodles',
        price: 100,
        cookTime: '15-20',
        favorite: true,
        origins: ['China'],
        imageUrl: '/assets/images/Foods/ChickenNoodles.jpg',
        tags: ['All','Snacks', 'Non-Veg'],
      },
      {
        id: 15,
        name: 'Veg Manchurian',
        price: 80,
        cookTime: '15-20',
        favorite: false,
        origins: ['Japan'],
        imageUrl: '/assets/images/Foods/VegManchuria.jpg',
        tags: ['All','Snacks','Veg'],
      },
      {
        id: 16,
        name: 'Non-Veg Manchuria',
        price: 100,
        cookTime: '15-20',
        favorite: true,
        origins: ['Japan'],
        imageUrl: '/assets/images/Foods/ChickenManchuria.jpg',
        tags: ['All','Snacks', 'Non-Veg'],
      },
      {
        id: 17,
        name: 'Veg Shawarma',
        price: 120,
        cookTime: '15-20',
        favorite: false,
        origins: ['Turkey'],
        imageUrl: '/assets/images/Foods/VegShawarma.jpg',
        tags: ['All','Snacks','Veg'],
      },
      {
        id: 18,
        name: 'Non-Veg Shawarma',
        price: 150,
        cookTime: '15-20',
        favorite: true,
        origins: ['Turkey'],
        imageUrl: '/assets/images/Foods/ChickenShawarma.jpg',
        tags: ['All','Snacks', 'Non-Veg'],
      },
      {
        id: 19,
        name: 'Veg Salad',
        price: 100,
        cookTime: '10-15',
        favorite: false,
        origins: ['India', 'Asia'],
        imageUrl: '/assets/images/Foods/VegSalad.jpg',
        tags: ['All','Snacks', 'Breakfast','Lunch','Dinner','Salads','Veg'],
      },
      {
        id: 20,
        name: 'Non-Veg Salad',
        price: 120,
        cookTime: '10-15',
        favorite: true,
        origins: ['India', 'Asia'],
        imageUrl: '/assets/images/Foods/NonVegSalad.jpg',
        tags: ['All','Snacks', 'Breakfast','Lunch','Dinner','Salads','Non-Veg'],
      },
      {
        id: 21,
        name: 'French Fries',
        price: 50,
        cookTime: '10-15',
        favorite: false,
        origins: ['Germany', 'US'],
        imageUrl: '/assets/images/Foods/Fries.jpg',
        tags: ['All','Snacks', 'Veg'],
      },
      {
        id: 22,
        name: 'Chocolate Ice cream',
        price: 80,
        cookTime: '5-10',
        favorite: false,
        origins: ['Europe'],
        imageUrl: '/assets/images/Foods/ChocolateIcecream.jpg',
        tags: ['All','Desserts'],
      },
      {
        id: 23,
        name: 'Vanilla Ice cream',
        price: 80,
        cookTime: '5-10',
        favorite: false,
        origins: ['Europe'],
        imageUrl: '/assets/images/Foods/VanillaIcecream.jpg',
        tags: ['All','Desserts'],
      },
      {
        id: 24,
        name: 'Gulab Jamun',
        price: 50,
        cookTime: '5-10',
        favorite: true,
        origins: ['India', 'Asia'],
        imageUrl: '/assets/images/Foods/GulabJamun.jpg',
        tags: ['All','Desserts'],
      }
    ];
  }
}
