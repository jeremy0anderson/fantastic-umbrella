const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
      Tag.findAll({
           include: Product
          }).then(tagData =>{
                if (!tagData){
                      res.status(404).json({message: "No tags found"})
                }
                res.status(200).json(tagData);
      }).catch((err)=>{
            res.status(400).json(err);
      })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
      Tag.findOne({
            include: Product,
            where:{
                  id: req.params.id
            }
      }).then(tagData =>{
            if (!tagData){
                  res.status(404).json({message: "No tags with that id found"})
            }
            res.status(200).json(tagData);
      }).catch((err)=>{
            res.status(400).json(err);
      })
});

router.post('/', (req, res) => {
  // create a new tag
      Tag.create({
            tag_name: req.body.tag_name
      }).then(tagData=>{
            if (!tagData){
                  res.status(404).json({message: "Tag was not created"})
            }
            res.status(200).json(tagData);
      }).catch((err)=>{
            res.status(400).json(err);
      });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
      Tag.update(req.body,{
            where:{
                  id: req.params.id
            },
            returning: true
      }).then((tagData)=>{
            if (!tagData[1]){
                  return res.status(404).json({message: "Update Unsuccessful. No tag found with that id"})
            } else if (tagData[1] === 0){
                 return res.status(200).json({message: "no data was changed"});

            } else if (tagData[1] === 1){
                  return res.status(200).json({message: req.body.tag_name + ` ${req.params.id} was updated` })
            }
            console.log(id, tagData);
            let idN = req.params.id;

      }).catch((err)=>{
            res.status(400).json(err);
      })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
      Tag.destroy({
            where: {
                  id: req.params.id
            }
      }).then((tagData)=>{
            if (!tagData){
                  res.status(404).json({message: "Could not delete. No tag with that id found."})
            }
            res.status(200).json({message: "Tag was successfully deleted"})
            
      }).catch((err)=>{
            res.status(400).json(err);
      })
});

module.exports = router;
