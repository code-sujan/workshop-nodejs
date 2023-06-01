module.exports = {
    index : (req, res) => {
        const list = [
            {name : "one", address :"addr one"},
            {name : "two", address :"addr two"},
            {name : "three", address :"addr three"},
        ];
        res.render('index', {data : "user", list});
    }
}