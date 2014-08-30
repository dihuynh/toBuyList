var app = angular.module('app', ['wu.masonry']);

app.controller('ItemsController',

  function ItemsController($scope) {
    $scope.types = ['office', 'music', 'apartment'];

    $scope.items = [{
      name: 'Microsoft Natural Ergonomic Keyboard 4000',
      price: 31.99,
      link: 'http://www.amazon.com/Microsoft-Natural-Ergonomic-Keyboard-4000/dp/B000A6PPOK/ref=zg_bs_12879431_7',
      type: 'office',
      img: 'images/keyboard.jpeg',
      bought: true
    }, {
      name: 'Anker Vertical Mouse',
      price: 23.99,
      link: 'http://www.amazon.com/Wireless-Vertical-Ergonomic-Optical-1600DPI/dp/B00BIFNTMC/ref=sr_1_3?s=electronics&ie=UTF8&qid=1403757794&sr=1-3&keywords=anker+mouse',
      type: 'office',
      img: 'images/mouse.jpeg',
      bought: true
    }, {
      name: 'Audio-Technica ATH-M30 Headphones',
      price: 42.40,
      link: 'http://www.amazon.com/Audio-Technica-ATH-M30-Professional-Closed-back-Headphones/dp/B00007E7C8/ref=zg_bs_172541_17',
      type: 'office',
      img: 'images/headphone.jpeg',        
      bought: true
    }, {
      name: 'Little Martin LX1E',
      price: 399,
      link: 'http://www.guitarcenter.com/Martin-X-Series-LX1E-Little-Martin-Acoustic-Electric-109455931-i1148318.gc',
      type: 'music',
      img: 'images/guitar.jpeg',        
      bought: false
    },{
      name: 'Casio Privia',
      price: 299,
      link: 'http://www.ebay.com/itm/Casio-PX700-Privia-Digital-88-Note-Weighted-Key-Piano-Free-Bench-MINT-COND-/281352867406?pt=Keyboards_MIDI&hash=item4181f00e4e', 
      type: 'music',
      img: 'images/weightedkeyboard.jpeg',        
      bought: true       
    },{
      name: 'Roland HD-1',
      price: 699,
      link: 'https://www.google.com/#q=roland+hd-1&tbm=shop', 
      type: 'music',
      img: 'images/drumset.jpeg',        
      bought: false       
    },{
      name: 'Meinl Cajon',
      price: 109.99,
      link: 'http://smile.amazon.com/Meinl-Percussion-Headliner-Series-Natural/dp/B000B6FADU/ref=sr_1_1?s=musical-instruments&ie=UTF8&qid=1403585724&sr=1-1',
      img:'images/cajon.jpg',
      type: 'music',
      bought: false
    },{
      name: 'Couch',
      price: 75,
      link: 'https://www.facebook.com/photo.php?fbid=10203956043882905&set=gm.594238644026792&type=1&permPage=1',
      img: 'images/couch.jpg',
      type: 'apartment',
      bought: true
    },{
      name: 'Kitchen Aid Mixer',
      price: 239.00,
      link: 'http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=kitchen+aid&rh=i%3Aaps%2Ck%3Akitchen+aid',
      img: 'images/mixer.jpg',
      type: 'apartment',
      bought: false
    }, {
      name: 'Bed',
      price: 100,
      link: 'https://www.facebook.com/groups/236642739786386/permalink/589561421161181/',
      img: 'images/bed.jpg',
      type: 'apartment',
      bought: true
    },{
      name: 'Standing desk mat',
      price: 53.99,
      link: 'http://www.amazon.com/Imprint-Comfort-Nantucket-20-Inch-Cinnamon/dp/B003BYRDK2/ref=sr_1_2?ie=UTF8&qid=1403827393&sr=8-2&keywords=standing+desk+mat',
      img: 'images/mat.jpg',
      type: 'office',
      bought: true
    }, {
      name: 'Yeti microphone',
      price: 99.93,
      link: 'http://www.amazon.com/Blue-Microphones-Yeti-USB-Microphone/dp/B002VA464S/ref=zg_bs_8882492011_1',
      type: 'music',
      img: 'images/yeti.jpg',
      bought: false
    }, {
      name: 'Mic stand',
      price: 24.95,
      link: 'http://www.amazon.com/Stage-Stands-MS7701B-Tripod-Microphone/dp/B000978D58/ref=sr_1_1?s=musical-instruments&ie=UTF8&qid=1404067723&sr=1-1&keywords=mic+stand',
      type: 'music',
      img: 'images/micstand.jpg',
      bought: false
    }, {
      name: 'Pop filter', 
      price: 31.22, 
      link: 'http://www.amazon.com/Nady-MPF-6-6-Inch-Microphone-Filter/dp/B0002CZW0Y/ref=pd_bxgy_MI_text_y',
      type: 'music',
      img: 'images/popfilter.jpg',
      bought: false
    }, {
      name: 'Microphone',
      price: 10.31,
      link: 'http://www.amazon.com/Pyle-Pro-PDMIC58-Professional-Handheld-Microphone/dp/B003GEBGA0/ref=zg_bs_8882491011_2',
      img: 'images/mic.jpg',
      type: 'music',
      bought: false
    }, {
      name: 'Hogwarts lego set',
      price: 369.90,
      link: 'http://www.amazon.com/LEGO-Harry-Potter-Hogwarts-Castle/dp/B003H9NBTI',
      img: 'images/hogwart.jpg',
      type: 'random',
      bought: false
    },{
      name: 'Legos',
      price: 600,
      link: 'http://austin.craigslist.org/bab/4502787375.html',
      type: 'random',
      img: 'images/legos.jpg',
      bought: false
    }
    ];
  });

$(function () {
  $('#showing').mixItUp({
     animation: {
      animateResizeContainer: false,
      effects: 'fade rotateX(-45deg) translateY(-10%)'
    }
  });
});

$(function () { 
  $("#pop").popover();  
});  

