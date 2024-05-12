function explainParseInt(value){
    console.log("Original Value : ", value)
    console.log("Parse Value : ", parseInt(value))
}
explainParseInt(3245)
explainParseInt("42")
explainParseInt(3.14)
explainParseInt("32abc")
explainParseInt("abc325")

function explainParseFloat(value){
    console.log("Original Value : ", value)
    console.log("Parse Value : ", parseFloat(value))
}
explainParseFloat(11.10)
explainParseFloat(21)
explainParseFloat("21.34")
explainParseFloat("42")
explainParseFloat("00023.456asdf")
explainParseFloat("23.45asdf")
explainParseFloat("aswq23.23")
