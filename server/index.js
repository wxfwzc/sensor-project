const express =requie("express");
const app=express();
app.get("/temp",(req,res)=>{
	res.send("24");
}
);
app.listen(3000,()=>{
	console.log(3000);
}

);