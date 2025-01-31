const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
      Category.findAll({
           include: Product
          }).then(categoryData =>{
            if (!categoryData){
                  res.status(404).json({message: "No category with this id"})
            }
            res.json(categoryData)
      }).catch((err)=>{
            console.log(err);
            res.status(500).json(err);
      })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
      Category.findOne({
            include: Product,
            where: {
                  id: req.params.id
            }
      }).then(categoryData =>{
            if (!categoryData){
                  res.status(404).json({message: "No category with this id"})
            }
            res.json(categoryData)
      }).catch((err)=>{
            console.log(err);
            res.status(500).json(err);
      })
});

router.post('/', (req, res) => {
  Category.create({
        category_name: req.body.category_name
  }).then(newCategoryData =>{
        if (!newCategoryData){
              res.status(404).json({message: "No category with this id"})
        }
        res.json(newCategoryData)
  }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
      Category.update(req.body,{
                where: {
                      id: req.params.id,
                },
          })
          .then((categoryData) => {
                if (!categoryData[0]) {
                      res.status(404).json({ message: 'No category found with this id' });
                      return;
                }
                res.json(categoryData[0]);
          })
          .catch((err) => {
                console.log(err);
                res.status(500).json(err);
          });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
      Category.destroy({
            where:{
                  id: req.params.id
            }
      }).then(categoryData =>{
            if (!categoryData){
                  res.status(404).json({message: "No category with this id"})
            }
            res.json(categoryData)
      }).catch((err)=>{
            console.log(err);
            res.status(500).json(err);
      })
});
// done
module.exports = router;