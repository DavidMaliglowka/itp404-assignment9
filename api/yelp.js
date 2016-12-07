var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  token: process.env.token,
  token_secret: process.env.token_secret
});

module.exports = {
	search: function(options) {
		return yelp.search(options).then(function (data) {
			var shops = data.businesses;
			var shopLocactionDetails = shops.map(function(shop) {
				return {
          name: shop.name,
          rating: shop.rating,
          url: shop.url,
          category: shop.categories,
          address: shop.location.display_address
				};
			});
	  		return (shopLocactionDetails);
		}).catch(function (err) {
	  		console.error(err);
		});
	}
}
