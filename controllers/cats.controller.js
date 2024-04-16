// Dummy database
let cats = [
    { id: 1, name: "Whiskers", age: 5 },
    { id: 2, name: "Socks", age: 3 }
  ];
  
  exports.getAllCats = (req, res) => {
    res.status(200).json(cats);
  };
  
  exports.createCat = (req, res) => {
    const newCat = {
      id: cats.length + 1,
      name: req.body.name,
      age: req.body.age
    };
    cats.push(newCat);
    res.status(201).send(newCat);
  };
  
  exports.getCatById = (req, res) => {
    const cat = cats.find(c => c.id === parseInt(req.params.id));
    if (!cat) {
      return res.status(404).send('The cat with the given ID was not found.');
    }
    res.send(cat);
  };
  
  exports.updateCat = (req, res) => {
    const cat = cats.find(c => c.id === parseInt(req.params.id));
    if (!cat) {
      return res.status(404).send('The cat with the given ID was not found.');
    }
    cat.name = req.body.name;
    cat.age = req.body.age;
    res.send(cat);
  };
  
  exports.deleteCat = (req, res) => {
    cats = cats.filter(c => c.id !== parseInt(req.params.id));
    res.status(204).send();
  };