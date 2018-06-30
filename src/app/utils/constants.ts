export class Constants {
  static APIEndpoints = {
    getFoodItems: 'http://demo0031555.mockable.io/menu'
  };

  static textStrings = {
    WelcomeToFoodHutText: 'Welcome to FoodHut!!',
    SearchDishesText: 'Search for dishes...',
    CartEmptyText: 'Cart Empty',
    CartText: 'Cart',
    OrderFromMenuText: 'Go ahead, order some yummy items from the menu.',
    DeliverSoonText: 'We will try to deliver this as soon as possible.',
    AddText: 'Add',
    ClearFiltersText: 'Clear all filters',
    FilterByPriceText: 'Filter by price',
    FilterByRatingText: 'Filter by rating',
    FilterByCategoryText: 'Filter by category',
    OrderNowText: 'Order now',
    OrderAgainText: 'Order again',
    OrderWillBeDeliveredText: 'Your order will be delivered in 40 minutes'
  };

  static priceFilters = {
    below100: 'Below 100',
    between100to200: '100 - 200',
    between200to300: '200 - 300',
    above300: 'Above 300'
  };

  static categoryFilters = {
    veg: 0,
    nonveg: 1
  };

  static ratingFilters = {
    above1: '1 and above',
    above2: '2 and above',
    above3: '3 and above',
    above4: '4 and above'
  };
}
