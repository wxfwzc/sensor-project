const express =require("express");
const app=express();
app.get("/temp",(req,res)=>{
	res.send("hello world");
}
);
app.listen(3000,()=>{
	console.log("3000");
}

);