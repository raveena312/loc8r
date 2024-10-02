module.exports.homelist = function(req, res) {
  res.render('locations-list', {
      title: 'Loc8r - find a place to work with wifi',
      pageHeader: {
          title: 'Travel/tourism',
          strapline: 'Find places to work with wifi near you!'
      },
      sidebar: "Looking for wifi and a seat? Travel helps you find places to work when out and about. " +
               "Perhaps with coffee, cake, or a pint? Let Travel help you find the place you're looking for.",
      locations: [{
          name: 'Svm grand',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 3,
          facilities: ['Hot drinks', 'Food', 'Premium wifi','offers'],
          distance: '100m'
      }, {
          name: 'Tulips Accomidation',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 4,
          facilities: ['Hot drinks', 'Food', 'Premium wifi','cleanness','electricity 24hrs'],
          distance: '200m'
      },  {
        name: 'Tulips Accomidation',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 4,
        facilities: ['Hot drinks', 'Food', 'Premium wifi','cleanness','electricity 24hrs'],
        distance: '200m'
    }, {
          name: 'Alex guide',
          address: '125 High Street, Reading, RG6 1PS',
          rating: 4,
          facilities: ['friendly','pacience','budget-friendly','safe'],
          distance: '10km'
      }]
  });
};

module.exports.locationInfo = function(req, res) {
  res.render('locations-info', { title: 'LocationInfo' });
};

module.exports.locationInfo1 = function(req, res) {
  res.render('locations-info1', { title: 'LocationInfo1' });
};

module.exports.locationInfo2 = function(req, res) {
  res.render('locations-info2', { title: 'LocationInfo2' });
};

module.exports.addReview = function(req, res) {
  res.render('locations-review-form', { title: 'ADD REVIEW' });
};
