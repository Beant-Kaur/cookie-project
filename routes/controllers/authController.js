exports.login = (req,res) => {
    const{username} = req.body;

    res.cookie("token",username,{
        htttponly:true;
        secure:false;
        maxAge: 600000
    });
    res.json({meassage: "Login successful"});
};