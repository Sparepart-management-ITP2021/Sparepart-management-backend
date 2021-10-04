const Addcus = require('../models/addcus.model');


//add customer
const addAddcus = async(req, res) => {
  try {
    if (req.body) {
        const addcus = new Addcus(req.body);
        await addcus.save()
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send({ error: error })
            });
      } else {
        console.log('Please enter body values');
            }
    } catch (error) {
    res.send({ error: error.message });
}
}

const getAddcus = async(req, res) => {
  try {
     await Addcus.find({ })
         .then((data) => {
           res.status(200).send({ data: data });
       })
 
         .catch((error) => {
             res.status(500).send({ error: error });
           })
              
          } catch (error) {
               res.send({ error: error.message });
           }
     }

     const deleteAddcus = async (req,res) => {
      try {
          if(req.params.id){
              await Addcus.findByIdAndDelete(req.params.id)
              .then(data => {
                  res.status(200).send({data: data});
              })
              .catch(error => {
                  res.status(500).send({error: error.message});
              })
          }
      } catch (error) {
          res.send({error: error.message});
      }
  } 

  const getAddcusById = async(req, res) => {
    if(req.params.id){
        await Addcus.findById(req.params.id)
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send({ error: error });
            });
    }
}

const updateAddcus = async(req, res) => {
    if(req.body && req.params.id){
        await Addcus.findByIdAndUpdate(req.params.id, { $set: req.body })
            .then((data) => {
                res.status(200).send({ data: data });
            })
            .catch((error) => {
                res.status(500).send({ error: error })
            });
    }
}

module.exports = {
  addAddcus,
  getAddcus,
  deleteAddcus,
  getAddcusById,
  updateAddcus

}
