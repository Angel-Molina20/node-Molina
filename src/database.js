import  mongoose  from "mongoose"

mongoose.connect("mongodb+srv://angel:ups2020@cluster0.358jv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser : true,
    useUnifiedTopology: true
})
    .then(db => console.log("conexion exitosa"))
    .catch(error => console.log(error))