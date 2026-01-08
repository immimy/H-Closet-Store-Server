const bags = [
  {
    id: 1,
    name: 'Urban Voyager',
    type: 'Backpack',
    brand: 'Wander Lux',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg',
    description:
      'ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam',
    color: ['#461fce', '#2b2d58', '#d332ca'],
    price: '$178.15',
    inventory: [471, 350, 669],
  },
  {
    id: 2,
    name: 'Elite Messenger',
    type: 'Hiking Bag',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/13945428/pexels-photo-13945428.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at',
    color: ['#369082'],
    price: '$135.76',
    inventory: [304],
  },
  {
    id: 3,
    name: 'Alpine Trek',
    type: 'Backpack',
    brand: 'Free Spirit',
    image: 'https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg',
    description:
      'sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt',
    color: ['#445857', '#8e33c0'],
    price: '$93.08',
    inventory: [433, 252],
  },
  {
    id: 4,
    name: 'City Commuter',
    type: 'Messenger Bag',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/10194236/pexels-photo-10194236.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan',
    color: ['#444ad3', '#46ee41', '#ff5aa6'],
    price: '$112.03',
    inventory: [203, 303, 155],
  },
  {
    id: 5,
    name: 'Traveler’s Choice',
    type: 'Backpack',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/27911168/pexels-photo-27911168/free-photo-of-bag.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis',
    color: ['#ccd10f'],
    price: '$72.97',
    inventory: [336],
  },
  {
    id: 6,
    name: 'Serenity Satchel',
    type: 'Hiking Bag',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/10762576/pexels-photo-10762576.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi',
    color: ['#6b6507', '#86620a', '#5920ce', '#b26dcd', '#ec56d4'],
    price: '$130.12',
    inventory: [233, 284, 269, 222, 200],
  },
  {
    id: 7,
    name: 'Midnight Sling',
    type: 'Handbag',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/1204464/pexels-photo-1204464.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor',
    color: ['#e82cf9', '#2a18c1', '#f4e816', '#2f292b'],
    price: '$33.45',
    inventory: [355, 365, 348, 399],
  },
  {
    id: 8,
    name: 'Classic Wanderer',
    type: 'Tote Bag',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/1527004/pexels-photo-1527004.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum',
    color: ['#94aa66', '#a67ad9', '#8ed5dc', '#968d91', '#496bcb'],
    price: '$191.31',
    inventory: [137, 100, 99, 54, 155],
  },
  {
    id: 9,
    name: 'Luxe Handbag',
    type: 'Sling Bag',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit',
    color: ['#13fa59', '#d26e41'],
    price: '$133.32',
    inventory: [442, 468],
  },
  {
    id: 10,
    name: 'Explorer Pack',
    type: 'Hiking Bag',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/10771804/pexels-photo-10771804.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut',
    color: ['#008958', '#d7f3da', '#ec8639', '#17b995', '#248feb'],
    price: '$192.38',
    inventory: [101, 99, 98, 185, 206],
  },
  {
    id: 11,
    name: 'Downtown Tote',
    type: 'Beach Bag',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/8093148/pexels-photo-8093148.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis',
    color: ['#9b6db7', '#6758ee'],
    price: '$65.64',
    inventory: [330, 369],
  },
  {
    id: 12,
    name: 'Expedition Duffel',
    type: 'Satchel',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/17190703/pexels-photo-17190703/free-photo-of-woman-wearing-tote-bag-and-camera-on-her-shoulder.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet',
    color: ['#f1dce8'],
    price: '$52.03',
    inventory: [469],
  },
  {
    id: 13,
    name: 'Minimalist Sling',
    type: 'Hiking Bag',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/8988501/pexels-photo-8988501.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum',
    color: ['#e5d3dd', '#7882c0'],
    price: '$141.10',
    inventory: [125, 350],
  },
  {
    id: 14,
    name: 'Cascade Trail',
    type: 'Beach Bag',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/7148386/pexels-photo-7148386.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum',
    color: ['#ffdd6c'],
    price: '$73.90',
    inventory: [393],
  },
  {
    id: 15,
    name: 'Breeze Messenger',
    type: 'Duffel Bag',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/9391902/pexels-photo-9391902.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue',
    color: ['#b69fcc'],
    price: '$79.58',
    inventory: [377],
  },
  {
    id: 16,
    name: 'Bold Horizons',
    type: 'Backpack',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/12743405/pexels-photo-12743405.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque',
    color: ['#d0139b', '#5400fb', '#a43385', '#9e2d13'],
    price: '$32.88',
    inventory: [204, 369, 468, 485],
  },
  {
    id: 17,
    name: 'Coastal Tote',
    type: 'Hiking Bag',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/7348926/pexels-photo-7348926.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat',
    color: ['#f10c8a', '#f68345', '#a50d5f', '#11f2ba'],
    price: '$50.20',
    inventory: [456, 251, 194, 364],
  },
  {
    id: 18,
    name: 'Jetsetter Duffel',
    type: 'Messenger Bag',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/2393813/pexels-photo-2393813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed',
    color: ['#aa2e89', '#560855', '#cc10a5'],
    price: '$82.97',
    inventory: [349, 159, 648],
  },
  {
    id: 19,
    name: 'Voyager’s Satchel',
    type: 'Sling Bag',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/10669656/pexels-photo-10669656.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt',
    color: ['#0bd584', '#b4d093', '#c8f3d0', '#01fe89', '#e462fd'],
    price: '$122.19',
    inventory: [178, 136, 48, 166, 455],
  },
  {
    id: 20,
    name: 'Urban Utility',
    type: 'Tote Bag',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/1214212/pexels-photo-1214212.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis',
    color: ['#dc3e5f', '#53d7be', '#596e31', '#8ca8a2'],
    price: '$81.55',
    inventory: [128, 456, 222, 135],
  },
  {
    id: 21,
    name: 'Classic Traveler',
    type: 'Tote Bag',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/26731021/pexels-photo-26731021/free-photo-of-top-view-of-flowers-apples-and-lipstick-in-bag-on-blanket.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi',
    color: ['#1ef9a8', '#a7caf2'],
    price: '$82.44',
    inventory: [239, 394],
  },
  {
    id: 22,
    name: 'Zen Sling',
    type: 'Backpack',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/11463449/pexels-photo-11463449.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras',
    color: ['#d1149d', '#e680c0', '#48e139', '#d20c88', '#c0a89b'],
    price: '$120.48',
    inventory: [462, 468, 458, 654, 125],
  },
  {
    id: 23,
    name: 'Alpine Edge',
    type: 'Satchel',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/13596383/pexels-photo-13596383.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit',
    color: ['#3c8f40', '#1a4da6', '#ae11d8', '#d776fe', '#c7cdeb'],
    price: '$165.90',
    inventory: [390, 458, 123, 41, 36],
  },
  {
    id: 24,
    name: 'Avant Messenger',
    type: 'Sling Bag',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/7130030/pexels-photo-7130030.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu',
    color: ['#b8223e'],
    price: '$132.99',
    inventory: [407],
  },
  {
    id: 25,
    name: 'Shoreline Tote',
    type: 'Backpack',
    brand: 'Prestige',
    image:
      'https://cdn.pixabay.com/photo/2024/08/18/22/02/ai-generated-8979021_960_720.png',
    description:
      'tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci',
    color: ['#a83fd5'],
    price: '$147.51',
    inventory: [138],
  },
  {
    id: 26,
    name: 'Heritage Handbag',
    type: 'Satchel',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus',
    color: ['#41b90e'],
    price: '$80.88',
    inventory: [309],
  },
  {
    id: 27,
    name: 'Stealth Pack',
    type: 'Backpack',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/12446401/pexels-photo-12446401.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla',
    color: ['#5c9e31', '#b5aba7', '#b4f7fc', '#a15084'],
    price: '$30.74',
    inventory: [223, 135, 158, 165],
  },
  {
    id: 28,
    name: 'Explorer Satchel',
    type: 'Tote Bag',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/12031038/pexels-photo-12031038.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at',
    color: ['#84977c', '#3932cc', '#1c25ff'],
    price: '$167.66',
    inventory: [183, 136, 158],
  },
  {
    id: 29,
    name: 'Expeditioner Duffel',
    type: 'Satchel',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/12811978/pexels-photo-12811978.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in',
    color: ['#03e0f5', '#b9a9ab', '#9055b7', '#f871c9', '#638c76'],
    price: '$120.16',
    inventory: [249, 125, 166, 489, 99],
  },
  {
    id: 30,
    name: 'Urban Pioneer',
    type: 'Hiking Bag',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/7351020/pexels-photo-7351020.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate',
    color: ['#a41bb3', '#b38e43'],
    price: '$135.46',
    inventory: [377, 266],
  },
  {
    id: 31,
    name: 'Velocity Sling',
    type: 'Handbag',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/3808229/pexels-photo-3808229.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend',
    color: ['#d11cd3', '#8c1825', '#31e4fc', '#8967c4', '#90cfeb'],
    price: '$173.08',
    inventory: [237, 122, 156, 258, 64],
  },
  {
    id: 32,
    name: 'Peak Trekker',
    type: 'Messenger Bag',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/5090704/pexels-photo-5090704.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in',
    color: ['#644d8f'],
    price: '$58.27',
    inventory: [151],
  },
  {
    id: 33,
    name: 'Skyline Tote',
    type: 'Satchel',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/10834748/pexels-photo-10834748.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue',
    color: ['#6362d2', '#99c5e8', '#1ede26', '#553694'],
    price: '$175.15',
    inventory: [185, 125, 168, 164],
  },
  {
    id: 34,
    name: 'Horizon Handbag',
    type: 'Backpack',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/2766335/pexels-photo-2766335.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede',
    color: ['#fa6ca3'],
    price: '$152.20',
    inventory: [314],
  },
  {
    id: 35,
    name: 'Weekend Wanderer',
    type: 'Hiking Bag',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/7351108/pexels-photo-7351108.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit',
    color: ['#47eeca'],
    price: '$75.08',
    inventory: [306],
  },
  {
    id: 36,
    name: 'Nomad Explorer',
    type: 'Hiking Bag',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/6033793/pexels-photo-6033793.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam',
    color: ['#53ddc5'],
    price: '$181.62',
    inventory: [281],
  },
  {
    id: 37,
    name: 'Coastal Satchel',
    type: 'Satchel',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/1656/road-fashion-vintage-bag.jpg?auto=compress&cs=tinysrgb&w=600',
    description:
      'neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at',
    color: ['#e8867f', '#a0a3cb', '#f9cdc6'],
    price: '$39.05',
    inventory: [391, 333, 156],
  },
  {
    id: 38,
    name: 'Ascend Duffel',
    type: 'Duffel Bag',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/27793087/pexels-photo-27793087/free-photo-of-red-bag-on-shelf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse',
    color: ['#55bd1a', '#713b7d'],
    price: '$192.86',
    inventory: [296, 125],
  },
  {
    id: 39,
    name: 'Zen Sling Pack',
    type: 'Hiking Bag',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/20559361/pexels-photo-20559361/free-photo-of-red-backpack-in-a-forest.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien',
    color: ['#7254ae', '#e1d50f', '#c0a676', '#fc89dc', '#0a7a29'],
    price: '$157.28',
    inventory: [171, 171, 216, 165, 182],
  },
  {
    id: 40,
    name: 'Trailblazer Hiking',
    type: 'Beach Bag',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/9745332/pexels-photo-9745332.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus',
    color: ['#2a3d3d'],
    price: '$137.11',
    inventory: [276],
  },
  {
    id: 41,
    name: 'Metro Crossbody',
    type: 'Sling Bag',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/14455779/pexels-photo-14455779.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula',
    color: ['#669b5e', '#2c46df'],
    price: '$172.16',
    inventory: [462, 463],
  },
  {
    id: 42,
    name: 'Jetset Backpack',
    type: 'Satchel',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non',
    color: ['#74b999', '#2329df'],
    price: '$37.27',
    inventory: [446, 456],
  },
  {
    id: 43,
    name: 'Breeze Tote',
    type: 'Duffel Bag',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/13872590/pexels-photo-13872590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam',
    color: ['#788bc1', '#b7af47'],
    price: '$191.10',
    inventory: [444, 364],
  },
  {
    id: 44,
    name: 'Explorer’s Duffel',
    type: 'Satchel',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/14401879/pexels-photo-14401879.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor',
    color: ['#5f60af', '#5c33b1', '#f078f8'],
    price: '$117.33',
    inventory: [201, 123, 189],
  },
  {
    id: 45,
    name: 'Luxe Satchel',
    type: 'Duffel Bag',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/9582656/pexels-photo-9582656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet',
    color: ['#076a52', '#dce899', '#28529a', '#65b658', '#995543'],
    price: '$144.74',
    inventory: [338, 248, 236, 136, 294],
  },
  {
    id: 46,
    name: 'Trek Pro',
    type: 'Messenger Bag',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/11623262/pexels-photo-11623262.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo',
    color: ['#143103', '#325af3', '#ccfec3', '#cf03e1', '#996f62'],
    price: '$44.06',
    inventory: [279, 294, 297, 284, 279],
  },
  {
    id: 47,
    name: 'Nomad Sling',
    type: 'Sling Bag',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/9267587/pexels-photo-9267587.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam',
    color: ['#4ad485', '#85170e', '#59ecef'],
    price: '$40.47',
    inventory: [190, 139, 158],
  },
  {
    id: 48,
    name: 'Coastal Messenger',
    type: 'Sling Bag',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/9608480/pexels-photo-9608480.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut',
    color: ['#8ef576', '#ab5a7c', '#9d91f3', '#5da750'],
    price: '$149.05',
    inventory: [244, 125, 356, 138],
  },
  {
    id: 49,
    name: 'Stealth Duffel',
    type: 'Sling Bag',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/7159408/pexels-photo-7159408.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam',
    color: ['#ff77f8', '#41cc54'],
    price: '$110.52',
    inventory: [436, 546],
  },
  {
    id: 50,
    name: 'Urban Journey',
    type: 'Hiking Bag',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/18510444/pexels-photo-18510444/free-photo-of-olive-green-backpack-for-photographic-equipment.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra',
    color: ['#4763e6', '#6e190c', '#08d747', '#1624d2'],
    price: '$192.87',
    inventory: [182, 126, 456, 139],
  },
];

const clothes = [
  {
    id: 1,
    name: 'Classic Cotton Tee',
    type: 'T-shirt',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$33.49',
    inventory: [378, 410, 225, 338, 175],
  },
  {
    id: 2,
    name: 'Denim Jacket',
    type: 'Jacket',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$79.81',
    inventory: [290, 381, 163, 360, 390],
  },
  {
    id: 3,
    name: 'Striped Button Shirt',
    type: 'Shirt',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$35.47',
    inventory: [207, 311, 404, 308, 448],
  },
  {
    id: 4,
    name: 'Floral Wrap Dress',
    type: 'Dress',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$99.70',
    inventory: [418, 322, 317, 177, 130],
  },
  {
    id: 5,
    name: 'Ribbed Knit Cardigan',
    type: 'Cardigan',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/13431671/pexels-photo-13431671.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$37.52',
    inventory: [262, 217, 490, 315, 158],
  },
  {
    id: 6,
    name: 'High-waisted Skinny',
    type: 'Pants',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$66.44',
    inventory: [399, 347, 391, 288, 344],
  },
  {
    id: 7,
    name: 'Pleated Midi Skirt',
    type: 'Skirt',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/601316/pexels-photo-601316.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$37.12',
    inventory: [280, 324, 175, 244, 320],
  },
  {
    id: 8,
    name: 'Cargo Utility Shorts',
    type: 'Shorts',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/69101/pexels-photo-69101.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$44.60',
    inventory: [281, 469, 206, 115, 320],
  },
  {
    id: 9,
    name: 'V-neck Blouse',
    type: 'Blouse',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/16689779/pexels-photo-16689779/free-photo-of-woman-with-necklace.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$28.49',
    inventory: [349, 432, 385, 167, 480],
  },
  {
    id: 10,
    name: 'Hooded Puffer Jacket',
    type: 'Jacket',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$45.45',
    inventory: [142, 326, 488, 209, 337],
  },
  {
    id: 11,
    name: 'Scoop Neck Tee',
    type: 'T-shirt',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$84.34',
    inventory: [124, 446, 345, 221, 149],
  },
  {
    id: 12,
    name: 'Wide-leg Trousers',
    type: 'Pants',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$10.52',
    inventory: [224, 438, 418, 303, 236],
  },
  {
    id: 13,
    name: 'Belted A-line Dress',
    type: 'Dress',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$21.02',
    inventory: [357, 383, 205, 226, 105],
  },
  {
    id: 14,
    name: 'Cropped Denim Jacket',
    type: 'Jacket',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$60.64',
    inventory: [207, 163, 201, 379, 394],
  },
  {
    id: 15,
    name: 'Casual Button-down',
    type: 'Shirt',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/264726/pexels-photo-264726.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$77.98',
    inventory: [432, 114, 423, 212, 492],
  },
  {
    id: 16,
    name: 'Lightweight Cardigan',
    type: 'Cardigan',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/10647943/pexels-photo-10647943.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$43.15',
    inventory: [387, 236, 490, 355, 112],
  },
  {
    id: 17,
    name: 'Floral Maxi Skirt',
    type: 'Skirt',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$29.90',
    inventory: [106, 235, 363, 385, 491],
  },
  {
    id: 18,
    name: 'Chino Shorts',
    type: 'Shorts',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/15658071/pexels-photo-15658071/free-photo-of-back-view-of-a-woman-walking-between-flowers-on-the-shore.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$67.90',
    inventory: [349, 499, 430, 299, 112],
  },
  {
    id: 19,
    name: 'Satin Wrap Dress',
    type: 'Dress',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$84.02',
    inventory: [474, 249, 285, 159, 467],
  },
  {
    id: 20,
    name: 'Plaid Shirt',
    type: 'Shirt',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/128878/the-last-shirt-dollar-bill-20-euro-folded-128878.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$45.30',
    inventory: [337, 243, 345, 145, 252],
  },
  {
    id: 21,
    name: 'Sleeveless Tee',
    type: 'T-shirt',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$45.81',
    inventory: [406, 256, 229, 219, 266],
  },
  {
    id: 22,
    name: 'Relaxed Fit Pants',
    type: 'Pants',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$23.90',
    inventory: [493, 125, 279, 448, 424],
  },
  {
    id: 23,
    name: 'Tie-front Blouse',
    type: 'Blouse',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/15645109/pexels-photo-15645109/free-photo-of-high-angle-photo-of-a-woman-standing-on-the-rocks-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$99.43',
    inventory: [212, 133, 117, 304, 440],
  },
  {
    id: 24,
    name: 'Double-breasted Blazer',
    type: 'Jacket',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/22711478/pexels-photo-22711478/free-photo-of-elegant-woman-holding-a-laptop.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$33.67',
    inventory: [356, 257, 288, 408, 409],
  },
  {
    id: 25,
    name: 'Crew Neck Sweater',
    type: 'Jumper',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/7083880/pexels-photo-7083880.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$21.17',
    inventory: [158, 296, 415, 118, 273],
  },
  {
    id: 26,
    name: 'Knitted Cardigan',
    type: 'Cardigan',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/11274836/pexels-photo-11274836.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$15.95',
    inventory: [401, 185, 100, 132, 235],
  },
  {
    id: 27,
    name: 'Linen A-line Skirt',
    type: 'Skirt',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/1427984/pexels-photo-1427984.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$50.08',
    inventory: [270, 189, 389, 336, 237],
  },
  {
    id: 28,
    name: 'Tailored Chino Pants',
    type: 'Pants',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$20.03',
    inventory: [293, 467, 324, 444, 317],
  },
  {
    id: 29,
    name: 'Printed Short Sleeve',
    type: 'Shirt',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/46212/men-s-shirt-shirt-attire-clothing-46212.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$42.21',
    inventory: [200, 478, 203, 413, 100],
  },
  {
    id: 30,
    name: 'Faux Leather Biker',
    type: 'Jacket',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$59.63',
    inventory: [243, 386, 340, 101, 424],
  },
  {
    id: 31,
    name: 'Relaxed Fit Shorts',
    type: 'Shorts',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/13449612/pexels-photo-13449612.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$66.00',
    inventory: [177, 377, 468, 414, 482],
  },
  {
    id: 32,
    name: 'Empire Waist Dress',
    type: 'Dress',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/1566435/pexels-photo-1566435.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$11.69',
    inventory: [375, 249, 397, 312, 309],
  },
  {
    id: 33,
    name: 'Lace Panel Blouse',
    type: 'Blouse',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/12308956/pexels-photo-12308956.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$73.04',
    inventory: [150, 241, 329, 124, 178],
  },
  {
    id: 34,
    name: 'Bomber Jacket',
    type: 'Jacket',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$92.51',
    inventory: [106, 259, 365, 124, 255],
  },
  {
    id: 35,
    name: 'Henley Shirt',
    type: 'Shirt',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/8075948/pexels-photo-8075948.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$20.17',
    inventory: [390, 428, 287, 244, 290],
  },
  {
    id: 36,
    name: 'Crop T-shirt',
    type: 'T-shirt',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$37.80',
    inventory: [143, 465, 306, 100, 282],
  },
  {
    id: 37,
    name: 'Straight-leg Pants',
    type: 'Pants',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$86.63',
    inventory: [217, 339, 430, 240, 107],
  },
  {
    id: 38,
    name: 'Ruffle Hem Skirt',
    type: 'Skirt',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$47.96',
    inventory: [340, 359, 328, 250, 471],
  },
  {
    id: 39,
    name: 'Puffer Jacket',
    type: 'Jacket',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/2569819/pexels-photo-2569819.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$54.05',
    inventory: [486, 498, 457, 463, 424],
  },
  {
    id: 40,
    name: 'Button-up Shirt',
    type: 'Shirt',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/7671168/pexels-photo-7671168.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$57.78',
    inventory: [397, 265, 276, 479, 221],
  },
  {
    id: 41,
    name: 'Belted Cardigan',
    type: 'Cardigan',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/9832687/pexels-photo-9832687.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$64.11',
    inventory: [252, 165, 356, 359, 497],
  },
  {
    id: 42,
    name: 'Paperbag Waist Pants',
    type: 'Pants',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/1210484/pexels-photo-1210484.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$62.96',
    inventory: [114, 399, 476, 499, 358],
  },
  {
    id: 43,
    name: 'Embroidered Blouse',
    type: 'Blouse',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/12625864/pexels-photo-12625864.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$13.58',
    inventory: [286, 301, 328, 441, 233],
  },
  {
    id: 44,
    name: 'Ruffle Sleeve Dress',
    type: 'Dress',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/2235073/pexels-photo-2235073.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$79.28',
    inventory: [258, 249, 232, 200, 468],
  },
  {
    id: 45,
    name: 'Raw Hem Denim Shorts',
    type: 'Shorts',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/12886863/pexels-photo-12886863.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$31.83',
    inventory: [112, 390, 185, 448, 350],
  },
  {
    id: 46,
    name: 'Tunic Cardigan',
    type: 'Cardigan',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/9603628/pexels-photo-9603628.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$22.02',
    inventory: [191, 470, 218, 176, 124],
  },
  {
    id: 47,
    name: 'Strappy Summer Dress',
    type: 'Dress',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/792772/pexels-photo-792772.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$51.61',
    inventory: [493, 433, 146, 421, 270],
  },
  {
    id: 48,
    name: 'Chambray Shirt',
    type: 'Shirt',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/6347552/pexels-photo-6347552.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$45.63',
    inventory: [467, 427, 158, 296, 275],
  },
  {
    id: 49,
    name: 'Twill Cargo Pants',
    type: 'Pants',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/1235692/pexels-photo-1235692.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$83.35',
    inventory: [415, 419, 142, 494, 259],
  },
  {
    id: 50,
    name: 'Boxy T-shirt',
    type: 'T-shirt',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$87.76',
    inventory: [294, 113, 125, 172, 128],
  },
  {
    id: 51,
    name: 'Puff Sleeve Blouse',
    type: 'Blouse',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/11432378/pexels-photo-11432378.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$76.60',
    inventory: [207, 340, 287, 387, 457],
  },
  {
    id: 52,
    name: 'Silk Midi Skirt',
    type: 'Skirt',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/297367/pexels-photo-297367.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$19.73',
    inventory: [271, 180, 414, 138, 421],
  },
  {
    id: 53,
    name: 'Tailored Shorts',
    type: 'Shorts',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/12108713/pexels-photo-12108713.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$66.57',
    inventory: [254, 275, 389, 408, 352],
  },
  {
    id: 54,
    name: 'Oversized Jumper',
    type: 'Jumper',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/6995880/pexels-photo-6995880.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$97.50',
    inventory: [122, 461, 439, 193, 257],
  },
  {
    id: 55,
    name: 'Wool Coat',
    type: 'Jacket',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/792325/pexels-photo-792325.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$90.82',
    inventory: [425, 264, 334, 355, 103],
  },
  {
    id: 56,
    name: 'Classic Dress Shirt',
    type: 'Shirt',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/6347931/pexels-photo-6347931.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$17.06',
    inventory: [109, 479, 458, 271, 124],
  },
  {
    id: 57,
    name: 'Relaxed Fit Skirt',
    type: 'Skirt',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/2524961/pexels-photo-2524961.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$74.14',
    inventory: [410, 140, 340, 396, 397],
  },
  {
    id: 58,
    name: 'Cropped Cardigan',
    type: 'Cardigan',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/9991099/pexels-photo-9991099.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$55.75',
    inventory: [404, 412, 144, 290, 481],
  },
  {
    id: 59,
    name: 'Slim Fit Trousers',
    type: 'Pants',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/26076625/pexels-photo-26076625/free-photo-of-man-in-white-t-shirt-walking-and-carrying-skateboard.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$35.18',
    inventory: [322, 390, 229, 318, 115],
  },
  {
    id: 60,
    name: 'Flannel Shirt',
    type: 'Shirt',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/4641824/pexels-photo-4641824.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$61.93',
    inventory: [447, 472, 129, 194, 388],
  },
  {
    id: 61,
    name: 'Graphic T-shirt',
    type: 'T-shirt',
    brand: 'Wander Lux',
    image:
      'https://images.pexels.com/photos/5995818/pexels-photo-5995818.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$37.40',
    inventory: [413, 442, 475, 252, 465],
  },
  {
    id: 62,
    name: 'Suede Jacket',
    type: 'Jacket',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/27361967/pexels-photo-27361967/free-photo-of-a-jacket-boots-and-a-backpack-lying-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$37.74',
    inventory: [117, 465, 229, 389, 487],
  },
  {
    id: 63,
    name: 'Button-up Blouse',
    type: 'Blouse',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/11044912/pexels-photo-11044912.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$51.00',
    inventory: [135, 433, 353, 316, 324],
  },
  {
    id: 64,
    name: 'Floral Summer Dress',
    type: 'Dress',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/413707/pexels-photo-413707.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$22.94',
    inventory: [403, 423, 228, 419, 433],
  },
  {
    id: 65,
    name: 'Khaki Bermuda Shorts',
    type: 'Shorts',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/10577251/pexels-photo-10577251.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$47.25',
    inventory: [292, 229, 288, 225, 445],
  },
  {
    id: 66,
    name: 'Oversized Shirt',
    type: 'Shirt',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/16460760/pexels-photo-16460760/free-photo-of-clothes-rack-by-mirror.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$39.48',
    inventory: [102, 497, 233, 133, 277],
  },
  {
    id: 67,
    name: 'Tailored Dress Pants',
    type: 'Pants',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/17905220/pexels-photo-17905220/free-photo-of-woman-wearing-white-pants.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$56.19',
    inventory: [196, 204, 292, 186, 269],
  },
  {
    id: 68,
    name: 'Chunky Knit Jumper',
    type: 'Jumper',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/5704187/pexels-photo-5704187.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$73.84',
    inventory: [234, 293, 394, 313, 458],
  },
  {
    id: 69,
    name: 'Satin Slip Dress',
    type: 'Dress',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/1721944/pexels-photo-1721944.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$14.58',
    inventory: [172, 477, 363, 261, 294],
  },
  {
    id: 70,
    name: 'Classic Cotton Tee',
    type: 'T-shirt',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/6347892/pexels-photo-6347892.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.',
    size: ['xs', 's', 'm', 'l', 'xl'],
    price: '$57.97',
    inventory: [460, 112, 347, 280, 417],
  },
];

const accessories = [
  {
    id: 1,
    name: 'Woolen Knit Scarf',
    type: 'Scarf',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
    price: '$21.93',
    inventory: 143,
  },
  {
    id: 2,
    name: 'Ribbed Beanie',
    type: 'Hat',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/2119500/pexels-photo-2119500.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    price: '$48.81',
    inventory: 195,
  },
  {
    id: 3,
    name: 'Silk Handkerchief',
    type: 'Handkerchief',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/12886981/pexels-photo-12886981.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: '$32.97',
    inventory: 243,
  },
  {
    id: 4,
    name: 'Leather Driving Gloves',
    type: 'Gloves',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: '$19.76',
    inventory: 163,
  },
  {
    id: 5,
    name: 'Cashmere Socks',
    type: 'Socks',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/1921252/pexels-photo-1921252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    price: '$9.42',
    inventory: 143,
  },
  {
    id: 6,
    name: 'Chunky Knit Hat',
    type: 'Hat',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
    price: '$21.29',
    inventory: 131,
  },
  {
    id: 7,
    name: 'Satin Pocket Square',
    type: 'Handkerchief',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/19504696/pexels-photo-19504696/free-photo-of-hands-of-a-bride-clutching-a-handkerchief.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.',
    price: '$22.82',
    inventory: 150,
  },
  {
    id: 8,
    name: 'Fleece-lined Gloves',
    type: 'Gloves',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/23516533/pexels-photo-23516533/free-photo-of-blonde-with-a-wreath-on-her-head-covering-her-face-with-a-hand-fan.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    price: '$15.15',
    inventory: 198,
  },
  {
    id: 9,
    name: 'Striped Ankle Socks',
    type: 'Socks',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/1001457/pexels-photo-1001457.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    price: '$40.95',
    inventory: 177,
  },
  {
    id: 10,
    name: 'Plaid Wool Scarf',
    type: 'Scarf',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/287223/pexels-photo-287223.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: '$41.44',
    inventory: 172,
  },
  {
    id: 11,
    name: 'Cable Knit Beanie',
    type: 'Hat',
    brand: 'Legacy Trek',
    image:
      'https://images.pexels.com/photos/20367763/pexels-photo-20367763/free-photo-of-young-woman-in-a-brown-coat-and-yellow-hat-standing-outside.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: '$35.93',
    inventory: 198,
  },
  {
    id: 12,
    name: 'Printed Silk Scarf',
    type: 'Scarf',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/883435/pexels-photo-883435.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: '$27.22',
    inventory: 137,
  },
  {
    id: 13,
    name: 'Thermal Wool Gloves',
    type: 'Gloves',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/54200/pexels-photo-54200.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.',
    price: '$40.17',
    inventory: 215,
  },
  {
    id: 14,
    name: 'Polka Dot Handkerchief',
    type: 'Handkerchief',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/18085379/pexels-photo-18085379/free-photo-of-sitting-woman-in-handkerchief.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
    price: '$5.43',
    inventory: 219,
  },
  {
    id: 15,
    name: 'Merino Wool Socks',
    type: 'Socks',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/236699/pexels-photo-236699.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    price: '$11.10',
    inventory: 151,
  },
  {
    id: 16,
    name: 'Pom Pom Beanie',
    type: 'Hat',
    brand: 'Prestige',
    image:
      'https://images.pexels.com/photos/15739581/pexels-photo-15739581/free-photo-of-smiling-boy-sitting-on-the-floor-with-a-crayon.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.',
    price: '$15.87',
    inventory: 152,
  },
  {
    id: 17,
    name: 'Paisley Handkerchief',
    type: 'Handkerchief',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/9404758/pexels-photo-9404758.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    price: '$42.00',
    inventory: 114,
  },
  {
    id: 18,
    name: 'Faux Leather Gloves',
    type: 'Gloves',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/25276724/pexels-photo-25276724/free-photo-of-portrait-of-woman-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: '$23.68',
    inventory: 122,
  },
  {
    id: 19,
    name: 'Striped Wool Socks',
    type: 'Socks',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/160438/ankle-socks-children-socks-knitted-greeting-160438.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    price: '$28.30',
    inventory: 176,
  },
  {
    id: 20,
    name: 'Classic Fedora Hat',
    type: 'Hat',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/458649/pexels-photo-458649.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: '$15.47',
    inventory: 241,
  },
  {
    id: 21,
    name: 'Geometric Print Scarf',
    type: 'Scarf',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/2120584/pexels-photo-2120584.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.',
    price: '$29.24',
    inventory: 166,
  },
  {
    id: 22,
    name: 'Knitted Mittens',
    type: 'Gloves',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/6615665/pexels-photo-6615665.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    price: '$37.07',
    inventory: 205,
  },
  {
    id: 23,
    name: 'Floral Silk Handkerchief',
    type: 'Handkerchief',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/9404756/pexels-photo-9404756.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
    price: '$40.29',
    inventory: 124,
  },
  {
    id: 24,
    name: 'Color Block Socks',
    type: 'Socks',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/218763/pexels-photo-218763.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: '$7.16',
    inventory: 200,
  },
  {
    id: 25,
    name: 'Wide-brim Wool Hat',
    type: 'Hat',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/15759281/pexels-photo-15759281/free-photo-of-beautiful-woman-with-christmas-tree-on-winter-day.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    price: '$11.93',
    inventory: 247,
  },
  {
    id: 26,
    name: 'Lightweight Infinity Scarf',
    type: 'Scarf',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/3241748/pexels-photo-3241748.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.',
    price: '$20.57',
    inventory: 167,
  },
  {
    id: 27,
    name: 'Fingerless Gloves',
    type: 'Gloves',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/23947626/pexels-photo-23947626/free-photo-of-woman-hands-in-gloves-holding-cup-of-tea.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    price: '$20.73',
    inventory: 106,
  },
  {
    id: 28,
    name: 'Classic Cotton Socks',
    type: 'Socks',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/381865/pexels-photo-381865.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    price: '$10.45',
    inventory: 108,
  },
  {
    id: 29,
    name: 'Striped Fedora',
    type: 'Hat',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/601168/pexels-photo-601168.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
    price: '$17.56',
    inventory: 160,
  },
  {
    id: 30,
    name: 'Linen Handkerchief',
    type: 'Handkerchief',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/9404726/pexels-photo-9404726.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
    price: '$22.64',
    inventory: 238,
  },
  {
    id: 31,
    name: 'Tech Fleece Gloves',
    type: 'Gloves',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/20485642/pexels-photo-20485642/free-photo-of-bride-holding-a-bouquet-of-flowers.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    price: '$18.23',
    inventory: 225,
  },
  {
    id: 32,
    name: 'Ribbed Wool Scarf',
    type: 'Scarf',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/247078/pexels-photo-247078.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    price: '$35.43',
    inventory: 158,
  },
  {
    id: 33,
    name: 'Cozy Knit Socks',
    type: 'Socks',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/1703492/pexels-photo-1703492.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.',
    price: '$49.57',
    inventory: 237,
  },
  {
    id: 34,
    name: 'Patterned Bandana',
    type: 'Handkerchief',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/9404728/pexels-photo-9404728.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    price: '$48.48',
    inventory: 140,
  },
  {
    id: 35,
    name: 'Straw Sun Hat',
    type: 'Hat',
    brand: 'Free Spirit',
    image:
      'https://images.pexels.com/photos/279647/pexels-photo-279647.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    price: '$42.41',
    inventory: 140,
  },
  {
    id: 36,
    name: 'Soft Wool Gloves',
    type: 'Gloves',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/27869758/pexels-photo-27869758/free-photo-of-woman-wearing-black-velvet-gloves-touching-face.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    price: '$37.93',
    inventory: 204,
  },
  {
    id: 37,
    name: 'Plaid Blanket Scarf',
    type: 'Scarf',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    price: '$42.50',
    inventory: 206,
  },
  {
    id: 38,
    name: 'Solid Color Socks',
    type: 'Socks',
    brand: 'Aero Style',
    image:
      'https://images.pexels.com/photos/4231477/pexels-photo-4231477.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.',
    price: '$23.32',
    inventory: 212,
  },
  {
    id: 39,
    name: 'Wool Fedora',
    type: 'Hat',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/3681653/pexels-photo-3681653.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    price: '$36.95',
    inventory: 163,
  },
  {
    id: 40,
    name: 'Silk Embroidered Scarf',
    type: 'Scarf',
    brand: 'Calista',
    image:
      'https://images.pexels.com/photos/27394839/pexels-photo-27394839/free-photo-of-a-woman-posing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600',
    description:
      'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
    price: '$23.96',
    inventory: 237,
  },
];

const firstNames = [
  'Steffie',
  'Paulette',
  'Netti',
  'Cristi',
  'Daphene',
  'Abrahan',
  'Glenn',
  'Louella',
  'Arny',
  'Willi',
  'Jeramie',
  'Ogdan',
  'Park',
  'Edwina',
  'Freemon',
  'Roldan',
  'Rubie',
  'Stuart',
  'Colet',
  'Norby',
];

const lastNames = [
  'Yukhtin',
  'Corbishley',
  'Mattack',
  'Wallen',
  'Leighton',
  'Shurrocks',
  'Bloore',
  'Gogay',
  'Janc',
  'Audibert',
  'Stonham',
  'Tilston',
  'Kirsche',
  'Bertl',
  "O'Roan",
  'Godwin',
  'Hullyer',
  'Foakes',
  'Wickardt',
  'Geering',
];

const addresses = [
  '123 Sukhumvit Rd, Khlong Toei, Bangkok 10110, Thailand',
  '456 Silom Rd, Bang Rak, Bangkok 10500, Thailand',
  '789 Ratchadaphisek Rd, Din Daeng, Bangkok 10400, Thailand',
  '321 Phahonyothin Rd, Chatuchak, Bangkok 10900, Thailand',
  '654 Rama IV Rd, Pathum Wan, Bangkok 10330, Thailand',
  '987 Lat Phrao Rd, Wang Thonglang, Bangkok 10310, Thailand',
  '159 Charoen Krung Rd, Bang Kho Laem, Bangkok 10120, Thailand',
  '753 Phetkasem Rd, Bang Khae, Bangkok 10160, Thailand',
  '852 Rama III Rd, Yan Nawa, Bangkok 10120, Thailand',
  '369 Narathiwas Rd, Sathon, Bangkok 10120, Thailand',
  '258 Thanon Nakhon Ratchasima, Mueang, Nakhon Ratchasima 30000, Thailand',
  '147 Nimmanhaemin Rd, Mueang, Chiang Mai 50200, Thailand',
  '963 Phuket Rd, Mueang, Phuket 83000, Thailand',
  '852 Pattaya Beach Rd, Bang Lamung, Chonburi 20150, Thailand',
  '741 Chao Fa East Rd, Mueang, Krabi 81000, Thailand',
  '369 Kanchanavanich Rd, Hat Yai, Songkhla 90110, Thailand',
  '258 Mahidol Rd, Mueang, Chiang Mai 50100, Thailand',
  '147 Surawong Rd, Bang Rak, Bangkok 10500, Thailand',
  '963 Si Ayutthaya Rd, Ratchathewi, Bangkok 10400, Thailand',
  '357 Borommaratchachonnani Rd, Taling Chan, Bangkok 10170, Thailand',
];

const reviews = {
  '5-star': [
    "Absolutely love this shirt! The material is soft, breathable, and perfect for any occasion. I'm ordering more colors!",
    'These jeans fit like a dream! Super comfortable and stylish. Definitely my new favorite pair!',
    'Great quality for the price! The stitching is solid, and it still looks brand new after multiple washes.',
    'I get so many compliments every time I wear this dress. The design is stunning, and the fit is just right!',
    'Perfect fit, amazing quality, and super fast shipping. Highly recommend this brand!',
    'Absolutely love this shirt! The fabric is soft, breathable, and feels premium. Fits perfectly!',
    'Great quality! Wore it multiple times, and it still looks brand new after several washes.',
    'Stylish and comfortable—worth every penny. Will definitely buy more!',
    'Exceeded my expectations! The color is vibrant, and the stitching is well-done.',
    'Perfect fit, amazing comfort, and looks fantastic. Highly recommend!',
  ],
  '4-star': [
    'Nice fabric and fit, but I wish it came in more colors. Overall, very happy with my purchase!',
    'The material is good, but it shrank slightly after the first wash. Still looks great, though!',
    'Love the style and comfort, but the buttons seem a bit flimsy. Hoping they hold up over time.',
    "Great dress, but it runs a little small. I'd recommend sizing up for a perfect fit.",
    'Very comfortable and stylish! Took a little longer to arrive than expected, but worth the wait.',
    'Very nice material, but the sizing runs slightly small. Otherwise, great quality!',
    'Impressive durability, though the color faded a little after a few washes.',
    "Good for the price! It's stylish and comfy, but wish it had more stretch.",
    'The fabric is great, but the sleeves were a bit shorter than expected.',
    'A solid buy—fits well, feels good, just took longer to arrive than expected.',
  ],
  '3-star': [
    'Decent quality, but not exactly as pictured. The color was slightly off from the online images.',
    "It's okay. The fit is nice, but the fabric feels a little cheaper than I expected.",
    "Not bad for the price, but I've had better. The seams started to come loose after a few washes.",
    'The style is cute, but the fabric is thinner than I thought. Works well for summer, though.',
    "Average quality. Nothing special, but also not terrible. Wouldn't buy again, but I don't regret it.",
    'Decent quality, but not quite as soft as advertised. Still wearable.',
    'Looks good, but the stitching came loose after a couple of wears.',
    'Average at best. Fabric is okay, but wrinkles easily.',
    'Not bad, but nothing special. Fit was a little off, but wearable.',
    "Expected better quality for the price. It's okay, but wouldn't buy again.",
  ],
  '2-star': [
    'The material feels scratchy and uncomfortable. Expected better quality for the price.',
    'It shrank a lot after washing, even though I followed the care instructions. Disappointed.',
    "Doesn't look like the pictures at all. The fit is weird, and the fabric is cheap.",
    'Not true to size. Ordered my usual size, and it was way too small. Had to return it.',
    "Poor stitching, and the buttons fell off after one wear. Wouldn't recommend.",
    'Fabric feels cheap and started pilling after one wash.',
    'Runs way too small. Had to return it, which was a hassle.',
    'Color in the picture was much brighter than what I received.',
    'Shrunk after the first wash, even though I followed the care instructions.',
    'Feels rough on the skin. Not comfortable for all-day wear.',
  ],
  '1-star': [
    'Terrible quality! Fell apart after one wash. Complete waste of money!',
    'This was nothing like the pictures. The fabric is awful, and the size was completely off.',
    'I waited weeks for this to arrive, and it came damaged. Customer service was no help at all.',
    "Cheap, uncomfortable, and poorly made. I wouldn't even give it one star if I didn't have to.",
    'Horrible product. The colors bled after washing, and now it looks ruined. Do not buy!',
    'Terrible quality—fell apart after one wear!',
    'Sizing is completely off. Ordered a medium, got something that fits like an extra small.',
    'Itchy, uncomfortable, and looks nothing like the picture.',
    'Stains easily and the fabric feels like plastic.',
    "Wouldn't recommend at all. Poorly made and overpriced.",
  ],
};

module.exports = {
  bags,
  clothes,
  accessories,
  firstNames,
  lastNames,
  addresses,
  reviews,
};
